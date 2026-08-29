import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';
import { GraduationCap, Calendar, Sparkles, CheckCircle2, School, BookOpen } from 'lucide-react';

const iconList = [School, BookOpen, GraduationCap];

export default function Education() {
  return (
    <section id="education" className="relative py-20 lg:py-28 bg-black overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-white/[0.01] blur-[120px] rounded-full pointer-events-none" />

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
              Academic Background
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight text-white mb-4">
            Education.
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            My academic foundation spanning secondary school, higher secondary science, and specialized AI & ML engineering.
          </p>
        </motion.div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {education.map((edu, index) => {
            const Icon = iconList[index] || GraduationCap;
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative w-full rounded-2xl md:rounded-3xl bg-[#09090B] border border-[#27272A] overflow-hidden shadow-[0_-8px_20px_rgba(0,0,0,0.8)] group hover:border-[#52525B] transition-colors duration-500"
              >
                {/* Top highlight bar */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A876]/30 to-transparent" />

                <div className="p-6 sm:p-8 z-10 relative">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-[#18181B] border border-[#27272A] shrink-0 text-[#E8D2A6] group-hover:border-[#C9A876]/40 group-hover:bg-[#C9A876]/10 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="inline-block px-2.5 py-0.5 rounded text-[9px] font-mono tracking-widest uppercase bg-[#18181B] border border-[#27272A] text-[#E8D2A6] mb-2 font-medium">
                          {edu.shortCode}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-display font-semibold text-white/95 tracking-tight mb-1">
                          {edu.institution}
                        </h3>
                        <div className="text-white/60 font-mono text-xs tracking-wide">
                          {edu.degree}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-mono text-white/50 bg-[#18181B] border border-[#27272A] px-3.5 py-1.5 rounded-lg h-fit shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-[#E8D2A6]" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Score & Highlights */}
                  <div className="sm:pl-16">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-4 border-t border-[#27272A]">
                      <ul className="space-y-2.5 max-w-lg">
                        {edu.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#E8D2A6] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Score Box */}
                      <div className="w-full sm:w-auto p-4 rounded-2xl bg-[#18181B] border border-[#27272A] flex flex-col items-center justify-center min-w-[140px] shrink-0 group-hover:border-[#C9A876]/40 transition-colors duration-300">
                        <div className="text-2xl sm:text-3xl font-display font-bold text-white mb-0.5 flex items-baseline">
                          <span>{edu.score.split('/')[0].trim()}</span>
                          {edu.score.includes('/') && (
                            <span className="text-[#C9A876] text-sm ml-1 font-light">/ 10</span>
                          )}
                        </div>
                        <div className="text-[10px] text-white/50 font-mono tracking-widest uppercase">
                          {edu.scoreLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
