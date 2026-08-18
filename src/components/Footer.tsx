import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-transparent border-t border-emerald-500/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        {/* Copyright */}
        <p className="text-[10px] font-mono text-slate-400 leading-relaxed uppercase tracking-wider">
          &copy; {currentYear} Adithya Jisha Biju. All rights reserved.
          <span className="block mt-1.5 text-[9px] text-slate-500">
            Designed & Engineered with React 19, TypeScript & Tailwind CSS
          </span>
        </p>
      </div>
    </footer>
  );
};

