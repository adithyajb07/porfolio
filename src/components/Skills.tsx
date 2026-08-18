import React, { useState } from 'react';
import { 
  Terminal, 
  Brain, 
  Code2, 
  Layers, 
  Database, 
  Sparkles, 
  FolderGit2, 
  Gauge, 
  CheckCircle2, 
  Cpu,
  LayoutGrid,
  ArrowRight
} from 'lucide-react';
import { skillsData } from '../data/skillsData';
import type { SkillItem } from '../data/skillsData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Default active skill to Python
  const [activeSkill, setActiveSkill] = useState<SkillItem>(() => {
    return skillsData[1].skills[0]; // Python
  });

  // Helper to render category icon
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-4 h-4 text-emerald-400" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-teal-400" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-emerald-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-teal-400" />;
      default:
        return <Terminal className="w-4 h-4 text-emerald-400" />;
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId !== 'all') {
      const firstSkill = skillsData.find(c => c.id === categoryId)?.skills[0];
      if (firstSkill) setActiveSkill(firstSkill);
    }
  };

  const handleSkillClickInAllView = (skill: SkillItem, categoryId: string) => {
    setActiveSkill(skill);
    setSelectedCategory(categoryId);
  };

  const currentCategoryData = skillsData.find(c => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-24 relative bg-transparent border-b border-emerald-500/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" /> Capabilities Matrix
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading">
              Technical Stack.
            </h2>
          </div>

          {/* Category Filter Switcher Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-slate-900/70 border border-emerald-500/20 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Stack', icon: <LayoutGrid className="w-3.5 h-3.5" /> },
              { id: 'ai-ml', label: 'AI & Vision', icon: <Brain className="w-3.5 h-3.5" /> },
              { id: 'languages', label: 'Languages', icon: <Code2 className="w-3.5 h-3.5" /> },
              { id: 'frameworks', label: 'Frameworks', icon: <Layers className="w-3.5 h-3.5" /> },
              { id: 'databases-tools', label: 'Data & DevOps', icon: <Database className="w-3.5 h-3.5" /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => handleCategorySelect(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === tab.id
                    ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.35)] font-bold scale-[1.02]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* View Mode 1: ALL STACK (Full-Width Responsive 2x2 Bento Matrix) */}
        {selectedCategory === 'all' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-on-scroll">
            {skillsData.map(cat => (
              <div 
                key={cat.id} 
                className="p-6 rounded-3xl border border-emerald-500/15 bg-slate-900/40 backdrop-blur-xl space-y-4 hover:border-emerald-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header with "Inspect Details" CTA */}
                  <div className="flex items-center justify-between border-b border-emerald-500/10 pb-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                        {getCategoryIcon(cat.icon)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white font-heading">
                          {cat.title}
                        </h3>
                        <span className="text-[10px] font-mono text-slate-400">
                          {cat.skills.length} TECHNOLOGIES
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCategorySelect(cat.id)}
                      className="text-[10px] font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 cursor-pointer group-hover:border-emerald-400/40 transition-colors"
                    >
                      <span>Inspect</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        onClick={() => handleSkillClickInAllView(skill, cat.id)}
                        className="p-3 rounded-2xl border border-emerald-500/10 bg-slate-950/70 hover:border-emerald-400/40 hover:bg-slate-900/90 transition-all duration-200 cursor-pointer group/tile"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs md:text-sm font-semibold text-slate-200 group-hover/tile:text-emerald-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className={`text-[9px] font-mono px-2 py-0.5 rounded-md border font-bold ${
                            skill.level === 'Advanced'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25'
                              : 'bg-teal-500/10 text-teal-300 border-teal-500/25'
                          }`}>
                            {skill.level}
                          </span>
                        </div>

                        {/* Mini Strength Bar */}
                        <div className="w-full h-1 rounded-full bg-slate-800/80 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-emerald-500/40 group-hover/tile:bg-emerald-400 transition-all duration-500"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* View Mode 2: FOCUSED CATEGORY VIEW WITH DEDICATED TECH INSPECTOR */
          currentCategoryData && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
              
              {/* Left Column: Focused Category Skills Grid */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-6 rounded-3xl border border-emerald-500/20 bg-slate-900/40 backdrop-blur-xl shadow-xl space-y-5">
                  <div className="flex items-center justify-between border-b border-emerald-500/10 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30">
                        {getCategoryIcon(currentCategoryData.icon)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white font-heading">
                          {currentCategoryData.title}
                        </h3>
                        <span className="text-[10px] font-mono text-slate-400">
                          {currentCategoryData.skills.length} CORE CAPABILITIES
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skill Tiles */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentCategoryData.skills.map((skill, sIdx) => {
                      const isSelected = activeSkill.name === skill.name;
                      return (
                        <button
                          key={sIdx}
                          onMouseEnter={() => setActiveSkill(skill)}
                          onClick={() => setActiveSkill(skill)}
                          className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative group overflow-hidden ${
                            isSelected
                              ? 'bg-emerald-500/20 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)] ring-1 ring-emerald-400/50'
                              : 'bg-slate-950/70 border-emerald-500/10 hover:border-emerald-400/40 hover:bg-slate-900/90'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-sm font-semibold tracking-tight transition-colors ${
                              isSelected ? 'text-emerald-300 font-bold' : 'text-white group-hover:text-emerald-300'
                            }`}>
                              {skill.name}
                            </span>
                            <span className={`text-[9px] font-mono px-2 py-0.5 rounded-md border font-bold ${
                              skill.level === 'Advanced'
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25'
                                : 'bg-teal-500/10 text-teal-300 border-teal-500/25'
                            }`}>
                              {skill.level}
                            </span>
                          </div>

                          {/* Mini Strength Bar */}
                          <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${
                                isSelected ? 'bg-emerald-400 shadow-[0_0_8px_#10b981]' : 'bg-emerald-500/40 group-hover:bg-emerald-400/70'
                              }`}
                              style={{ width: `${skill.proficiency}%` }}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Dedicated Tech Inspector HUD (Full View, No Overflow) */}
              <div className="lg:col-span-5">
                <div className="p-7 rounded-3xl border border-emerald-500/25 bg-slate-900/60 backdrop-blur-2xl shadow-2xl space-y-5 relative overflow-hidden">
                  
                  {/* Header Status Bar */}
                  <div className="flex items-center justify-between border-b border-emerald-500/15 pb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold">
                        TECH INSPECTOR
                      </span>
                    </div>
                    <span className="text-[9px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-slate-300 border border-emerald-500/15 uppercase">
                      {activeSkill.category}
                    </span>
                  </div>

                  {/* Active Skill Title & Level */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-2xl md:text-3xl font-bold text-white font-heading tracking-tight">
                        {activeSkill.name}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/25">
                        <Gauge className="w-3.5 h-3.5" />
                        <span>{activeSkill.proficiency}%</span>
                      </div>
                    </div>

                    {/* Animated Gradient Proficiency Bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>Proficiency Score</span>
                        <span className="text-emerald-400 font-bold">{activeSkill.level}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden p-[1px] border border-emerald-500/15">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                          style={{ width: `${activeSkill.proficiency}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-emerald-500/15 space-y-1.5">
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Technical Role
                    </span>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                      {activeSkill.description}
                    </p>
                  </div>

                  {/* Key Tags / Libraries */}
                  {activeSkill.tags && activeSkill.tags.length > 0 && (
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block">
                        Key Libraries & Concepts
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeSkill.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono font-semibold text-emerald-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Used in Featured Projects */}
                  <div className="space-y-2 pt-3 border-t border-emerald-500/10">
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold flex items-center gap-1.5">
                      <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" /> Featured In Projects
                    </span>
                    {activeSkill.usedInProjects && activeSkill.usedInProjects.length > 0 ? (
                      <div className="space-y-1.5">
                        {activeSkill.usedInProjects.map((proj, pIdx) => (
                          <a
                            key={pIdx}
                            href="#projects"
                            className="p-2.5 rounded-xl bg-slate-950/50 border border-emerald-500/15 flex items-center justify-between text-xs text-slate-200 hover:text-emerald-300 hover:border-emerald-400/40 transition-colors group"
                          >
                            <span className="flex items-center gap-2 font-medium truncate">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span className="truncate">{proj}</span>
                            </span>
                            <span className="text-[9px] font-mono text-emerald-400 shrink-0 group-hover:translate-x-0.5 transition-transform">
                              View →
                            </span>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-slate-500 italic">
                        Core foundational competency applied across active research & coursework.
                      </p>
                    )}
                  </div>

                  {/* Ambient light leak */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full filter blur-2xl pointer-events-none" />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
