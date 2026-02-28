import { useState, useCallback } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');

  const sendMessage = useCallback(async (userMessage: string) => {
    const newUserMsg: Message = { role: 'user', content: userMessage };
    setMessages(prev => {
      const updated = [...prev, newUserMsg];
      doSend(updated);
      return updated;
    });

    async function doSend(updatedMessages: Message[]) {
      setIsLoading(true);
      setStreamingContent('');
      let accumulated = '';

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: updatedMessages }),
        });

        if (!response.ok) {
          const err = await response.json().catch(() => ({ error: 'Unknown error' }));
          throw new Error(err.error || 'API error');
        }

        const reader = response.body?.getReader();
        if (!reader) throw new Error('No response stream');

        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith('data: ')) continue;
            const data = trimmed.slice(6);
            if (data === '[DONE]') continue;
            try {
              const parsed = JSON.parse(data);
              const delta = parsed.choices?.[0]?.delta?.content;
              if (delta) {
                accumulated += delta;
                setStreamingContent(accumulated);
              }
            } catch {
              // skip malformed chunks
            }
          }
        }

        setMessages(prev => [...prev, { role: 'assistant', content: accumulated || 'Sorry, I received an empty response. Please try again.' }]);
      } catch {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: "Sorry, I had trouble responding. Please try again later.",
        }]);
      } finally {
        setStreamingContent('');
        setIsLoading(false);
      }
    }
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setStreamingContent('');
  }, []);

  return { messages, isLoading, streamingContent, sendMessage, clearMessages };
}
