import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { MessageCircle, Send, X, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useChat } from '../hooks/useChat';

type Props = {
  isDarkMode: boolean;
};

export default function ChatWidget({ isDarkMode }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, isLoading, streamingContent, sendMessage, clearMessages } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamingContent]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    sendMessage(trimmed);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleNewChat = () => {
    clearMessages();
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className={`fixed bottom-20 right-6 p-3.5 rounded-full shadow-lg z-40 transition-all duration-300 ${
          isOpen
            ? 'rotate-0'
            : 'rotate-0'
        } ${
          isDarkMode
            ? 'bg-blue-600 text-white hover:bg-blue-500'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>

      {/* Chat Panel */}
      {isOpen && createPortal(
        <div
          className={`fixed bottom-36 right-6 w-[calc(100vw-3rem)] sm:w-[360px] h-[500px] rounded-xl shadow-2xl border flex flex-col overflow-hidden z-50 transition-all duration-300 ${
            isDarkMode
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-200'
          }`}
        >
          {/* Header */}
          <div
            className={`flex items-center justify-between px-4 py-3 border-b shrink-0 ${
              isDarkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-blue-500" />
              <span className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Ask about Jer
              </span>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button
                  onClick={handleNewChat}
                  className={`text-xs px-2 py-1 rounded transition-colors ${
                    isDarkMode
                      ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  New chat
                </button>
              )}
              <button
                onClick={handleClose}
                className={`p-1 rounded transition-colors ${
                  isDarkMode
                    ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {/* Welcome message */}
            <div className="flex gap-2 items-start">
              <div className="shrink-0 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div
                className={`rounded-lg px-3 py-2 text-sm max-w-[85%] ${
                  isDarkMode
                    ? 'bg-gray-700 text-gray-200'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                Hi! I'm Jer's AI assistant. Ask me about his skills, projects, experience, or anything else on this portfolio!
              </div>
            </div>

            {/* Chat messages */}
            {messages.map((msg, i) =>
              msg.role === 'user' ? (
                <div key={i} className="flex justify-end">
                  <div className="rounded-lg px-3 py-2 text-sm max-w-[85%] bg-blue-600 text-white">
                    {msg.content}
                  </div>
                </div>
              ) : (
                <div key={i} className="flex gap-2 items-start">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div
                    className={`rounded-lg px-3 py-2 text-sm max-w-[85%] chat-markdown ${
                      isDarkMode
                        ? 'bg-gray-700 text-gray-200'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </div>
              )
            )}

            {/* Streaming content with blinking cursor */}
            {streamingContent && (
              <div className="flex gap-2 items-start">
                <div className="shrink-0 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div
                  className={`rounded-lg px-3 py-2 text-sm max-w-[85%] chat-markdown ${
                    isDarkMode
                      ? 'bg-gray-700 text-gray-200'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <ReactMarkdown>{streamingContent}</ReactMarkdown>
                  <span className="inline-block w-[2px] h-4 ml-0.5 align-middle animate-pulse bg-current" />
                </div>
              </div>
            )}

            {/* Typing indicator */}
            {isLoading && !streamingContent && (
              <div className="flex gap-2 items-start">
                <div className="shrink-0 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div
                  className={`rounded-lg px-3 py-2 text-sm ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}
                >
                  <div className="flex gap-1">
                    <span className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-400' : 'bg-gray-500'}`} style={{ animationDelay: '0ms' }} />
                    <span className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-400' : 'bg-gray-500'}`} style={{ animationDelay: '150ms' }} />
                    <span className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-400' : 'bg-gray-500'}`} style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            className={`px-4 py-3 border-t shrink-0 ${
              isDarkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Jer's work..."
                rows={1}
                className={`flex-1 resize-none px-3 py-2 rounded-lg text-sm border outline-none transition-colors ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                    : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                }`}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
