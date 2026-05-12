import { motion } from 'framer-motion'
import { useGitHub } from '@/hooks/useGitHub'
import { Star, BookOpen, Users, GitFork } from 'lucide-react'

export default function GitHubStats() {
  const { stats, loading } = useGitHub()

  const statCards = stats
    ? [
        { icon: <BookOpen size={20} />, label: 'Public Repos', value: stats.public_repos },
        { icon: <Star size={20} />, label: 'Total Stars', value: stats.totalStars },
        { icon: <Users size={20} />, label: 'Followers', value: stats.followers },
        { icon: <GitFork size={20} />, label: 'Following', value: stats.following },
      ]
    : []

  return (
    <section id="github" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ color: 'var(--accent)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
            Open source activity
          </p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--text)', marginBottom: '3rem' }}>
            GitHub Stats
          </h2>
        </motion.div>

        {loading ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            {[0, 1, 2, 3].map(i => (
              <div key={i} style={{ height: '110px', borderRadius: '16px', background: 'var(--glass-border)', animation: 'pulse 1.5s infinite' }} />
            ))}
          </div>
        ) : (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
              {statCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card"
                  style={{ borderRadius: '16px', padding: '1.5rem', textAlign: 'center' }}
                >
                  <div style={{ color: 'var(--accent)', display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>{card.icon}</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '2rem', color: 'var(--text)', marginBottom: '0.25rem' }}>{card.value}</div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.82rem', color: 'var(--text-muted)' }}>{card.label}</div>
                </motion.div>
              ))}
            </div>

            {stats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card"
                style={{ borderRadius: '16px', padding: '1.5rem' }}
              >
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, color: 'var(--text)', marginBottom: '1.25rem', fontSize: '1rem' }}>Top Languages</h3>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {stats.topLanguages.map((lang, i) => {
                    const colors = ['#14b8a6', '#6366f1', '#f59e0b', '#ec4899']
                    return (
                      <span
                        key={lang}
                        style={{
                          background: `${colors[i % colors.length]}18`,
                          color: colors[i % colors.length],
                          border: `1px solid ${colors[i % colors.length]}30`,
                          borderRadius: '8px',
                          padding: '0.4rem 0.9rem',
                          fontFamily: 'Outfit, sans-serif',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                        }}
                      >
                        {lang}
                      </span>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }`}</style>
    </section>
  )
}
