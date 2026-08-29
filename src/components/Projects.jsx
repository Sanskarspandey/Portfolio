import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentProject = projects[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-black overflow-hidden">
      {/* Background dot grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#E8D2A6]" />
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40">
              Selected Works
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight text-white mb-4 leading-tight">
            Projects.
          </h2>
          <p className="text-white/50 text-sm md:text-base font-light leading-relaxed max-w-xl">
            Real-world AI systems, multi-agent frameworks, and scalable full-stack applications with measurable impact.
          </p>
        </motion.div>
      </div>

      {/* Main Project Carousel Container */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="relative min-h-[500px] md:min-h-[460px] overflow-hidden rounded-3xl">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full bg-[#09090B] border border-white/[0.08] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.85)] flex flex-col"
            >
              {/* Subtle top border sheen */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A876]/30 to-transparent z-10" />

              <div className="grid md:grid-cols-12 h-full">
                {/* Left Side: Project details */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/[0.06]">
                  <div>
                    {/* Header tags */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#E8D2A6]"></span>
                        <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/40">
                          Project {currentProject.number}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#E8D2A6] bg-[#C9A876]/10 border border-[#C9A876]/20 px-2.5 py-1 rounded-md">
                        {currentProject.category}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white tracking-tight mb-2">
                      {currentProject.title}
                    </h3>
                    <p className="text-[#C9A876] text-xs font-mono tracking-wide mb-4">
                      {currentProject.subtitle}
                    </p>

                    <p className="text-white/60 text-sm font-light leading-relaxed mb-5">
                      {currentProject.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 mb-6">
                      {currentProject.bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start text-xs sm:text-sm text-white/70 leading-relaxed gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#E8D2A6] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer tech tags & GitHub action */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5 max-w-md">
                      {currentProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono tracking-wider uppercase text-white/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/30 text-xs font-mono transition-all duration-300"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>

                {/* Right Side: Key Metrics Showcase */}
                <div className="md:col-span-5 p-6 sm:p-8 bg-[#0C0C0F]/50 flex flex-col justify-between">
                  <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/30 mb-4">
                    Impact & Metrics
                  </p>

                  <div className="flex flex-col gap-3 my-auto">
                    {currentProject.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#C9A876]/30 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden"
                      >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-1">
                          {metric.value}
                        </div>
                        <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-[10px] font-mono text-white/30 text-right mt-4">
                    Verified Architecture
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mt-6">
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'w-7 h-[3px] bg-[#E8D2A6]'
                    : 'w-2 h-[3px] bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
            <span className="text-[9px] font-mono tracking-[0.25em] text-white/30 ml-2 uppercase">
              0{currentIndex + 1} / 0{projects.length}
            </span>
          </div>

          {/* Prev/Next Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevProject}
              aria-label="Previous project"
              className="w-10 h-10 rounded-full bg-[#121215] border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-[#18181C] transition-all active:scale-95 shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextProject}
              aria-label="Next project"
              className="w-10 h-10 rounded-full bg-[#121215] border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-[#18181C] transition-all active:scale-95 shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="text-center text-[9px] font-mono tracking-[0.25em] uppercase text-white/20 mt-4">
          ← → arrow keys to navigate
        </p>
      </div>
    </section>
  );
}
