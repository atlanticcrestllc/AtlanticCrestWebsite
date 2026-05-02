import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import TestimonialCarousel from '../components/TestimonialCarousel'
import { FiArrowRight } from 'react-icons/fi'
import { LuHeadphones, LuChartBar } from 'react-icons/lu'
import { client } from '../sanity/client'
import { urlFor } from '../sanity/image'

const HERO_VIDEO = '/Vid.MOV'

const TEASER_QUERY = `*[_type == "gallery"][0]{ photos[0...6]{ _key, label, image } }`

const stats = [
  { target: 15, suffix: '+', label: 'Years in Entertainment' },
  { target: 7, suffix: '+', label: 'Years in Marketing' },
  { target: 500, suffix: '+', label: 'Events Executed' },
  { target: 10, suffix: '+', label: 'States & Countries' },
]

function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Parallax Video Background */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ y: yBg, scale: 1.15 }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      </motion.div>
      {/* Overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(91,45,142,0.35) 0%, rgba(15,82,186,0.28) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(13,13,13,0.15) 0%, rgba(13,13,13,0.55) 100%)',
        }}
      />

      {/* Content */}
      <motion.div className="relative z-10 text-center px-6 max-w-5xl" style={{ opacity }}>
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.35em' }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-xs font-medium mb-6 uppercase"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            color: 'rgba(229,228,226,0.7)',
            letterSpacing: '0.35em',
          }}
        >
          Stuart, FL &nbsp;·&nbsp; Florida's Treasure Coast
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.03em' }}
        >
          Where Experience<br />
          <span
            style={{
              background: 'linear-gradient(135deg, #E5E4E2 0%, #fff 40%, #9B6DCA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Meets Excellence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base sm:text-lg font-light mb-10 tracking-widest"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            color: 'rgba(229,228,226,0.8)',
            letterSpacing: '0.2em',
          }}
        >
          Entertainment &nbsp;•&nbsp; Marketing &nbsp;•&nbsp; Consulting — Stuart, FL & Beyond
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest rounded-sm transition-all duration-300 group"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '0.12em',
              background: '#5B2D8E',
              color: '#fff',
              border: '1px solid rgba(229,228,226,0.4)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#7B3DBE'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(91,45,142,0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#5B2D8E'
              e.currentTarget.style.boxShadow = ''
            }}
          >
            BOOK A CONSULTATION
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest rounded-sm transition-all duration-300"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '0.12em',
              background: 'transparent',
              color: '#E5E4E2',
              border: '1px solid rgba(229,228,226,0.5)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(229,228,226,0.08)'
              e.currentTarget.style.borderColor = 'rgba(229,228,226,0.8)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(229,228,226,0.5)'
            }}
          >
            EXPLORE SERVICES
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs tracking-widest"
          style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.4)' }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, rgba(229,228,226,0.4), transparent)' }}
        />
      </motion.div>
    </section>
  )
}

function BrandStatement() {
  return (
    <section
      className="py-20 px-6"
      style={{
        background: 'linear-gradient(135deg, rgba(91,45,142,0.12) 0%, rgba(15,82,186,0.08) 100%)',
        borderTop: '1px solid rgba(229,228,226,0.08)',
        borderBottom: '1px solid rgba(229,228,226,0.08)',
      }}
    >
      <SectionReveal>
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="w-16 h-px mx-auto mb-8"
            style={{ background: 'linear-gradient(90deg, transparent, #5B2D8E, transparent)' }}
          />
          <p
            className="text-base sm:text-lg leading-loose font-light"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.8)', lineHeight: '2' }}
          >
            Atlantic Crest LLC is a premier entertainment and marketing consulting firm rooted on Florida's
            Treasure Coast. With decades of combined experience across live events, digital strategy, and brand
            development, we bring an elevated standard to everything we touch —{' '}
            <em style={{ color: '#E5E4E2' }}>from the stage to the screen.</em>
          </p>
          <div
            className="w-16 h-px mx-auto mt-8"
            style={{ background: 'linear-gradient(90deg, transparent, #0F52BA, transparent)' }}
          />
        </div>
      </SectionReveal>
    </section>
  )
}

function StatsBanner() {
  return (
    <section className="py-20 px-6" style={{ background: '#0D0D0D' }}>
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p
            className="text-center text-xs tracking-[0.3em] mb-14 uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.4)' }}
          >
            By The Numbers
          </p>
        </SectionReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <SectionReveal key={s.label} delay={i * 0.1}>
              <div className="text-center group">
                <div
                  className="text-4xl sm:text-5xl font-bold mb-3 transition-all duration-300 group-hover:scale-110"
                  style={{
                    fontFamily: 'Cinzel, serif',
                    background: 'linear-gradient(135deg, #9B6DCA 0%, #0F52BA 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                </div>
                <p
                  className="text-xs sm:text-sm tracking-wider"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.55)' }}
                >
                  {s.label}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSnapshot() {
  const cards = [
    {
      icon: <LuHeadphones size={44} color="#9B6DCA" />,
      title: 'Entertainment Services',
      desc: 'From wedding ceremonies to international festival stages, Atlantic Crest delivers world-class DJ and entertainment experiences tailored to your moment — with the professionalism and energy to match.',
      path: '/services',
      gradient: 'rgba(91,45,142,0.25)',
      glow: '0 0 40px rgba(91,45,142,0.3)',
    },
    {
      icon: <LuChartBar size={44} color="#0F52BA" />,
      title: 'Marketing Consulting',
      desc: 'Your brand deserves a powerful, strategic voice. Atlantic Crest brings 7+ years of hands-on digital marketing expertise to help you grow, engage, and convert — beautifully and effectively.',
      path: '/services',
      gradient: 'rgba(15,82,186,0.25)',
      glow: '0 0 40px rgba(15,82,186,0.3)',
    },
  ]

  return (
    <section className="py-24 px-6" style={{ background: '#080810' }}>
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] mb-4 uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.4)' }}
            >
              What We Do
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Two Pillars of Excellence
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <SectionReveal key={card.title} delay={i * 0.15}>
              <div
                className="group relative p-10 rounded-sm cursor-pointer transition-all duration-500 h-full flex flex-col"
                style={{
                  background: 'rgba(26,26,46,0.7)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(229,228,226,0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(91,45,142,0.5)'
                  e.currentTarget.style.boxShadow = card.glow
                  e.currentTarget.style.background = `linear-gradient(135deg, ${card.gradient}, rgba(26,26,46,0.9))`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(229,228,226,0.1)'
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.background = 'rgba(26,26,46,0.7)'
                }}
              >
                <div className="mb-6">{card.icon}</div>
                <h3
                  className="text-xl font-bold text-white mb-4"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1 mb-8"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.65)' }}
                >
                  {card.desc}
                </p>
                <Link
                  to={card.path}
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider transition-all duration-300 group/link"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#9B6DCA',
                    letterSpacing: '0.1em',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E5E4E2')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9B6DCA')}
                >
                  LEARN MORE
                  <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section
      className="py-24 px-6"
      style={{
        background: 'linear-gradient(180deg, #0D0D0D 0%, #0F0F1A 100%)',
        borderTop: '1px solid rgba(229,228,226,0.06)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] mb-4 uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.4)' }}
            >
              Client Stories
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              What Our Clients Say
            </h2>
          </div>
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <TestimonialCarousel />
        </SectionReveal>
      </div>
    </section>
  )
}

function GalleryTeaser() {
  const [items, setItems] = useState([])

  useEffect(() => {
    client.fetch(TEASER_QUERY).then((data) => {
      const mapped = (data?.photos ?? []).map((p) => ({
        _key: p._key,
        label: p.label,
        src: urlFor(p.image).width(800).quality(75).url(),
      }))
      setItems(mapped)
    })
  }, [])

  return (
    <section className="py-24 px-6" style={{ background: '#080810' }}>
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-12">
            <p
              className="text-xs tracking-[0.3em] mb-4 uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.4)' }}
            >
              The Experience
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              A Glimpse Into Our Work
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {items.map((item, i) => (
            <SectionReveal key={item._key} delay={i * 0.08}>
              <div
                className="relative overflow-hidden rounded-sm aspect-square group cursor-pointer"
                style={{ border: '1px solid rgba(229,228,226,0.08)' }}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400"
                  style={{
                    background: 'rgba(91,45,142,0.8)',
                    backdropFilter: 'blur(2px)',
                  }}
                >
                  <p
                    className="text-white font-semibold tracking-widest text-sm"
                    style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.15em' }}
                  >
                    {item.label.toUpperCase()}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest rounded-sm transition-all duration-300"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '0.12em',
                background: 'transparent',
                color: '#E5E4E2',
                border: '1px solid rgba(229,228,226,0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(91,45,142,0.2)'
                e.currentTarget.style.borderColor = 'rgba(229,228,226,0.7)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(229,228,226,0.4)'
              }}
            >
              VIEW FULL GALLERY <FiArrowRight />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

function FooterCTA() {
  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(91,45,142,0.3) 0%, rgba(15,82,186,0.3) 100%)',
        borderTop: '1px solid rgba(229,228,226,0.1)',
      }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(91,45,142,0.3) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(15,82,186,0.3) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <SectionReveal>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Ready to elevate your<br />event or brand?
          </h2>
          <p
            className="text-base mb-10"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.7)' }}
          >
            Let's connect and create something extraordinary together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 text-sm font-bold tracking-widest rounded-sm transition-all duration-300"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '0.15em',
              background: '#5B2D8E',
              color: '#fff',
              border: '1px solid rgba(229,228,226,0.4)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#7B3DBE'
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(91,45,142,0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#5B2D8E'
              e.currentTarget.style.boxShadow = ''
            }}
          >
            LET'S CONNECT <FiArrowRight />
          </Link>
        </div>
      </SectionReveal>
    </section>
  )
}

export default function Home() {
  return (
    <PageTransition>
      <Helmet>
        <title>Atlantic Crest LLC | Entertainment & Marketing Consulting — Stuart, FL</title>
        <meta name="description" content="Atlantic Crest LLC — Premier entertainment and marketing consulting firm on Florida's Treasure Coast. 15+ years DJ experience, 7+ years marketing consulting. Based in Stuart, FL." />
        <meta name="keywords" content="Atlantic Crest LLC, DJ Stuart FL, wedding DJ Treasure Coast, marketing consulting Florida, entertainment consulting Stuart" />
        <link rel="canonical" href="https://atlantic-crest.com/" />
        <meta property="og:url" content="https://atlantic-crest.com/" />
        <meta property="og:title" content="Atlantic Crest LLC | Entertainment & Marketing Consulting — Stuart, FL" />
        <meta property="og:description" content="Atlantic Crest LLC — Premier entertainment and marketing consulting firm on Florida's Treasure Coast. 15+ years DJ experience, 7+ years marketing consulting." />
        <meta property="og:image" content="https://atlantic-crest.com/atlantic-crest-icon.png" />
      </Helmet>
      <HeroSection />
      <BrandStatement />
      <StatsBanner />
      <ServicesSnapshot />
      <TestimonialsSection />
      <GalleryTeaser />
      <FooterCTA />
    </PageTransition>
  )
}
