import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { AICopilot } from './components/AICopilot';
import { NeuralBackground } from './components/NeuralBackground';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isDesktop, setIsDesktop] = useState(false);

  // Desktop mouse movement check for cursor radial glow
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Section active highlighting & reveal scroll animations
  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
    
    // Intersection Observer for Navbar Active State
    const activeObserverOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Triggers when section occupies middle-top of screen
      threshold: 0,
    };

    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, activeObserverOptions);

    sections.forEach((secId) => {
      const el = document.getElementById(secId);
      if (el) activeObserver.observe(el);
    });

    // Intersection Observer for Reveal Scroll Animations
    const revealObserverOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px', // Triggers slightly before element enters view
      threshold: 0.05,
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, stop observing
          revealObserver.unobserve(entry.target);
        }
      });
    }, revealObserverOptions);

    const observeNewElements = () => {
      const animatedElements = document.querySelectorAll('.reveal-on-scroll:not(.active)');
      animatedElements.forEach((el) => revealObserver.observe(el));
    };

    observeNewElements();

    const mutationObserver = new MutationObserver(() => {
      observeNewElements();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      activeObserver.disconnect();
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#08090c] text-slate-100 font-sans min-h-screen relative selection:bg-emerald-500/30 selection:text-white overflow-x-hidden">
      {/* Custom Trailing Ring Cursor */}
      <CustomCursor />

      {/* Dynamic Interactive Neural Synapse & Aurora Canvas Background */}
      <NeuralBackground />

      {/* Sticky desktop mouse radial glow highlight */}
      {isDesktop && (
        <div
          className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(650px at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.04) 0%, rgba(20, 184, 166, 0.015) 50%, transparent 80%)`,
          }}
        />
      )}

      {/* Navigation Headers */}
      <Navbar activeSection={activeSection} />

      {/* Page Sections Layout */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Floating AI Copilot Drawer */}
      <AICopilot />

      {/* Footer bar */}
      <Footer />
    </div>
  );
};

export default App;

