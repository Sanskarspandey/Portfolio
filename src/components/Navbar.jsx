import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/portfolioData';
import { Menu, X, Code, Terminal, Sparkles } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 md:top-5 w-full z-[100] transition-all duration-300 pointer-events-none px-4 sm:px-6`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <div className="pointer-events-auto flex items-center gap-2.5">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 hover:border-[#C9A876]/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E8D2A6] group-hover:scale-105 group-hover:bg-[#C9A876]/15 transition-all duration-300">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-mono text-sm font-semibold tracking-tight text-white group-hover:text-[#E8D2A6] transition-colors">
                Sanskar<span className="text-[#C9A876]">.dev</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav Pills */}
          <div className="hidden lg:flex pointer-events-auto items-center justify-center p-1.5 rounded-full bg-black/50 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.08)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-[13px] font-medium tracking-tight transition-all duration-300 ${
                    isActive ? 'text-white font-semibold' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white/10 border border-white/15 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.name}
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-[#E8D2A6] shadow-[0_0_6px_rgba(201,168,118,0.9)]" />
                    )}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden pointer-events-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-20 z-[99] lg:hidden p-5 rounded-3xl bg-[#09090B]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-white/10 text-[#E8D2A6] border border-[#C9A876]/30'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E8D2A6]"></span>}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
