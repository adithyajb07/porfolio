import React from 'react';
import { Calendar, Code, Cpu, Briefcase } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  glowColor: string;
}

export const QuickStats: React.FC = () => {
  const stats: StatItem[] = [
    {
      icon: <Calendar className="w-5 h-5 text-accent-cyan" />,
      value: '6',
      label: 'Completed Semesters',
      glowColor: 'rgba(0, 240, 255, 0.1)',
    },
    {
      icon: <Code className="w-5 h-5 text-accent-violet" />,
      value: '20+',
      label: 'Technologies & Tools',
      glowColor: 'rgba(139, 92, 246, 0.1)',
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      value: '7',
      label: 'AI & Full-Stack Projects',
      glowColor: 'rgba(59, 130, 246, 0.1)',
    },
    {
      icon: <Briefcase className="w-5 h-5 text-emerald-500" />,
      value: '2',
      label: 'Developer Internships',
      glowColor: 'rgba(16, 185, 129, 0.1)',
    },
  ];

  return (
    <section className="relative z-20 py-8 border-y border-border-subtle bg-bg-card/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 p-4 rounded-xl border border-border-subtle hover:border-white/10 bg-bg-card/40 transition-all hover:-translate-y-0.5 group"
              style={{
                boxShadow: `0 4px 20px -5px ${stat.glowColor}`,
              }}
            >
              <div className="p-3 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-white font-sans tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-text-secondary">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
