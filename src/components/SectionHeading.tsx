import { motion } from 'framer-motion';

interface Props {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ number, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="mb-12 flex items-end gap-4"
    >
      <div className="flex-1">
        <div className="section-title mb-2">
          <span className="text-accent/60">{number}.</span> // {subtitle ?? title}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-fg">{title}</h2>
      </div>
      <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent mb-3" />
    </motion.div>
  );
}
