import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import {
  Terminal,
  Code2,
  Cpu,
  GitBranch,
  Sparkles,
  Bot,
  Server,
  Database,
  Share2,
  Network,
  Binary,
  BarChart3,
  Search,
  Zap,
  MessageSquareCode,
  Layers,
  Box,
  Cloud,
  Sliders,
  Activity,
  Flame,
  Globe,
  Palette,
  GitCommit,
  Users,
  Coffee,
  TerminalSquare,
  FileCode
} from 'lucide-react';

const iconMap = {
  Code2,
  FileCode,
  Coffee,
  Terminal,
  TerminalSquare,
  Cpu,
  GitBranch,
  Sparkles,
  Users,
  Bot,
  Server,
  Database,
  Share2,
  Network,
  Binary,
  BarChart3,
  Search,
  Zap,
  MessageSquareCode,
  Layers,
  Box,
  Cloud,
  Sliders,
  Activity,
  Flame,
  Globe,
  Palette,
  GitCommit,
  Github: GithubIcon
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0].id);

  return (
    <section id="skills" className="relative py-20 lg:py-28 bg-black overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-10 w-96 max-w-full h-96 bg-white/[0.01] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40">
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight text-white mb-4">
            My Tech Arsenal.
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Core programming languages, agentic frameworks, AI engineering tools, and scalable web architectures.
          </p>
        </motion.div>

        {/* Terminal Category Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10">
          {skillCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl font-mono text-xs transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                  isActive
                    ? 'bg-[#18181B] text-[#E8D2A6] border border-[#C9A876]/40 shadow-[0_0_20px_rgba(201,168,118,0.15)] font-semibold'
                    : 'bg-[#0A0A0C] text-white/50 border border-white/5 hover:text-white hover:border-white/15'
                }`}
              >
                <span className="text-[#33B1FF]">$</span>
                <span>{cat.command}</span>
              </button>
            );
          })}
        </div>

        {/* Terminal Window Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => {
            const isHighlighted = selectedCategory === category.id;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                className="h-full"
              >
                <div
                  className={`w-full h-full rounded-2xl overflow-hidden bg-[#0A0A0C] border font-mono flex flex-col transition-all duration-500 hover:-translate-y-1 ${
                    isHighlighted
                      ? 'border-[#C9A876]/40 shadow-[0_8px_30px_rgba(201,168,118,0.1)]'
                      : 'border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:border-white/20'
                  }`}
                >
                  {/* Terminal Header */}
                  <div className="bg-[#121215] border-b border-white/5 px-4 py-3 flex items-center justify-between shrink-0">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                    </div>
                    <div className="text-[10px] text-white/40 tracking-widest uppercase font-medium">
                      {category.name}
                    </div>
                    <div className="w-6" />
                  </div>

                  {/* Terminal Body */}
                  <div className="p-4 sm:p-5 text-xs text-gray-300 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Command Prompt line */}
                      <div className="flex items-center gap-2 mb-4 font-mono text-[11px]">
                        <span className="text-[#33B1FF]">~</span>
                        <span className="text-white/40">$</span>
                        <span className="text-white/90 font-medium">{category.command}</span>
                      </div>

                      {/* Skills Grid */}
                      <div className="grid grid-cols-2 gap-x-2 gap-y-2.5 mb-6">
                        {category.skills.map((skill, sIdx) => {
                          const IconComponent = iconMap[skill.icon] || Code2;
                          return (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, x: -6 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: sIdx * 0.04 }}
                              className={`flex items-center gap-2 p-1.5 rounded-lg transition-all ${
                                skill.highlight
                                  ? 'bg-[#C9A876]/[0.08] text-[#E8D2A6] font-semibold border border-[#C9A876]/25'
                                  : 'hover:bg-white/5 text-white/75 hover:text-white'
                              }`}
                            >
                              <IconComponent className="w-3.5 h-3.5 text-[#E8D2A6] shrink-0" />
                              <span className="truncate text-[11.5px]">{skill.name}</span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Blinking prompt line */}
                    <div className="flex items-center gap-2 pt-2 border-t border-white/5 text-[11px] font-mono text-white/40">
                      <span className="text-[#33B1FF]">~</span>
                      <span>$</span>
                      <span className="w-1.5 h-3 bg-white/70 inline-block animate-pulse align-middle" />
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
