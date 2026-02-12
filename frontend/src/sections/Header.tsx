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

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <header className={`${isDarkMode ? 'bg-gray-900/80 border-b border-gray-800' : 'bg-white/80 border-b border-gray-200'} backdrop-blur-md sticky top-0 z-50`}>
            <div className="max-w-5xl mx-auto px-6 py-4">
                <nav className="flex justify-between items-center">
                    <a href="#" className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} tracking-tight`}>
                        JH Arsolon
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-lg ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800': 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'} transition-all`}
                        >
                            {isDarkMode ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4"/>}
                        </button>
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-lg ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800': 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'} transition-all`}
                        >
                            {isDarkMode ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4"/>}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className={`p-2 rounded-lg ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'} transition-all`}
                        >
                            {isMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className={`md:hidden mt-4 pb-4 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                        <div className="flex flex-col space-y-1 pt-4">
                            {navLinks.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                    className={`text-sm font-medium px-3 py-2.5 rounded-lg ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} transition-all`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
