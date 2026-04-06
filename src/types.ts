import type { IconType } from 'react-icons';

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  resumeUrl: string;
  avatar: string;
  about: string;
  stats: { label: string; value: string }[];
}

export interface Socials {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live: string;
  featured: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
