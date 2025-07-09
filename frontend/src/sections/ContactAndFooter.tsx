import { SiGithub, SiGmail } from 'react-icons/si';
import ContactModal from '../components/ContactModal';

type Props = {
  isDarkMode: boolean;
};

export default function ContactAndFooter({ isDarkMode }: Props) {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-8`}>
            Let's Work Together
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}>
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex justify-center space-x-6">
            <ContactModal isDarkMode={isDarkMode}/>
            <a
              href="https://github.com/JihuShiru"
              className={`border ${
                isDarkMode
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              } px-8 py-4 rounded-lg transition-colors inline-flex items-center`}
            >
              <SiGithub className="w-5 h-5 mr-2" />
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`${
          isDarkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-900'
        } text-white py-12`}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Jer. Built with React, Tailwind CSS and ♥.
          </p>
        </div>
      </footer>
    </>
  );
}
