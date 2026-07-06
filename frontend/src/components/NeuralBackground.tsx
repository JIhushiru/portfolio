import { useEffect, useRef } from 'react';

type Props = {
    isDarkMode: boolean;
};

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    pulse: number;
    pulseSpeed: number;
}

const NODE_COUNT = 50;
const CONNECT_DIST = 120;
const SPEED = 0.3;

const DARK_COLORS = { nodeColor: [147, 197, 253], lineAlpha: 0.06, nodeAlpha: 0.25 };
const LIGHT_COLORS = { nodeColor: [59, 130, 246], lineAlpha: 0.1, nodeAlpha: 0.3 };

export default function NeuralBackground({ isDarkMode }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const colorsRef = useRef(isDarkMode ? DARK_COLORS : LIGHT_COLORS);
    const redrawRef = useRef<(() => void) | null>(null);

    // Keep colors in a ref so a theme toggle recolors the field without repositioning nodes.
    // The animation loop picks the change up next frame; the reduced-motion static frame needs
    // an explicit redraw.
    useEffect(() => {
        colorsRef.current = isDarkMode ? DARK_COLORS : LIGHT_COLORS;
        redrawRef.current?.();
    }, [isDarkMode]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let animationId = 0;
        let running = false;
        let nodes: Node[] = [];

        const resize = () => {
            const rect = canvas.parentElement!.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };

        const init = () => {
            resize();
            nodes = Array.from({ length: NODE_COUNT }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * SPEED,
                vy: (Math.random() - 0.5) * SPEED,
                r: Math.random() * 1.5 + 0.5,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: 0.01 + Math.random() * 0.02,
            }));
        };

        const drawFrame = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const { nodeColor, lineAlpha, nodeAlpha } = colorsRef.current;

            // Draw edges
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECT_DIST) {
                        const fade = 1 - dist / CONNECT_DIST;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(${nodeColor[0]},${nodeColor[1]},${nodeColor[2]},${lineAlpha * fade})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            for (const n of nodes) {
                const glow = 0.5 + 0.5 * Math.sin(n.pulse);
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r + glow * 0.8, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${nodeColor[0]},${nodeColor[1]},${nodeColor[2]},${nodeAlpha * (0.6 + glow * 0.4)})`;
                ctx.fill();
            }
        };

        const tick = () => {
            // Update positions
            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;
                n.pulse += n.pulseSpeed;

                if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
                if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

                n.x = Math.max(0, Math.min(canvas.width, n.x));
                n.y = Math.max(0, Math.min(canvas.height, n.y));
            }

            drawFrame();
            animationId = requestAnimationFrame(tick);
        };

        const start = () => {
            if (running || reducedMotion) return;
            running = true;
            animationId = requestAnimationFrame(tick);
        };

        const stop = () => {
            if (!running) return;
            running = false;
            cancelAnimationFrame(animationId);
        };

        init();

        if (reducedMotion) {
            // Single static frame, no animation loop
            drawFrame();
            redrawRef.current = drawFrame;
        }

        // Only animate while the section is on screen
        const visibility = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) start();
                else stop();
            },
            { threshold: 0 }
        );
        visibility.observe(canvas);

        const onResize = () => {
            const oldW = canvas.width;
            const oldH = canvas.height;
            resize();
            const scaleX = canvas.width / oldW;
            const scaleY = canvas.height / oldH;
            for (const n of nodes) {
                n.x *= scaleX;
                n.y *= scaleY;
            }
            if (reducedMotion) drawFrame();
        };

        window.addEventListener('resize', onResize);

        return () => {
            stop();
            visibility.disconnect();
            redrawRef.current = null;
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
        />
    );
}
