import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import ContactModal from '../components/ContactModal';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Props = {
  isDarkMode: boolean;
};

export default function ContactAndFooter({ isDarkMode }: Props) {
  const contactRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div ref={contactRef} className="max-w-3xl mx-auto px-6 text-center reveal-up">
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Let's Work Together
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-10 max-w-xl mx-auto`}>
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex justify-center space-x-4">
            <ContactModal isDarkMode={isDarkMode}/>
            <a
              href="https://github.com/JIhushiru"
              className={`border ${
                isDarkMode
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
              } px-6 py-3 rounded-lg transition-all inline-flex items-center font-medium`}
            >
              <SiGithub className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </section>

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
