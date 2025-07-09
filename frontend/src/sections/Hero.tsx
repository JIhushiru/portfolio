import { MapPin} from 'lucide-react';
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';

type Props = {
    isDarkMode: boolean;
};

export default function Hero({ isDarkMode }: Props) {
    return (
        <section className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} py-20`}>
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <img
                        src="/me.jpeg"
                        alt="Jer Heseoh Arsolon"
                        className="w-48 h-48 rounded-full object-cover border-4 border-red-500 shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300"
                    />
                    <div className="flex-1">
                        <h1 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                            Jer Heseoh R. Arsolon
                        </h1>
                        <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
                            Aspiring ML/AI/Data Engineer
                        </p>
                        <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-6`}>
                            <MapPin className="w-4 h-4 mr-2"/>
                            <span>Caloocan City, Philippines</span>
                        </div>
                        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-8 max-w-2xl`}>
                            Crafting Digital Solutions that Make a Difference
                        </p>
                        <div className="flex space-x-4">
                            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                Get In Touch
                            </a>
                            <div className="flex space-x-3">
                                <a href="https://github.com/JIhushiru" className={`p-3 ${isDarkMode ? 'text-white hover:text-blue-300' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                                    <SiGithub className="w-5 h-5"/>
                                </a>
                                <a href="https://www.linkedin.com/in/jhra/" className={`p-3 ${isDarkMode ? 'text-white hover:text-blue-300' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                                    <SiLinkedin className="w-5 h-5"/>
                                </a>
                                <a href="mailto:jhrarsolon@gmail.com" className={`p-3 ${isDarkMode ? 'text-white hover:text-blue-300' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
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