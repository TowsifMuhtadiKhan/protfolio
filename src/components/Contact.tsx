import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { profile, socials } from '../data';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const links = [
    { icon: FiMail, label: 'email', href: socials.email },
    { icon: FiGithub, label: 'github', href: socials.github },
    { icon: FiLinkedin, label: 'linkedin', href: socials.linkedin },
    { icon: FiTwitter, label: 'twitter', href: socials.twitter },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          number="05"
          title="Get In Touch"
          subtitle="contact --send"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card overflow-hidden font-mono"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 bg-bg-soft/60 border-b border-border/10 text-xs text-fg-muted">
            <span className="terminal-dot bg-red-500/80" />
            <span className="terminal-dot bg-yellow-500/80" />
            <span className="terminal-dot bg-green-500/80" />
            <span className="ml-2">contact.sh</span>
          </div>

          <div className="p-6 md:p-10 space-y-5 text-sm">
            <div>
              <span className="text-accent">$ </span>
              <span className="text-fg-muted">echo </span>
              <span className="text-yellow-400">"Have a project in mind?"</span>
            </div>
            <p className="text-fg-muted pl-4 leading-relaxed">
              I'm currently open to new opportunities and interesting projects.
              Whether you have a question, a collaboration idea, or just want to
              say hi — my inbox is always open.
            </p>

            <div>
              <span className="text-accent">$ </span>
              <span className="text-fg-muted">cat </span>
              <span className="text-accent-cyan">contact.json</span>
            </div>
            <div className="pl-4 space-y-1 text-[13px]">
              <div>
                <span className="text-accent-purple">email</span>:{' '}
                <a
                  href={socials.email}
                  className="text-yellow-400 hover:text-accent underline decoration-dotted underline-offset-4"
                >
                  {profile.email}
                </a>
              </div>
              <div>
                <span className="text-accent-purple">location</span>:{' '}
                <span className="text-yellow-400">"{profile.location}"</span>
              </div>
              <div>
                <span className="text-accent-purple">status</span>:{' '}
                <span className="text-accent">"available"</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              {links.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                  >
                    <Icon /> {l.label}
                  </a>
                );
              })}
            </div>

            <div className="pt-2 flex items-center text-accent">
              <span>$ </span>
              <span className="w-2 h-4 bg-accent ml-1 animate-blink" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
