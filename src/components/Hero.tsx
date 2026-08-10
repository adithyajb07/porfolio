import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { HeroVisual } from './HeroVisual';
import resumePdf from '../assets/resume/resume.pdf';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex items-center pt-24 overflow-hidden bg-grid-pattern"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505] pointer-events-none z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full filter blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-violet/5 rounded-full filter blur-[100px] pointer-events-none animate-pulse delay-500" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 w-full">
        {/* Left Text Column */}
        <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8 text-left animate-fade-up">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-8 bg-accent-cyan" />
            <span className="text-xs md:text-sm font-mono tracking-widest text-accent-cyan font-semibold uppercase">
              Computer Science Engineer • AI/ML • Software Development
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] font-sans">
            Building <span className="text-gradient">intelligent</span> <br />
            software that solves <br />
            real-world problems.
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed">
            I'm <strong className="text-white font-medium">Adithya Jisha Biju</strong>, a Computer Science Engineering student specializing in AI/ML. I build practical software solutions across machine learning, computer vision, NLP, backend systems, and modern web technologies.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3.5 bg-gradient-to-r from-accent-cyan via-blue-600 to-accent-violet text-black font-bold text-sm tracking-wide rounded-lg flex items-center gap-2 hover:opacity-90 transition-all shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] cursor-pointer group"
            >
              View Projects 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={resumePdf}
              download="Adithya_Resume.pdf"
              className="px-6 py-3.5 bg-bg-card hover:bg-bg-card-hover text-white border border-border-subtle hover:border-accent-cyan/40 font-semibold text-sm tracking-wide rounded-lg flex items-center gap-2 transition-all cursor-pointer group"
            >
              Download Resume
              <Download className="w-4 h-4 text-text-secondary group-hover:text-accent-cyan transition-colors" />
            </a>
            <button
              onClick={() => handleScrollTo('contact')}
              className="text-text-secondary hover:text-white font-medium text-sm flex items-center gap-1 transition-all pl-2 cursor-pointer group"
            >
              Let's Connect 
              <span className="text-accent-cyan group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Right Canvas Column */}
        <div className="lg:col-span-5 h-[400px] lg:h-[500px] w-full relative flex items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.03)] bg-gradient-to-br from-[rgba(255,255,255,0.01)] to-transparent backdrop-blur-3xl overflow-hidden shadow-2xl">
          {/* Overlay grid inside visual */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,240,255,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <HeroVisual />
          
          {/* Faint Center Glow */}
          <div className="absolute w-48 h-48 rounded-full bg-accent-cyan/5 filter blur-3xl pointer-events-none" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => handleScrollTo('about')}>
        <span className="text-[10px] font-mono tracking-widest text-text-secondary uppercase">
          Scroll to explore
        </span>
        <div className="w-[1.5px] h-10 bg-border-subtle relative rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent-cyan rounded-full animate-[scroll-down_1.5s_infinite_ease-in-out]" />
        </div>
      </div>

      {/* Tailwind scroll-down animation injection */}
      <style>{`
        @keyframes scroll-down {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
      `}</style>
    </section>
  );
};
