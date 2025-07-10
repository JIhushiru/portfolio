import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

type Props = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export default function Header({ isDarkMode, toggleDarkMode }: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm sticky top-0 z-50`}>
            <div className="max-w-4xl mx-auto px-6 py-4">
                <nav className="flex justify-between items-center">
                    <div className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Portfolio
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
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

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600': 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors`}
                        >
                            {isDarkMode ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4"/>}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors`}
                        >
                            {isMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col space-y-3 pt-4">
                            <a 
                                href="#about" 
                                onClick={closeMenu}
                                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors py-2`}
                            >
                                About
                            </a>
                            <a 
                                href="#experience" 
                                onClick={closeMenu}
                                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors py-2`}
                            >
                                Experience
                            </a>
                            <a 
                                href="#projects" 
                                onClick={closeMenu}
                                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors py-2`}
                            >
                                Projects
                            </a>
                            <a 
                                href="#contact" 
                                onClick={closeMenu}
                                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors py-2`}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};