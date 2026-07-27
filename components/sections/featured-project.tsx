'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Code2, Layers, Cpu, Bot, Activity, LineChart, CheckCircle2, Terminal as TerminalIcon, Play } from 'lucide-react';
import { Github } from '@/components/ui/brand-icons';
import { PROJECTS } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';

export function FeaturedProject() {
  const featured = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const [simulating, setSimulating] = useState(false);
  const [step, setStep] = useState(0);

  const steps = [
    '1. Ingesting raw audio stream via FFmpeg...',
    '2. Running OpenAI Whisper word-level timestamps...',
    '3. Qwen LLM analyzing narrative tension & viral hooks...',
    '4. Rendering 9:16 vertical video & active speaker crop...',
    '✨ Reel successfully generated! Processing time: 42s.',
  ];

  const startSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setStep(current);
      if (current >= steps.length) {
        clearInterval(interval);
        setTimeout(() => setSimulating(false), 3000);
      }
    }, 900);
  };

  return (
    <section id="featured" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading
          eyebrow="Flagship Architecture"
          title="Featured AI Project"
          subtitle="Spotlighting an autonomous multi-stage video pipeline engineered to solve real-world content scaling bottlenecks."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong glow-border rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl border-white/15"
        >
          {/* Subtle background gradient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Project Info */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                <span>{featured.tag}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                {featured.title}
              </h3>

              <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
                {featured.desc}
              </p>

              {/* Problem Solved */}
              {featured.problemSolved && (
                <div className="mb-6 p-4 rounded-2xl glass border border-amber-500/20 bg-amber-500/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Problem Solved</span>
                  </h4>
                  <p className="text-sm text-slate-300 leading-normal">
                    {featured.problemSolved}
                  </p>
                </div>
              )}

              {/* Architecture Points */}
              {featured.architecture && (
                <div className="mb-8 w-full">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Architectural Pipeline
                  </h4>
                  <ul className="space-y-2.5">
                    {featured.architecture.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featured.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 shadow-lg"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source Code</span>
                </a>
                {featured.demo && (
                  <a
                    href={featured.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white border border-white/10 flex items-center gap-2 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 text-blue-400" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Interactive Terminal & Stats Simulation */}
            <div className="lg:col-span-6 w-full">
              <div className="rounded-2xl glass border border-blue-500/30 overflow-hidden shadow-2xl bg-slate-950/90">
                {/* Terminal Header */}
                <div className="px-4 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
                      <span>autocontent-ai-pipeline.py</span>
                    </span>
                  </div>
                  <button
                    onClick={startSimulation}
                    disabled={simulating}
                    className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50 transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>{simulating ? 'Running...' : 'Simulate Pipeline'}</span>
                  </button>
                </div>

                {/* Terminal Body */}
                <div className="p-5 font-mono text-xs text-slate-300 min-h-[220px] max-h-[260px] overflow-y-auto space-y-3 bg-black/40">
                  <div className="text-slate-500">$ python run_pipeline.py --video podcast_long.mp4 --output reel_viral.mp4</div>
                  
                  {step >= 1 && (
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-sky-300">
                      {steps[0]}
                    </motion.div>
                  )}
                  {step >= 2 && (
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-indigo-300">
                      {steps[1]}
                    </motion.div>
                  )}
                  {step >= 3 && (
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-purple-300">
                      {steps[2]}
                    </motion.div>
                  )}
                  {step >= 4 && (
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-blue-300">
                      {steps[3]}
                    </motion.div>
                  )}
                  {step >= 5 && (
                    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold mt-3">
                      {steps[4]}
                    </motion.div>
                  )}

                  {!simulating && step === 0 && (
                    <div className="text-slate-500 italic pt-6 text-center">
                      Click &quot;Simulate Pipeline&quot; above to test real-time AI clip synthesis.
                    </div>
                  )}
                </div>

                {/* Pipeline Stats Footer */}
                {featured.stats && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border-t border-white/10">
                    {featured.stats.map((s, idx) => (
                      <div key={idx} className="p-3 bg-slate-950/80 text-center">
                        <div className="text-base sm:text-lg font-black text-white">{s.value}</div>
                        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
