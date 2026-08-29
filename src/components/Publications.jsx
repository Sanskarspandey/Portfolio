import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { publications } from '../data/portfolioData';
import { FileText, RotateCcw, Sparkles, CheckCircle2, Award } from 'lucide-react';

export default function Publications() {
  const [isFlipped, setIsFlipped] = useState(false);

  const pub = publications[0];

  return (
    <section id="publications" className="relative py-20 lg:py-28 bg-black overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-white/[0.015] blur-[150px] rounded-full pointer-events-none" />

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
              Research & Innovation
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight text-white mb-4">
            Research.
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Deep learning research advancing graph attention networks, spatio-temporal modeling, and robust intrusion detection.
          </p>
        </motion.div>
      </div>

      {/* 3D Flip Card Showcase */}
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pub-card-scene w-full max-w-[620px] h-[480px] sm:h-[420px] cursor-pointer select-none"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={`pub-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
            {/* FRONT FACE */}
            <div className="pub-card-face pub-card-front bg-[#09090B] border border-[#27272A] p-6 sm:p-8 flex flex-col justify-between shadow-[0_-8px_20px_rgba(0,0,0,0.8)] group hover:border-[#52525B] transition-colors">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[#E8D2A6] shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest rounded bg-[#18181B] text-[#E8D2A6] border border-[#27272A]">
                    {pub.type}
                  </span>
                  <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase">
                    Status: {pub.status}
                  </span>
                </div>
              </div>

              {/* Title & Core Highlights */}
              <div className="my-auto py-3">
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-white/95 leading-snug tracking-tight mb-3">
                  {pub.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed mb-4 line-clamp-3">
                  {pub.summary}
                </p>

                {/* Key Metrics Chips */}
                <div className="flex flex-wrap gap-2.5">
                  {pub.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 flex items-center gap-2"
                    >
                      <span className="text-sm font-display font-bold text-white">{m.value}</span>
                      <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flip action prompt */}
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#E8D2A6]">
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="tracking-wider uppercase text-[10px]">Click or Tap to reveal details</span>
                </div>
                <div className="text-[10px] font-mono text-white/30 uppercase">01 / 01</div>
              </div>

              {/* Large Watermark Number */}
              <div className="absolute bottom-2 right-4 pub-num select-none">01</div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
            </div>

            {/* BACK FACE */}
            <div className="pub-card-face pub-card-back bg-[#0C0C0F] border border-[#3F3F46] p-6 sm:p-8 flex flex-col justify-between shadow-[0_-8px_20px_rgba(0,0,0,0.8)]">
              {/* Header */}
              <div className="flex items-start justify-between mb-2">
                <span className="px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest rounded bg-white/5 text-[#E8D2A6] border border-[#3F3F46]">
                  RESEARCH METHODOLOGY
                </span>
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-[#3F3F46] flex items-center justify-center text-white/50 hover:text-white transition-colors">
                  <RotateCcw className="w-4 h-4" />
                </div>
              </div>

              {/* Research Details */}
              <div className="my-auto py-2 overflow-y-auto hide-scrollbar space-y-2.5">
                {pub.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-white/75 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E8D2A6] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Technologies footer */}
              <div className="pt-4 border-t border-[#27272A]">
                <div className="flex flex-wrap gap-1.5">
                  {pub.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[9px] font-mono tracking-wider uppercase font-medium text-white/50 bg-[#18181B] border border-[#27272A] rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Large Watermark Number */}
              <div className="absolute bottom-2 right-4 pub-num select-none">01</div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
