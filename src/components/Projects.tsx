import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { PROJECTS, type Project } from '@/data/index'

const CATEGORIES = ['All', 'Mobile Apps', 'API', 'Fullstack'] as const

function getThumbnailSrc(thumbnail: string | string[]): string {
  return Array.isArray(thumbnail) ? thumbnail[0] : thumbnail
}

function ThumbnailCarousel({ thumbnails, title }: { thumbnails: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % thumbnails.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + thumbnails.length) % thumbnails.length)

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <img
        src={thumbnails[currentIndex]}
        alt={`${title} - ${currentIndex + 1}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
      />
      {thumbnails.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            style={{
              position: 'absolute',
              left: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.5)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.5)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
            }}
          >
            <ChevronRight size={16} />
          </button>
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '4px',
            }}
          >
            {thumbnails.map((_, i) => (
              <div
                key={i}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: i === currentIndex ? 'var(--accent)' : 'rgba(255,255,255,0.5)',
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function ModalThumbnailCarousel({ thumbnails, title, category }: { thumbnails: string[], title: string, category?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % thumbnails.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + thumbnails.length) % thumbnails.length)

  const height = category === 'Mobile Apps' ? '320px' : '220px'

  return (
    <div style={{ position: 'relative', width: '100%', height }}>
      <img
        src={thumbnails[currentIndex]}
        alt={`${title} - ${currentIndex + 1}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {thumbnails.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.7)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.7)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
            }}
          >
            <ChevronRight size={20} />
          </button>
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '6px',
            }}
          >
            {thumbnails.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: i === currentIndex ? 'var(--accent)' : 'rgba(255,255,255,0.5)',
                  border: 'none',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>('All')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = PROJECTS.filter(p => {
    const matchCat = active === 'All' || p.category === active
    const matchSearch = search === '' || p.title.toLowerCase().includes(search.toLowerCase()) || p.stack.some(s => s.toLowerCase().includes(search.toLowerCase()))
    return matchCat && matchSearch
  })

  return (
    <section id="projects" className="section-padding">
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ color: 'var(--accent)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
            My work
          </p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--text)', marginBottom: '2rem' }}>
            Projects
          </h2>
        </motion.div>

        {/* Search + Filter */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2.5rem' }}>
          <input
            type="text"
            placeholder="Search projects or stack..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              flex: '1',
              minWidth: '200px',
              background: 'var(--glass)',
              border: '1px solid var(--glass-border)',
              borderRadius: '10px',
              padding: '0.6rem 1rem',
              color: 'var(--text)',
              fontFamily: 'Outfit, sans-serif',
              fontSize: '0.9rem',
              outline: 'none',
            }}
          />
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  background: active === cat ? 'var(--accent)' : 'var(--glass)',
                  color: active === cat ? '#fff' : 'var(--text-muted)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  padding: '0.45rem 1rem',
                  cursor: 'pointer',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="glass-card"
                style={{ borderRadius: '16px', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setSelected(project)}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div style={{ height: project.category === 'Mobile Apps' ? '320px' : '180px', overflow: 'hidden', position: 'relative' }}>
                  {Array.isArray(project.thumbnail) ? (
                    <ThumbnailCarousel thumbnails={project.thumbnail} title={project.title} />
                  ) : (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                      onMouseEnter={e => { (e.target as HTMLImageElement).style.transform = 'scale(1.05)' }}
                      onMouseLeave={e => { (e.target as HTMLImageElement).style.transform = 'scale(1)' }}
                    />
                  )}
                  <span
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'var(--accent)',
                      color: '#fff',
                      fontSize: '0.7rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    {project.category}
                  </span>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem', fontSize: '1rem' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>{project.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {project.stack.slice(0, 4).map(s => (
                      <span key={s} style={{ background: 'rgba(20,184,166,0.1)', color: 'var(--accent)', fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: '6px', fontFamily: 'Outfit, sans-serif' }}>{s}</span>
                    ))}
                    {project.stack.length > 4 && (
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', padding: '0.2rem 0.4rem', fontFamily: 'Outfit, sans-serif' }}>+{project.stack.length - 4}</span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif', padding: '3rem 0' }}>No projects match your search.</p>
        )}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem', padding: '1rem' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontFamily: 'Outfit, sans-serif', marginBottom: '0.5rem' }}>
          All my projects are available on GitHub.
        </p>
        <p style={{ color: 'var(--text)', fontSize: '0.9rem', fontFamily: 'Outfit, sans-serif' }}>
          You can check them out at my GitHub: <a href="https://github.com/muhamadfajarramdani" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>muhamadfajarramdani</a>
        </p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="glass-card"
              style={{
                borderRadius: '20px',
                maxWidth: '600px',
                width: '100%',
                overflow: 'hidden',
                maxHeight: '90vh',
                overflowY: 'auto',
              }}
            >
              <div style={{ position: 'relative' }}>
                {Array.isArray(selected.thumbnail) ? (
                  <ModalThumbnailCarousel thumbnails={selected.thumbnail} title={selected.title} category={selected.category} />
                ) : (
                  <img src={selected.thumbnail} alt={selected.title} style={{ width: '100%', height: selected.category === 'Mobile Apps' ? '320px' : '220px', objectFit: 'cover' }} />
                )}
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(0,0,0,0.5)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.4rem',
                    cursor: 'pointer',
                    color: '#fff',
                    display: 'flex',
                  }}
                >
                  <X size={18} />
                </button>
              </div>
              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: 'var(--text)' }}>{selected.title}</h3>
                  <span style={{ background: 'var(--accent)', color: '#fff', fontSize: '0.72rem', padding: '0.25rem 0.7rem', borderRadius: '6px', fontFamily: 'Outfit, sans-serif', whiteSpace: 'nowrap' }}>{selected.category}</span>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.9rem', fontFamily: 'Outfit, sans-serif', marginBottom: '1.5rem', whiteSpace: 'pre-line' }}>{selected.longDescription}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {selected.stack.map(s => (
                    <span key={s} style={{ background: 'rgba(20,184,166,0.1)', color: 'var(--accent)', fontSize: '0.78rem', padding: '0.3rem 0.7rem', borderRadius: '8px', fontFamily: 'Outfit, sans-serif' }}>{s}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {selected.demoUrl && (
                    <a href={selected.demoUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--accent)', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: '10px', textDecoration: 'none', fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem' }}>
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                  {selected.sourceUrl && (
                    <a href={selected.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--glass)', color: 'var(--text)', border: '1px solid var(--glass-border)', padding: '0.6rem 1.25rem', borderRadius: '10px', textDecoration: 'none', fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem' }}>
                      <Github size={15} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
