'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, Download } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/brand-icons';
import { SOCIAL, STATS } from '@/data/portfolio';
import { GlassIcon } from '@/components/ui/glass-icon';

function Typewriter({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index % texts.length];
    let timer: NodeJS.Timeout;

    if (!deleting && sub === current) {
      timer = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && sub === '') {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timer = setTimeout(
        () => {
          setSub((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
          );
        },
        deleting ? 40 : 80
      );
    }

    return () => clearTimeout(timer);
  }, [sub, deleting, index, texts]);

  return (
    <span className="inline-flex items-center text-blue-400 font-mono">
      <span>{sub}</span>
      <span className="ml-1 inline-block h-[1.1em] w-[3px] bg-blue-400 animate-pulse" />
    </span>
  );
}

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const titles = [
    'AI/ML Engineer',
    'Full-Stack LLM Architect',
    'DEM Telemetry Analyst',
    'Python & Next.js Developer',
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-6 shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Available for Full-Time Opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white font-sans leading-none mb-4"
            >
              Hi, I&apos;m <span className="text-gradient">Rom Padelkar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-300 mb-6 h-10 flex items-center justify-center lg:justify-start"
            >
              <span className="mr-3 text-slate-400 font-normal">Building as an</span>
              <Typewriter texts={titles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-400 max-w-2xl mb-8 leading-relaxed font-normal"
            >
              I architect autonomous video processing pipelines, predictive machine learning risk engines, and high-performance glassmorphism web applications. Passionate about bridging cutting-edge LLMs with robust enterprise software engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <button
                onClick={() => scrollTo('featured')}
                className="glass-button px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                <span>Explore Featured AI</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="glass px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/10 transition-all border border-white/10"
              >
                <span>Get In Touch</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <GlassIcon icon={Github} size="md" />
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <GlassIcon icon={Linkedin} size="md" />
              </a>
              <a href={`mailto:${SOCIAL.email}`} aria-label="Email Me">
                <GlassIcon icon={Mail} size="md" />
              </a>
              <a href={SOCIAL.resume} target="_blank" rel="noopener noreferrer" download="Rom_Padelkar_Resume.pdf" aria-label="Download Resume">
                <GlassIcon icon={Download} size="md" />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-72 sm:w-80 md:w-96 aspect-square rounded-3xl glass-strong glow-border p-3 shadow-2xl group"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 z-20 glass px-4 py-2.5 rounded-2xl border border-blue-400/30 shadow-xl flex items-center gap-2.5 bg-slate-950/80"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold tracking-tight text-slate-200">98.4% Whisper AI Accuracy</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -right-6 z-20 glass px-4 py-2.5 rounded-2xl border border-indigo-400/30 shadow-xl flex items-center gap-2.5 bg-slate-950/80"
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold tracking-tight text-slate-200">10x Video Pipeline Speedup</span>
              </motion.div>

              <div className="w-full h-full rounded-2xl overflow-hidden relative border border-white/10 bg-slate-900/50">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10" />
                <img
                  src="/profile.png"
                  alt="Rom Padelkar AI Engineer"
                  className="w-full h-full object-cover object-top filter contrast-105 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {STATS.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 flex items-center gap-4 relative overflow-hidden group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => scrollTo('featured')}
            aria-label="Scroll down to featured project"
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors group"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-700 group-hover:border-blue-400/50 flex justify-center pt-2 p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-blue-400"
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
