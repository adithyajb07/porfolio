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
      icon: <Calendar className="w-5 h-5 text-emerald-400" />,
      value: '6',
      label: 'Completed Semesters',
      glowColor: 'rgba(16, 185, 129, 0.15)',
    },
    {
      icon: <Code className="w-5 h-5 text-teal-400" />,
      value: '20+',
      label: 'Technologies & Tools',
      glowColor: 'rgba(20, 184, 166, 0.15)',
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      value: '7',
      label: 'AI & Full-Stack Projects',
      glowColor: 'rgba(16, 185, 129, 0.15)',
    },
    {
      icon: <Briefcase className="w-5 h-5 text-teal-400" />,
      value: '4',
      label: 'Engineering Roles',
      glowColor: 'rgba(20, 184, 166, 0.15)',
    },
  ];

  return (
    <section className="relative z-20 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 p-5 rounded-2xl border border-emerald-500/20 bg-slate-900/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/40 group"
              style={{
                boxShadow: `0 10px 30px -15px ${stat.glowColor}`,
              }}
            >
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all duration-500">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-white font-sans tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-slate-300">
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

