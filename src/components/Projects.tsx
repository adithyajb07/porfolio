import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import type { Project } from '../data/projectsData';
import { ProjectModal } from './ProjectModal';
import { ProjectHeader } from './ProjectHeader';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Computer Vision', 'NLP', 'Web Development', 'Enterprise'];

  const filteredProjects = projectsData.filter((project) => {
    return selectedCategory === 'All' || project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 md:py-24 relative bg-transparent border-b border-emerald-500/10">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-[35rem] h-[35rem] bg-emerald-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-20">
        {/* Section Headers */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white font-heading">
              Things I've built.
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-4xl leading-relaxed">
              A curated selection of software projects spanning AI models, computer vision systems, NLP, and web architecture.
            </p>
          </div>
        </div>

        {/* Category Filter Buttons Row */}
        <div className="flex flex-wrap gap-2 mb-12 reveal-on-scroll delay-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                  : 'bg-slate-900/60 border border-emerald-500/15 text-slate-300 hover:text-white hover:border-emerald-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid Card Layout */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group cursor-pointer rounded-3xl border border-emerald-500/20 bg-slate-900/40 backdrop-blur-xl hover:border-emerald-400/50 transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden shadow-2xl hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] hover-sweep-container"
              >
                {/* Project Image Container */}
                <div className="h-48 w-full overflow-hidden relative">
                  <ProjectHeader category={project.category} title={project.title} />
                  
                  {/* Float Category Tag */}
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-lg bg-[#08090c]/95 border border-emerald-500/30 text-[9px] font-mono font-bold text-emerald-400 tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Card Contents */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white font-sans tracking-tight group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </h3>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags Row */}
                  <div className="space-y-3 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded text-[10px] font-mono bg-emerald-950/40 border border-emerald-500/20 text-emerald-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-emerald-500/20 rounded-3xl animate-fade-in">
            <p className="text-slate-400 text-sm font-mono">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Project detail modal handler */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};
