import { motion } from 'framer-motion';
import { FiGitCommit } from 'react-icons/fi';
import { experience } from '../data';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="04"
          title="Experience"
          subtitle="git log --oneline"
        />

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />

          <div className="space-y-8">
            {experience.map((item, i) => (
              <motion.div
                key={item.role + item.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-bg-card border-2 border-accent flex items-center justify-center text-accent">
                  <FiGitCommit className="text-sm" />
                </div>
                <div className="card p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-fg">
                      {item.role}{' '}
                      <span className="text-accent">@ {item.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-fg-muted chip">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-fg-muted text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
