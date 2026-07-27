'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { EXPERIENCE, EDUCATION, CERTS } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';

export function About() {
  const [tab, setTab] = useState<'experience' | 'education' | 'certs'>('experience');

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading
          eyebrow="Career Journey & Roadmap"
          title="About Me & Experience"
          subtitle="Combining strong academic foundations in Systems Engineering with real-world enterprise Digital Experience Monitoring (DEM) telemetry and LLM pipeline development."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong glow-border rounded-3xl p-8 sm:p-10 mb-16 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Architecting AI that solves real operational friction.
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                I am a final-year Computer Engineering undergraduate at Shah And Anchor Kutchhi Engineering College, Mumbai (CGPA: 7.4/10). During my internship at <strong className="text-blue-400">QualityKiosk Technologies</strong> within the Digital Experience Monitoring (DEM) team, I engineered and validated AI Buddy solutions that synthesize complex telemetry logs into actionable root-cause incident summaries for SRE teams.
              </p>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                My passion lies at the intersection of <strong className="text-indigo-300">Large Language Models</strong>, <strong className="text-cyan-300">Predictive Machine Learning</strong>, and <strong className="text-blue-300">Asynchronous Backend Architecture</strong>. I don&apos;t just train models—I build production-grade software wrappers, clean REST APIs, and futuristic glassmorphism user interfaces that deliver intuitive experiences.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Mumbai / Navi Mumbai, India</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-sm font-semibold text-slate-200">B.Tech Computer Engineering</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-sm font-semibold text-slate-200">AI Monitoring & Telemetry</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-sm font-semibold text-slate-200">6 Professional Certifications</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div id="experience" className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl glass border border-white/10 shadow-lg">
            <button
              onClick={() => setTab('experience')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                tab === 'experience'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experience (DEM)</span>
            </button>

            <button
              onClick={() => { setTab('education'); const el = document.getElementById('education'); if(el) el.scrollIntoView({behavior:'smooth'}); }}
              id="education-tab-btn"
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                tab === 'education'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>

            <button
              onClick={() => setTab('certs')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                tab === 'certs'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </button>
          </div>
        </div>

        <div id="education" className="max-w-4xl mx-auto">
          {tab === 'experience' && (
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500 before:to-transparent">
              {EXPERIENCE.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-14 sm:pl-16 group"
                >
                  <div className="absolute left-3 sm:left-5 top-1.5 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-slate-950 flex items-center justify-center text-white shadow-[0_0_15px_rgba(59,130,246,0.8)] group-hover:scale-125 transition-transform">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>

                  <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 group-hover:border-blue-500/30 shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h4 className="text-xl sm:text-2xl font-black text-white group-hover:text-blue-300 transition-colors">
                        {item.role}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 self-start sm:self-auto">
                        <Calendar className="w-3 h-3" />
                        <span>{item.period}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-400 mb-5">
                      <span className="text-white font-bold">{item.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {item.location}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {item.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {item.skills && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {item.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-slate-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {tab === 'education' && (
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-transparent">
              {EDUCATION.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-14 sm:pl-16 group"
                >
                  <div className="absolute left-3 sm:left-5 top-1.5 -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 border-4 border-slate-950 flex items-center justify-center text-white shadow-[0_0_15px_rgba(99,102,241,0.8)] group-hover:scale-125 transition-transform">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>

                  <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 group-hover:border-indigo-500/30 shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h4 className="text-xl sm:text-2xl font-black text-white group-hover:text-indigo-300 transition-colors">
                        {item.degree}
                      </h4>
                      {item.year && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 self-start sm:self-auto">
                          <Calendar className="w-3 h-3" />
                          <span>{item.year}</span>
                        </span>
                      )}
                    </div>

                    <div className="text-base font-bold text-white mb-4">
                      {item.school}
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 text-sm font-semibold text-indigo-200">
                      🎯 {item.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {tab === 'certs' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CERTS.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="glass-card rounded-2xl p-6 flex items-center gap-4 border border-white/10 hover:border-amber-500/40 shadow-lg group"
                >
                  <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {cert.split(' (')[0]}
                    </h4>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mt-1">
                      {cert.includes('(') ? cert.split(' (')[1].replace(')', '') : 'Verified Certification'}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
