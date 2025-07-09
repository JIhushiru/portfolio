import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

type Props = {
  isDarkMode: boolean;
};

export default function ContactModal({ isDarkMode }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const toggleModal = () => setIsOpen(!isOpen);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message sent successfully!');
          formRef.current?.reset();
          closeModal();
        },
        (error) => {
          console.error('EmailJS error:', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
      >
        Get In Touch
      </button>

      {isOpen && (
        <div
          onClick={handleClickOutside}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30"
        >
          <div
            ref={modalRef}
            className={`w-full max-w-lg mx-4 ${
              isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            } rounded-lg shadow-xl p-6 relative`}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-red-500"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className={`w-full px-4 py-2 rounded border outline-none ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-100 border-gray-300'
                  }`}
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={`w-full px-4 py-2 rounded border outline-none ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-100 border-gray-300'
                  }`}
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Let's build something awesome..."
                  className={`w-full px-4 py-2 rounded border outline-none ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-100 border-gray-300'
                  }`}
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
