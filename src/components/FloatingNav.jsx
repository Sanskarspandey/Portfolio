import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  User,
  Briefcase,
  Layers,
  FileText,
  Terminal,
  GraduationCap,
  Award,
  Mail
} from 'lucide-react';

const dockItems = [
  { id: 'hero', name: 'Home', icon: Home },
  { id: 'about', name: 'About', icon: User },
  { id: 'experience', name: 'Experience', icon: Briefcase },
  { id: 'projects', name: 'Projects', icon: Layers },
  { id: 'publications', name: 'Research', icon: FileText },
  { id: 'skills', name: 'Arsenal', icon: Terminal },
  { id: 'education', name: 'Education', icon: GraduationCap },
  { id: 'leadership', name: 'Leadership', icon: Award },
  { id: 'contact', name: 'Contact', icon: Mail }
];

export default function FloatingNav({ activeSection }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden xl:flex fixed right-4 top-0 h-full z-[90] pointer-events-auto items-center justify-end">
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center justify-center gap-2 p-2 rounded-[26px] bg-black/50 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.08)]"
      >
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isHovered = hoveredItem === item.id;

          return (
            <div
              key={item.id}
              className="relative flex items-center justify-end"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Tooltip */}
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, x: 8, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-[calc(100%+12px)] text-[10px] font-mono uppercase tracking-[0.18em] text-white whitespace-nowrap pointer-events-none bg-[#18181B]/95 backdrop-blur-xl px-2.5 py-1.5 rounded-lg border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.6)] z-50"
                >
                  {item.name}
                </motion.span>
              )}

              {/* Icon Button */}
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`relative flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-white/15 text-[#E8D2A6] border border-white/15 shadow-[0_0_15px_rgba(201,168,118,0.2)]'
                    : 'text-white/40 hover:text-white/90 hover:bg-white/5'
                }`}
                aria-label={`Scroll to ${item.name}`}
              >
                <Icon className="w-4 h-4" />
                {isActive && (
                  <span className="absolute -left-1 w-1 h-2 rounded-full bg-[#E8D2A6] shadow-[0_0_6px_rgba(201,168,118,0.8)]" />
                )}
              </a>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
