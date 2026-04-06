import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { profile, socials } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/10 py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-fg-muted">
        <div>
          <span className="text-accent">©</span> {year} {profile.name}. Built with{' '}
          <FiHeart className="inline text-accent" /> &amp; React + TypeScript.
        </div>
        <div className="flex items-center gap-4 text-base">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href={socials.email}
            className="hover:text-accent transition-colors"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
