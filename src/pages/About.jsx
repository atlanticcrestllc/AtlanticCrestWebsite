import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'
import { FiArrowRight } from 'react-icons/fi'
import { LuTrophy, LuGlobe, LuSparkles, LuMapPin } from 'react-icons/lu'

/* TODO: Replace with real profile/event photo */
const ABOUT_IMG = 'https://images.unsplash.com/photo-1571266752797-71be8de7a581?w=900&q=80'
const SECONDARY_IMG = 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80'

const badges = [
  { icon: <LuTrophy size={28} color="#9B6DCA" />, label: '15+ Years Experience' },
  { icon: <LuGlobe size={28} color="#9B6DCA" />, label: 'International Reach' },
  { icon: <LuSparkles size={28} color="#9B6DCA" />, label: 'Full Service' },
  { icon: <LuMapPin size={28} color="#9B6DCA" />, label: 'Treasure Coast Based' },
]

export default function About() {
  return (
    <PageTransition>
      <Helmet>
        <title>About Atlantic Crest | Premium Entertainment & Marketing — Stuart, FL</title>
        <meta name="description" content="Learn about Atlantic Crest — a premier entertainment and marketing consulting firm with 15+ years of DJ experience and 7+ years of marketing expertise based in Stuart, FL." />
        <meta name="keywords" content="about Atlantic Crest, DJ history Florida, entertainment company Stuart, marketing consulting Treasure Coast" />
        <link rel="canonical" href="https://atlantic-crest.com/about" />
        <meta property="og:url" content="https://atlantic-crest.com/about" />
        <meta property="og:title" content="About Atlantic Crest | Premium Entertainment & Marketing — Stuart, FL" />
        <meta property="og:description" content="Atlantic Crest — 15+ years of DJ experience and 7+ years of marketing expertise based in Stuart, FL on Florida's Treasure Coast." />
        <meta property="og:image" content="https://atlantic-crest.com/atlantic-crest-icon.png" />
      </Helmet>

      {/* Hero Banner */}
      <section
        className="relative pt-40 pb-24 px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0D0D0D 0%, #080810 100%)',
        }}
      >
        {/* Decorative gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(91,45,142,0.25) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <SectionReveal>
            <p
              className="text-xs tracking-[0.35em] mb-5 uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.45)' }}
            >
              Our Story
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.04em' }}
            >
              About Atlantic Crest
            </h1>
            <div
              className="w-20 h-px mx-auto"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(229,228,226,0.4), transparent)' }}
            />
          </SectionReveal>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="py-24 px-6" style={{ background: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <SectionReveal direction="right">
              <div>
                <p
                  className="text-xs tracking-[0.3em] mb-6 uppercase"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#9B6DCA' }}
                >
                  Who We Are
                </p>
                <div
                  className="space-y-5 text-base leading-loose font-light"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.75)' }}
                >
                  <p>
                    Atlantic Crest was built on one simple belief — that every event deserves a world-class
                    experience and every brand deserves a powerful voice.
                  </p>
                  <p>
                    With over <strong style={{ color: '#E5E4E2' }}>15 years of professional entertainment experience</strong>, Atlantic Crest
                    has commanded stages, DJ booths, and event floors across the United States and
                    internationally — bringing energy, precision, and professionalism to every performance.
                    From intimate private celebrations to large-scale venue events, our entertainment division
                    has seen it all and delivered every time.
                  </p>
                  <p>
                    Our marketing consulting arm brings over <strong style={{ color: '#E5E4E2' }}>7 years of hands-on experience</strong> in
                    social media strategy, digital brand development, and audience growth. We understand what it
                    takes to build a presence that not only looks good — but converts, engages, and grows.
                  </p>
                  <p>
                    Based on Florida's Treasure Coast in <strong style={{ color: '#E5E4E2' }}>Stuart, FL</strong>, Atlantic Crest serves clients
                    locally, regionally, and globally. We are not just a service provider — we are a creative
                    partner invested in your success.
                  </p>
                </div>
                <div
                  className="mt-8 pt-8"
                  style={{ borderTop: '1px solid rgba(229,228,226,0.1)' }}
                >
                  <p
                    className="text-lg font-semibold tracking-wide"
                    style={{ fontFamily: 'Cinzel, serif', color: '#E5E4E2' }}
                  >
                    Elevated. Experienced. Atlantic Crest.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-8 px-8 py-4 text-sm font-semibold tracking-widest rounded-sm transition-all duration-300"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    letterSpacing: '0.12em',
                    background: '#5B2D8E',
                    color: '#fff',
                    border: '1px solid rgba(229,228,226,0.35)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#7B3DBE'
                    e.currentTarget.style.boxShadow = '0 6px 24px rgba(91,45,142,0.45)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#5B2D8E'
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  WORK WITH US <FiArrowRight />
                </Link>
              </div>
            </SectionReveal>

            {/* Image Side */}
            <SectionReveal direction="left" delay={0.15}>
              <div className="relative">
                <div
                  className="rounded-sm overflow-hidden"
                  style={{ border: '1px solid rgba(229,228,226,0.12)' }}
                >
                  {/* TODO: Replace with real professional photo */}
                  <img
                    src={ABOUT_IMG}
                    alt="Atlantic Crest — Live Performance"
                    className="w-full h-[520px] object-cover"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 60%, rgba(13,13,13,0.5) 100%)',
                    }}
                  />
                </div>
                {/* Floating accent card */}
                <div
                  className="absolute -bottom-6 -left-6 p-5 rounded-sm hidden lg:block"
                  style={{
                    background: 'rgba(26,26,46,0.95)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(91,45,142,0.4)',
                    boxShadow: '0 8px 32px rgba(91,45,142,0.3)',
                  }}
                >
                  <p
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: 'Cinzel, serif',
                      background: 'linear-gradient(135deg, #9B6DCA, #0F52BA)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    15+
                  </p>
                  <p
                    className="text-xs tracking-wider mt-1"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.6)' }}
                  >
                    Years of Excellence
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Badges Row */}
      <section
        className="py-20 px-6"
        style={{
          background: '#080810',
          borderTop: '1px solid rgba(229,228,226,0.06)',
          borderBottom: '1px solid rgba(229,228,226,0.06)',
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((badge, i) => (
              <SectionReveal key={badge.label} delay={i * 0.1}>
                <div
                  className="text-center py-8 px-6 rounded-sm group transition-all duration-300"
                  style={{
                    background: 'rgba(26,26,46,0.6)',
                    border: '1px solid rgba(229,228,226,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(91,45,142,0.5)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(91,45,142,0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(229,228,226,0.1)'
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <div className="flex justify-center mb-4">{badge.icon}</div>
                  <p
                    className="text-xs font-semibold tracking-wider"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.7)' }}
                  >
                    {badge.label}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section
        className="py-28 px-6 relative overflow-hidden"
        style={{ background: '#0D0D0D' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(91,45,142,0.12) 0%, transparent 70%)',
          }}
        />
        <SectionReveal>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div
              className="text-5xl mb-8 font-serif leading-none"
              style={{ color: 'rgba(91,45,142,0.6)', fontFamily: 'serif' }}
            >
              "
            </div>
            <blockquote
              className="text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed italic"
              style={{ fontFamily: 'Cinzel, serif', color: 'rgba(229,228,226,0.85)' }}
            >
              We don't just show up —<br />
              <span style={{ color: '#E5E4E2' }}>we elevate every room we walk into.</span>
            </blockquote>
            <div
              className="w-16 h-px mx-auto mt-10"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(229,228,226,0.3), transparent)' }}
            />
            <p
              className="mt-6 text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.35)' }}
            >
              Atlantic Crest
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* Secondary Image Accent */}
      <section className="pb-24 px-6" style={{ background: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-sm overflow-hidden h-64 sm:h-80"
            style={{ border: '1px solid rgba(229,228,226,0.08)' }}
          >
            {/* TODO: Replace with real marketing/brand photo */}
            <img
              src={SECONDARY_IMG}
              alt="Atlantic Crest — Marketing & Events"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(91,45,142,0.75) 0%, rgba(15,82,186,0.65) 100%)',
              }}
            >
              <div className="text-center px-6">
                <h3
                  className="text-2xl sm:text-3xl font-bold text-white mb-4"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Ready to Work Together?
                </h3>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-widest rounded-sm transition-all duration-300"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    letterSpacing: '0.12em',
                    background: 'rgba(255,255,255,0.1)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.5)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                  }}
                >
                  GET IN TOUCH <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
