import { useCursor } from '../hooks/useCursor'

export default function Cursor() {
  const { cursorRef, ringRef } = useCursor()

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-2.5 h-2.5 rounded-full pointer-events-none z-[9999] transition-transform duration-100"
        style={{
          background: 'var(--accent)',
          mixBlendMode: 'screen',
          top: 0,
          left: 0,
        }}
      />
      <div
        ref={ringRef}
        className="fixed w-9 h-9 rounded-full pointer-events-none z-[9998] transition-all duration-150"
        style={{
          border: '1px solid var(--accent)',
          opacity: 0.5,
          top: 0,
          left: 0,
        }}
      />
    </>
  )
}
