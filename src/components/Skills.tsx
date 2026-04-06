import { motion } from 'framer-motion';
import { skills } from '../data';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="02" title="Tech Stack" subtitle="skills.json" />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="card group p-5 flex flex-col items-center gap-3 cursor-default"
              >
                <Icon
                  className="text-4xl transition-transform group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <span className="font-mono text-xs text-fg-muted group-hover:text-accent transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
