import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import {
  GraduationCap,
  Briefcase,
  Code2,
  FileText,
  Mail,
  Sparkles,
  FileDown
} from 'lucide-react';

const iconMap = {
  GraduationCap,
  Briefcase,
  Code2,
  FileText
};

export default function About() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume/Sanskar_Pandey_Resume.pdf`;

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#08080A] overflow-hidden w-full max-w-full">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 right-1/4 w-[400px] max-w-full h-[400px] bg-white/[0.015] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 lg:mb-16 max-w-full"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#E8D2A6]" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40">
              About Sanskar
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-display font-semibold tracking-tight text-white leading-[1.15] max-w-full break-words">
            Crafting the Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40">
              One Line at a Time
            </span>
          </h2>
        </motion.div>

        {/* Narrative & Profile Overview: Clean Flex Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mb-16 lg:mb-20 w-full max-w-full">
          {/* Visual Avatar / Brand Card (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[310px] sm:max-w-[330px] shrink-0 mx-auto lg:mx-0"
          >
            <div className="relative w-full aspect-square group">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-[#C9A876]/15 blur-[50px] rounded-full group-hover:bg-[#C9A876]/25 transition-colors duration-500 pointer-events-none" />

              {/* Monogram / Terminal Badge Canvas */}
              <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden border border-white/10 bg-[#0A0A0C] shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-500 group-hover:scale-[1.02]">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block animate-pulse" />
                    <span className="text-xs font-mono text-white/70 font-semibold">Sanskar.dev</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#E8D2A6] uppercase tracking-widest bg-[#C9A876]/10 px-2 py-0.5 rounded border border-[#C9A876]/20">
                    B.Tech '27
                  </span>
                </div>

                {/* Central Monogram */}
                <div className="my-auto flex flex-col items-center justify-center text-center py-2">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-tr from-[#18181B] via-white/5 to-[#C9A876]/20 border border-white/15 flex items-center justify-center shadow-inner mb-3">
                    <span className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-wider">
                      SP
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-base sm:text-lg text-white">Sanskar Pandey</h3>
                  <p className="text-xs font-mono text-white/40 tracking-wide mt-0.5">
                    VIT Chennai · AI & ML
                  </p>
                </div>

                {/* Bottom badge */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                  <span>Mumbai, India</span>
                  <span className="text-[#E8D2A6]">AI Engineer</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Narrative Story (Right Column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full min-w-0 flex-1 flex flex-col justify-center text-left"
          >
            <div className="space-y-4 font-sans max-w-full">
              {personalInfo.fullBio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm sm:text-base lg:text-[16.5px] text-white/70 leading-relaxed font-light break-words overflow-wrap-normal"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Contact Chips & Resume Download */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-6 sm:mt-8 max-w-full">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Sanskar_Pandey_Resume.pdf"
                className="group px-3.5 sm:px-4 py-2 rounded-full bg-[#C9A876]/15 border border-[#C9A876]/40 text-[#E8D2A6] text-xs font-medium flex items-center gap-2 transition-all duration-300 hover:bg-[#C9A876]/25 hover:border-[#C9A876]/60 shadow-[0_0_15px_rgba(201,168,118,0.15)]"
              >
                <FileDown className="w-3.5 h-3.5 text-[#E8D2A6] shrink-0" />
                <span className="font-mono tracking-wide">Download CV</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="group px-3.5 sm:px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-white text-xs font-medium flex items-center gap-2 transition-all duration-300 hover:border-white/40 hover:bg-white/10 max-w-full truncate"
              >
                <Mail className="w-3.5 h-3.5 text-[#E8D2A6] shrink-0" />
                <span className="font-mono tracking-wide truncate">{personalInfo.email}</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-3.5 sm:px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-white text-xs font-medium flex items-center gap-2 transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#E8D2A6] shrink-0" />
                <span className="font-mono tracking-wide">GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-3.5 sm:px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-white text-xs font-medium flex items-center gap-2 transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#E8D2A6] shrink-0" />
                <span className="font-mono tracking-wide">LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* 4 Stat / Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-full">
          {personalInfo.stats.map((stat, idx) => {
            const Icon = iconMap[stat.icon] || Code2;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full w-full"
              >
                <div className="h-full min-h-[105px] p-4 sm:p-5 rounded-2xl bg-[#0A0A0C] border border-white/5 relative overflow-hidden group hover:border-[#C9A876]/30 transition-all duration-500 flex items-center justify-between hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(201,168,118,0.06)]">
                  {/* Subtle hover backlight */}
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-24 h-24 bg-[#C9A876]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Icon */}
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 group-hover:bg-[#C9A876]/15 group-hover:border-[#C9A876]/30 group-hover:scale-105 transition-all duration-500 shrink-0 text-[#E8D2A6]">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Label & Value */}
                  <div className="relative z-10 flex flex-col items-end text-right min-w-0">
                    <div className="text-2xl sm:text-3xl font-display font-bold text-white mb-0.5 tracking-tight flex items-baseline justify-end">
                      <span>{stat.value}</span>
                      <span className="text-[#C9A876] text-sm sm:text-base ml-0.5 font-light">
                        {stat.suffix}
                      </span>
                    </div>
                    <div className="text-[10px] text-white/40 font-mono tracking-widest uppercase group-hover:text-white/70 transition-colors duration-500 truncate">
                      {stat.label}
                    </div>
                  </div>

                  {/* Bottom animated border stripe */}
                  <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-l from-[#C9A876]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-full group-hover:translate-x-0" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
