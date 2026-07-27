'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI & LLMs', 'Backend & APIs', 'Frontend & Web', 'DevOps & Databases'];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading
          eyebrow="Technical Proficiency"
          title="Skills & Technologies"
          subtitle="Enterprise-grade production stack spanning generative AI reasoning, asynchronous Python backends, and modern frontend design."
        />

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {categories.map((cat, idx) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none ${
                  active
                    ? 'text-white bg-blue-600/30 border border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                    : 'glass text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
                {active && (
                  <motion.div
                    layoutId="skill-tab-pill"
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between group border border-white/10 hover:border-blue-500/30 shadow-lg"
                >
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <div className="text-sm font-black text-blue-400 font-mono">
                      {skill.level}%
                    </div>
                  </div>

                  <div className="w-full h-2 rounded-full bg-slate-900/80 overflow-hidden p-0.5 border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.05, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
