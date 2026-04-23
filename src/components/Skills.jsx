import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { skillCategories } from '../data/config'

function SkillCard({ icon, title, tags, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative rounded-2xl p-8 overflow-hidden group card-hover"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
      }}
    >
      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'var(--grad2)' }}
      />

      <div className="relative z-10">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-syne font-bold text-base mb-5" style={{ color: 'var(--text)' }}>
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-3 py-1.5 rounded-lg transition-all duration-300 cursor-default"
              style={{
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                color: 'var(--text2)',
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--accent)'
                e.target.style.color = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--border)'
                e.target.style.color = 'var(--text2)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="section-wrapper" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">Technical Skills</div>
        <h2 className="section-title">My Toolkit</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {skillCategories.map((cat, i) => (
          <SkillCard
            key={cat.title}
            icon={cat.icon}
            title={cat.title}
            tags={cat.tags}
            index={i}
            inView={inView}
          />
        ))}
      </div>
    </section>
  )
}
