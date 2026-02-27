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

export default function NeuralBackground({ isDarkMode }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
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

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const nodeColor = isDarkMode ? [147, 197, 253] : [59, 130, 246];
            const lineAlpha = isDarkMode ? 0.06 : 0.07;
            const nodeAlpha = isDarkMode ? 0.25 : 0.2;

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

            animationId = requestAnimationFrame(draw);
        };

        init();
        draw();

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
        };

        window.addEventListener('resize', onResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', onResize);
        };
    }, [isDarkMode]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
        />
    );
}
