import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/portfolioData';
import { Trophy, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  const item = achievements[0];

  return (
    <section id="achievements" className="relative py-20 lg:py-28 bg-black overflow-hidden">
      {/* Background ambient accent */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#C9A876]/[0.03] blur-[140px] rounded-full pointer-events-none" />

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
              Recognitions & Awards
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight text-white mb-4">
            Achievements.
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Competitive hackathons, algorithmic excellence, and recognized real-world solutions.
          </p>
        </motion.div>

        {/* Achievement Highlight Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative p-7 sm:p-10 rounded-[2rem] bg-[#09090B] border border-[#27272A] overflow-hidden hover:border-[#52525B] shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-500"
          >
            {/* Ambient Watermark Trophy Icon in background */}
            <div className="absolute top-0 right-0 p-8 sm:p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none transform group-hover:scale-105 text-[#E8D2A6]">
              <Trophy className="w-40 h-40" />
            </div>

            <div className="relative z-10 max-w-2xl">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E8D2A6] shrink-0 group-hover:bg-[#C9A876]/15 group-hover:border-[#C9A876]/30 transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[#E8D2A6] font-mono text-xs tracking-widest uppercase font-semibold">
                    {item.host}
                  </h4>
                  <span className="text-white/40 font-mono text-[10px] tracking-widest uppercase">
                    Hackathon Milestone
                  </span>
                </div>
              </div>

              {/* Title & Prize */}
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight mb-3">
                {item.title}
              </h3>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Prize: {item.prize}
              </div>

              {/* Description */}
              <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed mb-8">
                {item.description}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2.5">
                {item.badges.map((badge, bIdx) => (
                  <div
                    key={bIdx}
                    className="px-3.5 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A] text-white/80 font-mono text-[10px] uppercase tracking-wider flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8D2A6]" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
