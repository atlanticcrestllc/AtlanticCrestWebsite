import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { LuMapPin, LuMail, LuSmartphone } from 'react-icons/lu'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const serviceOptions = [
  { value: '', label: 'Select a Service...' },
  { value: 'dj-entertainment', label: 'DJ / Entertainment' },
  { value: 'marketing-consulting', label: 'Marketing Consulting' },
  { value: 'both', label: 'Both Services' },
  { value: 'other', label: 'Other' },
]

const contactDetails = [
  { icon: <LuMapPin size={18} color="#9B6DCA" />, label: 'Location', value: 'Stuart, FL — Treasure Coast' },
  /* TODO: Replace with real email */
  { icon: <LuMail size={18} color="#9B6DCA" />, label: 'Email', value: 'contact@atlantic-crest.com', href: 'mailto:contact@atlantic-crest.com' },
  { icon: <LuSmartphone size={18} color="#9B6DCA" />, label: 'Phone', value: '772-203-0940', href: 'tel:+17722030940' },
]

/* TODO: Replace # hrefs with real social media profile URLs */
const socialLinks = [
  { icon: <FaInstagram size={20} />, href: '#', label: 'Instagram' },
  { icon: <FaFacebookF size={20} />, href: '#', label: 'Facebook' },
  { icon: <FaTiktok size={20} />, href: '#', label: 'TikTok' },
  { icon: <FaLinkedinIn size={20} />, href: '#', label: 'LinkedIn' },
]

const inputStyle = {
  width: '100%',
  background: 'rgba(26,26,46,0.8)',
  border: '1px solid rgba(229,228,226,0.15)',
  borderRadius: '2px',
  color: '#fff',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '14px',
  padding: '14px 16px',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

function FormField({ label, required, children }) {
  return (
    <div>
      <label
        className="block text-xs font-semibold tracking-wider mb-2"
        style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.65)', letterSpacing: '0.12em' }}
      >
        {label.toUpperCase()}{required && <span style={{ color: '#9B6DCA', marginLeft: 4 }}>*</span>}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    event_date: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message || !form.service) return
    setStatus('sending')
    try {
      const formData = new FormData(e.target)
      formData.append('access_key', WEB3FORMS_KEY)
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', service: '', event_date: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const getFocusStyle = (field) =>
    focusedField === field
      ? { ...inputStyle, borderColor: 'rgba(91,45,142,0.8)', boxShadow: '0 0 0 3px rgba(91,45,142,0.15)' }
      : inputStyle

  return (
    <PageTransition>
      <Helmet>
        <title>Contact Atlantic Crest LLC | Book a DJ or Marketing Consultation — Stuart, FL</title>
        <meta name="description" content="Contact Atlantic Crest LLC to book DJ entertainment services or schedule a marketing consulting session. Based in Stuart, FL serving the Treasure Coast and beyond." />
        <meta name="keywords" content="contact Atlantic Crest, book DJ Stuart FL, marketing consultation Treasure Coast, book entertainment Florida" />
        <link rel="canonical" href="https://atlantic-crest.com/contact" />
        <meta property="og:url" content="https://atlantic-crest.com/contact" />
        <meta property="og:title" content="Contact Atlantic Crest LLC | Book a DJ or Marketing Consultation" />
        <meta property="og:description" content="Book DJ entertainment or schedule a marketing consulting session with Atlantic Crest LLC. Based in Stuart, FL serving the Treasure Coast and beyond." />
        <meta property="og:image" content="https://atlantic-crest.com/atlantic-crest-icon.png" />
      </Helmet>

      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-6 overflow-hidden"
        style={{ background: '#0D0D0D' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(91,45,142,0.22) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <SectionReveal>
            <p
              className="text-xs tracking-[0.35em] mb-5 uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.45)' }}
            >
              Get In Touch
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5"
              style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.04em' }}
            >
              Let's Create Something<br />Extraordinary
            </h1>
            <p
              className="text-base font-light"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.6)' }}
            >
              Reach out and let's start the conversation.
            </p>
            <div
              className="w-20 h-px mx-auto mt-8"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(229,228,226,0.4), transparent)' }}
            />
          </SectionReveal>
        </div>
      </section>

      {/* Split Layout */}
      <section className="pb-32 px-6" style={{ background: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — Contact Info */}
            <SectionReveal direction="right">
              <div>
                <p
                  className="text-xs tracking-[0.3em] mb-8 uppercase"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#9B6DCA' }}
                >
                  Contact Information
                </p>
                <h2
                  className="text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Atlantic Crest LLC
                </h2>
                <p
                  className="text-sm leading-relaxed mb-10"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.6)' }}
                >
                  Ready to elevate your event or amplify your brand? We'd love to hear about your project.
                  Fill out the form and we'll be in touch within 24–48 hours.
                </p>

                {/* Contact Details */}
                <div className="space-y-5 mb-12">
                  {contactDetails.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'rgba(91,45,142,0.2)',
                          border: '1px solid rgba(91,45,142,0.3)',
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p
                          className="text-xs tracking-wider mb-1"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.35)' }}
                        >
                          {item.label.toUpperCase()}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm transition-colors duration-200"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.75)' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#E5E4E2')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(229,228,226,0.75)')}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p
                            className="text-sm"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.75)' }}
                          >
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <p
                    className="text-xs tracking-[0.25em] mb-5 uppercase"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.35)' }}
                  >
                    Follow Us
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className="w-11 h-11 rounded-sm flex items-center justify-center transition-all duration-300"
                        style={{
                          background: 'rgba(91,45,142,0.15)',
                          border: '1px solid rgba(229,228,226,0.12)',
                          color: 'rgba(229,228,226,0.5)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#5B2D8E'
                          e.currentTarget.style.color = '#fff'
                          e.currentTarget.style.borderColor = 'rgba(229,228,226,0.4)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(91,45,142,0.15)'
                          e.currentTarget.style.color = 'rgba(229,228,226,0.5)'
                          e.currentTarget.style.borderColor = 'rgba(229,228,226,0.12)'
                        }}
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Decorative quote */}
                <div
                  className="mt-12 p-6 rounded-sm"
                  style={{
                    background: 'rgba(26,26,46,0.5)',
                    border: '1px solid rgba(91,45,142,0.3)',
                    borderLeft: '3px solid #5B2D8E',
                  }}
                >
                  <p
                    className="text-sm italic leading-relaxed"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.65)' }}
                  >
                    "We don't just show up — we elevate every room we walk into."
                  </p>
                  <p
                    className="text-xs mt-3 tracking-wider"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.35)' }}
                  >
                    — ATLANTIC CREST LLC
                  </p>
                </div>
              </div>
            </SectionReveal>

            {/* Right — Contact Form */}
            <SectionReveal direction="left" delay={0.15}>
              <div
                className="p-8 sm:p-10 rounded-sm"
                style={{
                  background: 'rgba(26,26,46,0.7)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(229,228,226,0.12)',
                }}
              >
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                        style={{ background: 'rgba(91,45,142,0.3)', border: '1px solid rgba(91,45,142,0.5)' }}
                      >
                        <FiCheck size={28} color="#9B6DCA" />
                      </div>
                      <h3
                        className="text-xl font-bold text-white mb-3"
                        style={{ fontFamily: 'Cinzel, serif' }}
                      >
                        Message Sent!
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.65)' }}
                      >
                        Thank you for reaching out. We'll be in touch within 24–48 hours to discuss your project.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="mt-8 text-xs tracking-wider"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#9B6DCA' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#E5E4E2')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#9B6DCA')}
                      >
                        SEND ANOTHER MESSAGE
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <h3
                        className="text-lg font-bold text-white mb-6"
                        style={{ fontFamily: 'Cinzel, serif' }}
                      >
                        Send Your Inquiry
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField label="Full Name" required>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Your full name"
                            required
                            style={getFocusStyle('name')}
                          />
                        </FormField>
                        <FormField label="Email Address" required>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="your@email.com"
                            required
                            style={getFocusStyle('email')}
                          />
                        </FormField>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField label="Phone Number">
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="(optional)"
                            style={getFocusStyle('phone')}
                          />
                        </FormField>
                        <FormField label="Event Date">
                          <input
                            type="date"
                            name="event_date"
                            value={form.event_date}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('event_date')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="(optional)"
                            style={{
                              ...getFocusStyle('event_date'),
                              colorScheme: 'dark',
                            }}
                          />
                        </FormField>
                      </div>

                      <FormField label="Service Interested In" required>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('service')}
                          onBlur={() => setFocusedField(null)}
                          required
                          style={{
                            ...getFocusStyle('service'),
                            cursor: 'pointer',
                          }}
                        >
                          {serviceOptions.map((o) => (
                            <option
                              key={o.value}
                              value={o.value}
                              style={{ background: '#1A1A2E', color: '#fff' }}
                            >
                              {o.label}
                            </option>
                          ))}
                        </select>
                      </FormField>

                      <FormField label="Tell Us About Your Project" required>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Tell us about your event, brand, or project goals..."
                          required
                          rows={5}
                          style={{
                            ...getFocusStyle('message'),
                            resize: 'vertical',
                            minHeight: '120px',
                          }}
                        />
                      </FormField>

                      {status === 'error' && (
                        <p
                          className="text-xs"
                          style={{ fontFamily: 'Montserrat, sans-serif', color: '#ff6b6b' }}
                        >
                          Something went wrong. Please try again or email us directly.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full flex items-center justify-center gap-2 py-4 text-sm font-bold tracking-widest rounded-sm transition-all duration-300 mt-2"
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          letterSpacing: '0.12em',
                          background: status === 'sending' ? 'rgba(91,45,142,0.5)' : '#5B2D8E',
                          color: '#fff',
                          border: '1px solid rgba(229,228,226,0.35)',
                          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                        }}
                        onMouseEnter={(e) => {
                          if (status !== 'sending') {
                            e.currentTarget.style.background = '#7B3DBE'
                            e.currentTarget.style.boxShadow = '0 6px 24px rgba(91,45,142,0.45)'
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = status === 'sending' ? 'rgba(91,45,142,0.5)' : '#5B2D8E'
                          e.currentTarget.style.boxShadow = ''
                        }}
                      >
                        {status === 'sending' ? (
                          <>
                            <span
                              className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin inline-block"
                            />
                            SENDING...
                          </>
                        ) : (
                          <>
                            SEND MY INQUIRY <FiArrowRight />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
