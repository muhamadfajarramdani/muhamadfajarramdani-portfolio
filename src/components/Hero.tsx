import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const TYPED_WORDS = ['Junior Fullstack Developer', 'Frontend Developer', 'Backend Developer']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = TYPED_WORDS[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIndex(i => (i + 1) % TYPED_WORDS.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIndex])

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 1.5rem 4rem',
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(20,184,166,0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center', position: 'relative' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: 'var(--accent)', fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem', letterSpacing: '0.15em', marginBottom: '1rem', textTransform: 'uppercase' }}
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.25rem', color: 'var(--text)' }}
        >
          Muhamad Fajar<br />
          <span className="accent-gradient">Ramdani</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '2em', fontFamily: 'Outfit, sans-serif' }}
        >
          <span style={{ color: 'var(--accent)' }}>{displayed}</span>
          <span style={{ borderRight: '2px solid var(--accent)', marginLeft: '2px', animation: 'blink 1s step-end infinite' }}>&nbsp;</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}
        >
          <button
            onClick={() => scrollTo('#projects')}
            style={{
              background: 'var(--accent)',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              padding: '0.75rem 1.75rem',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)'; (e.target as HTMLButtonElement).style.boxShadow = '0 8px 20px rgba(20,184,166,0.35)' }}
            onMouseLeave={e => { (e.target as HTMLButtonElement).style.transform = 'none'; (e.target as HTMLButtonElement).style.boxShadow = 'none' }}
          >
            View Projects
          </button>

          <a
            href="/resume.pdf"
            download
            style={{
              background: 'transparent',
              color: 'var(--text)',
              border: '1px solid var(--glass-border)',
              borderRadius: '12px',
              padding: '0.75rem 1.75rem',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              fontSize: '0.95rem',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            Download Resume
          </a>

          <button
            onClick={() => scrollTo('#contact')}
            style={{
              background: 'rgba(20,184,166,0.08)',
              color: 'var(--accent)',
              border: '1px solid var(--glass-border)',
              borderRadius: '12px',
              padding: '0.75rem 1.75rem',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            Contact
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}
        >
          {[
            { icon: <Github size={18} />, href: 'https://github.com/muhamadfajarramdani', label: 'GitHub' },
            { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/muhamad-fajar-ramdani', label: 'LinkedIn' },
            { icon: <Mail size={18} />, href: 'mailto:mfajarramdani2@email.com', label: 'Email' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              style={{
                color: 'var(--text-muted)',
                padding: '0.6rem',
                borderRadius: '10px',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.color = 'var(--accent)'; el.style.borderColor = 'var(--accent)' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.color = 'var(--text-muted)'; el.style.borderColor = 'var(--glass-border)' }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ delay: 0.8, y: { repeat: Infinity, duration: 2, delay: 1 } }}
          onClick={() => scrollTo('#about')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            margin: '0 auto',
            fontSize: '0.75rem',
            fontFamily: 'Outfit, sans-serif',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          <ArrowDown size={16} />
          Scroll
        </motion.button>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
      `}</style>
    </section>
  )
}
