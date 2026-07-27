'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  children,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-400 mb-4 uppercase border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        {eyebrow}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white font-sans max-w-3xl"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {children && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-6 w-full"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
