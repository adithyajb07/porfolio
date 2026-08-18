import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, User, ArrowRight } from 'lucide-react';


interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actionSection?: string;
  timestamp: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'bot',
    text: "Hi! I'm Aether, Adithya's AI Co-Pilot 🤖. Ask me anything about Adithya's AI/ML engineering work, projects, or background!",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
];

const QUICK_PROMPTS = [
  { label: '🚀 AI & Work Experience', query: 'Tell me about Adithya experience', section: 'experience' },
  { label: '⚡ Top Skills & Tech Stack', query: 'What frameworks does Adithya use?', section: 'skills' },
  { label: '🎓 Education & Track Record', query: 'Where does Adithya study?', section: 'about' },
  { label: '📫 Contact & Hire', query: 'How can I contact Adithya?', section: 'contact' },
];

export const AICopilot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string, actionSec?: string) => {
    const queryText = textToSend || input;
    if (!queryText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate AI thinking and generating tailored response
    setTimeout(() => {
      let botResponse = '';
      let targetSection = actionSec;

      const lower = queryText.toLowerCase();
      if (lower.includes('experience') || lower.includes('intern') || lower.includes('work')) {
        botResponse =
          "Adithya has worked across 3 software engineering internships:\n• Software Intern at HealthEdge (Performance Testing & Scalability Audits)\n• Software Intern at Genrobotics (ERP Application & Django Backend Architecture)\n• Web Developer Intern at Soften Technologies (Python & Django Web Applications)";
        targetSection = 'experience';
      } else if (lower.includes('skill') || lower.includes('stack') || lower.includes('framework')) {
        botResponse =
          "Adithya specializes in AI/ML & Full Stack Engineering:\n• Python, PyTorch, TensorFlow, OpenCV, HuggingFace\n• React 19, TypeScript, Next.js, Node.js, TailwindCSS\n• Docker, AWS, REST APIs, ConvexDB, LLM Fine-Tuning & Prompt Engineering.";
        targetSection = 'skills';
      } else if (lower.includes('study') || lower.includes('christ') || lower.includes('education')) {
        botResponse =
          "Adithya is a Computer Science Engineering student specializing in AI & Machine Learning at CHRIST University, maintaining a strong academic record with published research and practical AI implementations.";
        targetSection = 'about';
      } else if (lower.includes('contact') || lower.includes('hire') || lower.includes('email')) {
        botResponse =
          "You can reach Adithya directly via email or LinkedIn. Check out the Contact section to send a message or download the resume!";
        targetSection = 'contact';
      } else {
        botResponse =
          "Adithya is a Computer Science & AI/ML Engineer who builds intelligent software, computer vision models, and scalable backends. Feel free to explore the projects or download the resume!";
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
        actionSection: targetSection,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const scrollToSection = (secId: string) => {
    const el = document.getElementById(secId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3 cursor-pointer"
          aria-label="Open Aether AI"
        >
          <Sparkles className="w-5 h-5 text-slate-950 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 hidden sm:inline">
            Aether AI
          </span>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950"></span>
          </span>
        </button>
      </div>

      {/* Floating Chat Drawer Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[80vh] bg-[#0c1017]/95 border border-emerald-500/25 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl z-50 flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="p-4 border-b border-emerald-500/15 bg-emerald-950/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5 font-sans">
                  Aether — AI Co-Pilot
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-full">
                    v2.0
                  </span>
                </h3>
                <p className="text-[11px] text-slate-400 font-mono">Ask about skills, work & projects</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-2xl p-3 space-y-2 ${
                    msg.sender === 'user'
                      ? 'bg-emerald-500 text-slate-950 font-medium rounded-br-xs shadow-[0_2px_10px_rgba(16,185,129,0.2)]'
                      : 'bg-slate-900/90 border border-emerald-500/15 text-slate-200 rounded-bl-xs'
                  }`}
                >
                  <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                  {msg.actionSection && (
                    <button
                      onClick={() => scrollToSection(msg.actionSection!)}
                      className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 underline cursor-pointer"
                    >
                      Jump to section <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                  <div className={`text-[9px] font-mono text-right ${msg.sender === 'user' ? 'text-slate-900/70' : 'text-slate-500'}`}>
                    {msg.timestamp}
                  </div>
                </div>
                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-1">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-slate-400 font-mono text-[11px]">
                <Bot className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>Aether is typing...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 border-t border-emerald-500/10 bg-slate-950/60 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {QUICK_PROMPTS.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p.query, p.section)}
                className="px-2.5 py-1 bg-slate-900 hover:bg-emerald-950/40 border border-emerald-500/20 text-slate-300 hover:text-emerald-300 rounded-full text-[10px] font-mono whitespace-nowrap transition-colors cursor-pointer"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 border-t border-emerald-500/15 bg-[#090c12] flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Aether a question..."
              className="flex-1 bg-slate-900/80 border border-slate-800 focus:border-emerald-500/50 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none transition-colors"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

