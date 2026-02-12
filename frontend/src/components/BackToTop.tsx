import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

type Props = {
  isDarkMode: boolean;
};

export default function BackToTop({ isDarkMode }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 z-40 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      } ${
        isDarkMode
          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
