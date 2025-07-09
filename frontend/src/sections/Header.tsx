import { Moon, Sun } from 'lucide-react';

type Props = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export default function Header({ isDarkMode, toggleDarkMode }: Props) {
    return (
        <header className = {`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm sticky top-0 z-50`}>
            <div className="max-w-4xl mx-auto px-6 py-4">
                <nav className="flex justify-between items-center">
                    <div className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Jer Heseoh R. Arsolon
                    </div>
                    <div className="flex items-center space-x-6">
                        <a href="#about" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                            About
                        </a>
                        <a href="#experience" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                            Experience
                        </a>
                        <a href="#projects" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                            Projects
                        </a>
                        <a href="#contact" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                            Contact
                        </a>
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600': 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors`}
                        >
                            {isDarkMode ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};