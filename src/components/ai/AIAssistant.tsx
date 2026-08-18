import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, User, RefreshCw, ChevronDown } from 'lucide-react';
import type { ChatMessage } from '../../types';
import { getAIResponse } from '../../services/ai';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'ai',
      text: "Hi! I'm Nam's AI Assistant. Ask me anything about Nam's Android development experience, React web applications, or freelance services!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: [
        'What can Nam build for me?',
        'Tell me about IPTV Player project',
        'What is Nam\'s tech stack?',
        'Is Nam available for freelance?'
      ]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const queryText = (textToSend || input).trim();
    if (!queryText || loading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const res = await getAIResponse(queryText);
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: res.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: res.suggestions
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: 'ai',
          text: "I am having trouble answering right now. Please feel free to send a message on the Contact page!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="gradient-bg-emerald px-4 py-3 rounded-full font-semibold text-sm shadow-2xl flex items-center gap-2.5 hover:scale-105 transition-all transform active:scale-95 animate-pulse-glow"
          aria-label="Ask about Nam AI Assistant"
        >
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <span>Ask about me</span>
          <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
        </button>
      )}

      {isOpen && (
        <div className="w-[92vw] sm:w-[380px] h-[520px] glass-card rounded-3xl border border-slate-200 dark:border-[#212B3B] shadow-2xl shadow-emerald-500/20 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          <div className="bg-slate-100 dark:bg-[#131924] p-4 border-b border-slate-200 dark:border-[#212B3B] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  Nam.AI Assistant
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Online • Context-Aware</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close Chat"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-grow p-4 overflow-y-auto space-y-4 text-sm bg-slate-50/50 dark:bg-[#0B0F17]/90">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-end gap-2 max-w-[85%]">
                  {msg.sender === 'ai' && (
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0 mb-1">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`p-3.5 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-emerald-500 text-white rounded-br-xs font-medium'
                        : 'bg-white dark:bg-[#161D2B] text-slate-800 dark:text-slate-200 rounded-bl-xs border border-slate-200 dark:border-[#242E42] shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-line leading-relaxed text-xs sm:text-sm">
                      {msg.text}
                    </p>
                    <span className="block text-[10px] text-right mt-1 opacity-70">
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs shrink-0 mb-1">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 pl-8">
                    {msg.suggestions.map((sug, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(sug)}
                        className="text-xs px-2.5 py-1 rounded-full bg-slate-200/80 dark:bg-[#182030] text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all font-mono"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono pl-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                <span>Nam.AI is thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white dark:bg-[#131924] border-t border-slate-200 dark:border-[#212B3B]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Nam's apps, skills..."
                className="flex-grow bg-slate-100 dark:bg-[#0B0F17] text-slate-900 dark:text-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-[#212B3B] focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="p-2.5 rounded-xl gradient-bg-emerald text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
