import {
  Brain,
  Briefcase,
  Layers,
  Award,
  Sparkles,
  Activity,
  LineChart,
  Bot,
  Cpu,
  Code2,
  Zap,
  Globe,
  Database,
  Wrench,
  Cloud,
  Rocket,
  Terminal,
  FileText,
  Lock,
  Server,
  Workflow,
  CpuIcon,
} from 'lucide-react';
import {
  NavItem,
  SocialLinks,
  StatItem,
  ProjectItem,
  SkillItem,
  ExperienceItem,
  EducationItem,
  ArticleItem,
} from '@/types';

export const NAV: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'featured', label: 'Featured AI' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'blog', label: 'Articles' },
  { id: 'contact', label: 'Contact' },
];

export const SOCIAL: SocialLinks = {
  github: 'https://github.com/Rompadelkar',
  linkedin: 'https://linkedin.com/in/rom-padelkar-b5b79224a',
  email: 'padelkarrom99@gmail.com',
  resume: '/Rom_Padelkar_Resume.pdf',
};

export const STATS: StatItem[] = [
  { label: 'AI Projects Deployed', value: '5+', icon: Brain },
  { label: 'Enterprise Experience', value: '4 mo', icon: Briefcase },
  { label: 'Production Tech Stack', value: '15+', icon: Layers },
  { label: 'Pro Certifications', value: '6', icon: Award },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'AutoContentAI',
    tag: 'AI-Powered Viral Shorts Generator',
    desc: 'Autonomous video processing pipeline that transforms long-form content into viral short-form reels using LLM-based clip detection, auto-transcription, dynamic subtitles, vertical 9:16 formatting, and hook generation.',
    problemSolved:
      'Content creators spend 8+ hours manually editing, slicing, and transcribing long videos into viral social media shorts. AutoContentAI eliminates manual post-production, automating clip discovery and formatting in under 60 seconds.',
    architecture: [
      'Audio ingestion and noise suppression via FFmpeg & asynchronous stream processing',
      'Word-level timestamped transcription using OpenAI Whisper AI model with GPU acceleration',
      'Semantic narrative analysis and viral hook detection using Qwen LLM reasoning',
      'Automated active-speaker cropping and burned-in dynamic typography rendering',
    ],
    tech: ['Python', 'Whisper AI', 'Qwen LLM', 'FastAPI', 'FFmpeg', 'PyTorch'],
    github: 'https://github.com/Rompadelkar',
    demo: null,
    icon: Sparkles,
    accent: 'from-blue-500 via-indigo-500 to-cyan-400',
    featured: true,
    stats: [
      { label: 'Processing Speed', value: '10x Faster' },
      { label: 'Transcription Accuracy', value: '98.4%' },
      { label: 'Time Saved / Reel', value: '~8 Hours' },
      { label: 'Pipeline Latency', value: '< 45s' },
    ],
  },
  {
    title: 'AI Fraud Detection System',
    tag: 'ML-Powered Financial Risk Engine',
    desc: 'Production-grade ML risk engine analyzing digital banking transactions in real-time, predicting fraud probability with high precision using ensemble tree models and interactive visual telemetry.',
    problemSolved:
      'Traditional rule-based fraud detection suffers from high false-positive rates and slow adaptation to new financial cybercrime tactics.',
    architecture: [
      'Feature engineering pipeline processing anomaly indicators across transaction velocity and geo-deviation',
      'Ensemble classifier (XGBoost & Random Forest) calibrated for high recall on imbalanced datasets',
      'Interactive real-time risk dashboard built with Streamlit and Plotly telemetry',
    ],
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'Plotly', 'XGBoost'],
    github: 'https://github.com/Rompadelkar',
    demo: 'https://ai-fraud-detection-a66ryc7xizsyjygvbycrv.streamlit.app',
    icon: Activity,
    accent: 'from-cyan-500 via-blue-600 to-indigo-500',
    stats: [
      { label: 'Model Precision', value: '96.2%' },
      { label: 'Inference Latency', value: '12ms' },
      { label: 'False Positive Reduction', value: '40%' },
    ],
  },
  {
    title: 'AI Personal Finance Advisor',
    tag: 'Gemini-Powered Financial Coach',
    desc: 'Full-stack AI wealth automation app that categorizes expenses, detects spending leaks, and synthesizes bespoke financial planning strategies powered by Google Gemini reasoning models.',
    problemSolved:
      'Users lack personalized, actionable budgeting feedback without paying expensive human financial advisors.',
    tech: ['Python', 'Streamlit', 'SQLite', 'Gemini API', 'Pandas'],
    github: 'https://github.com/Rompadelkar',
    demo: null,
    icon: LineChart,
    accent: 'from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    title: 'AI Root Cause Detector',
    tag: 'Intelligent System Log Analyzer',
    desc: 'Automated Site Reliability Engineering (SRE) tool that ingests server and application logs, identifies cascading failure vectors, and diagnoses root causes using Gemini AI chain-of-thought reasoning.',
    problemSolved:
      'DevOps and DEM engineers waste critical outage minutes manually sifting through thousands of log lines during incident response.',
    tech: ['Python', 'Gemini AI', 'Pandas', 'Streamlit', 'System Logs'],
    github: 'https://github.com/Rompadelkar',
    demo: 'https://ai-root-cause-detector-f9npek6cxu7ksau8fcrezc.streamlit.app',
    icon: Bot,
    accent: 'from-blue-500 via-sky-500 to-teal-400',
  },
  {
    title: 'Mini Dynatrace',
    tag: 'Full-Stack Telemetry Dashboard',
    desc: 'Real-time infrastructure monitoring platform tracking server CPU utilization, memory pressure, and network throughput — inspired by enterprise DEM platforms like Dynatrace.',
    problemSolved:
      'Lightweight microservices require low-overhead observability dashboards without enterprise licensing costs.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
    github: 'https://github.com/Rompadelkar',
    demo: null,
    icon: Cpu,
    accent: 'from-sky-500 via-indigo-500 to-blue-600',
  },
];

export const SKILLS: SkillItem[] = [
  // AI & LLMs
  { name: 'Large Language Models (LLMs)', icon: Brain, category: 'AI & LLMs', level: 95 },
  { name: 'Prompt Engineering & CoT', icon: Sparkles, category: 'AI & LLMs', level: 95 },
  { name: 'Whisper AI & Audio Processing', icon: Bot, category: 'AI & LLMs', level: 90 },
  { name: 'Gemini AI / OpenAI API', icon: Zap, category: 'AI & LLMs', level: 92 },
  { name: 'Scikit-learn & Ensemble ML', icon: Activity, category: 'AI & LLMs', level: 88 },
  { name: 'Qwen & Open Source Models', icon: CpuIcon, category: 'AI & LLMs', level: 88 },

  // Backend & APIs
  { name: 'Python Architecture', icon: Code2, category: 'Backend & APIs', level: 95 },
  { name: 'FastAPI & Asynchronous Dev', icon: Zap, category: 'Backend & APIs', level: 92 },
  { name: 'RESTful API Design', icon: Cloud, category: 'Backend & APIs', level: 90 },
  { name: 'SQL & Query Optimization', icon: Database, category: 'Backend & APIs', level: 88 },
  { name: 'Node.js & Express', icon: Server, category: 'Backend & APIs', level: 82 },

  // Frontend & Web
  { name: 'React 19 & Next.js App Router', icon: Globe, category: 'Frontend & Web', level: 90 },
  { name: 'TypeScript / JavaScript (ES6+)', icon: Code2, category: 'Frontend & Web', level: 92 },
  { name: 'Tailwind CSS & Glassmorphism', icon: Layers, category: 'Frontend & Web', level: 95 },
  { name: 'Streamlit AI Apps', icon: LineChart, category: 'Frontend & Web', level: 95 },
  { name: 'Framer Motion & Three.js', icon: Sparkles, category: 'Frontend & Web', level: 85 },

  // DevOps & Databases
  { name: 'Git & Version Control', icon: Terminal, category: 'DevOps & Databases', level: 90 },
  { name: 'Vercel Deployment Pipelines', icon: Rocket, category: 'DevOps & Databases', level: 92 },
  { name: 'MongoDB & NoSQL', icon: Database, category: 'DevOps & Databases', level: 85 },
  { name: 'Supabase & PostgreSQL', icon: Database, category: 'DevOps & Databases', level: 88 },
  { name: 'FFmpeg & Multimedia Pipelines', icon: Wrench, category: 'DevOps & Databases', level: 86 },
  { name: 'Linux / Cloud Telemetry', icon: Cloud, category: 'DevOps & Databases', level: 85 },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'AI Monitoring & Data Analytics Intern',
    company: 'QualityKiosk Technologies',
    period: 'Dec 2025 — Mar 2026',
    location: 'Navi Mumbai, India',
    points: [
      'Worked within the Digital Experience Monitoring (DEM) team on enterprise AI Buddy solutions for intelligent anomaly alerting and incident triage.',
      'Tested AI-assisted monitoring workflows, analyzed high-volume system metrics and server logs, validated LLM-generated root cause insights, and reduced false-positive telemetry.',
      'Collaborated cross-functionally with SRE and DevOps teams to ensure reliable, zero-latency digital experience monitoring at scale.',
    ],
    skills: ['AI Telemetry', 'Log Analysis', 'Python', 'Digital Experience Monitoring', 'Anomaly Detection'],
  },
  {
    role: 'Brand Ambassador',
    company: 'Viral Fission',
    period: 'Apr 2022 — Mar 2023',
    location: 'India',
    points: [
      'Represented and promoted national brand campaigns across collegiate networks, developing strategic communication, stakeholder engagement, and leadership skills.',
    ],
    skills: ['Stakeholder Communication', 'Public Speaking', 'Campaign Management'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Tech — Computer Engineering',
    school: 'Shah And Anchor Kutchhi Engineering College, Mumbai',
    detail: 'CGPA: 7.4 / 10 | Focus: Artificial Intelligence, Machine Learning & Systems Engineering',
    year: '2022 — 2026',
  },
  {
    degree: 'HSC (12th Grade — Science)',
    school: "St. Xavier's College, Mumbai",
    detail: 'Grade: 80% | Majors: Mathematics, Physics, Chemistry',
    year: '2020 — 2022',
  },
  {
    degree: 'SSC (10th Grade)',
    school: 'Don Bosco High School, Mumbai',
    detail: 'Grade: 72% | Academic Distinction',
    year: '2020',
  },
];

export const CERTS: string[] = [
  'Generative AI Foundation (upGrad)',
  'Python Programming Professional (Infosys Springboard)',
  'Cloud Computing Architecture (Infosys Springboard)',
  'Cybersecurity Fundamentals (Cisco)',
  'PHP & MySQL Database Training (IIT Bombay)',
  'Enterprise Power BI Workshop (Belox)',
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'architecting-realtime-ai-video-pipelines',
    title: 'Architecting Real-Time AI Video Pipelines with Qwen and Whisper',
    excerpt:
      'How to build an autonomous 60-second video processing engine using FFmpeg stream slicing, OpenAI Whisper word-level timestamps, and open-source LLM narrative reasoning.',
    content: `
# Architecting Real-Time AI Video Pipelines with Qwen and Whisper

In modern content automation, latency and accuracy are the two hardest constraints to balance. When building **AutoContentAI**, the goal was to take a 2-hour podcast and autonomously generate 9:16 vertical reels with burned-in dynamic typography, active speaker tracking, and viral hook scoring—all in under 60 seconds.

## The Architectural Blueprint

A traditional sequential processing pipeline fails at scale due to I/O bottlenecks and GPU memory exhaustion. Our solution leverages an asynchronous multi-stage pipeline:

1. **Audio Decoupling & VAD**: We extract audio using FFmpeg and run Silero Voice Activity Detection (VAD) to strip dead silence before transcription.
2. **Word-Level Timestamping**: Using OpenAI Whisper (large-v3) optimized with Flash Attention and TensorRT, we extract exact millisecond boundaries for every uttered word.
3. **LLM Viral Hook Reasoning**: Instead of arbitrary 30-second cuts, we pass the transcript with timestamps to a quantized Qwen-2.5 LLM. The model evaluates narrative tension, emotional hook strength, and completeness, returning structured JSON clip intervals.
4. **Dynamic Rendering**: FFmpeg applies custom ASS subtitle shaders for dynamic word-by-word highlighting while centering the bounding box on active subjects.

## Key Performance Takeaways

By caching intermediate audio representations and pipelining LLM inference alongside video transcoding, we achieved a **10x speedup** over manual editing workflows while maintaining a **98.4% transcription accuracy**.
    `.trim(),
    date: 'July 15, 2026',
    readTime: '5 min read',
    category: 'AI Engineering',
    tags: ['Whisper AI', 'Qwen LLM', 'FastAPI', 'FFmpeg', 'Video Processing'],
    featured: true,
    icon: Sparkles,
  },
  {
    id: 'building-high-precision-fraud-detection-engines',
    title: 'Building High-Precision Fraud Detection Engines with Ensemble ML',
    excerpt:
      'Overcoming extreme class imbalance in banking telemetry using XGBoost, Random Forest ensembles, and real-time interactive Streamlit dashboards.',
    content: `
# Building High-Precision Fraud Detection Engines with Ensemble ML

Financial fraud detection is fundamentally an anomaly detection problem under extreme class imbalance. In digital banking transactions, fraudulent events typically represent less than 0.1% of all traffic. A naive classifier predicting "not fraud" would achieve 99.9% accuracy while being completely useless.

## Feature Engineering for Financial Telemetry

When building our real-time risk engine, raw transaction amounts and timestamps were insufficient. We engineered synthetic behavioral features:
- **Velocity Deltas**: Number of transactions attempted within rolling 5-minute and 1-hour windows.
- **Geo-Distance Deviation**: Great-circle distance between consecutive login IP coordinates relative to time elapsed (catching impossible travel speeds).
- **Merchant Category Risk Index**: Historical chargeback probability associated with specific merchant IDs.

## Model Ensembling & Calibration

We deployed an ensemble combining **XGBoost** (for capturing non-linear feature interactions) and **Balanced Random Forest** (to mitigate majority class dominance). 

By tuning the decision threshold using Precision-Recall curves rather than ROC-AUC, we reduced false positives by **40%**, saving analysts hundreds of hours of manual triage while maintaining a **96.2% fraud detection recall**.
    `.trim(),
    date: 'June 28, 2026',
    readTime: '6 min read',
    category: 'Machine Learning',
    tags: ['XGBoost', 'Scikit-Learn', 'Fraud Detection', 'FinTech', 'Streamlit'],
    featured: false,
    icon: Activity,
  },
  {
    id: 'optimizing-llm-inference-for-production',
    title: 'Optimizing LLM Inference & Chain-of-Thought in Production Web Apps',
    excerpt:
      'Practical techniques for reducing latency and API token costs when integrating Google Gemini and OpenAI models into full-stack Next.js applications.',
    content: `
# Optimizing LLM Inference & Chain-of-Thought in Production Web Apps

As AI moves from prototype to production, user experience is governed by Time to First Token (TTFT) and total generation latency. When deploying applications like our **AI Root Cause Detector** and **Personal Finance Advisor**, optimizing inference calls became critical.

## 1. Structured JSON Schemas & Constrained Decoding

Never rely on prompt instructions alone for JSON output. Using strict schema enforcement (such as Gemini's responseSchema or OpenAI's structured outputs) eliminates retry loops and parsing failures, reducing backend latency by up to 30%.

## 2. Asynchronous Streaming & Optimistic UI

For deep reasoning tasks where Chain-of-Thought (CoT) takes several seconds, streaming tokens directly to a glassmorphism frontend using React 19 Server-Sent Events (SSE) keeps user engagement high. 

## 3. Semantic Caching & Prompt Compression

By hashing incoming system logs or financial queries against an in-memory vector store, recurring queries can be served instantly from cache without hitting paid LLM endpoints. Furthermore, pruning redundant context tokens from prompt templates reduced our API burn rate by 45% without degrading reasoning fidelity.
    `.trim(),
    date: 'May 10, 2026',
    readTime: '4 min read',
    category: 'LLM Systems',
    tags: ['Gemini API', 'Next.js', 'Prompt Engineering', 'Latency Optimization'],
    featured: false,
    icon: Brain,
  },
  {
    id: 'dem-telemetry-and-automated-root-cause-analysis',
    title: 'Digital Experience Monitoring (DEM): Automating SRE Incident Triage',
    excerpt:
      'Lessons learned from enterprise DEM teams on leveraging AI assistants to filter telemetry noise and pinpoint infrastructure root causes.',
    content: `
# Digital Experience Monitoring (DEM): Automating SRE Incident Triage

During my internship with the Digital Experience Monitoring (DEM) team at **QualityKiosk Technologies**, I witnessed firsthand the challenge of modern Site Reliability Engineering: alert fatigue. Enterprise microservices generate gigabytes of log telemetry every hour, obscuring real system outages behind thousands of cascading warning notices.

## The AI Buddy Alerting Workflow

To transform reactive firefighting into proactive triage, we developed intelligent alerting workflows:

- **Noise Suppression & De-duplication**: Grouping related stack traces and HTTP 5xx error spikes by correlation IDs to condense 500 individual alerts into a single unified incident ticket.
- **LLM Root Cause Synthesis**: Passing aggregated error logs and CPU/Memory metrics to an AI reasoning agent trained on historical incident post-mortems. The model outputs a concise 3-bullet summary explaining *why* the service degraded and suggesting immediate remediation commands.

## Reducing False Positives

A critical phase of my work involved validating AI-generated insights against ground-truth system metrics. By introducing rigorous validation loops and feedback scoring, we significantly suppressed false-positive alerting, restoring engineering trust in automated monitoring dashboards.
    `.trim(),
    date: 'March 20, 2026',
    readTime: '5 min read',
    category: 'SRE & Telemetry',
    tags: ['DEM', 'Log Analysis', 'DevOps', 'QualityKiosk', 'Anomaly Detection'],
    featured: false,
    icon: Cpu,
  },
];
