import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black border-t border-border-subtle relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center space-y-6">
        
        {/* Brand Title */}
        <div className="space-y-1">
          <h3 className="text-lg font-bold tracking-widest text-white uppercase font-sans">
            ADITHYA JISHA BIJU
          </h3>
          <p className="text-xs text-text-secondary tracking-wide">
            Computer Science Engineer • AI/ML Developer • Software Developer
          </p>
        </div>

        {/* Separator line */}
        <div className="w-12 h-[1px] bg-border-subtle" />

        {/* Copyright */}
        <p className="text-[10px] font-mono text-text-secondary/50 leading-relaxed uppercase tracking-wider">
          &copy; {currentYear} Adithya Jisha Biju. All rights reserved.
          <span className="block mt-1 text-[9px] text-text-secondary/30">
            Built with React, Vite, TypeScript & Tailwind CSS v4.0
          </span>
        </p>
      </div>
    </footer>
  );
};
