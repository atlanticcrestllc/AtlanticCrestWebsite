import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Experience', path: '/experience' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(13, 13, 13, 0.92)'
          : 'rgba(13, 13, 13, 0.3)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(8px)',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(8px)',
        borderBottom: scrolled ? '1px solid rgba(229, 228, 226, 0.1)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span
              className="text-xl font-bold tracking-widest text-white transition-colors duration-300 group-hover:text-silver-platinum"
              style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.15em' }}
            >
              ATLANTIC CREST
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-sm font-medium tracking-widest transition-colors duration-300 group"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    color: isActive ? '#E5E4E2' : 'rgba(229,228,226,0.65)',
                    letterSpacing: '0.12em',
                  }}
                >
                  {link.label.toUpperCase()}
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                    style={{
                      width: isActive ? '100%' : '0%',
                      background: 'linear-gradient(90deg, #5B2D8E, #0F52BA)',
                    }}
                  />
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full"
                    style={{
                      width: '0%',
                      background: 'linear-gradient(90deg, #5B2D8E, #0F52BA)',
                    }}
                  />
                </Link>
              )
            })}
          </div>

          {/* Book Now Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-block text-sm font-semibold tracking-widest px-6 py-2.5 rounded-sm transition-all duration-300 hover:shadow-lg"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '0.12em',
                background: '#5B2D8E',
                color: '#fff',
                border: '1px solid rgba(229,228,226,0.35)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#7B3DBE'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(91,45,142,0.5)'
                e.currentTarget.style.borderColor = 'rgba(229,228,226,0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#5B2D8E'
                e.currentTarget.style.boxShadow = ''
                e.currentTarget.style.borderColor = 'rgba(229,228,226,0.35)'
              }}
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 rounded transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              background: 'rgba(13, 13, 13, 0.98)',
              borderTop: '1px solid rgba(229,228,226,0.1)',
              overflow: 'hidden',
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="block text-sm font-medium tracking-widest py-2 border-b transition-colors duration-200"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      letterSpacing: '0.15em',
                      color: location.pathname === link.path ? '#E5E4E2' : 'rgba(229,228,226,0.6)',
                      borderColor: 'rgba(229,228,226,0.08)',
                    }}
                  >
                    {link.label.toUpperCase()}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="mt-2 text-center text-sm font-semibold tracking-widest py-3 rounded-sm"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  letterSpacing: '0.12em',
                  background: '#5B2D8E',
                  color: '#fff',
                  border: '1px solid rgba(229,228,226,0.35)',
                }}
              >
                BOOK NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
