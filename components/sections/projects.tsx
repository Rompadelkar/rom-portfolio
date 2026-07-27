'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Code2, Layers, Cpu, Bot, Activity, LineChart } from 'lucide-react';
import { Github } from '@/components/ui/brand-icons';
import { PROJECTS } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio Architecture"
          title="Deployed AI & ML Projects"
          subtitle="A curated showcase of autonomous agents, fraud detection risk engines, full-stack monitoring dashboards, and LLM web applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => {
            const IconComponent = project.icon || Code2;
            const isFeatured = project.featured;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group interactive-card relative rounded-3xl glass-card glow-border p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                  isFeatured ? 'md:col-span-2 border-blue-500/30' : ''
                }`}
              >
                {/* Mouse-tracking Spotlight Glow Effect */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  style={{
                    background:
                      'radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(59, 130, 246, 0.15), transparent 40%)',
                  }}
                />

                <div className="relative z-10">
                  {/* Card Header: Icon + Tag */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${project.accent || 'from-blue-500 to-indigo-500'} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                      {isFeatured && <Sparkles className="w-3 h-3 text-amber-400" />}
                      <span>{project.tag}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {project.desc}
                  </p>

                  {/* Problem Solved snippet if available */}
                  {project.problemSolved && !isFeatured && (
                    <div className="mb-6 p-3.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-400">
                      <span className="font-bold text-slate-200 block mb-1">💡 Impact:</span>
                      {project.problemSolved}
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-300 group-hover:border-blue-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Links */}
                <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-blue-400" />
                    <span>Source Code</span>
                  </a>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-button px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white inline-flex items-center gap-1.5 shadow-md"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-semibold text-slate-500 italic">
                      Private Repository / Enterprise Demo
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
