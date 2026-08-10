import React, { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, Terminal } from 'lucide-react';
import { experienceData, educationData } from '../data/experienceData';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-bg-dark border-b border-border-subtle">
      {/* Subtle details */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-20">
        {/* Section Heading */}
        <div className="flex items-center space-x-4 mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
            Career & Education.
          </h2>
          <div className="h-[1px] flex-grow bg-border-subtle" />
        </div>

        {/* Timeline Navigation Tabs */}
        <div className="flex justify-center mb-12 reveal-on-scroll">
          <div className="p-1 rounded-xl bg-bg-card border border-border-subtle flex">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'work'
                  ? 'bg-gradient-to-r from-accent-cyan to-blue-600 text-black shadow-md'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Work History
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-accent-cyan to-blue-600 text-black shadow-md'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Education
            </button>
          </div>
        </div>

        {/* Tab content */}
        <div className="relative border-l border-border-subtle ml-4 md:ml-32 space-y-12 reveal-on-scroll">
          {activeTab === 'work' &&
            experienceData.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12" style={{ animationDelay: `${idx * 150}ms` }}>
                {/* Connection Node */}
                <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-bg-dark border border-accent-cyan">
                  <span className="h-2 w-2 rounded-full bg-accent-cyan" />
                </span>

                {/* Floating Date (Desktop) */}
                <div className="hidden md:block absolute -left-36 top-1.5 w-28 text-right">
                  <span className="text-xs font-mono text-text-secondary flex items-center justify-end gap-1.5">
                    <Calendar className="w-3 h-3 text-accent-cyan" />
                    {exp.duration}
                  </span>
                </div>

                {/* Timeline Card */}
                <div className="p-6 rounded-2xl border border-border-subtle bg-bg-card/40 hover:bg-bg-card/65 transition-all shadow-lg hover:shadow-cyan-500/2">
                  {/* Title Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white font-sans flex items-center gap-2">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-medium text-accent-cyan flex items-center gap-1.5 mt-0.5">
                        {exp.company}
                        <span className="text-text-secondary text-xs">•</span>
                        <span className="text-text-secondary text-xs font-normal flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </span>
                      </div>
                    </div>
                    {/* Mobile-only Date */}
                    <span className="md:hidden inline-flex items-center gap-1 text-xs font-mono text-text-secondary">
                      <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                      {exp.duration}
                    </span>
                  </div>

                  {/* Responsibilities list */}
                  <ul className="space-y-2 mb-6 text-sm text-text-secondary list-none">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-accent-cyan select-none mt-1 font-mono text-[10px]">▶</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border-subtle/50">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-mono bg-white/5 border border-white/5 text-white/95 rounded-md hover:border-accent-cyan/35 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          {activeTab === 'education' &&
            educationData.map((edu, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12" style={{ animationDelay: `${idx * 150}ms` }}>
                {/* Connection Node */}
                <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-bg-dark border border-accent-violet">
                  <span className="h-2 w-2 rounded-full bg-accent-violet" />
                </span>

                {/* Floating Date (Desktop) */}
                <div className="hidden md:block absolute -left-36 top-1.5 w-28 text-right">
                  <span className="text-xs font-mono text-text-secondary flex items-center justify-end gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent-violet" />
                    {edu.duration}
                  </span>
                </div>

                {/* Timeline Card */}
                <div className="p-6 rounded-2xl border border-border-subtle bg-bg-card/40 hover:bg-bg-card/65 transition-all shadow-lg">
                  {/* Title Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white font-sans">
                        {edu.degree}
                      </h3>
                      <div className="text-sm font-medium text-accent-violet flex items-center gap-1.5 mt-0.5">
                        {edu.institution}
                        <span className="text-text-secondary text-xs">•</span>
                        <span className="text-text-secondary text-xs font-normal flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {edu.location}
                        </span>
                      </div>
                    </div>
                    {/* Mobile-only Date */}
                    <span className="md:hidden inline-flex items-center gap-1 text-xs font-mono text-text-secondary">
                      <Calendar className="w-3.5 h-3.5 text-accent-violet" />
                      {edu.duration}
                    </span>
                  </div>

                  {/* Summary Details */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {edu.details}
                  </p>

                  {/* Grade Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-violet/5 border border-accent-violet/15 text-xs text-accent-violet font-mono font-semibold">
                    <Terminal className="w-3.5 h-3.5" />
                    {edu.grade}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
