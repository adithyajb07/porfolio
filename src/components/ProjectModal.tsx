import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, Database, Award, GitBranch } from 'lucide-react';
import type { Project } from '../data/projectsData';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

// System Pipeline Diagram Component representing data flow pipelines
const PipelineDiagram: React.FC<{ projectId: string }> = ({ projectId }) => {
  const nodeClass = "flex-grow flex-shrink-0 p-3 rounded-xl bg-black border border-white/5 text-center flex flex-col justify-center items-center min-w-[120px] max-w-[150px] min-h-[60px] transition-colors hover:border-accent-cyan/20";
  const stepLabelClass = "text-text-secondary text-[8px] font-mono uppercase tracking-wider mb-1 font-bold";
  const nodeTextClass = "text-xs font-semibold text-white leading-tight font-sans";
  const arrowClass = "text-accent-cyan/40 font-bold text-sm hidden sm:inline-block select-none";

  const renderSteps = () => {
    switch (projectId) {
      case 'image-authenticity':
        return (
          <>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 1</span>
              <span className={nodeTextClass}>Image Input</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 2</span>
              <span className={nodeTextClass}>Error Level (ELA)</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 3</span>
              <span className={nodeTextClass}>LBP & FFT Extraction</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 4</span>
              <span className="text-xs font-bold text-accent-cyan leading-tight font-sans">Random Forest</span>
            </div>
          </>
        );
      case 'adversarial-prompt':
        return (
          <>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 1</span>
              <span className={nodeTextClass}>Input Prompt</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 2</span>
              <span className={nodeTextClass}>Obfuscation Decode</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 3</span>
              <span className={nodeTextClass}>BERT Tokenizer</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 4</span>
              <span className="text-xs font-bold text-accent-violet leading-tight font-sans">Guard Shield</span>
            </div>
          </>
        );
      case 'smart-bottle':
        return (
          <>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 1</span>
              <span className={nodeTextClass}>Camera Frame</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 2</span>
              <span className={nodeTextClass}>YOLO Box Locate</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 3</span>
              <span className={nodeTextClass}>OpenCV Contours</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 4</span>
              <span className="text-xs font-bold text-accent-cyan leading-tight font-sans">Volume Metrics</span>
            </div>
          </>
        );
      case 'gen-erp':
        return (
          <>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 1</span>
              <span className={nodeTextClass}>Purchase Req</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 2</span>
              <span className={nodeTextClass}>Bid Comparison</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 3</span>
              <span className={nodeTextClass}>Approval Rules</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 4</span>
              <span className="text-xs font-bold text-emerald-500 leading-tight font-sans">Installments</span>
            </div>
          </>
        );
      case 'cleanfreshly':
        return (
          <>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 1</span>
              <span className={nodeTextClass}>Client View</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 2</span>
              <span className={nodeTextClass}>Django Backend</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 3</span>
              <span className={nodeTextClass}>Razorpay API</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 4</span>
              <span className="text-xs font-bold text-accent-cyan leading-tight font-sans">MySQL DB</span>
            </div>
          </>
        );
      case 'sentiment-analysis':
        return (
          <>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 1</span>
              <span className={nodeTextClass}>User Reviews</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 2</span>
              <span className={nodeTextClass}>Text Normalization</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 3</span>
              <span className={nodeTextClass}>TF-IDF Vectors</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 4</span>
              <span className="text-xs font-bold text-accent-violet leading-tight font-sans">Classifier</span>
            </div>
          </>
        );
      default: // book-cinema
        return (
          <>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 1</span>
              <span className={nodeTextClass}>Swing UI</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 2</span>
              <span className={nodeTextClass}>Seat Locking</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 3</span>
              <span className={nodeTextClass}>NoSQL Client</span>
            </div>
            <span className={arrowClass}>→</span>
            <div className={nodeClass}>
              <span className={stepLabelClass}>Stage 4</span>
              <span className="text-xs font-bold text-accent-cyan leading-tight font-sans">MongoDB Atlas</span>
            </div>
          </>
        );
    }
  };

  return (
    <div className="p-5 rounded-2xl border border-border-subtle bg-bg-card/30 backdrop-blur-sm space-y-4">
      <h4 className="text-xs font-mono text-accent-cyan tracking-widest uppercase flex items-center gap-1.5">
        <GitBranch className="w-4 h-4 text-accent-cyan" /> Pipeline Workflow Diagram
      </h4>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1 overflow-x-auto">
        {renderSteps()}
      </div>
    </div>
  );
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Handle overlay click
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-[#111111] to-[#0a0a0a] border border-border-subtle rounded-2xl shadow-2xl p-6 md:p-8 animate-fade-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 border border-white/5 text-text-secondary hover:text-white hover:bg-white/10 hover:border-white/10 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-border-subtle">
          <div className="md:col-span-8 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono font-semibold text-accent-cyan">
              {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white font-sans tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>
          <div className="md:col-span-4 flex flex-row md:flex-col items-center md:items-end justify-start md:justify-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-border-subtle hover:border-white/20 text-xs font-bold tracking-wide rounded-lg flex items-center gap-2 transition-all w-full md:w-36 justify-center cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" /> Code Source
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-gradient-to-r from-accent-cyan to-blue-600 text-black text-xs font-bold tracking-wide rounded-lg flex items-center gap-2 hover:opacity-90 transition-all w-full md:w-36 justify-center cursor-pointer shadow-lg shadow-cyan-500/10"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Content Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Main Narrative (Left) */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h4 className="text-sm font-mono text-accent-cyan tracking-wider uppercase mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Background & Problem
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-mono text-accent-cyan tracking-wider uppercase mb-2 flex items-center gap-1.5">
                <Database className="w-4 h-4" /> Solution Design
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Workflow Diagram */}
            <PipelineDiagram projectId={project.id} />

            <div>
              <h4 className="text-sm font-mono text-accent-cyan tracking-wider uppercase mb-2">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-text-secondary list-none">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent-cyan select-none mt-1 font-mono text-[10px]">▶</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Specs & Metrics (Right) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Success Metrics Block */}
            {project.results && project.results.length > 0 && (
              <div className="p-4 rounded-xl border border-border-subtle bg-white/2 space-y-4">
                <h4 className="text-xs font-mono text-text-secondary tracking-widest uppercase mb-1 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-accent-violet" /> Metrics & Results
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {project.results.map((res, idx) => (
                    <div key={idx} className="text-left">
                      <div className="text-2xl font-extrabold text-white font-sans tracking-tight">
                        {res.value}
                      </div>
                      <div className="text-[10px] text-text-secondary leading-tight mt-0.5">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Block */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-text-secondary tracking-widest uppercase">
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono bg-white/5 border border-white/5 text-white/90 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
