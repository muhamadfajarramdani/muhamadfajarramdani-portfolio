import { motion } from 'framer-motion'

const LIGHTHOUSE = [
  { label: 'Performance', score: 100, color: '#14b8a6' },
  { label: 'Accessibility', score: 100, color: '#6366f1' },
  { label: 'Best Practices', score: 100, color: '#fbbf24' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--glass-border)', padding: '3rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Lighthouse Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
        >
          {LIGHTHOUSE.map(item => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'var(--glass)',
                border: '1px solid var(--glass-border)',
                borderRadius: '12px',
                padding: '0.6rem 1.1rem',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: `conic-gradient(${item.color} 100%, #e5e7eb 0%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.68rem', color: item.color }}>100</span>
                </div>
              </div>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.82rem', color: 'var(--text-muted)' }}>{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--accent)' }}>
            MFR<span style={{ color: 'var(--text)' }}>.</span>
          </span>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.82rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} Muhamad Fajar Ramdani. Built with React + TailwindCSS.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'rgba(20,184,166,0.1)',
              border: '1px solid var(--glass-border)',
              borderRadius: '10px',
              padding: '0.45rem 0.9rem',
              color: 'var(--accent)',
              cursor: 'pointer',
              fontFamily: 'Outfit, sans-serif',
              fontSize: '0.82rem',
            }}
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
