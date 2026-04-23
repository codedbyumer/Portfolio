import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { testimonials } from '../data/config'

export default function Testimonials() {
  const { ref, inView } = useInView()
  const [current, setCurrent] = useState(0)

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const t = testimonials[current]

  return (
    <section id="testimonials" className="section-wrapper" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">Social Proof</div>
        <h2 className="section-title">What Clients Say</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10"
      >
        <div
          className="relative rounded-3xl p-12 overflow-hidden"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            minHeight: '280px',
          }}
        >
          {/* Large quote mark */}
          <span
            className="absolute top-6 left-8 font-syne leading-none select-none pointer-events-none"
            style={{ fontSize: '6rem', color: 'var(--accent)', opacity: 0.15, lineHeight: 1 }}
          >
            "
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: 'var(--amber)' }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-lg leading-relaxed mb-8 italic"
                style={{ color: 'var(--text2)' }}
              >
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white"
                  style={{ background: t.gradient }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-syne font-bold" style={{ color: 'var(--text)' }}>
                    {t.name}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text2)' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                background: i === current ? 'var(--accent)' : 'var(--border2)',
                border: 'none',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
