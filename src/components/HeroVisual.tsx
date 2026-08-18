import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Activity, Play, ShieldCheck } from 'lucide-react';


export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'metrics' | 'stack'>('terminal');
  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    'Initializing Neural Core v4.2...',
    'Loading CUDA PyTorch drivers...',
    'Binding Vision-Language Transformer...',
    'Epoch 100/100 — Loss: 0.0014 — Acc: 99.82%',
    'Model Weights Converged cleanly.',
    'System Status: READY & OPERATIONAL',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % logs.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [logs.length]);

  return (
    <div className="w-full h-full bg-[#090c12]/95 backdrop-blur-2xl flex flex-col justify-between p-6 select-none font-mono text-xs text-slate-200">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[10px] text-slate-400 font-bold ml-2 tracking-wider uppercase">
            system_console.py
          </span>
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-emerald-500/15">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-2.5 py-1 rounded-lg text-[10px] transition-all cursor-pointer ${
              activeTab === 'terminal'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Terminal
          </button>
          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-2.5 py-1 rounded-lg text-[10px] transition-all cursor-pointer ${
              activeTab === 'metrics'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Metrics
          </button>
          <button
            onClick={() => setActiveTab('stack')}
            className={`px-2.5 py-1 rounded-lg text-[10px] transition-all cursor-pointer ${
              activeTab === 'stack'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Stack
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="flex-1 my-4 flex flex-col justify-center overflow-hidden">
        {activeTab === 'terminal' && (
          <div className="space-y-3 font-mono text-[11px] leading-relaxed">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>~/ai_engine (master)</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-emerald-500/15 space-y-2 text-slate-300">
              <div className="text-emerald-400/90">
                <span className="text-slate-500">$ </span>python train_model.py --cuda --epochs=100
              </div>
              <div className="text-slate-400 text-[10px] space-y-1 pt-1">
                {logs.slice(0, logIndex + 1).map((log, i) => (
                  <div key={i} className="flex items-center gap-2 animate-fade-in">
                    <span className="text-emerald-400">✔</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live Inference Stream
              </span>
              <span className="text-emerald-400 font-bold">Latency: 12ms</span>
            </div>
          </div>
        )}

        {activeTab === 'metrics' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-emerald-400" /> Hardware Accelerator
              </span>
              <span className="text-emerald-400 font-bold">NVIDIA CUDA FP16</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">Model Precision</span>
                <span className="text-white font-bold">99.8%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 w-[99.8%] rounded-full shadow-[0_0_10px_#10b981]" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">Tensor Compute Capacity</span>
                <span className="text-white font-bold">94.2%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-teal-400 w-[94.2%] rounded-full" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 text-[10px]">
              <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">Batch Size</span>
                <span className="text-emerald-400 font-bold">64</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">Optim</span>
                <span className="text-emerald-400 font-bold">AdamW</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'stack' && (
          <div className="space-y-3 animate-fade-in">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-400" /> Production Ecosystem
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'PyTorch / CUDA', type: 'Deep Learning' },
                { name: 'TensorFlow', type: 'Neural Nets' },
                { name: 'OpenCV / YOLO', type: 'Computer Vision' },
                { name: 'React / Node.js', type: 'Web Architect' },
                { name: 'Docker / FastApi', type: 'Container & API' },
                { name: 'Tailwind / TS', type: 'Frontend System' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-slate-950/80 border border-emerald-500/15 flex flex-col justify-between hover:border-emerald-400/40 transition-colors"
                >
                  <span className="text-white font-bold text-[11px]">{item.name}</span>
                  <span className="text-[9px] text-emerald-400">{item.type}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer System Status */}
      <div className="pt-3 border-t border-emerald-500/15 flex items-center justify-between text-[10px] text-slate-400">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span className="font-bold">Verified AI Systems Engineer</span>
        </div>
        <div className="flex items-center gap-1 text-slate-500">
          <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
          <span>Active Session</span>
        </div>
      </div>
    </div>
  );
};
