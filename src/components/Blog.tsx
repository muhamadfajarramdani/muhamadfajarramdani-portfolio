import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import { BLOG_POSTS } from '@/data/index'

export default function Blog() {
  return (
    <section id="blog" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}
        >
          <div>
            <p style={{ color: 'var(--accent)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
              Writing
            </p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--text)' }}>
              Blog
            </h2>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card"
              style={{ borderRadius: '16px', padding: '1.75rem', display: 'flex', flexDirection: 'column' }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {post.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      background: 'rgba(20,184,166,0.1)',
                      color: 'var(--accent)',
                      fontSize: '0.72rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      fontFamily: 'Outfit, sans-serif',
                    }}
                  >
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>

              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                {post.title}
              </h3>

              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', flex: 1 }}>
                {post.summary}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'Outfit, sans-serif', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <Calendar size={13} />
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
                <Link
                  to={`/blog/${post.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: 'var(--accent)',
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'gap 0.2s',
                  }}
                >
                  Read more <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
