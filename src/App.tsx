import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

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

    const animatedElements = document.querySelectorAll('.reveal-on-scroll');
    animatedElements.forEach((el) => revealObserver.observe(el));

    return () => {
      activeObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-bg-dark text-white font-sans min-h-screen relative selection:bg-accent-cyan/35 selection:text-white">
      {/* Sticky desktop mouse radial glow highlight */}
      {isDesktop && (
        <div
          className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(550px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.02), transparent 80%)`,
          }}
        />
      )}

      {/* Global animated ambient background dust details */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.007)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-0" />

      {/* Navigation Headers */}
      <Navbar activeSection={activeSection} />

      {/* Page Sections Layout */}
      <main className="relative z-10">
        <Hero />
        <QuickStats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Footer bar */}
      <Footer />
    </div>
  );
};

export default App;
