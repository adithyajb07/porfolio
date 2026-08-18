import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
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

export const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-full flex justify-center px-4 md:px-8 ${
        isScrolled
          ? 'top-4'
          : 'top-0 md:top-2'
      }`}
    >
      <nav
        className={`w-full max-w-7xl flex justify-between items-center transition-all duration-500 ${
          isScrolled
            ? 'glassmorphism rounded-full border border-emerald-500/20 py-2.5 px-6 md:px-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5 px-4 border-b border-transparent'
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="group flex flex-col tracking-tight"
        >
          <span className="text-lg md:text-xl font-black tracking-widest text-white font-sans transition-all group-hover:text-emerald-400">
            ADITHYA
          </span>
          <span className="text-[9px] text-emerald-400 font-mono tracking-widest leading-none -mt-0.5 font-bold group-hover:text-emerald-300 transition-colors">
            JISHA BIJU
          </span>
        </a>

        {/* Desktop Navigation Items */}
        <div className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:text-white ${
                activeSection === item.id
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-mono'
                  : 'text-slate-300 border border-transparent hover:bg-white/5'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden text-white focus:outline-none p-1.5 rounded-full border border-emerald-500/20 bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-pointer`}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-[70px] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md bg-[#08090c]/95 backdrop-blur-2xl border border-emerald-500/25 rounded-3xl transition-all duration-500 lg:hidden flex flex-col justify-center p-6 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className={`text-xl font-bold tracking-tight transition-colors py-2 rounded-2xl px-4 ${
              activeSection === item.id
                ? 'text-emerald-400 bg-emerald-500/10 border-l-4 border-emerald-400'
                : 'text-slate-300 hover:text-white hover:bg-white/5 pl-4'
            }`}
          >
            {item.label}
          </a>
        ))}
        
        {/* Mobile Social Link Row */}
        <div className="flex space-x-6 px-4 pt-4 border-t border-emerald-500/15">
          <a
            href="https://github.com/adithyajb07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <span className="flex items-center gap-2 text-sm"><GithubIcon className="w-4 h-4" /> GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/adithya-jisha-biju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <span className="flex items-center gap-2 text-sm"><LinkedinIcon className="w-4 h-4" /> LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
};
