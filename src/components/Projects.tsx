import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { projects } from '../data';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="03"
          title="Featured Projects"
          subtitle="projects/"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card group p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <FiFolder />
                </div>
                <div className="flex items-center gap-3 text-fg-muted">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent hover:-translate-y-0.5 transition-all"
                      aria-label={`${project.title} GitHub`}
                    >
                      <FiGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent hover:-translate-y-0.5 transition-all"
                      aria-label={`${project.title} live site`}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-fg group-hover:text-accent transition-colors mb-2 font-mono">
                {project.title}
              </h3>
              <p className="text-fg-muted text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border/10">
                {project.tags.map((tag) => (
                  <li key={tag} className="font-mono text-[11px] text-accent/80">
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
