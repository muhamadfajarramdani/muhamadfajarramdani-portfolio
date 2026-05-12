import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { toggleTheme } from '@/hooks/useTheme'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    setIsDark(document.documentElement.classList.contains('dark'))
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleToggle = () => {
    const next = toggleTheme()
    setIsDark(next === 'dark')
  }

  const handleNav = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: scrolled ? '16px' : '0',
          left: 0,
          right: 0,
          width: '100%',
          maxWidth: scrolled ? '1024px' : '100%',
          margin: scrolled ? '0 auto' : '0',
          zIndex: 1000,
          transition: 'all 0.3s ease',
        }}
      >
        <div
          className={scrolled ? 'glass-card' : ''}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: scrolled ? '1rem 2rem' : '1.25rem 2.5rem',
            borderRadius: scrolled ? '16px' : '0',
            background: scrolled ? undefined : 'transparent',
            height: scrolled ? 'auto' : '80px',
          }}
        >
          <a
            href="#"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: 'var(--accent)', textDecoration: 'none', flexShrink: 0 }}
          >
            MFR<span style={{ color: 'var(--text)' }}>.</span>
          </a>

          <ul style={{ gap: '0.5rem', listStyle: 'none', margin: 0, padding: 0, flex: 1, justifyContent: 'center' }} className="hidden md:flex">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-muted)',
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    padding: '0.5rem 0.875rem',
                    borderRadius: '8px',
                    transition: 'color 0.25s, background 0.25s',
                  }}
                  onMouseEnter={e => {
                    ;(e.target as HTMLButtonElement).style.color = 'var(--accent)'
                    ;(e.target as HTMLButtonElement).style.background = 'rgba(20,184,166,0.1)'
                  }}
                  onMouseLeave={e => {
                    ;(e.target as HTMLButtonElement).style.color = 'var(--text-muted)'
                    ;(e.target as HTMLButtonElement).style.background = 'transparent'
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <button
              onClick={handleToggle}
              style={{
                background: 'rgba(20,184,166,0.08)',
                border: '1px solid var(--glass-border)',
                borderRadius: '10px',
                padding: '0.6rem',
                cursor: 'pointer',
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                ;(e.target as HTMLButtonElement).style.background = 'rgba(20,184,166,0.15)'
              }}
              onMouseLeave={e => {
                ;(e.target as HTMLButtonElement).style.background = 'rgba(20,184,166,0.08)'
              }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMenuOpen(v => !v)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text)',
                alignItems: 'center',
                padding: '0.4rem',
                transition: 'all 0.25s ease',
              }}
              className="md:hidden"
              onMouseEnter={e => {
                ;(e.target as HTMLButtonElement).style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                ;(e.target as HTMLButtonElement).style.color = 'var(--text)'
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '90px',
              left: '1rem',
              right: '1rem',
              zIndex: 999,
              borderRadius: '16px',
              padding: '0.75rem',
            }}
            className="glass-card md:hidden"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text)',
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    ;(e.target as HTMLButtonElement).style.background = 'rgba(20,184,166,0.1)'
                    ;(e.target as HTMLButtonElement).style.color = 'var(--accent)'
                  }}
                  onMouseLeave={e => {
                    ;(e.target as HTMLButtonElement).style.background = 'transparent'
                    ;(e.target as HTMLButtonElement).style.color = 'var(--text)'
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
