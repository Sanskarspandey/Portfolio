import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import FloatingNav from './components/FloatingNav';
import BackgroundCanvas from './components/BackgroundCanvas';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Education from './components/Education';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'experience',
      'projects',
      'publications',
      'achievements',
      'skills',
      'education',
      'leadership',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#08080A] text-white selection:bg-[#C9A876]/30 selection:text-[#E8D2A6] min-h-screen">
      {/* Initial Loading Screen */}
      <Loader onFinish={() => setLoading(false)} />

      {/* Atmospheric Background Layer */}
      <BackgroundCanvas />

      {/* Navigation Bars */}
      <Navbar activeSection={activeSection} />
      <FloatingNav activeSection={activeSection} />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Achievements />
        <Skills />
        <Education />
        <Leadership />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
