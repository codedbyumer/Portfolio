import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { experience } from '../data/config'

function TimelineItem({ item, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-10 pb-12 last:pb-0"
    >
      {/* Dot */}
      <div
        className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full"
        style={{
          background: item.color,
          boxShadow: `0 0 0 4px var(--bg), 0 0 0 6px ${item.color}33`,
          transform: 'translateX(-6px)',
        }}
      />

      <div
        className="font-mono text-xs tracking-widest mb-1"
        style={{ color: 'var(--accent3)' }}
      >
        {item.date}
      </div>

      <h3 className="font-syne font-bold text-lg mb-1" style={{ color: 'var(--text)' }}>
        {item.role}
      </h3>

      <div className="flex items-center gap-2 text-sm mb-3" style={{ color: item.color }}>
        <span>{item.emoji}</span>
        <span>{item.company}</span>
        <span style={{ color: 'var(--text3)' }}>·</span>
        <span style={{ color: 'var(--text3)' }}>{item.location}</span>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: 'var(--text2)' }}>
        {item.description}
      </p>
    </motion.div>
  )
}

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="section-wrapper" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">Journey</div>
        <h2 className="section-title">
          Experience &<br />Education
        </h2>
      </motion.div>

      {/* Timeline */}
      <div
        className="relative mt-12"
        style={{
          paddingLeft: '1.5rem',
          borderLeft: '1px solid',
          borderImageSlice: 1,
          borderImageSource: 'linear-gradient(to bottom, var(--accent), var(--accent3), transparent)',
        }}
        ref={ref}
      >
        {experience.map((item, i) => (
          <TimelineItem key={item.role} item={item} index={i} inView={inView} />
        ))}
      </div>
    </section>
  )
}
