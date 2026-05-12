import { motion } from 'framer-motion'
import { Code2, Server, Layers } from 'lucide-react'

const HIGHLIGHTS = [
  { icon: <Code2 size={20} />, label: 'Frontend', value: '1+ yrs' },
  { icon: <Server size={20} />, label: 'Backend', value: '1+ yrs' },
  { icon: <Layers size={20} />, label: 'Projects', value: '20+' },
]

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p style={{ color: 'var(--accent)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
          Get to know me
        </p>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--text)', marginBottom: '3rem' }}>
          About Me
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div
              style={{
                width: '240px',
                height: '280px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '2px solid var(--glass-border)',
                margin: '0 auto',
                position: 'relative',
              }}
            >
              <img
                src="/about-me.jpeg"
                alt="Muhamad Fajar Ramdani"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => {
                  const el = e.target as HTMLImageElement
                  el.style.display = 'none'
                  el.parentElement!.style.background = 'linear-gradient(135deg, #14b8a6 0%, #6366f1 100%)'
                  el.parentElement!.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-family:Syne,sans-serif;font-size:3rem;color:white;font-weight:800">MFR</div>'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  right: '-8px',
                  background: 'var(--accent)',
                  borderRadius: '12px',
                  padding: '0.5rem 0.9rem',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: '#fff',
                }}
              >
                Available for hire
              </div>
            </div>
          </div>

          <div>
            <p style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>
              I'm a <strong style={{ color: 'var(--accent)' }}>Junior Fullstack Developer</strong> based in Indonesia, passionate about building clean, performant web applications that solve real problems.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '2rem', fontFamily: 'Outfit, sans-serif' }}>
              My frontend work centers around Laravel and React, while on the backend I enjoy working with Laravel and exploring MySQL for performance-critical services. I care deeply about code quality, developer experience, and shipping things that actually work.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '2.5rem', fontFamily: 'Outfit, sans-serif' }}>
              Outside of coding, I write about technology on my blog, contribute to open-source projects, and constantly experiment with new tools and frameworks.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card"
                  style={{ borderRadius: '12px', padding: '1rem 1.25rem', textAlign: 'center', minWidth: '90px' }}
                >
                  <div style={{ color: 'var(--accent)', marginBottom: '0.35rem', display: 'flex', justifyContent: 'center' }}>{h.icon}</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text)' }}>{h.value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>{h.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
