import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';
import { Briefcase, ChevronRight, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 lg:py-28 bg-black overflow-hidden">
      {/* Subtle backdrop glow */}
      <div className="absolute top-1/3 left-0 w-96 max-w-full h-96 bg-white/[0.015] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#E8D2A6]" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40">
              Career & Research
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight text-white mb-4">
            Experience.
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            A timeline of my professional journey, building autonomous reinforcement learning systems and intelligent algorithms.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative flex flex-col pb-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative w-full rounded-2xl md:rounded-3xl bg-[#09090B] border border-[#27272A] overflow-hidden shadow-[0_-8px_20px_rgba(0,0,0,0.8)] group hover:border-[#52525B] transition-colors duration-500"
              >
                {/* Top ambient highlight line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                <div className="relative p-6 sm:p-8 z-10">
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-[#18181B] border border-[#27272A] shrink-0 group-hover:border-[#C9A876]/40 group-hover:bg-[#C9A876]/10 transition-all duration-300 text-[#E8D2A6]">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="inline-block px-2.5 py-0.5 rounded text-[9px] font-mono tracking-widest uppercase bg-[#18181B] border border-[#27272A] text-[#E8D2A6] mb-2 font-medium">
                          {exp.type}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-display font-semibold text-white/95 tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="text-white/60 font-mono text-xs tracking-wide uppercase mt-1">
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-mono text-white/50 bg-[#18181B] border border-[#27272A] px-3.5 py-1.5 rounded-lg h-fit shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet points from resume */}
                  <div className="sm:pl-16">
                    <ul className="space-y-3 mb-6">
                      {exp.bulletPoints.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start text-white/70 text-sm sm:text-[14.5px] leading-relaxed group-hover:text-white/85 transition-colors"
                        >
                          <ChevronRight className="w-4 h-4 text-[#C9A876]/70 shrink-0 mt-1 mr-2" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack badges */}
                    <div className="pt-5 border-t border-[#27272A] flex flex-wrap items-center gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-[#18181B] border border-[#27272A] text-[10px] font-mono tracking-wider uppercase text-white/60 hover:border-[#52525B] hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
