import { motion } from 'framer-motion'
import { EXPERIENCES } from '@/data/index'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ color: 'var(--accent)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
            Career path
          </p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--text)', marginBottom: '3rem' }}>
            Experience
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: '8px',
              bottom: '8px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent), #6366f1)',
              borderRadius: '2px',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '56px' }}>
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ position: 'relative' }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-44px',
                    top: '20px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    border: '3px solid var(--bg)',
                    boxShadow: '0 0 0 2px var(--accent)',
                  }}
                />

                <div className="glass-card" style={{ borderRadius: '16px', padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div>
                      <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '1.05rem', color: 'var(--text)' }}>{exp.role}</h3>
                      <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem', color: 'var(--accent)', marginTop: '0.15rem' }}>{exp.company}</p>
                    </div>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.8rem', color: 'var(--text-muted)', background: 'var(--glass-border)', padding: '0.25rem 0.75rem', borderRadius: '8px', whiteSpace: 'nowrap' }}>
                      {exp.period}
                    </span>
                  </div>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>{exp.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.tags.map(tag => (
                      <span key={tag} style={{ background: 'rgba(20,184,166,0.1)', color: 'var(--accent)', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '6px', fontFamily: 'Outfit, sans-serif' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
