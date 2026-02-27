import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';

type Props = {
  isDarkMode: boolean;
};

export default function ContactAndFooter({ isDarkMode }: Props) {
  return (
    <>
      {/* Footer */}
      <footer
        className={`${
          isDarkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-900'
        } text-white py-10`}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex space-x-4">
              <a href="https://github.com/JIhushiru" className="text-gray-500 hover:text-gray-300 transition-colors">
                <SiGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/jhra/" className="text-gray-500 hover:text-gray-300 transition-colors">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="mailto:jhrarsolon@gmail.com" className="text-gray-500 hover:text-gray-300 transition-colors">
                <SiGmail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              © 2025 Jer Heseoh Arsolon
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
