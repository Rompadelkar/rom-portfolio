'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ChevronRight } from 'lucide-react';
import { NAV, SOCIAL } from '@/data/portfolio';

interface NavbarProps {
  activeId?: string;
}

export function Navbar({ activeId: propActiveId }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState(propActiveId || 'hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', ...NAV.map((n) => n.id)];
      const scrollPos = window.scrollY + 250;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setOpen(false);
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <nav
          className={`glass-strong glow-border flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? 'shadow-[0_10px_40px_-10px_rgba(59,130,246,0.25)] border-white/15 bg-slate-950/85' : 'bg-slate-950/60'
          }`}
        >
          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Scroll to Top"
          >
            <div className="relative h-9 w-9 rounded-full overflow-hidden border-2 border-blue-400/80 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-transform duration-300 group-hover:scale-105">
              <img
                src="/profile.png"
                alt="Rom Padelkar Profile"
                className="w-full h-full object-cover object-top scale-95"
              />
            </div>
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
              Rom <span className="text-gradient">Padelkar</span>
            </span>
          </button>

          <div className="hidden items-center gap-5 lg:flex">
            {NAV.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                    isActive ? 'text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-blue-500/20 border border-blue-400/40 -z-10 shadow-[0_0_15px_rgba(59,130,246,0.25)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={SOCIAL.resume}
              target="_blank"
              rel="noopener noreferrer"
              download="Rom_Padelkar_Resume.pdf"
              className="glass-button inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Download className="h-3.5 w-3.5 text-blue-400 animate-bounce" />
              <span>Resume</span>
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Mobile Menu"
            className="md:hidden text-slate-200 p-2 rounded-xl glass hover:bg-white/10 focus:outline-none"
          >
            {open ? <X className="h-5 w-5 text-blue-400" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 glass-strong glow-border rounded-2xl p-4 shadow-2xl border-white/15"
            >
              <div className="flex flex-col gap-1.5">
                {NAV.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      activeId === item.id
                        ? 'bg-blue-500/20 text-white border border-blue-500/30 shadow-md'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`h-4 w-4 ${activeId === item.id ? 'text-blue-400' : 'text-slate-500'}`} />
                  </button>
                ))}

                <div className="pt-2 mt-2 border-t border-white/10">
                  <a
                    href={SOCIAL.resume}
                    download="Rom_Padelkar_Resume.pdf"
                    className="glass-button flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-lg"
                  >
                    <Download className="h-4 w-4 text-blue-400" />
                    <span>Download Resume (PDF)</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
