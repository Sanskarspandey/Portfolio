import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import {
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Code2
} from 'lucide-react';

export default function Projects() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-20"
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
          <p className="text-white/50 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            Real-world AI systems, multi-agent frameworks, and scalable full-stack applications with measurable impact.
          </p>
        </motion.div>

        {/* All Projects Rendered Vertically in a Stacked List */}
        <div className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-14">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="w-full bg-[#09090B] border border-white/[0.08] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col relative group hover:border-[#52525B] transition-all duration-500"
            >
              {/* Subtle top border sheen */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A876]/30 to-transparent z-10" />

              <div className="grid grid-cols-1 md:grid-cols-12 h-full">
                {/* Left Side: Project details */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/[0.06]">
                  <div>
                    {/* Header tags */}
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#E8D2A6]"></span>
                        <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/40 font-medium">
                          Project {project.number}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#E8D2A6] bg-[#C9A876]/10 border border-[#C9A876]/20 px-2.5 py-1 rounded-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[#C9A876] text-xs font-mono tracking-wide mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-white/60 text-sm font-light leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 mb-6">
                      {project.bulletPoints.map((bullet, bIdx) => (
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
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono tracking-wider uppercase text-white/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/30 text-xs font-mono transition-all duration-300 ml-auto sm:ml-0"
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
                    {project.metrics.map((metric, mIdx) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
