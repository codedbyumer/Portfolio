import { useEffect, useState } from 'react'

export function useCounter(target, duration = 1600, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const steps = 80
    const stepValue = target / steps
    const interval = duration / steps

    const timer = setInterval(() => {
      start = Math.min(start + stepValue, target)
      setCount(Math.floor(start))
      if (start >= target) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [target, duration, active])

  return count
}
