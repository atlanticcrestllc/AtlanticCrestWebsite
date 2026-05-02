import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedinIn } from 'react-icons/fa'
import { LuMapPin, LuMail, LuSmartphone } from 'react-icons/lu'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Experience', path: '/experience' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

const services = [
  'Wedding DJ Services',
  'Private Celebrations',
  'Venue & Club Events',
  'Social Media Management',
  'Brand Development',
  'Marketing Consultation',
]

const socialLinks = [
  /* TODO: Replace # with real social media URLs */
  { icon: <FaInstagram size={18} />, href: '#', label: 'Instagram' },
  { icon: <FaFacebookF size={18} />, href: '#', label: 'Facebook' },
  { icon: <FaTiktok size={18} />, href: '#', label: 'TikTok' },
  { icon: <FaLinkedinIn size={18} />, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: '#080810',
        borderTop: '1px solid rgba(229,228,226,0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/atlantic-crest-icon.png"
                alt="Atlantic Crest LLC"
                className="h-14 w-auto mb-3"
              />
              <span
                className="text-xl font-bold tracking-widest text-white block"
                style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.15em' }}
              >
                ATLANTIC CREST
              </span>
              <span
                className="text-xs tracking-[0.3em] font-light block mt-0.5"
                style={{ color: '#E5E4E2', fontFamily: 'Montserrat, sans-serif', opacity: 0.5 }}
              >
                LLC
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mt-4 mb-6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                color: 'rgba(229,228,226,0.55)',
                fontStyle: 'italic',
              }}
            >
              Elevated. Experienced. Atlantic Crest.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(91,45,142,0.2)',
                    border: '1px solid rgba(229,228,226,0.15)',
                    color: 'rgba(229,228,226,0.6)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(91,45,142,0.5)'
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.borderColor = 'rgba(229,228,226,0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(91,45,142,0.2)'
                    e.currentTarget.style.color = 'rgba(229,228,226,0.6)'
                    e.currentTarget.style.borderColor = 'rgba(229,228,226,0.15)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.25em] mb-6 uppercase"
              style={{ fontFamily: 'Cinzel, serif', color: '#E5E4E2' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors duration-200"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'rgba(229,228,226,0.5)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E5E4E2')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(229,228,226,0.5)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.25em] mb-6 uppercase"
              style={{ fontFamily: 'Cinzel, serif', color: '#E5E4E2' }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      color: 'rgba(229,228,226,0.5)',
                    }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.25em] mb-6 uppercase"
              style={{ fontFamily: 'Cinzel, serif', color: '#E5E4E2' }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <LuMapPin size={16} color="#5B2D8E" style={{ marginTop: 2, flexShrink: 0 }} />
                <span
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.5)' }}
                >
                  Stuart, FL<br />Florida's Treasure Coast
                </span>
              </li>
              <li className="flex items-start gap-3">
                <LuMail size={16} color="#5B2D8E" style={{ marginTop: 2, flexShrink: 0 }} />
                <a
                  href="mailto:contact@atlantic-crest.com"
                  className="text-sm transition-colors duration-200"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.5)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E5E4E2')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(229,228,226,0.5)')}
                >
                  contact@atlantic-crest.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <LuSmartphone size={16} color="#5B2D8E" style={{ marginTop: 2, flexShrink: 0 }} />
                <a
                  href="tel:+17722030940"
                  className="text-sm transition-colors duration-200"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.5)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E5E4E2')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(229,228,226,0.5)')}
                >
                  772-203-0940
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{ borderTop: '1px solid rgba(229,228,226,0.08)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p
            className="text-xs"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.35)' }}
          >
            © 2025 Atlantic Crest LLC. All Rights Reserved. Stuart, FL
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.25)' }}
          >
            Entertainment • Marketing • Consulting
          </p>
        </div>
      </div>
    </footer>
  )
}
