type Props = {
    isDarkMode: boolean;
};

export default function ProfileOrbit({ isDarkMode }: Props) {
    return (
        <div className="relative flex items-center justify-center">
            {/* Outer orbital ring */}
            <div className="absolute w-56 h-56 rounded-full border-2 border-transparent border-t-blue-500/40 border-r-blue-500/10 animate-[spin_2.5s_linear_infinite]" />

            {/* Inner glow ring */}
            <div className={`absolute w-52 h-52 rounded-full border ${isDarkMode ? 'border-blue-400/20' : 'border-blue-500/15'} animate-[pulse_2.5s_ease-in-out_infinite]`} />

            {/* Profile image with breathe */}
            <img
                src="/me.png"
                alt="Jer Heseoh Arsolon"
                className="relative w-48 h-48 rounded-full object-cover animate-[breathe_3s_ease-in-out_infinite]"
            />

            {/* Orbiting dot accents */}
            <div className="absolute w-56 h-56 animate-[spin_4s_linear_infinite_reverse]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500/30" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-500/20" />
            </div>
        </div>
    );
}
