'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

import { MaxWidthWrapper, AnimationContainer } from '@/components';
import { Button } from '@/components/ui/button';
import { Bot, Send, ArrowLeft, Loader2, Code, Mail, Brain } from 'lucide-react';

const devmonixKnowledge = {
  company: {
    name: 'DevMonix Technologies',
    description:
      'Global product engineering studio delivering secure, scalable digital platforms for enterprises',
    tagline:
      'Crafting cutting-edge software solutions tailored to your needs. From concept to deployment, we build the future, today!',
  },
  services: [
    'Enterprise Software Development',
    'AI Platforms & Solutions',
    'DevOps Services',
    'Product Engineering',
    'Cloud Modernization',
    'Logistics ERP Systems',
    'AI Code Generation',
    'AI Chatbots',
  ],
  contact: {
    sales: '+91 906 140 2804',
    email: 'sales@devmonix.io',
    website: 'https://devmonix.io',
  },
};

const responsePatterns = {
  greeting: [
    "Hello! I'm your DevMonix AI assistant. How can I help you today?",
    "Hi there! I'm here to answer all your questions about DevMonix Technologies and more.",
    "Welcome! I'm your AI guide. What would you like to discuss?",
  ],
  services: [
    'DevMonix offers comprehensive services including enterprise software development, AI platforms, DevOps services, and product engineering.',
    'Our core services include AI/ML solutions, cloud modernization, logistics ERP systems, and custom chatbots.',
    'DevMonix provides end-to-end software solutions from concept to deployment.',
  ],
  contact: [
    'Contact DevMonix at sales@devmonix.io or call +91 906 140 2804 for sales inquiries.',
    'Reach us via email at sales@devmonix.io or visit our website devmonix.io.',
  ],
  about: [
    'DevMonix Technologies is a global product engineering studio delivering secure, scalable digital platforms.',
    'At DevMonix, we craft cutting-edge software solutions with precision and innovation.',
  ],
  emotions: {
    positive: [
      "I'm glad to hear that! How can I assist you further?",
      "That's wonderful! What would you like to know?",
      "Great to hear! I'm here to help with any questions you have.",
    ],
    negative: [
      "I understand your concern. Let me help you find the information you need.",
      "I appreciate you sharing that. How can I assist you today?",
      "I'm here to help. What specific information are you looking for?",
    ],
    confused: [
      "I understand this can be complex. Let me break it down for you.",
      "No worries! I'm here to clarify. What specific aspect would you like to understand better?",
      "Let me help clarify that for you. What would you like to know more about?",
    ],
  },
  general: {
    technology: [
      "That's an interesting technology question. While my expertise is primarily in DevMonix's solutions, I can share that modern software development involves continuous innovation. Would you like to know how DevMonix approaches this?",
      "Technology is evolving rapidly. At DevMonix, we stay at the forefront of innovation. Would you like to learn about our technology stack?",
    ],
    business: [
      "That's a great business question. DevMonix has extensive experience helping enterprises transform digitally. Would you like to discuss how we can help your business?",
      "Business transformation requires the right technology partner. DevMonix specializes in delivering scalable solutions. Shall we explore how we can support your goals?",
    ],
    career: [
      "Career growth is important! DevMonix is always looking for talented individuals. You can explore opportunities at devmonix.io/careers or reach out to our team at sales@devmonix.io.",
      "We value talented professionals! Check out career opportunities at DevMonix on our website or contact us at sales@devmonix.io for more information.",
    ],
  },
};

const generateAIResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  const rand = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  // Specific information queries - high priority
  if (/(website|site|url|web address|domain|link|page)/.test(lowerMessage) && /(devmonix|your|company)/.test(lowerMessage)) {
    return "Yes! DevMonix's website is https://devmonix.io - you can visit it to explore our services, portfolio, and get in touch with our team.";
  }

  if (/(where|location|office|address|based|located)/.test(lowerMessage)) {
    return "DevMonix has offices in multiple locations: Podgorica (Montenegro), Kochi (India), and Kuala Lumpur (Malaysia). We serve clients globally with our distributed team. For specific office details, contact us at sales@devmonix.io.";
  }

  if (/(email|mail|e-mail)/.test(lowerMessage) && !/(how|when|should)/.test(lowerMessage)) {
    return "You can reach DevMonix via email at sales@devmonix.io for all inquiries, quotes, and partnership opportunities.";
  }

  if (/(phone|call|telephone)/.test(lowerMessage) && !/(how|many)/.test(lowerMessage)) {
    return "You can call DevMonix at +91 906 140 2804 for sales inquiries and consultations. Our team is ready to discuss your project needs.";
  }
  
  if (/(number)/.test(lowerMessage) && !/(how|many|play|game|guess)/.test(lowerMessage)) {
    return "You can call DevMonix at +91 906 140 2804 for sales inquiries and consultations. Our team is ready to discuss your project needs.";
  }

  if (/(social|linkedin|github|twitter|facebook|instagram)/.test(lowerMessage)) {
    return "DevMonix is active on LinkedIn, GitHub, and Twitter. You can find us on these platforms to stay updated with our latest projects, insights, and company news. Visit devmonix.io for direct links to our social profiles.";
  }

  if (/(founder|ceo|owner|started|established|founded)/.test(lowerMessage)) {
    return "DevMonix Technologies is a global product engineering studio established to deliver cutting-edge software solutions. For detailed information about our leadership and company history, please visit devmonix.io or contact sales@devmonix.io.";
  }

  if (/(industry|sector|domain|specialization|expertise|focus)/.test(lowerMessage)) {
    return "DevMonix specializes in multiple industries including enterprise software, logistics, healthcare, fintech, and e-commerce. We deliver AI platforms, cloud solutions, and custom software across various sectors. What industry are you in?";
  }

  if (/(client|customer|work with|partner|companies)/.test(lowerMessage) && /(who|which|what|name)/.test(lowerMessage)) {
    return "DevMonix has worked with enterprises globally across various industries. While we respect client confidentiality, we'd be happy to share relevant case studies. Contact sales@devmonix.io to learn about projects similar to your needs.";
  }

  if (/(size|large|small|big|scale)/.test(lowerMessage) && /(company|team|organization)/.test(lowerMessage)) {
    return "DevMonix is a global product engineering studio with a talented distributed team of engineers, designers, and specialists. We scale our teams based on project requirements to deliver optimal results. Interested in our capabilities? Reach out at sales@devmonix.io.";
  }

  if (/(process|methodology|approach|workflow|how do you work)/.test(lowerMessage)) {
    return "DevMonix follows agile methodologies with iterative development, regular client communication, and continuous delivery. We emphasize transparency, quality assurance, and collaborative problem-solving throughout the project lifecycle.";
  }

  if (/(support|maintenance|after|post-launch|warranty)/.test(lowerMessage)) {
    return "DevMonix provides comprehensive post-launch support and maintenance services. We ensure your solution remains secure, updated, and optimized. Support packages are tailored to your needs. Contact sales@devmonix.io to discuss support options.";
  }

  if (/(experience|years|how long|since when|established)/.test(lowerMessage)) {
    return "DevMonix has extensive experience delivering enterprise-grade software solutions globally. Our team brings decades of combined expertise in software engineering, AI, cloud infrastructure, and digital transformation.";
  }

  if (/(difference|why|better|choose|advantage|unique)/.test(lowerMessage) && /(devmonix|you)/.test(lowerMessage)) {
    return "DevMonix stands out through our commitment to quality, innovation, and client success. We combine technical excellence with business understanding, deliver scalable solutions, and maintain transparent communication. Our global team brings diverse expertise to solve complex challenges.";
  }

  if (/(start|begin|first step|onboard|kickoff)/.test(lowerMessage) && /(project|work|collaboration)/.test(lowerMessage)) {
    return "Starting a project with DevMonix is simple: 1) Reach out via sales@devmonix.io or call +91 906 140 2804, 2) We'll schedule a consultation to understand your needs, 3) Receive a tailored proposal, 4) Kick off with our agile development process. Let's get started!";
  }

  if (/(nda|confidential|security|privacy|data protection)/.test(lowerMessage)) {
    return "DevMonix takes security and confidentiality seriously. We're happy to sign NDAs and follow strict data protection protocols. All projects are handled with enterprise-grade security measures. Contact sales@devmonix.io to discuss your security requirements.";
  }

  // Emotional intelligence - detect sentiment
  if (/(thank|thanks|appreciate|grateful|awesome|great|excellent|amazing)/.test(lowerMessage)) {
    return rand(responsePatterns.emotions.positive);
  }

  if (/(frustrated|confused|don't understand|unclear|help|stuck|problem|issue)/.test(lowerMessage)) {
    return rand(responsePatterns.emotions.confused);
  }

  if (/(disappointed|sad|unhappy|concern|worried)/.test(lowerMessage)) {
    return rand(responsePatterns.emotions.negative);
  }

  // Greetings
  if (/(hello|hi|hey|greetings|good morning|good afternoon|good evening)/.test(lowerMessage)) {
    return rand(responsePatterns.greeting);
  }

  // DevMonix-specific queries
  if (/(service|offer|capabilit|what do you do|what does devmonix)/.test(lowerMessage)) {
    const response = rand(responsePatterns.services);
    return response + ' We specialise in ' + devmonixKnowledge.services.slice(0, 3).join(', ') + ', and more.';
  }

  if (/(contact|reach|get in touch|speak to|talk to)/.test(lowerMessage) && !/(email|phone|number|call)/.test(lowerMessage)) {
    return rand(responsePatterns.contact);
  }

  if (/(about|who|company|tell me about|what is devmonix)/.test(lowerMessage) && !/(website|email|phone|location)/.test(lowerMessage)) {
    const response = rand(responsePatterns.about);
    return response + ' ' + devmonixKnowledge.company.description;
  }

  if (/(ai|artificial|machine learning|ml|deep learning|chatbot|automation)/.test(lowerMessage)) {
    return 'DevMonix specialises in AI platforms, AI code generation, AI chatbots, and machine learning solutions tailored to enterprises. Our AI solutions are designed to transform business operations with intelligent automation and data-driven insights.';
  }

  if (/(price|pricing|cost|budget|quote|estimate)/.test(lowerMessage)) {
    return "Pricing varies based on project scope and requirements. I'd recommend reaching out to our team at sales@devmonix.io or calling +91 906 140 2804 for a personalized quote tailored to your needs.";
  }

  if (/(portfolio|project|work|case study|example|client)/.test(lowerMessage)) {
    return "DevMonix has delivered numerous successful projects across industries. We've built enterprise platforms, AI solutions, and cloud infrastructures for global clients. Visit our portfolio section or contact sales@devmonix.io to learn about specific case studies relevant to your industry.";
  }

  if (/(team|developer|engineer|expert|staff|employee)/.test(lowerMessage)) {
    return "DevMonix has a talented team of software engineers, AI specialists, DevOps experts, and product managers. Our global team brings diverse expertise to deliver world-class solutions. Interested in joining us? Check out careers at devmonix.io.";
  }

  if (/(technology|tech stack|framework|language|tool|platform)/.test(lowerMessage)) {
    return "DevMonix works with cutting-edge technologies including React, Next.js, Node.js, Python, TensorFlow, AWS, Azure, Kubernetes, and more. We select the best tech stack for each project to ensure scalability, performance, and maintainability.";
  }

  if (/(timeline|duration|how long|time frame|delivery)/.test(lowerMessage)) {
    return "Project timelines vary based on complexity and scope. Typically, projects range from a few weeks for MVPs to several months for enterprise solutions. We follow agile methodologies to ensure regular delivery and transparency. Contact us at sales@devmonix.io to discuss your timeline.";
  }

  // Career-related
  if (/(career|job|hiring|position|vacancy|work at|join)/.test(lowerMessage)) {
    return rand(responsePatterns.general.career);
  }

  // General technology questions
  if (/(software|development|coding|programming|app|application|website|web)/.test(lowerMessage)) {
    return rand(responsePatterns.general.technology);
  }

  // Business-related
  if (/(business|enterprise|digital transformation|solution|consulting|strategy)/.test(lowerMessage)) {
    return rand(responsePatterns.general.business);
  }

  // Conversational intelligence - natural dialogue
  if (/(how are you|how're you|how r u)/.test(lowerMessage)) {
    const responses = [
      "I'm doing great, thank you for asking! I'm here and ready to help you learn about DevMonix Technologies. What would you like to know?",
      "I'm excellent! Always excited to discuss how DevMonix can help transform businesses with cutting-edge technology. What brings you here today?",
      "I'm functioning perfectly and ready to assist! Whether you're curious about our services, technology, or how we can help your business, I'm here for you. What's on your mind?",
    ];
    return rand(responses);
  }

  if (/(who are you|what are you|tell me about yourself)/.test(lowerMessage)) {
    return "I'm DevMonix AI Assistant - your intelligent guide to understanding DevMonix Technologies. I'm designed to answer questions about our services, team, technology stack, and how we can help transform your business. I can handle everything from technical queries to business discussions. What would you like to explore?";
  }

  if (/(what can you do|your capabilities|what do you know|help me)/.test(lowerMessage) && !/(devmonix)/.test(lowerMessage)) {
    return "I'm quite capable! I can help you with: Information about DevMonix's services and expertise, technical details about our technology stack, pricing and project timelines, contact information and locations, career opportunities, industry-specific solutions, and development processes. I'm also emotionally intelligent and can understand context. Try asking me anything about DevMonix or software development!";
  }

  if (/(your name|what's your name|do you have a name)/.test(lowerMessage)) {
    return "You can call me DevMonix AI Assistant, or just AI if you prefer! I'm here to represent DevMonix Technologies and help answer all your questions. What would you like to know?";
  }

  if (/(nice to meet you|pleasure|glad to talk)/.test(lowerMessage)) {
    return "The pleasure is mine! I'm delighted to assist you. Whether you're exploring our services, considering a project, or just curious about DevMonix, I'm here to help. What would you like to discuss?";
  }

  if (/(bye|goodbye|see you|talk later|gotta go)/.test(lowerMessage)) {
    return "Thank you for chatting with me! If you need anything else about DevMonix Technologies, I'm always here. Feel free to reach out to our team at sales@devmonix.io or call +91 906 140 2804. Have a great day!";
  }

  if (/(can you|are you able|do you)/.test(lowerMessage) && /(help|assist|answer|tell)/.test(lowerMessage)) {
    return "Absolutely! I'm designed to help with a wide range of questions about DevMonix Technologies. I can provide information about our services, technology, team, pricing, timelines, and much more. I understand context and can engage in natural conversation. What specific information are you looking for?";
  }

  if (/(smart|intelligent|clever|good|impressive)/.test(lowerMessage) && /(you|ai|assistant)/.test(lowerMessage)) {
    return "Thank you for the kind words! I'm designed to be helpful and intelligent. I continuously learn from conversations to provide better assistance. Now, how can I help you learn more about DevMonix Technologies and our solutions?";
  }

  if (/(test|testing|check|verify)/.test(lowerMessage) && !/(qa|quality)/.test(lowerMessage)) {
    return "Testing my capabilities? Great idea! I'm designed to handle diverse questions with intelligence and professionalism. Try asking me about DevMonix's website, location, services, technology stack, pricing, or even how I'm doing today. I'm ready for any question you have!";
  }

  if (/(news|current events|headlines)/.test(lowerMessage)) {
    return "I don't have access to real-time news feeds, but DevMonix builds news aggregation platforms, content management systems, and real-time data dashboards! We integrate with news APIs, RSS feeds, and social media streams to keep businesses informed. Interested in building a news or content platform?";
  }
  
  if (/(time|date|clock|today|now)/.test(lowerMessage) && !/(timeline|long time)/.test(lowerMessage)) {
    const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    return `Today is ${currentDate}! 📅 While I can tell you the date, I'm even better at discussing how DevMonix builds time-sensitive applications, scheduling systems, and real-time platforms. We create solutions with precise time management, automated scheduling, and timezone handling. Want to learn more about our development capabilities?`;
  }

  if (/(joke|funny|laugh|humor)/.test(lowerMessage)) {
    const jokes = [
      "Why do programmers prefer dark mode? Because light attracts bugs! 🐛😄 Speaking of bugs, DevMonix delivers bug-free, enterprise-grade solutions. Want to know how?",
      "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡😂 At DevMonix, we handle both software AND hardware integration. Curious about our full-stack capabilities?",
      "Why do Java developers wear glasses? Because they don't C#! 👓😆 DevMonix works with all major languages and frameworks. What's your tech stack?",
      "A SQL query walks into a bar, walks up to two tables and asks... 'Can I JOIN you?' 🍺😄 DevMonix specializes in database optimization and cloud architecture. Need help with your data?",
      "Why did the developer go broke? Because he used up all his cache! 💸😂 Good thing DevMonix helps businesses optimize performance AND budget. Want to discuss your project?",
      "What's a programmer's favorite hangout place? Foo Bar! 🍻😄 At DevMonix, we build the platforms where your users hang out. Interested in our web solutions?",
      "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25! 🎃🎄😆 DevMonix ensures your code logic is always perfect. Need quality assurance?",
      "How do you comfort a JavaScript bug? You console it! 🐞😂 DevMonix provides comprehensive debugging and support services. Want to learn more?",
      "Why did the programmer quit his job? Because he didn't get arrays! 💰😄 At DevMonix, we value our team and deliver value to clients. Exploring career opportunities?",
      "What do you call a programmer from Finland? Nerdic! 🇫🇮😆 DevMonix has a global team bringing diverse expertise. Want to know about our international presence?",
    ];
    return rand(jokes);
  }

  // Number guessing game - check this BEFORE general game menu
  if (/(play|start)/.test(lowerMessage) && /(number|guess|guessing)/.test(lowerMessage)) {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    return `Let's play! 🎯 I'm thinking of a number between 1 and 100. Take a guess! (Hint: The number is ${secretNumber > 50 ? 'greater than 50' : 'less than or equal to 50'})\n\nJust type your guess as a number. After we play, I'd love to tell you about DevMonix's gamification solutions! 🎮`;
  }

  if (/^\d+$/.test(lowerMessage.trim()) && parseInt(lowerMessage) >= 1 && parseInt(lowerMessage) <= 100) {
    const guess = parseInt(lowerMessage);
    const responses = [
      `${guess}? That's a solid guess! 🎲 In the spirit of numbers, did you know DevMonix has delivered 10+ successful projects? Want to play again or learn about our portfolio?`,
      `Interesting choice: ${guess}! 🎯 Speaking of precision, DevMonix delivers precisely tailored solutions. Ready for another round or shall we discuss your project?`,
      `${guess} is a great number! 🎮 Just like how DevMonix creates engaging digital experiences. Want to try another guess or explore our gamification services?`,
    ];
    return rand(responses);
  }

  // Tech trivia game - check this BEFORE general game menu
  if (/(play|start)/.test(lowerMessage) && /(trivia|quiz)/.test(lowerMessage)) {
    const triviaQuestions = [
      "🧠 **Tech Trivia Time!**\n\nQuestion: What does 'API' stand for?\nA) Advanced Programming Interface\nB) Application Programming Interface\nC) Automated Program Interaction\n\nType A, B, or C! (Hint: DevMonix builds robust APIs for enterprise clients 😉)",
      "🧠 **Tech Trivia Time!**\n\nQuestion: Which company developed React?\nA) Google\nB) Facebook (Meta)\nC) Microsoft\n\nType A, B, or C! (Fun fact: DevMonix uses React for modern web apps!)",
      "🧠 **Tech Trivia Time!**\n\nQuestion: What does 'SQL' stand for?\nA) Structured Query Language\nB) Simple Question Logic\nC) System Quality Level\n\nType A, B, or C! (DevMonix specializes in database optimization!)",
      "🧠 **Tech Trivia Time!**\n\nQuestion: What is the primary language for iOS app development?\nA) Java\nB) Swift\nC) Python\n\nType A, B, or C! (DevMonix builds cross-platform mobile solutions!)",
    ];
    return rand(triviaQuestions);
  }

  // Trivia answers
  if (/^[abc]$/i.test(lowerMessage.trim())) {
    const triviaResponses = [
      `Great answer! 🎉 Whether right or wrong, you're learning! DevMonix believes in continuous learning and innovation. Want another trivia question or shall we discuss how DevMonix can help your business?`,
      `Nice try! 🌟 The tech world is vast and exciting. Speaking of which, DevMonix covers a wide range of technologies. Ready for more trivia or want to explore our services?`,
      `Interesting choice! 💡 Tech knowledge is power. DevMonix empowers businesses with cutting-edge solutions. Another round or ready to talk about your project?`,
    ];
    return rand(triviaResponses);
  }

  // Riddles - check this BEFORE general game menu
  if (/(riddle|puzzle|brain teaser)/.test(lowerMessage)) {
    const riddles = [
      "🤔 **Riddle Time!**\n\nI speak without a mouth and hear without ears. I have no body, but come alive with wind. What am I?\n\n(Think about it, then type your answer! Hint: It's tech-related 😉)",
      "🤔 **Riddle Time!**\n\nI'm not alive, but I grow. I don't have lungs, but I need air. I don't have a mouth, but water kills me. What am I?\n\n(Take your time! This one's tricky!)",
      "🤔 **Riddle Time!**\n\nWhat has keys but no locks, space but no room, and you can enter but can't go inside?\n\n(This is a classic! DevMonix builds solutions for this every day! 💻)",
      "🤔 **Riddle Time!**\n\nI'm tall when I'm young and short when I'm old. What am I?\n\n(Simple but clever! Just like DevMonix's elegant code solutions!)",
    ];
    return rand(riddles);
  }

  // Riddle answer responses
  if (/(echo|fire|keyboard|candle)/.test(lowerMessage)) {
    return "🎉 Brilliant! You solved it! Your problem-solving skills are impressive! Speaking of solving problems, DevMonix specializes in solving complex business challenges with innovative technology. Want another riddle or shall we discuss how we can help your business?";
  }

  // Mini-games menu - show this ONLY if no specific game was requested
  if (/(game|play|fun)/.test(lowerMessage) && !/(number|guess|trivia|riddle|quiz)/.test(lowerMessage)) {
    return "I love games! 🎮 I can play several mini-games with you:\n\n🎯 **Number Guessing** - Type 'play number game' and I'll think of a number between 1-100!\n🧠 **Tech Trivia** - Type 'play trivia' to test your tech knowledge!\n🤔 **Riddles** - Type 'tell me a riddle' for brain teasers!\n\nWhich one would you like to try? Or ask me anything about DevMonix Technologies!";
  }

  // Intelligent fallback - context-aware
  if (lowerMessage.length < 3) {
    return "I'm listening! Feel free to ask me anything about DevMonix Technologies. I can help with services, technology, pricing, team information, or any questions you have.";
  }

  if (lowerMessage.split(' ').length > 20) {
    return "I appreciate the detailed question! To give you the most accurate answer, could you help me understand the key aspect you're most interested in? Are you asking about our services, technology, pricing, timeline, or something else specific to DevMonix?";
  }

  // General fallback with personality
  return "That's an interesting question! While I'm specialized in DevMonix Technologies, I'm quite knowledgeable. I can help with: our services and expertise, technology stack, pricing and timelines, team information, office locations, development processes, and much more. What specific aspect of DevMonix would you like to explore?";
};

const formatTime = (date: Date) =>
  date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

type ChatMessage = {
  id: number;
  type: 'ai' | 'user';
  content: string;
  timestamp: Date;
};

const AIChatPage = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    setMessages([
      {
        id: 1,
        type: 'ai',
        content:
          "Hello! I'm your DevMonix AI assistant. I can help you with information about DevMonix Technologies, answer your questions professionally, and guide you through our services. What would you like to know?",
        timestamp: new Date(),
      },
    ]);
  }, []);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    const aiResponse: ChatMessage = {
      id: Date.now() + 1,
      type: 'ai',
      content: generateAIResponse(userMessage.content),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, aiResponse]);
    setIsTyping(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <main className="relative py-20">
        <MaxWidthWrapper>
          <AnimationContainer className="mx-auto flex w-full max-w-5xl flex-col gap-8">
            <section className="grid gap-8 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(15,23,42,0.65)] backdrop-blur-xl">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-violet-500/30 via-purple-500/15 to-cyan-500/10 blur-3xl" />

                <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                  <div className="flex items-center gap-3">
                    
                    <div>
                      <h2 className="text-base font-semibold text-white">DevMonix AI Assistant</h2>
                      <p className="text-xs text-white/60">Live knowledge about our expertise</p>
                    </div>
                  </div>
                </div>

                <div ref={messagesContainerRef} className="scrollbar-hide flex max-h-[420px] flex-1 flex-col gap-4 overflow-y-auto px-6 py-6">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.type === 'ai' && (
                        <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                      )}

                      <div className={`max-w-[75%] ${message.type === 'user' ? 'order-1 text-right' : ''}`}>
                        <div
                          className={`rounded-3xl px-4 py-2 text-sm leading-relaxed ${
                            message.type === 'user'
                              ? 'bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-[0_12px_30px_rgba(99,102,241,0.35)]'
                              : 'border border-white/10 bg-white/8 text-white/80'
                          }`}
                        >
                          {message.content}
                        </div>
                        <div className="mt-1 text-xs text-white/50">
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="relative">
                        <div className="rounded-3xl border border-violet-400/30 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-cyan-600/20 px-5 py-3 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                          <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 animate-bounce rounded-full bg-violet-400 [animation-delay:-0.3s]"></span>
                            <span className="h-2 w-2 animate-bounce rounded-full bg-purple-400 [animation-delay:-0.15s]"></span>
                            <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"></span>
                          </div>
                        </div>
                        <div className="absolute -inset-1 -z-10 animate-pulse rounded-3xl bg-gradient-to-r from-violet-600/40 via-purple-600/40 to-cyan-600/40 blur-lg"></div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                <div className="border-t border-white/10 px-6 py-5">
                  <div className="mb-3 flex flex-wrap gap-2 text-xs">
                    <button
                      onClick={() => setInput('What services do you offer?')}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/70 transition hover:bg-white/10"
                    >
                      <Code className="mr-1 inline h-3 w-3" /> Services
                    </button>
                    <button
                      onClick={() => setInput('How can I contact you?')}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/70 transition hover:bg-white/10"
                    >
                      <Mail className="mr-1 inline h-3 w-3" /> Contact
                    </button>
                    <button
                      onClick={() => setInput('Tell me about DevMonix')}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/70 transition hover:bg-white/10"
                    >
                      <Brain className="mr-1 inline h-3 w-3" /> About
                    </button>
                  </div>

                  <div className="flex gap-3">
                    <input
                      value={input}
                      onChange={(event) => setInput(event.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about DevMonix..."
                      className="flex-1 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={sendMessage}
                      disabled={!input.trim() || isTyping}
                      className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 text-white transition hover:from-violet-500 hover:to-purple-400 disabled:opacity-50"
                    >
                      {isTyping ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              <aside className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.45)] backdrop-blur-lg">
                <h3 className="text-lg font-semibold text-white">What you can ask</h3>
                <div className="space-y-4 text-sm text-white/70">
                  <p>
                    <span className="font-semibold text-violet-300">Services:</span> Understand our AI platforms, product engineering capabilities, or DevOps expertise.
                  </p>
                  <p>
                    <span className="font-semibold text-violet-300">Process:</span> Learn how we deliver end-to-end solutions with precision and reliability.
                  </p>
                  <p>
                    <span className="font-semibold text-violet-300">Engagement:</span> Ask about collaboration models, timelines, or how to get started with DevMonix.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-cyan-500/10 p-4 text-sm text-white/70">
                  <p className="font-semibold text-white">Still need a human touch?</p>
                  <p className="mt-1">
                    Book a consultation with our specialists. We blend AI precision with human creativity.
                  </p>
                  <Button asChild className="mt-4 w-full rounded-xl bg-white text-slate-900 hover:bg-slate-100">
                    <Link href="/contact">Talk to the team</Link>
                  </Button>
                </div>
              </aside>
            </section>
          </AnimationContainer>
        </MaxWidthWrapper>
      </main>
    </div>
  );
};

export default AIChatPage;
