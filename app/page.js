"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Mail,
  Download,
  ArrowUp,
  ExternalLink,
  Menu,
  X,
  Code2,
  Briefcase,
  GraduationCap,
  Sparkles,
  Cpu,
  Database,
  Cloud,
  Zap,
  Terminal,
  Brain,
  Rocket,
  Award,
  MapPin,
  Phone,
  FileText,
  ChevronRight,
  Layers,
  Wrench,
  Globe,
  Bot,
  LineChart,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/* ---------------- DATA ---------------- */

const NAV = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SOCIAL = {
  github: "https://github.com/Rompadelkar",
  linkedin: "https://linkedin.com/in/rom-padelkar-b5b79224a",
  email: "padelkarrom99@gmail.com",
  resume: "/Rom_Padelkar_Resume.pdf",
};

const STATS = [
  { label: "AI Projects", value: "5+", icon: Brain },
  { label: "Internship Experience", value: "4 mo", icon: Briefcase },
  { label: "Technologies", value: "15+", icon: Layers },
  { label: "Certifications", value: "6", icon: Award },
];

const PROJECTS = [
  {
    title: "AutoContentAI",
    tag: "AI-Powered Shorts Generator",
    desc: "AI video automation pipeline that transforms long-form content into viral short-form reels using LLM-based clip detection, auto-transcription, subtitles, vertical reel formatting, and hook generation.",
    tech: ["Python", "Whisper AI", "Qwen LLM", "FastAPI", "FFmpeg"],
    github: "https://github.com/Rompadelkar",
    demo: null,
    icon: Sparkles,
    accent: "from-blue-500 to-indigo-500",
  },
  {
    title: "AI Fraud Detection System",
    tag: "ML-Powered Risk Engine",
    desc: "Deployed an ML-powered fraud detection system analyzing digital banking transactions and predicting fraud probability with high accuracy using ensemble models and interactive visualizations.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Plotly"],
    github: "https://github.com/Rompadelkar",
    demo: "https://ai-fraud-detection-a66ryc7xizsyjygvbycrv.streamlit.app",
    icon: Activity,
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI Personal Finance Advisor",
    tag: "Gemini-Powered Finance Coach",
    desc: "Full-stack AI web app that lets users track expenses, analyze spending patterns, and receive intelligent financial advice powered by Google Gemini API.",
    tech: ["Python", "Streamlit", "SQLite", "Gemini API", "Pandas"],
    github: "https://github.com/Rompadelkar",
    demo: null,
    icon: LineChart,
    accent: "from-indigo-500 to-purple-500",
  },
  {
    title: "AI Root Cause Detector",
    tag: "Intelligent Log Analyzer",
    desc: "AI log analysis tool that automatically identifies the root cause of system failures from application and server logs using Gemini AI reasoning.",
    tech: ["Python", "Gemini AI", "Pandas", "Streamlit"],
    github: "https://github.com/Rompadelkar",
    demo: "https://ai-root-cause-detector-f9npek6cxu7ksau8fcrezc.streamlit.app",
    icon: Bot,
    accent: "from-blue-500 to-sky-500",
  },
  {
    title: "Mini Dynatrace",
    tag: "Full-Stack Monitoring Dashboard",
    desc: "Real-time system monitoring dashboard tracking CPU and memory usage — inspired by enterprise DEM platforms like Dynatrace.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Rompadelkar",
    demo: null,
    icon: Cpu,
    accent: "from-sky-500 to-indigo-500",
  },
];

const SKILLS = [
  { name: "Python", icon: Code2 },
  { name: "FastAPI", icon: Zap },
  { name: "React", icon: Globe },
  { name: "Streamlit", icon: LineChart },
  { name: "MongoDB", icon: Database },
  { name: "SQL", icon: Database },
  { name: "LLMs", icon: Brain },
  { name: "Whisper AI", icon: Bot },
  { name: "FFmpeg", icon: Wrench },
  { name: "REST APIs", icon: Cloud },
  { name: "Vercel", icon: Rocket },
  { name: "Git", icon: Terminal },
  { name: "Prompt Engineering", icon: Sparkles },
  { name: "Supabase", icon: Database },
  { name: "JavaScript", icon: Code2 },
];

const EXPERIENCE = [
  {
    role: "AI Monitoring & Data Analytics Intern",
    company: "QualityKiosk Technologies",
    period: "Dec 2025 — Mar 2026",
    location: "Navi Mumbai, India",
    points: [
      "Worked within the Digital Experience Monitoring (DEM) team on AI Buddy solutions for intelligent alerting.",
      "Tested AI-assisted monitoring workflows, analyzed system metrics and logs, validated AI-generated insights, and identified false positives.",
      "Collaborated cross-functionally to ensure reliable digital experience monitoring at scale.",
    ],
  },
  {
    role: "Brand Ambassador",
    company: "Viral Fission",
    period: "Apr 2022 — Mar 2023",
    location: "India",
    points: [
      "Represented and promoted brand campaigns across colleges, building communication and stakeholder engagement skills.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "B.Tech — Computer Engineering",
    school: "Shah And Anchor Kutchhi Engineering College, Mumbai",
    detail: "CGPA: 7.4 / 10",
  },
  {
    degree: "HSC (12th)",
    school: "St. Xavier's College, Mumbai",
    detail: "Grade: 80%",
  },
  {
    degree: "SSC (10th)",
    school: "Don Bosco High School, Mumbai",
    detail: "Grade: 72%",
  },
];

const CERTS = [
  "Generative AI Foundation (upGrad)",
  "Python Programming (Infosys Springboard)",
  "Cloud Computing (Infosys Springboard)",
  "Cybersecurity (Cisco)",
  "PHP & MySQL Training (IIT Bombay)",
  "Power BI Workshop (Belox)",
];

/* ---------------- COMPONENTS ---------------- */

function Particles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Moved to useEffect to avoid hydration mismatch in Next.js 16
    setParticles(
      Array.from({ length: 36 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.6,
        duration: Math.random() * 20 + 12,
        delay: Math.random() * 8,
        opacity: Math.random() * 0.4 + 0.15,
      })),
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            filter: "blur(0.5px)",
            boxShadow: "0 0 8px rgba(96,165,250,0.8)",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [p.opacity, p.opacity * 1.6, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function Loader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1300);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#05070d]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-20 w-20">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-blue-500/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-400 border-r-indigo-400"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 blur-xl opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="h-8 w-8 text-blue-300" />
          </div>
        </div>
        <motion.p
          className="text-sm font-mono tracking-widest text-blue-300/70"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          INITIALIZING PORTFOLIO
        </motion.p>
      </div>
    </motion.div>
  );
}

function Navbar({ activeId }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`glass-strong glow-border flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${scrolled ? "shadow-[0_8px_40px_-12px_rgba(59,130,246,0.4)]" : ""}`}
        >
          <button
            onClick={() => go("hero")}
            className="group flex items-center gap-2"
          >
            <div className="relative h-8 w-8 rounded-full overflow-hidden border-2 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <img
                src="/profile.png"
                alt="Rom Padelkar"
                className="w-full h-full object-cover object-top scale-95"
              />
            </div>
            <span className="text-sm font-semibold tracking-tight text-white">
              Rom <span className="text-gradient">Padelkar</span>
            </span>
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`nav-link text-sm font-medium text-slate-300 transition-colors hover:text-white ${activeId === n.id ? "active text-white" : ""}`}
              >
                {n.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <a
                href={SOCIAL.resume}
                target="_blank"
                className="flex items-center justify-center gap-2"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden text-slate-200 p-2 rounded-lg hover:bg-white/5"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass-strong glow-border rounded-2xl p-4"
            >
              <div className="flex flex-col gap-1">
                {NAV.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => go(n.id)}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5"
                  >
                    {n.label}{" "}
                    <ChevronRight className="h-4 w-4 text-slate-500" />
                  </button>
                ))}
                <Button className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500">
                  <a
                    href={SOCIAL.resume}
                    download
                    className="flex items-center justify-center w-full"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(59,130,246,0.7)]"
    />
  );
}

function Typewriter({ texts, className = "" }) {
  const [i, setI] = useState(0);
  const [sub, setSub] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = texts[i % texts.length];
    let t;
    if (!del && sub === current) {
      t = setTimeout(() => setDel(true), 1600);
    } else if (del && sub === "") {
      setDel(false);
      setI((v) => v + 1);
    } else {
      t = setTimeout(
        () => {
          setSub((prev) =>
            del
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1),
          );
        },
        del ? 35 : 60,
      );
    }
    return () => clearTimeout(t);
  }, [sub, del, i, texts]);

  return (
    <span className={className}>
      {sub}
      <span className="caret ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[3px] bg-blue-400" />
    </span>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs font-medium tracking-wider text-blue-300 uppercase"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold tracking-tight text-white"
      >
        {title}
      </motion.h2>
      <div className="heading-bar mt-5" />
      {children && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-5 max-w-2xl text-slate-400"
        >
          {children}
        </motion.p>
      )}
    </div>
  );
}

/* ---------------- SECTIONS ---------------- */

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden pt-32 pb-20"
    >
      <div className="absolute inset-0 bg-grid" />
      <Particles />

      <div className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[520px] w-[520px] rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            Available for AI/ML opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02]"
          >
            <span className="block text-white">Rom</span>
            <span className="block text-gradient drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]">
              Padelkar
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-slate-300 font-medium"
          >
            <Typewriter
              texts={[
                "AI/ML Engineer",
                "Generative AI Builder",
                "Full-Stack AI Applications",
                "LLM · FastAPI · React",
              ]}
              className="text-blue-200"
            />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mx-auto mt-5 max-w-2xl text-slate-400 md:text-lg"
          >
            Building AI products, automation systems, and scalable intelligent
            applications — from LLM-powered pipelines to real-time monitoring
            tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 py-2 rounded-xl flex items-center"
            >
              <span className="mr-2 flex items-center justify-center rounded-full bg-white/10 p-1.5">
                <Rocket className="h-4 w-4" />
              </span>
              View Projects
            </Button>
            <Button className="border-white/15 bg-white/5 hover:bg-white/10 text-white backdrop-blur px-5 py-2 rounded-xl">
              <a href={SOCIAL.resume} download className="flex items-center">
                <span className="mr-2 flex items-center justify-center rounded-full bg-white/10 p-1.5">
                  <Download className="h-4 w-4" />
                </span>
                Download Resume
              </a>
            </Button>
            <Button className="border-white/15 bg-white/5 hover:bg-white/10 text-white backdrop-blur px-5 py-2 rounded-lg">
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.2 11.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.7-.7 2.1-1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6A4.7 4.7 0 014 6.5c-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 015.8 0C15.3 3 16.3 3.3 16.3 3.3c.6 1.6.2 2.8.1 3.1a4.7 4.7 0 011.3 3.3c0 4.6-2.8 5.6-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            </Button>
            <Button className="border-white/15 bg-white/5 hover:bg-white/10 text-white backdrop-blur px-5 py-2 rounded-lg">
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.6c0-1.8 0-4.2-2.6-4.2-2.6 0-3 2-3 4V24h-5V8z" />
                </svg>
                LinkedIn
              </a>
            </Button>
          </motion.div>

          <div className="relative mt-16 hidden md:block">
            {[
              { Icon: Brain, x: "8%", y: "-30px", delay: 0 },
              { Icon: Code2, x: "88%", y: "-10px", delay: 0.6 },
              { Icon: Sparkles, x: "20%", y: "40px", delay: 1.2 },
              { Icon: Bot, x: "78%", y: "60px", delay: 0.3 },
              { Icon: Zap, x: "50%", y: "-50px", delay: 0.9 },
            ].map(({ Icon, x, y, delay }, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: x, top: y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + delay, duration: 0.6 }}
              >
                <motion.div
                  className="glass glow-border grid h-12 w-12 place-items-center rounded-xl"
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay,
                  }}
                >
                  <Icon className="h-5 w-5 text-blue-300" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-xs text-slate-500"
        >
          <span>Scroll</span>
          <div className="h-8 w-5 rounded-full border border-slate-600 p-1">
            <motion.div
              className="h-1.5 w-1.5 rounded-full bg-blue-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering AI from idea to production"
        />
        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="glass glow-border rounded-2xl bg-transparent border-0 p-7 md:p-9">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-500/30 ring-1 ring-blue-400/30">
                  <Sparkles className="h-5 w-5 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">Who I am</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                I&apos;m an{" "}
                <span className="text-white font-medium">
                  AI/ML-focused Computer Engineering graduate
                </span>{" "}
                with hands-on experience building{" "}
                <span className="text-blue-300">Generative AI</span>, automation
                pipelines, and full-stack AI applications using{" "}
                <span className="text-white">
                  Python, LLMs, FastAPI, Streamlit, and React
                </span>
                .
              </p>
              <p className="mt-4 text-slate-300 leading-relaxed">
                I&apos;ve shipped production-style AI systems — from AI-powered
                shorts generation and fraud detection, to intelligent monitoring
                and root-cause analysis tools. I&apos;m passionate about
                building scalable AI products that turn complex models into
                delightful user experiences.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Generative AI",
                  "LLMs",
                  "Automation",
                  "Full-Stack",
                  "Analytics",
                ].map((t) => (
                  <Badge
                    key={t}
                    className="bg-blue-500/10 text-blue-200 border border-blue-500/20 hover:bg-blue-500/20"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass glow-border rounded-2xl p-5 transition-all hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.45)]"
              >
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 ring-1 ring-blue-400/20">
                  <s.icon className="h-5 w-5 text-blue-300" />
                </div>
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, index }) {
  const Icon = p.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <div className="glass glow-border relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.5)]">
        <div className="relative mb-5 h-44 overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 ring-1 ring-white/5">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-20 group-hover:opacity-30 transition-opacity`}
          />
          <div className="absolute inset-0 bg-grid opacity-40" />
          <motion.div
            className="absolute inset-0 grid place-items-center"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className={`relative grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br ${p.accent} shadow-[0_0_60px_rgba(59,130,246,0.5)]`}
            >
              <Icon className="h-9 w-9 text-white" />
              <div className="absolute inset-0 rounded-2xl bg-blue-400/30 blur-2xl" />
            </div>
          </motion.div>
          <div className="absolute top-3 left-3 flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-amber-400/70" />
            <span className="h-2 w-2 rounded-full bg-green-400/70" />
          </div>
        </div>

        <div className="mb-1 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors">
            {p.title}
          </h3>
          <span className="text-[10px] font-mono uppercase tracking-wider text-blue-300/70">
            0{index + 1}
          </span>
        </div>
        <p className="text-xs font-medium text-blue-300/80">{p.tag}</p>
        <p className="mt-3 text-sm text-slate-400 leading-relaxed">{p.desc}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tech.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.04 }}
              className="rounded-md border border-blue-500/20 bg-blue-500/5 px-2 py-0.5 text-[11px] font-medium text-blue-200 hover:bg-blue-500/15 hover:border-blue-400/40 transition-colors"
            >
              {t}
            </motion.span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2">
          <Button className="border-white/10 bg-white/5 hover:bg-white/10 text-white">
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <span className="mr-1.5 h-3.5 w-3.5" /> Code
            </a>
          </Button>
          {p.demo ? (
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white">
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live Demo
              </a>
            </Button>
          ) : (
            <span className="text-xs text-slate-500 px-2">Private repo</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Featured Work" title="Projects I'm proud of">
          A selection of AI/ML projects — from LLM-powered pipelines to
          full-stack monitoring tools.
        </SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Tech Stack" title="Skills & Technologies">
          Languages, frameworks, and tools I use to build production AI systems.
        </SectionHeading>

        <div className="mx-auto max-w-5xl flex flex-wrap justify-center gap-3">
          {SKILLS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -4, scale: 1.04 }}
                className="group relative"
              >
                <div className="glass glow-border flex items-center gap-2 rounded-xl px-4 py-2.5 transition-all hover:bg-blue-500/10 hover:shadow-[0_0_24px_rgba(59,130,246,0.45)]">
                  <Icon className="h-4 w-4 text-blue-300 group-hover:text-blue-200" />
                  <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                    {s.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-center text-sm font-medium uppercase tracking-widest text-slate-400">
            Certifications
          </h3>
          <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CERTS.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-3 flex items-center gap-3 hover:bg-blue-500/5 transition-colors"
              >
                <Award className="h-4 w-4 text-blue-300 shrink-0" />
                <span className="text-sm text-slate-300">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Career" title="Experience Timeline" />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 md:-translate-x-1/2" />

          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative mb-10 flex flex-col md:flex-row md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <div className="relative grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 ring-4 ring-[#05070d] shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                  <Briefcase className="h-3.5 w-3.5 text-white" />
                  <span className="absolute inset-0 rounded-full bg-blue-400/40 blur-md animate-pulse" />
                </div>
              </div>

              <div
                className={`pl-14 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}
              >
                <Card className="glass glow-border bg-transparent border-0 rounded-2xl p-6 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.45)] transition-all">
                  <div className="text-xs font-mono uppercase tracking-widest text-blue-300/80">
                    {e.period}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {e.role}
                  </h3>
                  <div
                    className={`mt-0.5 flex flex-wrap items-center gap-2 text-sm text-blue-200/90 ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                  >
                    <span>{e.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {e.location}
                    </span>
                  </div>
                  <ul
                    className={`mt-3 space-y-1.5 text-sm text-slate-400 ${i % 2 === 0 ? "md:text-right" : ""}`}
                  >
                    {e.points.map((p, j) => (
                      <li key={j} className="leading-relaxed">
                        {p}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Academics" title="Education" />
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {EDUCATION.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="glass glow-border h-full bg-transparent border-0 rounded-2xl p-6 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.45)] transition-all">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 ring-1 ring-blue-400/20">
                  <GraduationCap className="h-5 w-5 text-blue-300" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {e.degree}
                </h3>
                <p className="mt-1 text-sm text-slate-300">{e.school}</p>
                <p className="mt-3 inline-block rounded-md border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 text-xs text-blue-200">
                  {e.detail}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something together"
        >
          I&apos;m open to AI/ML engineering roles, freelance projects, and
          collaborations.
        </SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-3xl"
        >
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 blur-2xl" />
          <Card className="glass-strong glow-border relative rounded-3xl bg-transparent border-0 p-8 md:p-12">
            <div className="mb-7 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Available for opportunities
              </h3>
              <p className="mt-2 text-slate-400">
                Mumbai, India · Open to remote
              </p>
            </div>

            <div className="mx-auto grid max-w-xl gap-3 sm:grid-cols-2">
              <Button className="shine-on-hover bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-[0_10px_40px_-10px_rgba(59,130,246,0.7)]">
                <a
                  href={`mailto:${SOCIAL.email}`}
                  className="flex items-center"
                >
                  <Mail className="mr-2 h-4 w-4" /> Email Me
                </a>
              </Button>
              <Button className="border-white/15 bg-white/5 hover:bg-white/10 text-white backdrop-blur">
                <a
                  href={SOCIAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <svg
                    className="mr-2 h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.2 11.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.7-.7 2.1-1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6A4.7 4.7 0 014 6.5c-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 015.8 0C15.3 3 16.3 3.3 16.3 3.3c.6 1.6.2 2.8.1 3.1a4.7 4.7 0 011.3 3.3c0 4.6-2.8 5.6-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </Button>
              <Button className="border-white/15 bg-white/5 hover:bg-white/10 text-white backdrop-blur">
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <svg
                    className="mr-2 h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.6c0-1.8 0-4.2-2.6-4.2-2.6 0-3 2-3 4V24h-5V8z" />
                  </svg>
                  LinkedIn
                </a>
              </Button>
              <Button className="border-white/15 bg-white/5 hover:bg-white/10 text-white">
                <a
                  href={SOCIAL.resume}
                  download
                  className="flex items-center justify-center gap-2"
                >
                  <Download className="mr-2 h-4 w-4 inline-block align-middle" />
                  <span className="align-middle">Resume</span>
                </a>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="glass rounded-xl p-3 flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-300" />
                <span className="text-slate-300 truncate">{SOCIAL.email}</span>
              </div>
              <div className="glass rounded-xl p-3 flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-300" />
                <span className="text-slate-300">+91 9765357819</span>
              </div>
              <div className="glass rounded-xl p-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-300" />
                <span className="text-slate-300">Mumbai, India</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-10 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-blue-400 shadow-lg bg-black flex-shrink-0">
              <img
                src="/profile.png"
                alt="Rom Padelkar"
                className="w-full h-full object-cover object-top scale-95"
              />
            </div>
            <span>
              © {new Date().getFullYear()} Rom Padelkar. Crafted with care.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-lg p-2 hover:bg-blue-500/10 transition-colors"
            >
              <span className="h-4 w-4 text-slate-300" />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-lg p-2 hover:bg-blue-500/10 transition-colors"
            >
              <span className="h-4 w-4 text-slate-300" />
            </a>
            <a
              href={`mailto:${SOCIAL.email}`}
              className="glass rounded-lg p-2 hover:bg-blue-500/10 transition-colors"
            >
              <Mail className="h-4 w-4 text-slate-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-[0_10px_40px_-10px_rgba(59,130,246,0.8)] pulse-glow"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ---------------- APP ---------------- */

function App() {
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    if (loading) return;
    const ids = ["hero", ...NAV.map((n) => n.id)];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <ScrollProgress />
      <Navbar activeId={activeId} />

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>

      <BackToTop />
    </>
  );
}

export default App;
