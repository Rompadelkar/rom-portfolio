'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Download, Loader2 } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/brand-icons';
import { SOCIAL } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';
import { GlassIcon } from '@/components/ui/glass-icon';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrorMessage('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error occurred. Please email directly at rompadelkar236@gmail.com');
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading
          eyebrow="Initiate Communication"
          title="Get In Touch"
          subtitle="Interested in recruiting for full-time AI Engineering roles, collaborating on LLM architectures, or consulting? Reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-strong glow-border rounded-3xl p-8 sm:p-10 shadow-2xl border-white/15 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight mb-3">
                Let&apos;s Build Something Incredible.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you have an executive recruiter inquiry, a question about my DEM telemetry pipelines, or simply want to connect, my inbox is always open.
              </p>
            </div>

            <div className="space-y-5 pt-2">
              <a
                href={`mailto:${SOCIAL.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl glass hover:bg-white/10 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Direct</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {SOCIAL.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Location</div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    Mumbai / Navi Mumbai, India
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Connect on Social & Professional Networks
              </div>
              <div className="flex items-center gap-4">
                <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <GlassIcon icon={Linkedin} size="md" />
                </a>
                <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <GlassIcon icon={Github} size="md" />
                </a>
                <a
                  href={SOCIAL.resume}
                  download="Rom_Padelkar_Resume.pdf"
                  className="glass-button ml-auto px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white inline-flex items-center gap-2 shadow-lg"
                >
                  <Download className="w-3.5 h-3.5 text-blue-400" />
                  <span>Resume PDF</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card glow-border rounded-3xl p-8 sm:p-10 shadow-2xl border-white/15"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Your Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Jane Doe / Recruiter"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border border-white/15 bg-slate-950/70 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Email Address <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border border-white/15 bg-slate-950/70 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Subject / Opportunity
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Full-Time AI Engineer Role / Project Collaboration"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border border-white/15 bg-slate-950/70 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Message <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Hi Rom, we were impressed by your AutoContentAI architecture and would love to discuss an AI/ML role with our team..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border border-white/15 bg-slate-950/70 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Message sent successfully! Rom will respond to your inbox within 24 hours.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full glass-button py-4 rounded-2xl text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-blue-400" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
