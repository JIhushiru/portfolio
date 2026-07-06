import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

type Props = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    activeSection: string;
}

export default function Header({ isDarkMode, toggleDarkMode, activeSection }: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navLinks = [
        { href: '#about', label: 'About', id: 'about' },
        { href: '#education', label: 'Education', id: 'education' },
        { href: '#experience', label: 'Experience', id: 'experience' },
        { href: '#projects', label: 'Projects', id: 'projects' },
    ];

    return (
        <header className={`${isDarkMode ? 'bg-gray-900/80 border-b border-gray-800' : 'bg-white/80 border-b border-gray-200'} backdrop-blur-md sticky top-0 z-50`}>
            <div className="max-w-5xl mx-auto px-6 py-4">
                <nav aria-label="Primary" className="flex justify-between items-center">
                    <a href="#" className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} tracking-tight`}>
                        JH Arsolon
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`relative text-sm font-medium transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:rounded-full after:origin-left after:transition-transform after:duration-300 ${
                                    isDarkMode ? 'after:bg-blue-400' : 'after:bg-blue-600'
                                } ${
                                    activeSection === link.id
                                        ? `after:scale-x-100 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`
                                        : `after:scale-x-0 hover:after:scale-x-100 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <button
                            onClick={toggleDarkMode}
                            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                            className={`p-2 rounded-lg ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800': 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'} transition-all`}
                        >
                            {isDarkMode ? <Sun className="w-4 h-4" aria-hidden="true"/> : <Moon className="w-4 h-4" aria-hidden="true"/>}
                        </button>
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={toggleDarkMode}
                            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                            className={`p-2 rounded-lg ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800': 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'} transition-all`}
                        >
                            {isDarkMode ? <Sun className="w-4 h-4" aria-hidden="true"/> : <Moon className="w-4 h-4" aria-hidden="true"/>}
                        </button>
                        <button
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            className={`p-2 rounded-lg ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'} transition-all`}
                        >
                            {isMenuOpen ? <X className="w-5 h-5" aria-hidden="true"/> : <Menu className="w-5 h-5" aria-hidden="true"/>}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div id="mobile-menu" className={`md:hidden mt-4 pb-4 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                        <div className="flex flex-col space-y-1 pt-4">
                            {navLinks.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                    className={`text-sm font-medium px-3 py-2.5 rounded-lg transition-all ${
                                        activeSection === link.id
                                            ? isDarkMode ? 'text-blue-400 bg-blue-500/10' : 'text-blue-600 bg-blue-50'
                                            : isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
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
