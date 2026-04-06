import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi';
import { profile, socials } from '../data';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-24 pb-16"
    >
      {/* Floating code snippets background */}
      <FloatingCode />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-5 gap-10 items-center relative">
        <div className="lg:col-span-3 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-sm text-accent flex items-center gap-2"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>$ whoami</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="text-fg-muted font-mono text-2xl md:text-3xl block mb-2">
              Hi, I'm
            </span>
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xl md:text-2xl text-fg-muted"
          >
            <span className="text-accent">&gt; </span>
            <TypeAnimation
              sequence={[
                profile.role,
                2000,
                'Problem Solver',
                2000,
                'Open-Source Enthusiast',
                2000,
                'Lifelong Learner',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-fg"
            />
            <span className="text-accent animate-blink">_</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-fg-muted max-w-xl leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <a href="#projects" className="btn-primary">
              <span>view_projects()</span>
            </a>
            <a href={profile.resumeUrl} className="btn-ghost">
              <FiDownload /> resume.pdf
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 pt-4 text-xl text-fg-muted"
          >
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent hover:-translate-y-0.5 transition-all"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent hover:-translate-y-0.5 transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href={socials.email}
              className="hover:text-accent hover:-translate-y-0.5 transition-all"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </motion.div>
        </div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <TerminalCard />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-fg-muted hover:text-accent"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <FiArrowDown className="text-2xl" />
        </motion.div>
      </motion.a>
    </section>
  );
}

function TerminalCard() {
  return (
    <div className="card overflow-hidden font-mono text-sm shadow-glow">
      <div className="flex items-center gap-2 px-4 py-3 bg-bg-soft/60 border-b border-border/10">
        <span className="terminal-dot bg-red-500/80" />
        <span className="terminal-dot bg-yellow-500/80" />
        <span className="terminal-dot bg-green-500/80" />
        <span className="ml-2 text-xs text-fg-muted">~/towsif — zsh</span>
      </div>
      <div className="p-5 space-y-2 text-[13px] leading-relaxed">
        <div>
          <span className="text-accent">const</span>{' '}
          <span className="text-accent-cyan">developer</span> ={' '}
          <span className="text-fg-muted">{'{'}</span>
        </div>
        <div className="pl-4">
          <span className="text-accent-purple">name</span>:{' '}
          <span className="text-yellow-400">'{profile.name.split(' ')[0]}'</span>,
        </div>
        <div className="pl-4">
          <span className="text-accent-purple">role</span>:{' '}
          <span className="text-yellow-400">'{profile.role}'</span>,
        </div>
        <div className="pl-4">
          <span className="text-accent-purple">location</span>:{' '}
          <span className="text-yellow-400">'{profile.location}'</span>,
        </div>
        <div className="pl-4">
          <span className="text-accent-purple">stack</span>:{' '}
          <span className="text-fg-muted">[</span>
          <span className="text-yellow-400">'React'</span>,{' '}
          <span className="text-yellow-400">'TS'</span>,{' '}
          <span className="text-yellow-400">'Node'</span>
          <span className="text-fg-muted">]</span>,
        </div>
        <div className="pl-4">
          <span className="text-accent-purple">available</span>:{' '}
          <span className="text-accent">true</span>,
        </div>
        <div>
          <span className="text-fg-muted">{'};'}</span>
        </div>
        <div className="pt-2 text-accent flex items-center">
          <span>$ _</span>
          <span className="w-2 h-4 bg-accent ml-1 animate-blink" />
        </div>
      </div>
    </div>
  );
}

function FloatingCode() {
  const snippets = [
    { text: '<Component />', top: '15%', left: '10%', delay: 0 },
    { text: 'const { code } = life;', top: '70%', left: '5%', delay: 1 },
    { text: 'useState()', top: '25%', right: '8%', delay: 2 },
    { text: '=> future', top: '80%', right: '15%', delay: 0.5 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {snippets.map((s, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0.3, 0], y: [-20, 0, 0, -20] }}
          transition={{
            duration: 6,
            delay: s.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="absolute font-mono text-xs text-accent/40"
          style={{ top: s.top, left: s.left, right: s.right }}
        >
          {s.text}
        </motion.span>
      ))}
    </div>
  );
}
