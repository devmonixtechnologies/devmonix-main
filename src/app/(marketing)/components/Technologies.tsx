'use client';

import { useState } from 'react';
import { Brain, ShieldCheck, Rocket } from 'lucide-react';


const techCategories = [
  {
    name: 'Frontend',
    color: 'from-cyan-400 to-blue-500',
    technologies: [
      { name: 'React', level: 95 },
      { name: 'Vue.js', level: 90 },
      { name: 'Next.js', level: 92 },
      { name: 'TypeScript', level: 94 },
      { name: 'Bootstrap', level: 96 },
      { name: 'Svelte', level: 91 },
    ],
  },
  {
    name: 'Backend',
    color: 'from-emerald-400 to-teal-500',
    technologies: [
      { name: 'Node.js', level: 94 },
      { name: 'Python', level: 91 },
      { name: 'Go', level: 88 },
      { name: 'GraphQL', level: 89 },
      { name: 'PostgreSQL', level: 93 },
      { name: 'MongoDB', level: 96 },
    ],
  },
  {
    name: 'DevOps & Cloud',
    color: 'from-violet-400 to-purple-500',
    technologies: [
      { name: 'AWS', level: 93 },
      { name: 'Docker', level: 95 },
      { name: 'Kubernetes', level: 89 },
      { name: 'GCP', level: 93 },
      { name: 'Terraform', level: 87 },
      { name: 'Azure', level: 93 },
    ],
  },
  {
    name: 'Mobile',
    color: 'from-amber-400 to-orange-500',
    technologies: [
      { name: 'React Native', level: 91 },
      { name: 'Flutter', level: 88 },
      { name: 'Swift', level: 86 },
      { name: 'Kotlin', level: 87 },
      { name: 'Expo', level: 90 },
    ],
  },
  {
    name: 'AI & ML',
    color: 'from-pink-400 to-rose-500',
    technologies: [
      { name: 'TensorFlow', level: 89 },
      { name: 'PyTorch', level: 87 },
      { name: 'OpenAI APIs', level: 93 },
      { name: 'Langchain', level: 90 },
      { name: 'Hugging Face', level: 88 },
    ],
  },
  {
    name: 'Web3 & Blockchain',
    color: 'from-indigo-400 to-blue-500',
    technologies: [
      { name: 'Solidity', level: 88 },
      { name: 'Ethereum', level: 90 },
      { name: 'Web3.js', level: 91 },
      { name: 'IPFS', level: 85 },
      { name: 'Hardhat', level: 87 },
      { name: 'Moralis', level: 87 },
    ],
  },
];

const techIconMap: Record<string, string> = {
  'React': 'https://cdn.simpleicons.org/react/61DAFB',
  'Vue.js': 'https://cdn.simpleicons.org/vuedotjs/4FC08D',
  'Next.js': 'https://cdn.simpleicons.org/nextdotjs/FFFFFF',
  'TypeScript': 'https://cdn.simpleicons.org/typescript/3178C6',
  'Bootstrap': 'https://cdn.simpleicons.org/bootstrap/7952B3',
  'Svelte': 'https://cdn.simpleicons.org/svelte/FF3E00',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',
  'Python': 'https://cdn.simpleicons.org/python/3776AB',
  'Go': 'https://cdn.simpleicons.org/go/00ADD8',
  'GraphQL': 'https://cdn.simpleicons.org/graphql/E10098',
  'PostgreSQL': 'https://cdn.simpleicons.org/postgresql/4169E1',
  'MongoDB': 'https://cdn.simpleicons.org/mongodb/47A248',
  'AWS': 'https://img.icons8.com/?size=100&id=33039&format=png&color=000000',
  'Docker': 'https://cdn.simpleicons.org/docker/2496ED',
  'Kubernetes': 'https://cdn.simpleicons.org/kubernetes/326CE5',
  'GCP': 'https://cdn.simpleicons.org/googlecloud/4285F4',
  'Terraform': 'https://cdn.simpleicons.org/terraform/844FBA',
  'Azure': 'https://cdn.simpleicons.org/microsoftazure/0078D4',
  'React Native': 'https://cdn.simpleicons.org/react/61DAFB',
  'Flutter': 'https://cdn.simpleicons.org/flutter/02569B',
  'Swift': 'https://cdn.simpleicons.org/swift/F05138',
  'Kotlin': 'https://cdn.simpleicons.org/kotlin/7F52FF',
  'Expo': 'https://cdn.simpleicons.org/expo/FFFFFF',
  'TensorFlow': 'https://cdn.simpleicons.org/tensorflow/FF6F00',
  'PyTorch': 'https://cdn.simpleicons.org/pytorch/EE4C2C',
  'OpenAI APIs': 'https://cdn.simpleicons.org/openai/FFFFFF',
  'Langchain': 'https://cdn.simpleicons.org/langchain/00A67E',
  'Hugging Face': 'https://cdn.simpleicons.org/huggingface/FFD21E',
  'Solidity': 'https://cdn.simpleicons.org/solidity/FFFFFF',
  'Ethereum': 'https://cdn.simpleicons.org/ethereum/3C3C3D',
  'Web3.js': 'https://cdn.simpleicons.org/web3dotjs/F16822',
  'IPFS': 'https://cdn.simpleicons.org/ipfs/65C2CB',
  'Hardhat': 'https://cdn.simpleicons.org/hardhat/FFF100',
  'Moralis': 'https://cdn.simpleicons.org/moralis/2559BB',
};

// Helper function to get icon URL
const getIconUrl = (techName: string): string => {
  return techIconMap[techName] || 'https://cdn.simpleicons.org/default/FFFFFF';
};

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-16 sm:py-20 md:py-24 pt-8 sm:pt-10 px-4 sm:px-6 bg-neutral-950 text-neutral-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Technology
            </span>{' '}
            Stack
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build scalable, secure, and future-ready solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {techCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-[0_0_30px_rgba(99,102,241,0.45)] scale-105`
                  : 'bg-neutral-900/70 text-neutral-300 border border-neutral-800 hover:bg-neutral-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div className="bg-neutral-900/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-neutral-800 p-6 sm:p-8 md:p-12 shadow-[0_0_60px_rgba(0,0,0,0.9)]">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">

            {/* Left */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${techCategories[activeCategory].color}`}>
                  {techCategories[activeCategory].name}
                </span>
              </h3>

              <p className="text-sm sm:text-base text-neutral-400 mb-6 sm:mb-8 leading-relaxed">
                We use best-in-class {techCategories[activeCategory].name.toLowerCase()} technologies to build
                enterprise-grade products with performance, security, and scalability in mind.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {techCategories[activeCategory].technologies.map((tech, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1 sm:mb-2">
                      <span className="font-semibold text-neutral-200 text-sm sm:text-base">{tech.name}</span>
                      <span className="text-neutral-400 text-sm sm:text-base">{tech.level}%</span>
                    </div>
                    <div className="h-2 sm:h-3 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${techCategories[activeCategory].color} shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all duration-1000`}
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {techCategories[activeCategory].technologies.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-neutral-900 border border-neutral-800 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all hover:-translate-y-1"
                >
                  <img
                    src={getIconUrl(tech.name)}
                    alt={tech.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3"
                  />
                  <div className="font-semibold text-neutral-200 text-xs sm:text-sm">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom Cards */}


<div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
  {[
    {
      title: 'Continuous Learning',
      desc: 'Constantly upgrading skills to stay ahead of emerging technologies.',
      icon: Brain,
      glow: 'from-cyan-500 to-blue-700',
    },
    {
      title: 'Best Practices',
      desc: 'Following industry-proven standards for performance and security.',
      icon: ShieldCheck,
      glow: 'from-emerald-500 to-teal-700',
    },
    {
      title: 'Innovation First',
      desc: 'Building future-ready solutions through experimentation and R&D.',
      icon: Rocket,
      glow: 'from-pink-500 to-rose-700',
    },
  ].map((item, i) => {
    const Icon = item.icon;
    return (
      <div
        key={i}
        className="
          group relative overflow-hidden
          rounded-2xl sm:rounded-3xl p-6 sm:p-8
          bg-neutral-900/70 backdrop-blur-xl
          border border-neutral-800
          transition-all duration-500
          hover:-translate-y-1 sm:hover:-translate-y-2
          hover:shadow-[0_0_60px_rgba(0,0,0,0.9)]
        "
      >
        {/* Glow background */}
        <div
          className={`
            absolute inset-0 opacity-0 group-hover:opacity-100
            transition-opacity duration-500
            bg-gradient-to-br ${item.glow}
            blur-3xl
          `}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div
          className={`
            w-10 h-10 sm:w-14 sm:h-14 mb-4 sm:mb-6
            rounded-xl sm:rounded-2xl
            flex items-center justify-center
            bg-gradient-to-br ${item.glow}
            shadow-[0_0_30px_rgba(99,102,241,0.45)]
            group-hover:scale-105 sm:group-hover:scale-110 transition-transform
          `}
          >
            <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
          </div>

          {/* Text */}
          <h4 className="text-lg sm:text-xl font-semibold text-neutral-100 mb-2 sm:mb-3">
            {item.title}
          </h4>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            {item.desc}
          </p>
        </div>

        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/5" />
      </div>
    );
  })}
</div>


        {/* <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Continuous Learning', icon: '📚', desc: 'Always evolving with new tech' },
            { title: 'Best Practices', icon: '⚡', desc: 'Industry-proven standards' },
            { title: 'Innovation First', icon: '🚀', desc: 'Solving complex problems' },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-neutral-400">{item.desc}</p>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
}

