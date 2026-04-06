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
  github: 'https://github.com/TowsifMuhtadiKhan',
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
    title: 'Furniture Fusion (Landing Page)',
    description:
      'A dynamic and visually appealing web application built with React JS and Tailwind CSS. Showcases the fusion of innovative design and functionality, offering users an immersive experience in the furniture world.',
    tags: ['React.js', 'Tailwind CSS'],
    image: '',
    github: 'https://github.com/TowsifMuhtadiKhan',
    live: '',
    featured: true,
  },
  {
    title: 'Event Details Website',
    description:
      'An interactive platform for visualizing event data through dynamic charts and graphs. Users can analyze key metrics, track event trends, and gain valuable insights — an essential tool for event organizers and attendees alike.',
    tags: ['HTML', 'CSS', 'Chart.js'],
    image: '',
    github: 'https://github.com/TowsifMuhtadiKhan',
    live: '',
    featured: true,
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Frontend Engineer',
    company: 'Sense & Respond Software LLC',
    period: 'November 2023 — Present',
    description:
      'Specializing in frontend development, ensuring seamless functionality and precise fulfillment of project requirements. Stack: React.js, Redux Toolkit, Material UI, TypeScript, API Integration, AWS, Responsive Design.',
  },
  {
    role: 'Junior Web Developer',
    company: 'CPSD Technologies Ltd.',
    period: 'February 2023 — October 2023',
    description:
      'Focused on crafting robust and user-friendly digital solutions while developing core web development skills. Stack: HTML, CSS, Tailwind CSS, JavaScript, API Integration.',
  },
];
