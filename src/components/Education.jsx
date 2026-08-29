import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';
import { GraduationCap, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const edu = education[0];

  return (
    <section id="education" className="relative py-20 lg:py-28 bg-black overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-white/[0.01] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
            Undergraduate foundation in Computer Science with focus on Artificial Intelligence and Machine Learning.
          </p>
        </motion.div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full rounded-2xl md:rounded-3xl bg-[#09090B] border border-[#27272A] overflow-hidden shadow-[0_-8px_20px_rgba(0,0,0,0.8)] group hover:border-[#52525B] transition-colors duration-500"
          >
            {/* Top highlight bar */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A876]/30 to-transparent" />

            <div className="p-6 sm:p-8 z-10 relative">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-[#18181B] border border-[#27272A] shrink-0 text-[#E8D2A6] group-hover:border-[#C9A876]/40 group-hover:bg-[#C9A876]/10 transition-all duration-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="inline-block px-2.5 py-0.5 rounded text-[9px] font-mono tracking-widest uppercase bg-[#18181B] border border-[#27272A] text-[#E8D2A6] mb-2 font-medium">
                      VIT
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

              {/* CGPA & Highlights */}
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

                  {/* CGPA Box */}
                  <div className="w-full sm:w-auto p-4 rounded-2xl bg-[#18181B] border border-[#27272A] flex flex-col items-center justify-center min-w-[140px] shrink-0 group-hover:border-[#C9A876]/40 transition-colors duration-300">
                    <div className="text-2xl sm:text-3xl font-display font-bold text-white mb-0.5 flex items-baseline">
                      <span>{edu.cgpa.split('/')[0].trim()}</span>
                      <span className="text-[#C9A876] text-sm ml-1 font-light">/ 10</span>
                    </div>
                    <div className="text-[10px] text-white/50 font-mono tracking-widest uppercase">
                      CGPA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
