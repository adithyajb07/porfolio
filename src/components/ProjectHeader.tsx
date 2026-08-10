import React from 'react';
import { Eye, Shield, Globe, Database } from 'lucide-react';

interface ProjectHeaderProps {
  category: 'AI / ML' | 'Computer Vision' | 'NLP' | 'Web Development' | 'Enterprise';
  title: string;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ category, title }) => {
  // Common background styles
  const baseBg = "relative w-full h-full bg-[#050505] overflow-hidden flex items-center justify-center border-b border-border-subtle/50";

  switch (category) {
    case 'Computer Vision':
      if (title.includes('Bottle')) {
        return (
          <div className={baseBg}>
            {/* Ambient Cyan glow */}
            <div className="absolute w-24 h-24 rounded-full bg-accent-cyan/5 filter blur-2xl pointer-events-none" />
            
            {/* Grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(0,240,255,0.03)_1px,transparent_1px)] [background-size:12px_12px]" />
            
            {/* Bottle fill gauge */}
            <div className="relative flex items-center justify-center h-full w-full">
              <svg width="70" height="75" viewBox="0 0 70 80" className="overflow-visible select-none">
                {/* YOLO Bounding box */}
                <rect x="5" y="0" width="60" height="75" fill="none" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="0.8" strokeDasharray="3 2" />
                <text x="8" y="8" fill="#00f0ff" fontSize="5.5" fontFamily="monospace" fontWeight="bold">BOTTLE [97.1%]</text>

                {/* Bottle outline path */}
                <path 
                  d="M 28,15 L 42,15 L 42,25 L 50,33 L 50,70 L 20,70 L 20,33 L 28,25 Z" 
                  fill="none" 
                  stroke="rgba(255,255,255,0.25)" 
                  strokeWidth="1.5" 
                />
                
                {/* Liquid fill overlay */}
                <path 
                  d="M 21,46 L 49,46 L 49,69 L 21,69 Z" 
                  fill="rgba(0, 240, 255, 0.15)" 
                  className="animate-pulse"
                />
                
                {/* Level indicators */}
                <line x1="16" y1="46" x2="54" y2="46" stroke="#00f0ff" strokeWidth="1" strokeDasharray="2 1" />
                <text x="56" y="48" fill="#00f0ff" fontSize="5.5" fontFamily="monospace" fontWeight="semibold">FILL: 84%</text>
                
                {/* Orientation angle marker */}
                <text x="8" y="73" fill="rgba(255, 255, 255, 0.4)" fontSize="5" fontFamily="monospace">ANGLE: 0.0°</text>
              </svg>
            </div>
          </div>
        );
      }
      return (
        <div className={baseBg}>
          {/* Laser scanning grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,240,255,0.08)_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Scanning line animation */}
          <div className="absolute top-0 left-0 w-full h-[1.5px] bg-accent-cyan shadow-[0_0_8px_#00f0ff] animate-scan" />
          
          {/* Focus Box */}
          <div className="relative w-28 h-20 border border-accent-cyan/30 rounded flex flex-col justify-between p-2">
            {/* Corners */}
            <span className="absolute -top-[1.5px] -left-[1.5px] w-3 h-3 border-t-2 border-l-2 border-accent-cyan" />
            <span className="absolute -top-[1.5px] -right-[1.5px] w-3 h-3 border-t-2 border-r-2 border-accent-cyan" />
            <span className="absolute -bottom-[1.5px] -left-[1.5px] w-3 h-3 border-b-2 border-l-2 border-accent-cyan" />
            <span className="absolute -bottom-[1.5px] -right-[1.5px] w-3 h-3 border-b-2 border-r-2 border-accent-cyan" />
            
            {/* Inside details */}
            <div className="flex justify-between items-center text-[7px] font-mono text-accent-cyan/80">
              <span>SCANNING...</span>
              <Eye className="w-3 h-3 text-accent-cyan animate-pulse" />
            </div>
            
            <div className="text-[7px] font-mono text-accent-cyan font-bold tracking-wider leading-none">
              FORENSIC_MATCH [0.92]
            </div>
          </div>

          <style>{`
            @keyframes scan {
              0% { transform: translateY(0); }
              50% { transform: translateY(192px); } /* 192px matches card h-48 */
              100% { transform: translateY(0); }
            }
            .animate-scan {
              animation: scan 3s linear infinite;
            }
          `}</style>
        </div>
      );

    case 'NLP':
      return (
        <div className={baseBg}>
          {/* Ambient Purple Glow */}
          <div className="absolute w-24 h-24 rounded-full bg-accent-violet/10 filter blur-2xl" />
          
          {/* Matrix-like float grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.05)_1px,transparent_1px)] [background-size:12px_12px]" />
          
          {/* Animated tokens console */}
          <div className="flex flex-col gap-1 w-full max-w-[70%] text-[8px] font-mono text-text-secondary/70">
            <div className="flex justify-between border-b border-white/5 pb-1 select-none">
              <span className="text-accent-violet">PROMPT_SHIELD: ACTIVE</span>
              <Shield className="w-3 h-3 text-accent-violet" />
            </div>
            <div className="text-emerald-500 font-bold mt-1">
              {title.includes('Adversarial') ? '[SYS_INJECTION_FLAG = SAFE]' : '[POLARITY_VAL = POSITIVE]'}
            </div>
            <div className="opacity-50 truncate">INPUT: {title.includes('Adversarial') ? '"Ignore previous rules..."' : '"Outstanding accuracy, fast interface"'}</div>
            <div className="text-accent-violet opacity-80">PROMPT_TOKENIZER_V2 (LEN=24)</div>
          </div>
        </div>
      );

    case 'Enterprise':
      return (
        <div className={baseBg}>
          {/* Green highlights */}
          <div className="absolute w-24 h-24 rounded-full bg-emerald-500/5 filter blur-2xl" />
          
          {/* Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] [background-size:20px_20px]" />
          
          {/* Mock charts */}
          <div className="relative w-full max-w-[80%] flex items-end justify-center gap-2 h-20">
            {[30, 45, 25, 60, 40, 75, 50, 90, 65, 80].map((val, idx) => (
              <div 
                key={idx} 
                className="w-2.5 rounded-t bg-gradient-to-t from-emerald-600/20 to-emerald-500/80 border-t border-emerald-400/20"
                style={{ height: `${val}%` }}
              />
            ))}
            <div className="absolute top-2 left-2 flex items-center gap-1.5 text-[8px] font-mono text-text-secondary">
              <Database className="w-3.5 h-3.5 text-emerald-500" />
              <span>ERP_TRANS_MONITOR</span>
            </div>
          </div>
        </div>
      );

    case 'Web Development':
      return (
        <div className={baseBg}>
          {/* Web service mockup */}
          <div className="absolute w-24 h-24 rounded-full bg-blue-500/5 filter blur-2xl" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.04)_1px,transparent_1px)] [background-size:14px_14px]" />
          
          <div className="w-48 h-28 border border-border-subtle rounded-lg bg-bg-card/90 overflow-hidden flex flex-col justify-between shadow-2xl relative">
            {/* Browser top bar */}
            <div className="bg-white/5 border-b border-border-subtle px-2.5 py-1.5 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
              </div>
              <Globe className="w-2.5 h-2.5 text-text-secondary" />
            </div>
            
            {/* Body */}
            <div className="p-3 flex-grow flex flex-col justify-center space-y-1.5">
              <div className="w-12 h-1.5 bg-accent-cyan/40 rounded" />
              <div className="w-24 h-2 bg-white/10 rounded" />
              <div className="flex gap-2 pt-1">
                <div className="w-8 h-3 bg-white/5 rounded border border-white/5" />
                <div className="w-8 h-3 bg-white/5 rounded border border-white/5" />
              </div>
            </div>
          </div>
        </div>
      );

    default: // AI / ML
      return (
        <div className={baseBg}>
          <div className="absolute w-24 h-24 rounded-full bg-accent-cyan/5 filter blur-2xl" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Neural network graph representation */}
          <svg className="w-40 h-24 overflow-visible" viewBox="0 0 160 100">
            {/* Connection lines */}
            <line x1="30" y1="25" x2="80" y2="25" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="30" y1="25" x2="80" y2="50" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="30" y1="50" x2="80" y2="25" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="30" y1="50" x2="80" y2="50" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="30" y1="75" x2="80" y2="50" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="30" y1="75" x2="80" y2="75" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

            <line x1="80" y1="25" x2="130" y2="50" stroke="rgba(0,240,255,0.15)" strokeWidth="1" />
            <line x1="80" y1="50" x2="130" y2="50" stroke="rgba(0,240,255,0.15)" strokeWidth="1" />
            <line x1="80" y1="75" x2="130" y2="50" stroke="rgba(0,240,255,0.15)" strokeWidth="1" />

            {/* Input layer */}
            {[25, 50, 75].map((y, idx) => (
              <circle key={`in-${idx}`} cx="30" cy={y} r="3.5" fill="#222222" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            ))}

            {/* Hidden layer */}
            {[25, 50, 75].map((y, idx) => (
              <circle key={`hid-${idx}`} cx="80" cy={y} r="3.5" fill="#111111" stroke="#8b5cf6" strokeWidth="1.5" />
            ))}

            {/* Output layer */}
            <circle cx="130" cy="50" r="4.5" fill="#00f0ff" className="animate-pulse" />

            {/* Labels */}
            <text x="30" y="15" fill="rgba(255,255,255,0.3)" fontSize="6" textAnchor="middle" fontFamily="monospace">INPUT</text>
            <text x="80" y="15" fill="rgba(255,255,255,0.3)" fontSize="6" textAnchor="middle" fontFamily="monospace">HIDDEN</text>
            <text x="130" y="40" fill="#00f0ff" fontSize="6" textAnchor="middle" fontFamily="monospace">OUTPUT</text>
          </svg>
        </div>
      );
  }
};
