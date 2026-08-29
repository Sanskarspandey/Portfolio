import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import {
  ArrowRight,
  Mail,
  FileDown,
  ChevronDown,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Bot,
  Code2
} from 'lucide-react';

export default function Hero() {
  const roles = personalInfo.typewriterRoles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  const resumeUrl = `${import.meta.env.BASE_URL}resume/Sanskar_Pandey_Resume.pdf`;

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(110);
        } else {
          setTypingSpeed(75);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(90);
        } else {
          setTypingSpeed(40);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#08080A] overflow-hidden w-full max-w-full"
    >
      {/* Radial background gradient & grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 50%, black 20%, transparent 100%)'
        }}
      />

      {/* Subtle warm bronze glow at center */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] max-w-full h-[320px] bg-[#C9A876]/[0.06] blur-[130px] rounded-full pointer-events-none" />

      {/* Decorative corner accent brackets */}
      <div className="hidden sm:block absolute top-24 left-8 w-6 h-6 border-t border-l border-white/10 pointer-events-none" />
      <div className="hidden sm:block absolute top-24 right-8 w-6 h-6 border-t border-r border-white/10 pointer-events-none" />
      <div className="hidden sm:block absolute bottom-12 left-8 w-6 h-6 border-b border-l border-white/10 pointer-events-none" />
      <div className="hidden sm:block absolute bottom-12 right-8 w-6 h-6 border-b border-r border-white/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10 my-auto">
        {/* Left Column: Information & Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full min-w-0"
        >
          {/* Top category badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white/50 text-[10.5px] sm:text-[11px] font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-6 backdrop-blur-md max-w-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8D2A6] animate-pulse shrink-0"></span>
            <span className="truncate">AI/ML ENGINEER · FULL STACK DEVELOPER · VIT CHENNAI</span>
          </motion.div>

          {/* Main Name Heading */}
          <h1 className="font-display font-extrabold tracking-[-0.04em] text-4xl sm:text-6xl md:text-7xl lg:text-[74px] leading-[1.02] mb-4 select-none max-w-full">
            <span
              style={{
                background: 'linear-gradient(175deg, #FFFFFF 0%, #EFEBE4 60%, rgba(232,210,166,0.7) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {personalInfo.name}
            </span>
          </h1>

          {/* Animated Typewriter Headline without "Building" */}
          <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start gap-2 text-lg sm:text-2xl lg:text-3xl font-normal text-[#E8D2A6] mb-6 font-sans drop-shadow-[0_0_25px_rgba(201,168,118,0.3)] max-w-full">
            <span className="font-medium tracking-tight">
              {currentText}
            </span>
            <span className="inline-block w-0.5 h-5 sm:h-6 bg-[#E8D2A6] animate-pulse align-middle shrink-0"></span>
          </div>

          {/* Bio snippet */}
          <p className="max-w-xl text-white/60 text-sm sm:text-base font-light leading-relaxed mb-8">
            Specializing in multi-agent AI systems, Agentic RAG, reinforcement learning architectures, and production full-stack platforms. Built with engineering rigor and real-world impact.
          </p>

          {/* Call to Actions with Download Resume Button */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 w-full max-w-full">
            <button
              onClick={() => scrollTo('projects')}
              className="group relative px-6 sm:px-7 py-3 rounded-full bg-[#F2EFE9] text-[#0A0A0C] text-[13px] sm:text-[13.5px] font-semibold flex items-center gap-2.5 overflow-hidden shadow-[0_0_40px_rgba(201,168,118,0.2)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(201,168,118,0.35)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white via-[#F2EFE9] to-[#E8D2A6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Sanskar_Pandey_Resume.pdf"
              className="group relative px-6 sm:px-7 py-3 rounded-full bg-[#C9A876]/15 text-[#E8D2A6] border border-[#C9A876]/40 text-[13px] sm:text-[13.5px] font-semibold flex items-center gap-2.5 shadow-[0_0_25px_rgba(201,168,118,0.15)] hover:bg-[#C9A876]/25 hover:border-[#C9A876]/60 transition-all duration-300 active:scale-[0.98]"
            >
              <FileDown className="w-4 h-4 text-[#E8D2A6]" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => scrollTo('contact')}
              className="px-5 sm:px-6 py-3 rounded-full text-[13px] sm:text-[13.5px] font-medium text-white/70 border border-white/15 bg-white/[0.02] backdrop-blur-md transition-all duration-300 hover:text-[#E8D2A6] hover:bg-[#C9A876]/[0.08] hover:border-[#C9A876]/40 active:scale-[0.98]"
            >
              Get in Touch
            </button>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: 3D Isometric Developer Stack Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex items-center justify-center relative min-h-[340px] sm:min-h-[390px] w-full"
        >
          {/* Isometric Perspective Container */}
          <div className="relative w-full max-w-[310px] sm:max-w-[350px] h-[340px] sm:h-[380px] perspective-[1200px]">
            <motion.div
              animate={{
                rotateY: [-3, 3, -3],
                rotateX: [5, -2, 5],
                y: [0, -6, 0]
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative w-full h-full rounded-3xl p-5 bg-[#0A0A0C]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] flex flex-col justify-between overflow-hidden group"
            >
              {/* Corner ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A876]/10 blur-[50px] pointer-events-none"></div>

              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                </div>
                <div className="text-[10px] font-mono text-white/40 tracking-wider">
                  sanskar@agentic-node:~
                </div>
                <Sparkles className="w-3.5 h-3.5 text-[#E8D2A6]/70" />
              </div>

              {/* Central Stack Matrix */}
              <div className="grid grid-cols-2 gap-2.5 my-auto py-2">
                {[
                  { name: "LangGraph", type: "Multi-Agent", highlight: true },
                  { name: "Python", type: "AI/ML Core", highlight: false },
                  { name: "React", type: "Frontend", highlight: false },
                  { name: "Ollama", type: "Local LLMs", highlight: true },
                  { name: "FAISS", type: "Vector RAG", highlight: false },
                  { name: "Node / Express", type: "APIs & Services", highlight: false }
                ].map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className={`p-2.5 rounded-xl border flex flex-col justify-center transition-colors cursor-default ${
                      item.highlight
                        ? 'bg-[#C9A876]/[0.08] border-[#C9A876]/35 text-[#E8D2A6]'
                        : 'bg-white/[0.02] border-white/10 text-white/70 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-mono font-semibold tracking-tight">{item.name}</span>
                    <span className="text-[9px] font-mono uppercase text-white/40 tracking-widest mt-0.5">{item.type}</span>
                  </motion.div>
                ))}
              </div>

              {/* Status footer inside card */}
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-[10px] font-mono text-white/50">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-white/80 font-medium">Model: Qwen 2.5 (Local)</span>
                </div>
                <span className="text-white/35 uppercase">State: Active</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={() => scrollTo('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer hover:opacity-100 transition-opacity"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-mono">Scroll</span>
        <div className="w-px h-7 bg-gradient-to-b from-[#C9A876]/50 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
