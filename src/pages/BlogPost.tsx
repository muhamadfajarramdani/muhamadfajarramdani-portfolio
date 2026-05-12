import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import { BLOG_POSTS } from '@/data/index'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const post = BLOG_POSTS.find(p => p.slug === slug)

  useEffect(() => {
    if (!post) navigate('/', { replace: true })
    else window.scrollTo(0, 0)
  }, [post, navigate])

  if (!post) return null

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <article style={{ maxWidth: '720px', margin: '0 auto', padding: '3rem 1.5rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontFamily: 'Outfit, sans-serif',
                fontSize: '0.9rem',
                marginBottom: '2rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)' }}
            >
              <ArrowLeft size={15} /> Back to portfolio
            </Link>

            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {post.tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    background: 'rgba(20,184,166,0.1)',
                    color: 'var(--accent)',
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    fontFamily: 'Outfit, sans-serif',
                  }}
                >
                  <Tag size={10} /> {tag}
                </span>
              ))}
            </div>

            <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', color: 'var(--text)', lineHeight: 1.2, marginBottom: '1rem' }}>
              {post.title}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif', fontSize: '0.85rem', marginBottom: '2.5rem' }}>
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <div
              style={{
                fontFamily: 'Outfit, sans-serif',
                color: 'var(--text)',
                lineHeight: 1.85,
                fontSize: '1.02rem',
              }}
            >
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.8rem', color: 'var(--text)', margin: '2rem 0 1rem' }}>{children}</h1>,
                  h2: ({ children }) => <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '1.4rem', color: 'var(--text)', margin: '2rem 0 0.75rem' }}>{children}</h2>,
                  h3: ({ children }) => <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '1.1rem', color: 'var(--text)', margin: '1.5rem 0 0.5rem' }}>{children}</h3>,
                  p: ({ children }) => <p style={{ marginBottom: '1.25rem', color: 'var(--text)', lineHeight: 1.85 }}>{children}</p>,
                  code: ({ children }) => (
                    <code style={{ background: 'rgba(20,184,166,0.12)', color: 'var(--accent)', padding: '0.15rem 0.4rem', borderRadius: '4px', fontSize: '0.88em', fontFamily: 'monospace' }}>{children}</code>
                  ),
                  pre: ({ children }) => (
                    <pre style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '1.25rem', overflowX: 'auto', margin: '1.5rem 0', fontSize: '0.88rem', fontFamily: 'monospace', lineHeight: 1.7 }}>
                      {children}
                    </pre>
                  ),
                  strong: ({ children }) => <strong style={{ color: 'var(--text)', fontWeight: 600 }}>{children}</strong>,
                  a: ({ children, href }) => <a href={href} style={{ color: 'var(--accent)', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">{children}</a>,
                  ul: ({ children }) => <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>{children}</ul>,
                  li: ({ children }) => <li style={{ marginBottom: '0.4rem', color: 'var(--text)' }}>{children}</li>,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  )
}
