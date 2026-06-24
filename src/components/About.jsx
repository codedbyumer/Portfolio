import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { personalInfo, skillBars } from '../data/config'

function SkillBar({ name, percent, index, animate }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2 text-sm">
        <span style={{ color: 'var(--text)' }}>{name}</span>
        <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>
          {percent}%
        </span>
      </div>
      <div
        className="h-1 rounded-full overflow-hidden"
        style={{ background: 'var(--surface2)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'var(--grad)' }}
          initial={{ scaleX: 0, transformOrigin: 'left' }}
          animate={{ scaleX: animate ? percent / 100 : 0 }}
          transition={{ duration: 1.2, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  )
}

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="section-wrapper" ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div
            className="w-full rounded-3xl overflow-hidden relative"
            style={{ aspectRatio: '4/5', background: 'var(--surface)' }}
          >
            <img
              src="/umer pic.jpeg"
              alt="Muhammad Umer"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="section-tag">About Me</div>
          <h2 className="section-title">
            {personalInfo.tagline.split('people')[0]}
            <span className="grad-text">people</span>
            {' '}love.
          </h2>
          <p className="leading-relaxed mb-6" style={{ color: 'var(--text2)' }}>
            {personalInfo.about}
          </p>

          <div className="mt-8">
            {skillBars.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percent={skill.percent}
                index={i}
                animate={inView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}