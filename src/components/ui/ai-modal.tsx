'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Copy, 
  ThumbsUp,
  ThumbsDown,
  Loader2,
  X,
  MessageSquare,
  Brain,
  Code,
  Mail
} from 'lucide-react';

// DevMonix knowledge base
const devmonixKnowledge = {
  company: {
    name: "DevMonix Technologies",
    description: "Global product engineering studio delivering secure, scalable digital platforms for enterprises",
    tagline: "Crafting cutting-edge software solutions tailored to your needs. From concept to deployment, we build the future, today!"
  },
  services: [
    "Enterprise Software Development",
    "AI Platforms & Solutions", 
    "DevOps Services",
    "Product Engineering",
    "Cloud Modernization",
    "Logistics ERP Systems",
    "AI Code Generation",
    "AI Chatbots"
  ],
  contact: {
    sales: "+91 906 140 2804",
    email: "sales@devmonix.io",
    website: "https://devmonix.io"
  }
};

const responsePatterns = {
  greeting: [
    "Hello! I'm your DevMonix AI assistant. How can I help you today?",
    "Hi there! I'm here to answer all your questions about DevMonix Technologies.",
    "Welcome! I'm your AI guide for DevMonix. What would you like to know?"
  ],
  services: [
    "DevMonix offers comprehensive services including enterprise software development, AI platforms, DevOps services, and product engineering.",
    "Our core services include AI/ML solutions, cloud modernization, logistics ERP systems, and custom chatbots.",
    "DevMonix provides end-to-end software solutions from concept to deployment."
  ],
  contact: [
    "Contact DevMonix at sales@devmonix.io or call +91 906 140 2804 for sales inquiries.",
    "Reach us via email at sales@devmonix.io or visit our website devmonix.io."
  ],
  about: [
    "DevMonix Technologies is a global product engineering studio delivering secure, scalable digital platforms.",
    "At DevMonix, we craft cutting-edge software solutions with precision and innovation."
  ]
};

interface AIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIModal = ({ isOpen, onClose }: AIModalProps) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm your DevMonix AI assistant. I can help you with information about DevMonix Technologies. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' } as any);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return responsePatterns.greeting[Math.floor(Math.random() * responsePatterns.greeting.length)];
    }
    
    if (lowerMessage.includes('service') || lowerMessage.includes('what do') || lowerMessage.includes('offer')) {
      const response = responsePatterns.services[Math.floor(Math.random() * responsePatterns.services.length)];
      return response + " " + devmonixKnowledge.services.slice(0, 3).join(", ") + ", and more.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return responsePatterns.contact[Math.floor(Math.random() * responsePatterns.contact.length)];
    }
    
    if (lowerMessage.includes('about') || lowerMessage.includes('who') || lowerMessage.includes('company')) {
      const response = responsePatterns.about[Math.floor(Math.random() * responsePatterns.about.length)];
      return response + " " + devmonixKnowledge.company.description;
    }
    
    if (lowerMessage.includes('ai') || lowerMessage.includes('artificial')) {
      return `DevMonix specializes in AI solutions including AI platforms, AI code generation, AI chatbots, and machine learning solutions.`;
    }
    
    return "I'm here to help with information about DevMonix Technologies. Could you ask about our services, company, or contact details?";
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const aiResponse = {
      id: Date.now() + 1,
      type: 'ai',
      content: generateAIResponse(input),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiResponse]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed bottom-28 right-24 z-[9999] w-[360px] max-w-[90vw] rounded-[28px] border border-white/10 bg-slate-950/95 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3 text-left">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-500 text-white">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">DevMonix AI</h3>
                <p className="text-xs text-white/60">Ask me anything</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-white/50 transition-colors hover:bg-white/5 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="scrollbar-hide flex max-h-[320px] flex-1 flex-col gap-3 overflow-y-auto px-5 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.type === 'ai' && (
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                )}

                <div className={`max-w-[82%] ${message.type === 'user' ? 'order-1' : ''}`}>
                  <div
                    className={`rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-[0_8px_24px_rgba(99,102,241,0.35)]'
                        : 'border border-white/10 bg-white/8 text-white/80'
                    }`}
                  >
                    {message.content}
                  </div>
                  <div className={`mt-1 px-1 text-xs ${message.type === 'user' ? 'text-white/60 text-right' : 'text-white/40'}`}>
                    {formatTime(message.timestamp)}
                  </div>
                </div>

                {message.type === 'user' && (
                  <div className="order-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                    <User className="h-3 w-3 text-white" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-3 w-3 animate-spin text-violet-400" />
                    <span className="text-xs text-white/60">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="border-t border-white/10 px-5 py-4">
            <div className="mb-3 flex flex-wrap gap-2">
              <button
                onClick={() => setInput("What services do you offer?")}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 transition-colors hover:bg-white/10"
              >
                <Code className="mr-1 inline h-3 w-3" />
                Services
              </button>
              <button
                onClick={() => setInput("How can I contact you?")}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 transition-colors hover:bg-white/10"
              >
                <Mail className="mr-1 inline h-3 w-3" />
                Contact
              </button>
              <button
                onClick={() => setInput("Tell me about DevMonix")}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 transition-colors hover:bg-white/10"
              >
                <Brain className="mr-1 inline h-3 w-3" />
                About
              </button>
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about DevMonix..."
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500"
                disabled={isTyping}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isTyping}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-500 text-white transition hover:from-violet-500 hover:to-purple-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isTyping ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIModal;
