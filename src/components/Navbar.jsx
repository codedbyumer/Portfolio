import { useScrollProgress } from '../hooks/useScrollProgress'
import { personalInfo } from '../data/config'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { progress, scrolled } = useScrollProgress()

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-0.5 z-[1001] transition-all duration-100"
        style={{
          width: `${progress}%`,
          background: 'var(--grad)',
        }}
      />

      {/* Navbar */}
      <nav
        className="fixed top-0 w-full z-[100] px-16 py-5 flex justify-between items-center transition-all duration-400"
        style={{
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          background: scrolled ? 'rgba(5, 5, 8, 0.85)' : 'transparent',
        }}
      >
        <div
          className="font-syne font-extrabold text-xl grad-text"
        >
          {personalInfo.initials}.
        </div>

        <ul className="flex gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs tracking-widest uppercase transition-colors duration-300 relative group no-underline"
                style={{ color: 'var(--text2)' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ background: 'var(--accent)' }}
                />
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary text-xs px-5 py-2">
          Hire Me →
        </a>
      </nav>
    </>
  )
}
