import { motion } from 'framer-motion';
import { profile } from '../data';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="01" title="About Me" subtitle="about.md" />

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-5 text-fg-muted leading-relaxed"
          >
            {profile.about.split('\n').map((p, i) => (
              <p key={i}>
                {p.split(' ').map((word, j) =>
                  /^(code|software|developer|build|ship|products?)$/i.test(word) ? (
                    <span key={j} className="text-accent font-medium">
                      {word}{' '}
                    </span>
                  ) : (
                    <span key={j}>{word} </span>
                  )
                )}
              </p>
            ))}

            <div className="grid grid-cols-3 gap-4 pt-6">
              {profile.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient font-mono">
                    {s.value}
                  </div>
                  <div className="text-xs text-fg-muted uppercase tracking-wide mt-1">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="card overflow-hidden font-mono text-sm">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-bg-soft/60 border-b border-border/10 text-xs text-fg-muted">
                <span className="terminal-dot bg-red-500/80" />
                <span className="terminal-dot bg-yellow-500/80" />
                <span className="terminal-dot bg-green-500/80" />
                <span className="ml-2">about.ts</span>
              </div>
              <pre className="p-5 text-[12.5px] leading-6 overflow-x-auto">
{`interface Me {
  name: string;
  role: string;
  location: string;
  interests: string[];
  motto: string;
}

const me: Me = {
  name: "${profile.name.split(' ')[0]}",
  role: "${profile.role}",
  location: "${profile.location}",
  interests: [
    "clean code",
    "design",
    "open source",
  ],
  motto: "ship it.",
};`}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
