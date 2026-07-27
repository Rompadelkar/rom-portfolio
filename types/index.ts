import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon | any;
}

export interface ProjectItem {
  title: string;
  tag: string;
  desc: string;
  problemSolved?: string;
  architecture?: string[];
  tech: string[];
  github: string;
  demo: string | null;
  icon: LucideIcon | any;
  accent: string;
  featured?: boolean;
  stats?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  icon: LucideIcon | any;
  category: 'AI & LLMs' | 'Backend & APIs' | 'Frontend & Web' | 'DevOps & Databases';
  level: number;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  skills?: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  detail: string;
  year?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
  icon: LucideIcon | any;
}
