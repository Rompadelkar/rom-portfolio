'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, Search, X } from 'lucide-react';
import { ARTICLES } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';

export function Blog() {
  const [search, setSearch] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<typeof ARTICLES[0] | null>(null);

  const filtered = ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      a.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section id="blog" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading
          eyebrow="Technical Writing & Insights"
          title="Engineering Blog & Articles"
          subtitle="Deep-dive architectural breakdowns, system design patterns, and lessons learned from deploying LLMs in production environments."
        />

        <div className="max-w-md mx-auto mb-16 relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search articles by topic, LLM, or tag..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl glass border border-white/15 bg-slate-950/70 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 shadow-lg transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedArticle(article)}
              className="glass-card rounded-3xl p-7 flex flex-col justify-between border border-white/10 hover:border-blue-500/30 shadow-xl cursor-pointer group transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3 font-normal">
                  {article.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {article.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-slate-300 border border-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-bold uppercase tracking-wider text-blue-400 group-hover:text-blue-300">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 glass rounded-3xl border border-white/10 max-w-lg mx-auto">
            <BookOpen className="w-10 h-10 text-slate-500 mx-auto mb-3 animate-bounce" />
            <p className="text-slate-300 font-bold">No articles found matching &quot;{search}&quot;</p>
            <button
              onClick={() => setSearch('')}
              className="mt-4 text-xs font-bold uppercase tracking-wider text-blue-400 hover:underline"
            >
              Clear filter
            </button>
          </div>
        )}

        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setSelectedArticle(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-strong glow-border max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-10 shadow-2xl border-white/20 bg-slate-950/95 relative"
              >
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl glass hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {selectedArticle.date}
                  </span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 tracking-tight">
                  {selectedArticle.title}
                </h2>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedArticle.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-500/15 border border-blue-400/30 text-blue-300">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="prose prose-invert max-w-none space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p className="text-lg font-semibold text-slate-200 border-l-4 border-blue-500 pl-4 py-1 italic bg-white/5 rounded-r-xl">
                    {selectedArticle.excerpt}
                  </p>
                  <h4 className="text-white font-bold text-lg pt-4">1. Architectural Background & Motivation</h4>
                  <p>
                    When building enterprise systems that process high-frequency telemetry logs or asynchronous multimedia streams, traditional synchronous request-response loops immediately become bottlenecks. In our production tests, decoupling the ingestion layer from the ML inference worker nodes resulted in a 4x reduction in P99 latency.
                  </p>
                  <h4 className="text-white font-bold text-lg pt-2">2. LLM Prompt Engineering vs. Fine-Tuning</h4>
                  <p>
                    While fine-tuning small models (e.g. Qwen-2.5-7B) offers latency advantages, hybrid Retrieval-Augmented Generation (RAG) pipelines with structured JSON output enforcement provide superior reliability for root-cause incident summarization without catastrophic forgetting.
                  </p>
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/10 font-mono text-xs text-emerald-400 my-4">
                    {`// Example Async Worker Queue Trigger\nasync function dispatchTelemetryAnalysis(eventPayload: TelemetryEvent) {\n  const vectorContext = await ragRetriever.query(eventPayload.errorTrace);\n  return await llmEngine.summarize({ trace: eventPayload, context: vectorContext });\n}`}
                  </div>
                  <h4 className="text-white font-bold text-lg pt-2">3. Key Engineering Takeaways</h4>
                  <p>
                    Always enforce schema validation at model boundaries using Zod or Pydantic. Ensure observability metrics (token usage, latency per token, error rate) are emitted directly to Grafana / OpenTelemetry collectors.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="glass-button px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-lg"
                  >
                    Close Reader
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
