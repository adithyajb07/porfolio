import React, { useState } from 'react';
import { Terminal, Award, HelpCircle } from 'lucide-react';
import { skillsData } from '../data/skillsData';
import type { SkillItem } from '../data/skillsData';

export const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>({
    name: 'Python',
    level: 'Advanced',
    description: 'Core language for ML, AI models, backend web frameworks, and computer vision pipelines.'
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-bg-dark border-b border-border-subtle">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-accent-violet/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        {/* Section Headers */}
        <div className="flex items-center space-x-4 mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
            Technical Stack.
          </h2>
          <div className="h-[1px] flex-grow bg-border-subtle" />
        </div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Skills Grid (Left) */}
          <div className="lg:col-span-8 space-y-8 reveal-on-scroll">
            {skillsData.map((category, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-xs font-mono text-text-secondary tracking-widest uppercase flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => {
                    const isHovered = activeSkill?.name === skill.name;
                    return (
                      <button
                        key={sIdx}
                        onMouseEnter={() => setActiveSkill(skill)}
                        onClick={() => setActiveSkill(skill)}
                        className={`px-4 py-2.5 rounded-xl border text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                          isHovered
                            ? 'bg-gradient-to-r from-accent-cyan/15 to-accent-violet/15 text-white border-accent-cyan shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                            : 'bg-bg-card text-white/80 border-border-subtle hover:text-white hover:border-white/20'
                        }`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Info Board Panel (Right) */}
          <div className="lg:col-span-4 reveal-on-scroll delay-200 sticky top-28">
            <div className="p-6 rounded-2xl border border-border-subtle bg-gradient-to-br from-bg-card to-[#131313] relative overflow-hidden shadow-xl min-h-[220px] flex flex-col justify-between">
              {/* Radial detail gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full filter blur-2xl pointer-events-none" />

              {activeSkill ? (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                    <h4 className="text-lg font-bold text-white font-sans tracking-tight">
                      {activeSkill.name}
                    </h4>
                    <span className="px-2.5 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 text-[10px] font-mono font-bold text-accent-cyan">
                      {activeSkill.level}
                    </span>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-text-secondary tracking-widest uppercase mb-1 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-accent-violet" /> Description
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {activeSkill.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center space-y-3 py-12">
                  <Award className="w-8 h-8 text-border-subtle animate-pulse" />
                  <div className="text-sm text-text-secondary">
                    Hover over any technology on the left to inspect detailed proficiency.
                  </div>
                </div>
              )}

              {/* Console Prompt footer */}
              <div className="text-[10px] font-mono text-text-secondary/30 mt-6 pt-4 border-t border-border-subtle/50 flex items-center gap-1 select-none">
                <span>$</span> whoami --skills --detailed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
