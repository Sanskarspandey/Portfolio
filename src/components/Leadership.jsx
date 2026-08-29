import React from 'react';
import { motion } from 'framer-motion';
import { leadership } from '../data/portfolioData';
import { Award, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Leadership() {
  const item = leadership[0];

  return (
    <section id="leadership" className="relative py-20 lg:py-28 bg-black overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

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
              Community & Responsibility
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight text-white mb-4">
            Leadership.
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Positions of responsibility, team management, and impactful student community engagement.
          </p>
        </motion.div>

        {/* Leadership Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group p-6 sm:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E8D2A6] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-white/95 tracking-tight">
                  {item.role}
                </h3>
              </div>

              <div className="w-fit text-[10px] font-mono text-[#E8D2A6] tracking-widest uppercase px-3 py-1 bg-white/5 rounded-full border border-white/10">
                VIT Chennai
              </div>
            </div>

            <h4 className="text-sm font-mono text-[#C9A876] mb-4 sm:ml-13">
              {item.organization}
            </h4>

            <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed mb-6 sm:ml-13">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 sm:ml-13 pt-4 border-t border-white/5">
              {item.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-[#18181B] border border-[#27272A] text-[10px] font-mono tracking-wider uppercase text-white/60"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
