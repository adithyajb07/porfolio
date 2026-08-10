import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import type { Project } from '../data/projectsData';
import { ProjectModal } from './ProjectModal';

import { ProjectHeader } from './ProjectHeader';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-bg-dark border-b border-border-subtle">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-[35rem] h-[35rem] bg-accent-cyan/2 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        {/* Section Headers */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal-on-scroll">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
              Things I've built.
            </h2>
            <p className="text-sm md:text-base text-text-secondary max-w-xl leading-relaxed">
              A selection of projects across AI, machine learning, computer vision, NLP and software development.
            </p>
          </div>
          <div className="h-[1px] md:w-32 bg-border-subtle flex-grow hidden lg:block" />
        </div>

        {/* Projects Grid Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-on-scroll delay-200">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer rounded-2xl border border-border-subtle bg-bg-card hover:bg-bg-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden shadow-xl hover:shadow-[0_10px_30px_rgba(0,240,255,0.02)]"
            >
              {/* Project Image Container */}
              <div className="h-48 w-full overflow-hidden relative">
                <ProjectHeader category={project.category} title={project.title} />
                
                {/* Float Category Tag */}
                <span className="absolute top-4 left-4 z-20 px-2.5 py-0.5 rounded-md bg-bg-dark/85 border border-white/5 text-[10px] font-mono font-medium text-accent-cyan tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Card Contents */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white font-sans tracking-tight group-hover:text-accent-cyan transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags & Code Links Row */}
                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/5 text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/5 text-white/50">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
