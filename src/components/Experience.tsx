import React, { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, Terminal, Sparkles } from 'lucide-react';
import { experienceData, educationData } from '../data/experienceData';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <section id="experience" className="py-20 md:py-24 relative overflow-hidden bg-transparent border-b border-emerald-500/10">
      {/* Background Glow Highlights */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-teal-500/5 rounded-full filter blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-20">
        {/* Section Heading */}
        <div className="mb-12 reveal-on-scroll">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Proven Track Record
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white font-heading">
              Career & Education.
            </h2>
          </div>
        </div>

        {/* 2-Button Toggle Switcher */}
        <div className="flex justify-center mb-14 reveal-on-scroll">
          <div className="p-1.5 rounded-2xl bg-slate-900/80 border border-emerald-500/20 flex shadow-[0_0_25px_rgba(0,0,0,0.6)]">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-6 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeTab === 'work'
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.35)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.35)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Education
            </button>
          </div>
        </div>

        {/* ================= WORK EXPERIENCE TAB ================= */}
        {activeTab === 'work' && (
          <div className="relative pl-6 md:pl-10 border-l-2 border-emerald-500/20 space-y-12 ml-2 md:ml-4 animate-fade-in">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Node Point */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 flex items-center justify-center">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#08090c] border-2 border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]"></span>
                  </span>
                </div>

                {/* Timeline Card */}
                <div className="p-7 md:p-8 rounded-3xl border border-emerald-500/20 bg-slate-900/40 backdrop-blur-xl shadow-2xl group-hover:border-emerald-400/40 transition-all duration-300 relative space-y-6 hover-sweep-container">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-emerald-500/10 pb-5">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white font-heading">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-mono font-bold text-emerald-400 mt-1 flex flex-wrap items-center gap-2">
                        <span>{exp.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 font-sans text-xs flex items-center gap-1 font-normal">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 shrink-0 w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                  </div>

                  {/* Responsibilities Bullet List */}
                  <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3">
                        <span className="text-emerald-400 font-mono text-xs mt-1">▶</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="pt-4 border-t border-emerald-500/10 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 text-xs font-mono bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= EDUCATION TAB ================= */}
        {activeTab === 'education' && (
          <div className="relative pl-6 md:pl-10 border-l-2 border-emerald-500/20 space-y-12 ml-2 md:ml-4 animate-fade-in">
            {educationData.map((edu, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Node Point */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 flex items-center justify-center">
                  <span className="relative flex h-4 w-4">
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#08090c] border-2 border-teal-400 shadow-[0_0_12px_rgba(20,184,166,0.8)]"></span>
                  </span>
                </div>

                {/* Education Card */}
                <div className="p-7 md:p-8 rounded-3xl border border-emerald-500/20 bg-slate-900/40 backdrop-blur-xl shadow-2xl group-hover:border-emerald-400/40 transition-all duration-300 flex flex-col md:flex-row justify-between gap-6">
                  <div className="space-y-3 flex-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-xs font-mono text-emerald-400 border border-emerald-500/20">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-heading">{edu.degree}</h3>
                    <p className="text-sm font-semibold text-emerald-400 font-mono flex flex-wrap items-center gap-2">
                      <span>{edu.institution}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 font-normal font-sans flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {edu.location}
                      </span>
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed pt-1">{edu.details}</p>
                  </div>

                  <div className="shrink-0 flex items-start">
                    <div className="px-4 py-2.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      {edu.grade}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
