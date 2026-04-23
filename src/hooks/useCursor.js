import { useEffect, useRef } from 'react'

export function useCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      cursor.style.left = e.clientX - 5 + 'px'
      cursor.style.top = e.clientY - 5 + 'px'
    }

    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12
      ring.style.left = ringPos.current.x - 18 + 'px'
      ring.style.top = ringPos.current.y - 18 + 'px'
      rafRef.current = requestAnimationFrame(animateRing)
    }

    const onMouseEnterInteractive = () => {
      cursor.style.transform = 'scale(2)'
      ring.style.transform = 'scale(1.5)'
      ring.style.opacity = '0.8'
    }

    const onMouseLeaveInteractive = () => {
      cursor.style.transform = 'scale(1)'
      ring.style.transform = 'scale(1)'
      ring.style.opacity = '0.5'
    }

    document.addEventListener('mousemove', onMouseMove)
    rafRef.current = requestAnimationFrame(animateRing)

    const interactiveEls = document.querySelectorAll('a, button, [data-cursor-hover]')
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafRef.current)
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
      })
    }
  }, [])

  return { cursorRef, ringRef }
}
