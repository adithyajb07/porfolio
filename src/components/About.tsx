import React from 'react';
import { Terminal, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24 relative overflow-hidden bg-transparent border-b border-emerald-500/10">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-500/5 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-20">
        {/* Section Heading */}
        <div className="mb-10 reveal-on-scroll">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase flex items-center gap-1.5 mb-1">
              <Terminal className="w-3.5 h-3.5" /> Background & Personal Philosophy
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white font-heading">
              A little about me.
            </h2>
          </div>
        </div>

        {/* Highlight Quote Box */}
        <div className="mb-10 reveal-on-scroll">
          <div className="p-5 md:p-6 rounded-2xl bg-slate-900/60 border border-emerald-500/20 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full filter blur-2xl group-hover:scale-125 transition-transform" />
            <p className="text-sm md:text-base text-slate-100 font-sans font-medium">
              "Fascinated by artificial intelligence, driven by the engineering required to build <span className="text-emerald-400 font-bold">reliable, performant, and scalable software</span>."
            </p>
          </div>
        </div>

        {/* Professional Focus Container */}
        <div className="w-full reveal-on-scroll">
          <div className="p-6 md:p-8 rounded-3xl border border-emerald-500/20 bg-slate-900/30 backdrop-blur-xl shadow-2xl space-y-5">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest border-b border-emerald-500/10 pb-3">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>Professional Focus</span>
            </div>
            
            <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed font-light">
              <p>
                I’m a Computer Science Engineering student specializing in <strong className="text-white font-medium">AI & Machine Learning</strong> at CHRIST University, Bengaluru. My work centers on deep learning architectures, computer vision models, and scalable full-stack software systems.
              </p>
              <p>
                I thrive on solving complex engineering challenges—whether fine-tuning vision transformers, building synthetic LLM dataset generators, or deploying containerized web services. My goal is to build software that is performant, reliable, and elegant under real-world conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
