import React from 'react';
import { Download } from 'lucide-react';
import { HeroVisual } from './HeroVisual';
import resumePdf from '../assets/resume/2362010_AdithyaJishaBiju.pdf';

export const Hero: React.FC = () => {
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

          {/* Heading - Name noticed first */}
          <div className="space-y-2">
            <span className="text-sm md:text-base font-mono tracking-widest text-text-secondary uppercase">
              Hi, I am
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05] font-sans">
              <span className="text-gradient">Adithya</span> <br />
              Jisha Biju
            </h1>
          </div>

          {/* Tagline / Subheading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-text-secondary leading-snug">
            Building <span className="text-white">intelligent software</span> that solves <br className="hidden md:inline" />
            real-world problems.
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed">
            I'm a Computer Science Engineering student specializing in AI/ML. I build practical software solutions across machine learning, computer vision, NLP, backend systems, and modern web technologies.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <a
              href={resumePdf}
              download="Adithya_Resume.pdf"
              className="px-6 py-3.5 bg-gradient-to-r from-accent-cyan via-blue-600 to-accent-violet text-black font-bold text-sm tracking-wide rounded-lg flex items-center gap-2 hover:opacity-90 transition-all shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] cursor-pointer group"
            >
              Download Resume
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
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
    </section>
  );
};
