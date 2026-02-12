import { MapPin} from 'lucide-react';
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import ContactModal from '../components/ContactModal';

type Props = {
    isDarkMode: boolean;
};

export default function Hero({ isDarkMode }: Props) {
    return (
        <section className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-24 md:py-32`}>
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="relative">
                        <div className={`absolute -inset-1 rounded-full ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-500/10'} blur-md`}></div>
                        <img
                            src="/me.jpeg"
                            alt="Jer Heseoh Arsolon"
                            className={`relative w-48 h-48 rounded-full object-cover border-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3 tracking-tight`}>
                            Jer Heseoh R. Arsolon
                        </h1>
                        <p className={`text-xl font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-3`}>
                            ML/AI Engineer
                        </p>
                        <div className={`flex items-center justify-center md:justify-start ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-6`}>
                            <MapPin className="w-4 h-4 mr-2"/>
                            <span>Caloocan City, Philippines</span>
                        </div>
                        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-8 max-w-xl`}>
                            Building intelligent systems that solve real-world problems.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <ContactModal isDarkMode={isDarkMode}/>
                            <div className="flex space-x-1">
                                <a href="https://github.com/JIhushiru" className={`p-2.5 rounded-lg ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'} transition-all`}>
                                    <SiGithub className="w-5 h-5"/>
                                </a>
                                <a href="https://www.linkedin.com/in/jhra/" className={`p-2.5 rounded-lg ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'} transition-all`}>
                                    <SiLinkedin className="w-5 h-5"/>
                                </a>
                                <a href="mailto:jhrarsolon@gmail.com" className={`p-2.5 rounded-lg ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'} transition-all`}>
                                    <SiGmail className="w-5 h-5"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
