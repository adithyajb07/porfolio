import React from 'react';
import { Award, Cpu, Sparkles } from 'lucide-react';

interface AchievementItem {
  title: string;
  category: string;
  icon: React.ReactNode;
  description: string;
}

interface CertificationItem {
  title: string;
  issuer: string;
  icon: React.ReactNode;
}

export const Achievements: React.FC = () => {
  const achievements: AchievementItem[] = [
    {
      title: 'Algo Royale Event Head (Magnovite \'25)',
      category: 'Leadership & Co-curricular',
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      description: 'Led a 6-member team as Event Head at CHRIST University, Bengaluru, organizing a major inter-college event with over 60+ participants and a prize pool of ₹25K.'
    },
    {
      title: 'Government Registered Copyright',
      category: 'Research & Intellectual Property',
      icon: <Award className="w-5 h-5 text-teal-400" />,
      description: 'Successfully registered an official copyright under my personal name for an original research idea recognized by the Government of India.'
    },
    {
      title: 'SIH 2024 Nominee',
      category: 'Hackathons',
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      description: 'Nominated for the Smart India Hackathon (SIH) 2024 for presenting an innovative financial assistant for UPI apps designed to simplify money management.'
    }
  ];

  const certifications: CertificationItem[] = [
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services (Jun 2025)',
      icon: <Award className="w-4 h-4 text-emerald-400" />
    },
    {
      title: 'Machine Learning using Python',
      issuer: 'Simplilearn (Nov 2024)',
      icon: <Award className="w-4 h-4 text-teal-400" />
    },
    {
      title: 'Introduction to Internet of Things',
      issuer: 'NPTEL - IIT Kharagpur (Nov 2025)',
      icon: <Award className="w-4 h-4 text-emerald-400" />
    }
  ];

  return (
    <section id="achievements" className="py-20 md:py-24 relative overflow-hidden bg-transparent border-b border-emerald-500/10">
      {/* Background radial highlight */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        {/* Section Heading */}
        <div className="mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading">
            Achievements & Certifications.
          </h2>
        </div>

        {/* Dual Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Achievements Citations (Left) */}
          <div className="lg:col-span-7 space-y-6 reveal-on-scroll">
            <h3 className="text-xs font-mono text-slate-400 tracking-widest uppercase mb-6 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Honors & Activities
            </h3>
            <div className="space-y-6 pr-4">
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-start gap-4 md:gap-8 pb-6 border-b border-emerald-500/10 last:border-b-0 last:pb-0 group"
                >
                  {/* Monospace Citation Index */}
                  <div className="font-mono text-[10px] text-emerald-400 font-bold bg-[#090c12] border border-emerald-500/30 px-2.5 py-1 rounded-md shrink-0 select-none">
                    [0{idx + 1}]
                  </div>
                  
                  {/* Content detail */}
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider font-bold">
                        {ach.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white font-heading tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                      {ach.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed pt-1 max-w-xl">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (Right) */}
          <div className="lg:col-span-5 space-y-6 reveal-on-scroll delay-200">
            <h3 className="text-xs font-mono text-slate-400 tracking-widest uppercase mb-4 font-bold">
              Professional Credentials
            </h3>
            <div className="p-6 rounded-3xl border border-emerald-500/20 bg-slate-900/40 backdrop-blur-xl space-y-5 shadow-2xl transition-all duration-300">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 pb-4 border-b border-emerald-500/10 last:border-b-0 last:pb-0 group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all duration-300">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug group-hover:text-emerald-400 transition-colors">
                      {cert.title}
                    </h4>
                    <div className="text-[9px] font-mono text-slate-400 mt-0.5 uppercase tracking-wider">
                      {cert.issuer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
