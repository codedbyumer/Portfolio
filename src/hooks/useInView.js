import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el) // Only trigger once
        }
      },
      { threshold: options.threshold ?? 0.15, ...options }
    )

    observer.observe(el)
    return () => observer.unobserve(el)
  }, [])

  return { ref, inView }
}
