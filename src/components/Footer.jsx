import React from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Terminal, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] border-t border-white/[0.06] pt-14 pb-10 text-white/70 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-white/[0.015] blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand & Bio */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E8D2A6]">
                  <Terminal className="w-4 h-4" />
                </div>
                <span className="font-mono text-lg font-bold tracking-tight text-white">
                  Sanskar<span className="text-[#C9A876]">.dev</span>
                </span>
              </div>
              <p className="text-sm font-light text-white/50 leading-relaxed max-w-sm mb-4">
                {personalInfo.name} — {personalInfo.title}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400/90 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Available for internships & AI roles
              </div>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/50 hover:text-[#E8D2A6] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 mb-4">
                Connect
              </h4>
              <div className="flex items-center gap-3 mb-6">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-white/40 hover:text-[#E8D2A6] transition-colors group cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Copyright & Signoff */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>
          <div>
            Designed & Engineered with React + Tailwind + Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
