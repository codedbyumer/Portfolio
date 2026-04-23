import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { personalInfo, typingRoles } from '../data/config'

// Build the TypeAnimation sequence from the roles array
const buildSequence = (roles) => {
  return roles.flatMap((role) => [role, 2000, '', 400])
}

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 7L2 7" />
  </svg>
)

export default function Hero() {
  const firstName = personalInfo.name.split(' ')[0]
  const lastName = personalInfo.name.split(' ')[1]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-16 relative overflow-hidden"
      style={{ maxWidth: '100vw' }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: '#7c6dfa',
            filter: 'blur(80px)',
            opacity: 0.15,
            top: '-100px',
            right: '-100px',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full"
          style={{
            background: '#06b6d4',
            filter: 'blur(80px)',
            opacity: 0.12,
            bottom: '-100px',
            left: '20%',
            animation: 'float 10s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full"
          style={{
            background: '#a855f7',
            filter: 'blur(80px)',
            opacity: 0.1,
            top: '40%',
            left: '-50px',
            animation: 'float 12s ease-in-out infinite 2s',
          }}
        />

        {/* Grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            opacity: 0.5,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm mb-6 flex items-center gap-3"
          style={{ color: 'var(--accent3)' }}
        >
          <span
            className="w-2 h-2 rounded-full inline-block"
            style={{
              background: 'var(--green)',
              animation: 'pulse-dot 2s infinite',
            }}
          />
          {personalInfo.availableForWork ? 'Available for work' : 'Currently not available'}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-syne font-extrabold leading-none tracking-tight mb-5"
          style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
        >
          {firstName}
          <br />
          <span className="grad-text">{lastName}.</span>
        </motion.h1>

        {/* Role typing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl mb-8"
          style={{ color: 'var(--text2)', minHeight: '2.5rem' }}
        >
          I'm a{' '}
          <TypeAnimation
            sequence={buildSequence(typingRoles)}
            wrapper="span"
            speed={50}
            deletionSpeed={70}
            repeat={Infinity}
            style={{ color: 'var(--accent)', fontWeight: 500 }}
          />
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg leading-relaxed max-w-lg mb-12"
          style={{ color: 'var(--text2)' }}
        >
          {personalInfo.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 flex-wrap mb-14"
        >
          <a href="#contact" className="btn-primary">
            Hire Me ↗
          </a>
          <a href={personalInfo.cvUrl} download className="btn-outline">
            Download CV ↓
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-4"
        >
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-icon" title="GitHub">
            <GitHubIcon />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="social-icon" title="Twitter">
            <TwitterIcon />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="social-icon" title="Email">
            <EmailIcon />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs tracking-widest uppercase"
        style={{ color: 'var(--text3)' }}
      >
        <div
          className="w-px h-10"
          style={{
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            animation: 'float 2s ease-in-out infinite',
          }}
        />
        <span>Scroll</span>
      </div>

      {/* Float + pulse animations injected into head */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16,217,122,0.4); }
          50% { box-shadow: 0 0 0 8px rgba(16,217,122,0); }
        }
      `}</style>
    </section>
  )
}
