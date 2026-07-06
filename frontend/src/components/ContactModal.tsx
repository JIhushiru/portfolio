import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
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

  // Dialog behavior: Escape to close, focus management, scroll lock, tab trap
  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';

    // Move focus to the first field
    const firstInput = modalRef.current?.querySelector<HTMLElement>('input, textarea');
    firstInput?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
        return;
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, input, textarea, a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;
        if (!modalRef.current.contains(active)) {
          // Focus escaped the dialog (e.g. clicked non-focusable text) — pull it back in
          e.preventDefault();
          (e.shiftKey ? last : first).focus();
        } else if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [isOpen]);

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

  const inputClasses = `w-full px-4 py-2 rounded-lg text-sm border outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 ${
    isDarkMode
      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
      : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500'
  }`;

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-sm shadow-blue-600/25 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/30 active:scale-[0.98] transition-all inline-flex items-center"
      >
        Get In Touch
      </button>

      {isOpen && createPortal(
        <div
          onClick={handleClickOutside}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]"
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            className={`w-full max-w-lg mx-4 rounded-xl shadow-2xl border ${
              isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'
            } p-6 relative animate-[pop-in_0.25s_ease-out]`}
          >
            <button
              onClick={closeModal}
              aria-label="Close contact form"
              className={`absolute top-3 right-3 p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
            <h3 id="contact-title" className="text-2xl font-bold tracking-tight mb-4">Contact Me</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block mb-1 text-sm font-medium">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block mb-1 text-sm font-medium">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block mb-1 text-sm font-medium">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Let's build something awesome..."
                  className={inputClasses}
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm shadow-blue-600/25 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/30 active:scale-[0.98] transition-all inline-flex items-center"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
