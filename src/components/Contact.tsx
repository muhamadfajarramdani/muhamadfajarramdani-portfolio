import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, AlertCircle, Mail, User, MessageSquare } from 'lucide-react'

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email.'
  if (!form.message.trim()) errors.message = 'Message is required.'
  else if (form.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name as keyof FormErrors]) setErrors(er => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setStatus('loading')
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

      if (!serviceId || !templateId || !publicKey) throw new Error('EmailJS not configured')

      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, publicKey)

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = (hasError?: string) => ({
    width: '100%',
    background: 'var(--glass)',
    border: `1px solid ${hasError ? '#ef4444' : 'var(--glass-border)'}`,
    borderRadius: '10px',
    padding: '0.75rem 1rem 0.75rem 2.75rem',
    color: 'var(--text)',
    fontFamily: 'Outfit, sans-serif',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box' as const,
  })

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ color: 'var(--accent)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
            Let's talk
          </p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--text)', marginBottom: '0.75rem' }}>
            Contact
          </h2>
          <p style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Have a project in mind or want to talk tech? Send a message and I'll get back within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card"
          style={{ borderRadius: '20px', padding: '2rem' }}
        >
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <CheckCircle size={48} style={{ color: 'var(--accent)', margin: '0 auto 1rem' }} />
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem' }}>Message Sent!</h3>
              <p style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-muted)' }}>Thanks for reaching out. I'll reply soon.</p>
              <button onClick={() => setStatus('idle')} style={{ marginTop: '1.5rem', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: '10px', padding: '0.6rem 1.5rem', cursor: 'pointer', fontFamily: 'Outfit, sans-serif' }}>
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontFamily: 'Outfit, sans-serif', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your full name" style={inputStyle(errors.name)} />
                </div>
                {errors.name && <p style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>{errors.name}</p>}
              </div>

              {/* Email */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontFamily: 'Outfit, sans-serif', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Email</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle(errors.email)} />
                </div>
                {errors.email && <p style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>{errors.email}</p>}
              </div>

              {/* Message */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontFamily: 'Outfit, sans-serif', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Message</label>
                <div style={{ position: 'relative' }}>
                  <MessageSquare size={15} style={{ position: 'absolute', left: '12px', top: '14px', color: 'var(--text-muted)' }} />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hi..."
                    rows={5}
                    style={{ ...inputStyle(errors.message), paddingTop: '0.75rem', resize: 'vertical', fontFamily: 'Outfit, sans-serif' }}
                  />
                </div>
                {errors.message && <p style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.3rem', fontFamily: 'Outfit, sans-serif' }}>{errors.message}</p>}
              </div>

              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', fontSize: '0.85rem' }}>
                  <AlertCircle size={15} /> Failed to send. Please try again or email directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  width: '100%',
                  background: status === 'loading' ? 'var(--text-muted)' : 'var(--accent)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '0.85rem',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'background 0.2s, transform 0.2s',
                }}
              >
                {status === 'loading' ? 'Sending...' : <><Send size={16} /> Send Message</>}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
