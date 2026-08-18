import React from 'react';
import { Download, Sparkles } from 'lucide-react';
import { KineticText } from './KineticText';
import resumePdf from '../assets/resume/2362010_AdithyaJishaBiju.pdf';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-transparent border-b border-emerald-500/10"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-20 w-full">
        {/* Main Text Container */}
        <div className="flex flex-col space-y-6 md:space-y-8 text-left animate-fade-up">
          
          {/* Discipline Role Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/25 text-xs font-mono tracking-widest text-emerald-400 font-bold uppercase w-fit shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Computer Science & AI/ML Engineer
          </div>

          {/* Name Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] font-heading tracking-tight">
              <span className="text-white">Adithya </span>
              <span className="text-gradient font-heading">
                Jisha Biju
              </span>
            </h1>
          </div>

          {/* Kinetic Tagline / Subheading */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-200 leading-snug max-w-3xl pt-1 font-heading">
            Building <KineticText /> that solve real-world problems.
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed font-light">
            Computer Science Engineering student specializing in AI/ML at CHRIST University. I design and build production-grade deep learning models, computer vision pipelines, NLP applications, and scalable full-stack web architectures.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap gap-4 items-center pt-6">
            <a
              href={resumePdf}
              download="Adithya_Resume.pdf"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-widest uppercase rounded-xl flex items-center gap-2.5 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_45px_rgba(16,185,129,0.5)] cursor-pointer group"
            >
              Download Resume
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


