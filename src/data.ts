import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiNextdotjs,
  SiHtml5,
  SiMui,
  SiRedux,
  SiVite,
  SiFigma,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiSpring,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiSupabase,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiVercel,
  SiGithub,
} from "react-icons/si";
import { FaJava, FaAws, FaCss3Alt } from "react-icons/fa";
import type {
  Profile,
  Socials,
  Skill,
  Project,
  ExperienceItem,
  NavLink,
} from "./types";
export const profile: Profile = {
  name: "Towsif Muhtadi Khan",
  role: "Frontend Engineer",
  tagline: "Thoughtful interfaces. Useful products. Built with care.",
  location: "Dhaka, Bangladesh",
  email: "towsif.muhtadi@gmail.com",
  resumeUrl: "/Towsif-Muhtadi-Khan-Resume.pdf",
  avatar: "/profile.jpg",
  about:
    "I’m a frontend engineer building responsive product interfaces and integrating APIs at Sense & Respond Software LLC (SNR). My work includes APISynQ, InteractiveDox, Sniffer, and AllThingsAPI.\nI hold a bachelor’s degree in Computer Science and Engineering from North South University. My personal projects explore team workflows, job discovery, and family video experiences.",
  stats: [
    { value: "04", label: "Personal projects" },
    { value: "04", label: "SNR products" },
  ],
};
export const socials: Socials = {
  github: "https://github.com/TowsifMuhtadiKhan",
  linkedin: "https://www.linkedin.com/in/towsifmuhtadikhan/",
  twitter: "",
  email: "mailto:towsif.muhtadi@gmail.com",
};
export const navLinks: NavLink[] = [
  { label: "Work", href: "#projects" },
  { label: "SNR products", href: "#office" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];
export const skillGroups: { name: string; code: string; skills: Skill[] }[] = [
  {
    name: "Frontend",
    code: "interface",
    skills: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#29a9df" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "Material UI", icon: SiMui, color: "#0081cb" },
      { name: "Redux", icon: SiRedux, color: "#b18af0" },
      { name: "Vite", icon: SiVite, color: "#b78aff" },
      { name: "Figma", icon: SiFigma, color: "#f88f76" },
    ],
  },
  {
    name: "Backend",
    code: "server",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#83cd29" },
      { name: "NestJS", icon: SiNestjs, color: "#e0234e" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Spring", icon: SiSpring, color: "#6db33f" },
      { name: "Java", icon: FaJava, color: "#ed9b48" },
      { name: "Python", icon: SiPython, color: "#ffd343" },
    ],
  },
  {
    name: "Database & Data",
    code: "storage",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#71a6ce" },
      { name: "MySQL", icon: SiMysql, color: "#86c8e8" },
      { name: "Redis", icon: SiRedis, color: "#ff5149" },
      { name: "Supabase", icon: SiSupabase, color: "#3ecf8e" },
    ],
  },
  {
    name: "Cloud & DevOps",
    code: "deploy",
    skills: [
      { name: "AWS", icon: FaAws, color: "#ff9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#6d9aff" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#63b1ff" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    ],
  },
];
export const projects: Project[] = [
  {
    title: "Canvas Classroom",
    logo: "/logos/canvas-classroom.svg",
    description:
      "A personal project in my GitHub collection. Explore the repository for its source.",
    tags: ["Personal project"],
    image: "",
    github: "https://github.com/TowsifMuhtadiKhan/canvas-classroom",
    live: "https://canvas-classroom-six.vercel.app/",
    featured: true,
  },
  {
    title: "Work Management System",
    logo: "/logos/work-management.svg",
    description:
      "A workspace for daily tasks, employee management, reports, and team workflows.",
    tags: ["React", "TypeScript", "Vite"],
    image: "",
    github: "https://github.com/TowsifMuhtadiKhan/work-management-system",
    live: "https://work-management-system-eight.vercel.app",
    featured: true,
  },
  {
    title: "LinkedIn Job Finder",
    logo: "/logos/job-finder.png",
    description:
      "Search across roles and locations, filter opportunities, and bookmark jobs to revisit.",
    tags: ["React", "TypeScript", "Vite"],
    image: "",
    github: "https://github.com/TowsifMuhtadiKhan/linkedin-job-finder",
    live: "https://linkedin-job-finder-lovat.vercel.app",
    featured: true,
  },
  {
    title: "TomTube / YouTube UI",
    logo: "/logos/tomtube.png",
    description:
      "A family video experience with approved libraries, playlists, and screen-time controls.",
    tags: ["React", "Vite", "PostgreSQL"],
    image: "",
    github: "https://github.com/TowsifMuhtadiKhan/youtube-ui",
    live: "",
    featured: true,
  },
];
export const officeProjects = [
  {
    name: "APISynQ",
    logo: "/logos/apisynq.svg",
    url: "https://www.apisynq.com/",
    category: "API change management",
    description:
      "Detecting API changes and helping teams update the applications that depend on them.",
    mark: "AQ",
  },
  {
    name: "InteractiveDox",
    logo: "/logos/interactivedox.svg",
    url: "https://app.interactivedox.com/",
    category: "SNR product",
    description: "Professional frontend work as part of the SNR product team.",
    mark: "ID",
  },
  {
    name: "Sniffer",
    logo: "/logos/sniffer.png",
    url: "https://app.snifferweb.com/",
    category: "SNR product",
    description: "Product interface development as part of my work at SNR.",
    mark: "SN",
  },
  {
    name: "AllThingsAPI",
    logo: "/logos/allthingsapi.png",
    url: "https://app-dev.allthingsapi.com/",
    category: "Development environment",
    description:
      "Frontend engineering for the AllThingsAPI application at SNR.",
    mark: "AA",
  },
];
export const experience: ExperienceItem[] = [
  {
    role: "Frontend Engineer",
    company: "Sense & Respond Software LLC · SNR",
    period: "November 2023 — Present",
    description:
      "Frontend development with React, TypeScript, Redux Toolkit, and Material UI. Building responsive product interfaces and integrating APIs.",
  },
  {
    role: "Junior Web Developer",
    company: "CPSD Technologies Ltd.",
    period: "February 2023 — October 2023",
    description:
      "Developed web interfaces with HTML, CSS, Tailwind CSS, and JavaScript, including API integration.",
  },
];
