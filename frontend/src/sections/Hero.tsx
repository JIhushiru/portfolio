import { MapPin } from 'lucide-react';
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import ContactModal from '../components/ContactModal';
import NeuralBackground from '../components/NeuralBackground';
import ProfileOrbit from '../components/ProfileOrbit';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTypewriter } from '../hooks/useTypewriter';

type Props = {
    isDarkMode: boolean;
};

const FULL_TAGLINE = 'Building intelligent systems that solve real-world problems.';

export default function Hero({ isDarkMode }: Props) {
    const imgRef = useScrollReveal<HTMLDivElement>();
    const textRef = useScrollReveal<HTMLDivElement>();
    const { displayed: tagline, done: taglineDone } = useTypewriter(FULL_TAGLINE, 40, 800);

    return (
        <section className={`relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-24 md:py-32`}>
            {/* Ambient glow */}
            <div aria-hidden className={`absolute -top-32 -left-32 w-[30rem] h-[30rem] rounded-full blur-3xl pointer-events-none ${isDarkMode ? 'bg-blue-600/10' : 'bg-blue-300/30'}`} />
            <div aria-hidden className={`absolute -bottom-24 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${isDarkMode ? 'bg-cyan-500/[0.06]' : 'bg-blue-200/40'}`} />
            <NeuralBackground isDarkMode={isDarkMode} />
            <div className="relative max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div ref={imgRef} className="reveal-fade">
                        <ProfileOrbit isDarkMode={isDarkMode} />
                    </div>
                    <div ref={textRef} className="flex-1 text-center md:text-left reveal-up">
                        <p className={`text-sm font-semibold uppercase tracking-[0.25em] mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            ML/AI Engineer
                        </p>
                        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3 tracking-tight text-balance`}>
                            Jer Heseoh R. Arsolon
                        </h1>
                        <div className={`flex items-center justify-center md:justify-start ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-6`}>
                            <MapPin className="w-4 h-4 mr-2" aria-hidden="true"/>
                            <span>Caloocan City, Philippines</span>
                        </div>
                        <p className={`relative text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-8 max-w-xl`}>
                            <span aria-hidden="true" className="invisible">{FULL_TAGLINE}</span>
                            <span className="absolute inset-0">
                                {tagline}
                                {!taglineDone && <span className="inline-block w-[2px] h-5 ml-0.5 align-middle bg-current animate-[caret-blink_1s_steps(1)_infinite]" />}
                            </span>
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                            <ContactModal isDarkMode={isDarkMode}/>
                            <div className="flex space-x-1">
                                <a href="https://github.com/JIhushiru" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className={`p-2.5 rounded-lg ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'} transition-all`}>
                                    <SiGithub className="w-5 h-5" aria-hidden="true"/>
                                </a>
                                <a href="https://www.linkedin.com/in/jhra/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className={`p-2.5 rounded-lg ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'} transition-all`}>
                                    <SiLinkedin className="w-5 h-5" aria-hidden="true"/>
                                </a>
                                <a href="mailto:jhrarsolon@gmail.com" aria-label="Email Jer" className={`p-2.5 rounded-lg ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'} transition-all`}>
                                    <SiGmail className="w-5 h-5" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
