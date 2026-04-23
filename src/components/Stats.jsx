import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'
import { stats } from '../data/config'

function StatCard({ icon, number, suffix, label, index, active }) {
  const count = useCounter(number, 1600, active)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-2xl p-10 text-center relative overflow-hidden group card-hover"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
      }}
    >
      {/* Rotating conic gradient bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(124,109,250,0.05) 60deg, transparent 120deg)',
          animation: 'spin 8s linear infinite',
        }}
      />

      <div className="relative z-10">
        <div className="text-2xl mb-4">{icon}</div>
        <div
          className="font-syne font-extrabold leading-none grad-text mb-2"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)' }}
        >
          {count}{suffix}
        </div>
        <div className="text-sm" style={{ color: 'var(--text2)' }}>
          {label}
        </div>
      </div>

      <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
    </motion.div>
  )
}

export default function Stats() {
  const { ref, inView } = useInView()

  return (
    <section className="section-wrapper pt-0" ref={ref}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard
            key={stat.label}
            icon={stat.icon}
            number={stat.number}
            suffix={stat.suffix}
            label={stat.label}
            index={i}
            active={inView}
          />
        ))}
      </div>
    </section>
  )
}
