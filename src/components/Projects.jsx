import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/config'

const filters = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'ui', label: 'UI Design' },
]

const catLabel = {
  frontend: 'Frontend',
  fullstack: 'Full Stack',
  ui: 'UI Design',
}

function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl overflow-hidden group relative"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        transition: 'transform 0.4s, border-color 0.4s, box-shadow 0.4s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.borderColor = 'var(--border2)'
        e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.4)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Image area */}
      <div
        className="h-48 flex items-center justify-center text-6xl relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--bg3), var(--surface2))' }}
      >
        {project.emoji}
        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(124, 109, 250, 0.18)', zIndex: 1 }}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full text-xs font-medium no-underline transition-all duration-200"
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--border2)',
              color: 'var(--text)',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--accent)'
              e.target.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'var(--bg)'
              e.target.style.borderColor = 'var(--border2)'
            }}
          >
            Live ↗
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full text-xs font-medium no-underline transition-all duration-200"
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--border2)',
              color: 'var(--text)',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--accent)'
              e.target.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'var(--bg)'
              e.target.style.borderColor = 'var(--border2)'
            }}
          >
            Code
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div
          className="font-mono text-xs tracking-widest uppercase mb-2"
          style={{ color: 'var(--accent)' }}
        >
          {catLabel[project.category]}
        </div>
        <h3 className="font-syne font-bold text-lg mb-2" style={{ color: 'var(--text)' }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text2)' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-xs px-2 py-1 rounded"
              style={{
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                color: 'var(--text3)',
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView()
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section-wrapper" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">Work</div>
        <h2 className="section-title">Featured Projects</h2>
      </motion.div>

      {/* Filter buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex gap-3 flex-wrap mt-8 mb-10"
      >
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className="px-5 py-2 rounded-full text-sm transition-all duration-300"
            style={{
              background: 'transparent',
              border: activeFilter === f.key ? '1px solid var(--accent)' : '1px solid var(--border)',
              color: activeFilter === f.key ? 'var(--accent)' : 'var(--text2)',
              background: activeFilter === f.key ? 'rgba(124,109,250,0.08)' : 'transparent',
              cursor: 'pointer',
            }}
          >
            {f.label}
          </button>
        ))}
      </motion.div>

      {/* Projects grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
