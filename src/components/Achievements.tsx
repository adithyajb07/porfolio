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
      icon: <Sparkles className="w-5 h-5 text-accent-cyan" />,
      description: 'Led a 6-member team as Event Head at CHRIST University, Bengaluru, organizing a major inter-college event with over 60+ participants and a prize pool of ₹25K.'
    },
    {
      title: 'Government Registered Copyright',
      category: 'Research & Intellectual Property',
      icon: <Award className="w-5 h-5 text-accent-violet" />,
      description: 'Successfully registered an official copyright under my personal name for an original research idea recognized by the Government of India.'
    },
    {
      title: 'SIH 2024 Nominee',
      category: 'Hackathons',
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      description: 'Nominated for the Smart India Hackathon (SIH) 2024 for presenting an innovative financial assistant for UPI apps designed to simplify money management.'
    }
  ];

  const certifications: CertificationItem[] = [
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services (Jun 2025)',
      icon: <Award className="w-4 h-4 text-accent-cyan" />
    },
    {
      title: 'Machine Learning using Python',
      issuer: 'Simplilearn (Nov 2024)',
      icon: <Award className="w-4 h-4 text-accent-violet" />
    },
    {
      title: 'Introduction to Internet of Things',
      issuer: 'NPTEL - IIT Kharagpur (Nov 2025)',
      icon: <Award className="w-4 h-4 text-blue-500" />
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-bg-dark border-b border-border-subtle">
      {/* Background radial highlight */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-cyan/5 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        {/* Section Heading */}
        <div className="flex items-center space-x-4 mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
            Achievements & Certs.
          </h2>
          <div className="h-[1px] flex-grow bg-border-subtle" />
        </div>

        {/* Dual Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Achievements Timeline (Left) */}
          <div className="lg:col-span-7 space-y-6 reveal-on-scroll">
            <h3 className="text-xs font-mono text-text-secondary tracking-widest uppercase mb-4">
              Honors & Activities
            </h3>
            <div className="space-y-4">
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-5 rounded-2xl border border-border-subtle bg-bg-card/45 hover:bg-bg-card-hover hover:border-white/10 transition-all shadow-md group"
                >
                  <div className="p-3 h-fit rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors flex-shrink-0">
                    {ach.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-accent-cyan uppercase tracking-wider">
                      {ach.category}
                    </div>
                    <h4 className="text-base font-bold text-white font-sans tracking-tight">
                      {ach.title}
                    </h4>
                    <p className="text-xs md:text-sm text-text-secondary leading-relaxed pt-1">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (Right) */}
          <div className="lg:col-span-5 space-y-6 reveal-on-scroll delay-200">
            <h3 className="text-xs font-mono text-text-secondary tracking-widest uppercase mb-4">
              Professional Credentials
            </h3>
            <div className="p-6 rounded-2xl border border-border-subtle bg-bg-card/30 backdrop-blur-sm space-y-4 shadow-xl">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 pb-4 border-b border-border-subtle/50 last:border-b-0 last:pb-0 group"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white leading-snug group-hover:text-accent-cyan transition-colors">
                      {cert.title}
                    </h4>
                    <div className="text-[10px] font-mono text-text-secondary mt-0.5 uppercase tracking-wider">
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
