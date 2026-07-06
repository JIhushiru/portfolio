import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import ContactModal from '../components/ContactModal';

type Props = {
  isDarkMode: boolean;
};

export default function ContactAndFooter({ isDarkMode }: Props) {
  return (
    <footer
      className={`${
        isDarkMode ? 'bg-gray-950 border-t border-gray-800' : 'bg-white border-t border-gray-200'
      } py-16`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className={`text-2xl md:text-3xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Let's build something together
          </h2>
          <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Open to ML/AI engineering roles and collaborations.
          </p>
          <ContactModal isDarkMode={isDarkMode} />
          <div className="flex space-x-4 mt-6">
            <a
              href="https://github.com/JIhushiru"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'} transition-colors`}
            >
              <SiGithub className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/jhra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'} transition-colors`}
            >
              <SiLinkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="mailto:jhrarsolon@gmail.com"
              aria-label="Email Jer"
              className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'} transition-colors`}
            >
              <SiGmail className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            © {new Date().getFullYear()} Jer Heseoh Arsolon
          </p>
        </div>
      </div>
    </footer>
  );
}
