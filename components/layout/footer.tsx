'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Download, Mail } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/brand-icons';
import { SOCIAL } from '@/data/portfolio';
import { GlassIcon } from '@/components/ui/glass-icon';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/70 backdrop-blur-xl py-12 mt-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-8 w-8 rounded-full overflow-hidden border border-blue-400/60 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <img src="/profile.png" alt="Rom Padelkar" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                Rom <span className="text-gradient">Padelkar</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              AI/ML Engineer & Full-Stack Architect. Building autonomous LLM pipelines, predictive ML engines, and modern glassmorphism web applications.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <GlassIcon icon={Github} size="md" />
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <GlassIcon icon={Linkedin} size="md" />
            </a>
            <a href={`mailto:${SOCIAL.email}`} aria-label="Send Email">
              <GlassIcon icon={Mail} size="md" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SOCIAL.resume}
              download="Rom_Padelkar_Resume.pdf"
              className="glass-button inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white"
            >
              <Download className="h-3.5 w-3.5 text-blue-400" />
              <span>Resume PDF</span>
            </a>

            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              aria-label="Back to top"
              className="glass p-3 rounded-xl border border-blue-500/30 text-blue-400 hover:text-white hover:bg-blue-500/20 shadow-lg transition-colors"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Rom Padelkar. Crafted with Next.js 16, TypeScript, Tailwind CSS v4 & Three.js.</p>
          <p className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for full-time AI/ML Engineering roles & consulting.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
