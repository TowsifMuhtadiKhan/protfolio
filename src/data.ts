// ==========================================================
// Edit this file to customize your portfolio content.
// ==========================================================
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiNextdotjs,
  SiExpress,
} from 'react-icons/si';
import type {
  Profile,
  Socials,
  Skill,
  Project,
  ExperienceItem,
  NavLink,
} from './types';

export const profile: Profile = {
  name: 'Towsif Muhtadi Khan',
  role: 'Full-Stack Developer',
  tagline: 'Building clean, fast, and thoughtful web experiences.',
  location: 'Bangladesh',
  email: 'your.email@example.com',
  resumeUrl: '#',
  avatar: '',
  about: `I'm a developer who loves turning ideas into real, usable software.
I focus on writing maintainable code, crafting clean interfaces, and shipping
products that solve real problems. When I'm not coding, I'm learning something new.`,
  stats: [
    { label: 'Years Coding', value: '3+' },
    { label: 'Projects Built', value: '20+' },
    { label: 'Technologies', value: '15+' },
  ],
};

export const socials: Socials = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'mailto:your.email@example.com',
};

export const navLinks: NavLink[] = [
  { label: 'home', href: '#home' },
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'contact', href: '#contact' },
];

export const skills: Skill[] = [
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#68a063' },
  { name: 'Express', icon: SiExpress, color: '#ffffff' },
  { name: 'Python', icon: SiPython, color: '#3776ab' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Docker', icon: SiDocker, color: '#2496ed' },
  { name: 'Git', icon: SiGit, color: '#f05032' },
];

export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A short, punchy sentence about what this project does and why it matters.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '',
    github: 'https://github.com/yourusername/project-one',
    live: 'https://project-one.example.com',
    featured: true,
  },
  {
    title: 'Project Two',
    description:
      'Another project showcasing a different set of skills and problem-solving.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    image: '',
    github: 'https://github.com/yourusername/project-two',
    live: 'https://project-two.example.com',
    featured: true,
  },
  {
    title: 'Project Three',
    description:
      'A smaller side project or experiment that taught you something new.',
    tags: ['Python', 'FastAPI', 'Docker'],
    image: '',
    github: 'https://github.com/yourusername/project-three',
    live: '',
    featured: false,
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Freelance Developer',
    company: 'Self-employed',
    period: '2023 — Present',
    description:
      'Building custom web applications for clients — from landing pages to full-stack products.',
  },
  {
    role: 'Computer Science Student',
    company: 'Your University',
    period: '2022 — Present',
    description:
      'Studying core CS concepts: data structures, algorithms, systems, and software engineering.',
  },
];
