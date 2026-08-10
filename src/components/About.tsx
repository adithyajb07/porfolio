import React, { useState } from 'react';
import farewellImg from '../assets/images/farewell.jpeg';
import { cgpaData } from '../data/experienceData';

export const About: React.FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // SVG dimensions for the CGPA Chart
  const width = 450;
  const height = 180;
  const padding = 30;

  // Chart min/max values
  const minGpa = 3.80;
  const maxGpa = 4.00;

  // Map values to SVG coordinates
  const getCoordinates = (index: number, gpa: number) => {
    const x = padding + (index * (width - padding * 2)) / (cgpaData.length - 1);
    const y = height - padding - ((gpa - minGpa) * (height - padding * 2)) / (maxGpa - minGpa);
    return { x, y };
  };

  const points = cgpaData.map((d, i) => getCoordinates(i, d.cgpa));

  // Generate SVG path string
  let pathD = '';
  if (points.length > 0) {
    pathD = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      // Curved line calculations
      const cpX1 = points[i - 1].x + (points[i].x - points[i - 1].x) / 2;
      const cpY1 = points[i - 1].y;
      const cpX2 = points[i - 1].x + (points[i].x - points[i - 1].x) / 2;
      const cpY2 = points[i].y;
      pathD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${points[i].x} ${points[i].y}`;
    }
  }

  // Generate Area SVG path string for the gradient fill beneath the curve
  const areaD = points.length > 0 
    ? `${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`
    : '';

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-bg-dark border-b border-border-subtle">
      {/* Background details */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent-violet/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        {/* Section Heading */}
        <div className="flex items-center space-x-4 mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
            A little about me.
          </h2>
          <div className="h-[1px] flex-grow bg-border-subtle" />
        </div>

        {/* Narrative & Photo grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Side: Biography text and Image */}
          <div className="lg:col-span-7 space-y-8 reveal-on-scroll">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img
                src={farewellImg}
                alt="Adithya Jisha Biju"
                className="w-44 h-44 md:w-52 md:h-52 rounded-2xl object-cover border-2 border-border-subtle shadow-2xl flex-shrink-0"
              />
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white font-sans">
                  Adithya Jisha Biju
                </h3>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  I’m driven by a passion for using technology to turn ideas into practical solutions. With a strong background in computer science and a growing focus on AI, I enjoy working with concepts like machine learning, neural networks, and data analysis.
                </p>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  What excites me most is applying what I learn to real-world problems, creating solutions that are both effective and innovative. I prioritize building practical systems that deliver high accuracy and seamless user experiences.
                </p>
              </div>
            </div>

            {/* Mindsets & Strengths strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border-subtle">
              <div className="p-4 rounded-xl border border-border-subtle bg-bg-card/25">
                <div className="text-accent-cyan font-bold text-sm mb-1">Adaptability</div>
                <div className="text-xs text-text-secondary">Quick to adjust to new tools, stacks, and changing project targets.</div>
              </div>
              <div className="p-4 rounded-xl border border-border-subtle bg-bg-card/25">
                <div className="text-accent-violet font-bold text-sm mb-1">Problem-Solving</div>
                <div className="text-xs text-text-secondary">Analytical developer focused on logic and backend data integrity.</div>
              </div>
              <div className="p-4 rounded-xl border border-border-subtle bg-bg-card/25">
                <div className="text-blue-400 font-bold text-sm mb-1">Continuous Learner</div>
                <div className="text-xs text-text-secondary">Eagerly exploring new layers in AI systems, ML security, and LLMs.</div>
              </div>
            </div>
          </div>

          {/* Right Side: Currently Card & CGPA Progress */}
          <div className="lg:col-span-5 space-y-8 reveal-on-scroll delay-200">
            {/* Currently Card */}
            <div className="p-6 rounded-2xl border border-border-subtle bg-gradient-to-br from-bg-card to-[#151515] relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-cyan/5 rounded-full filter blur-xl pointer-events-none" />
              <div className="flex items-center space-x-2.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-text-secondary uppercase">
                  Current Status
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] font-mono text-text-secondary mb-1">🎓 STUDYING</div>
                  <div className="text-sm font-semibold text-white">B.Tech Computer Science Engineering — AI/ML</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-text-secondary mb-1">💼 WORKING AS</div>
                  <div className="text-sm font-semibold text-white">Software Intern @ HealthEdge</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-text-secondary mb-1">🔨 BUILDING</div>
                  <div className="text-sm font-semibold text-white">Enterprise software modules and image forensic systems</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-text-secondary mb-1">📚 EXPLORING</div>
                  <div className="text-sm font-semibold text-white">Advanced LLM guards, digital forensics, and neural nets</div>
                </div>
              </div>
            </div>

            {/* Academic CGPA Curve */}
            <div className="p-6 rounded-2xl border border-border-subtle bg-bg-card/40 backdrop-blur-sm shadow-xl">
              <h4 className="text-sm font-bold text-white font-sans mb-3 flex items-center justify-between">
                <span>Academic CGPA Curve</span>
                <span className="text-[10px] text-accent-cyan font-mono">Christ University</span>
              </h4>
              
              {/* SVG Line Graph */}
              <div className="relative">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#00f0ff" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid Lines */}
                  {[3.80, 3.90, 4.00].map((val, idx) => {
                    const y = height - padding - ((val - minGpa) * (height - padding * 2)) / (maxGpa - minGpa);
                    return (
                      <g key={idx}>
                        <line
                          x1={padding}
                          y1={y}
                          x2={width - padding}
                          y2={y}
                          stroke="rgba(255,255,255,0.03)"
                          strokeWidth="1"
                        />
                        <text
                          x={padding - 5}
                          y={y + 3}
                          fill="rgba(255, 255, 255, 0.4)"
                          fontSize="9"
                          fontFamily="monospace"
                          textAnchor="end"
                        >
                          {val.toFixed(2)}
                        </text>
                      </g>
                    );
                  })}

                  {/* X Axis Labels */}
                  {cgpaData.map((d, idx) => {
                    const { x } = getCoordinates(idx, d.cgpa);
                    return (
                      <text
                        key={idx}
                        x={x}
                        y={height - 10}
                        fill="rgba(255, 255, 255, 0.5)"
                        fontSize="9"
                        fontFamily="monospace"
                        textAnchor="middle"
                      >
                        {d.semester}
                      </text>
                    );
                  })}

                  {/* Gradient Area under path */}
                  {areaD && <path d={areaD} fill="url(#areaGrad)" />}

                  {/* Line Curve Path */}
                  {pathD && (
                    <path
                      d={pathD}
                      fill="none"
                      stroke="url(#lineGrad)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  )}

                  {/* Interactive Nodes */}
                  {points.map((pt, idx) => (
                    <g key={idx}>
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="4"
                        fill="#050505"
                        stroke={idx % 2 === 0 ? '#00f0ff' : '#8b5cf6'}
                        strokeWidth="2"
                        className="cursor-pointer transition-all duration-200 hover:scale-150"
                        onMouseEnter={() => setHoveredPoint(idx)}
                        onMouseLeave={() => setHoveredPoint(null)}
                      />
                    </g>
                  ))}
                </svg>

                {/* Floating Tooltip Indicator */}
                {hoveredPoint !== null && (
                  <div
                    className="absolute z-30 px-2 py-1 rounded bg-bg-card border border-accent-cyan text-[10px] font-mono text-white pointer-events-none shadow-lg -translate-x-1/2 -translate-y-full"
                    style={{
                      left: `${((points[hoveredPoint].x / width) * 100).toFixed(1)}%`,
                      top: `${((points[hoveredPoint].y / height) * 100 - 8).toFixed(1)}%`,
                    }}
                  >
                    GPA: {cgpaData[hoveredPoint].cgpa}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
