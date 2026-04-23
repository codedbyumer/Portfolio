import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useInView } from '../hooks/useInView'
import { personalInfo, emailjsConfig } from '../data/config'

const contactItems = [
  {
    icon: '✉',
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: '💬',
    label: 'WhatsApp / Phone',
    value: personalInfo.phone,
    href: `https://wa.me/${personalInfo.phone.replace(/\D/g, '')}`,
  },
  {
    icon: '📍',
    label: 'Location',
    value: personalInfo.location,
    href: '#',
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/alexmorgan',
    href: personalInfo.linkedin,
  },
]

export default function Contact() {
  const { ref, inView } = useInView()
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
        emailjsConfig.publicKey
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'var(--bg3)',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    padding: '0.875rem 1.25rem',
    color: 'var(--text)',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  }

  const onFocus = (e) => {
    e.target.style.borderColor = 'var(--accent)'
    e.target.style.boxShadow = '0 0 0 3px rgba(124,109,250,0.1)'
  }
  const onBlur = (e) => {
    e.target.style.borderColor = 'var(--border)'
    e.target.style.boxShadow = 'none'
  }

  return (
    <section id="contact" className="section-wrapper" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="section-tag">Get In Touch</div>
        <h2 className="section-title">
          Let's Build{' '}
          <span className="grad-text">Something Great.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12 items-start">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h3 className="font-syne font-extrabold text-2xl mb-4" style={{ color: 'var(--text)' }}>
            Open to opportunities
          </h3>
          <p className="leading-relaxed mb-8" style={{ color: 'var(--text2)' }}>
            Whether you have a project in mind, want to discuss a role, or just want to say hi — I'd
            love to hear from you. I typically respond within 24 hours.
          </p>

          <div className="flex flex-col gap-3">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl no-underline transition-all duration-300 group"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.transform = 'translateX(6px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: 'var(--grad)' }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm">{item.value}</div>
                  <div
                    className="font-mono text-xs tracking-widest uppercase"
                    style={{ color: 'var(--text3)' }}
                  >
                    {item.label}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl p-8"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
          }}
        >
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label
                  className="block font-mono text-xs tracking-widest uppercase mb-2"
                  style={{ color: 'var(--text2)' }}
                >
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
              <div>
                <label
                  className="block font-mono text-xs tracking-widest uppercase mb-2"
                  style={{ color: 'var(--text2)' }}
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                className="block font-mono text-xs tracking-widest uppercase mb-2"
                style={{ color: 'var(--text2)' }}
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                placeholder="Project Inquiry"
                value={form.subject}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>

            <div className="mb-6">
              <label
                className="block font-mono text-xs tracking-widest uppercase mb-2"
                style={{ color: 'var(--text2)' }}
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 rounded-xl text-white font-medium text-sm transition-all duration-300"
              style={{
                background:
                  status === 'success'
                    ? 'linear-gradient(135deg, #10d97a, #06b6d4)'
                    : 'var(--grad)',
                opacity: status === 'sending' ? 0.7 : 1,
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                border: 'none',
              }}
            >
              {status === 'idle' && 'Send Message →'}
              {status === 'sending' && 'Sending...'}
              {status === 'success' && 'Message Sent! ✓'}
              {status === 'error' && 'Error — Try Again'}
            </button>

            {status === 'error' && (
              <p className="text-xs mt-3 text-center" style={{ color: '#f87171' }}>
                Something went wrong. Please email me directly at {personalInfo.email}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
