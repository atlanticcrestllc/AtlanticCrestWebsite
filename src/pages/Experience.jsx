import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'
import { FiArrowRight } from 'react-icons/fi'
import { LuMapPin, LuSun, LuFlag, LuGlobe } from 'react-icons/lu'
import { useState, useEffect } from 'react'
import { client } from '../sanity/client'
import { urlFor } from '../sanity/image'

const PARTNERS_QUERY = `*[_type == "experiencePage"][0]{ partners[]{ _key, name, logo } }`

const regions = [
  {
    icon: <LuMapPin size={36} color="#9B6DCA" />,
    title: 'Treasure Coast, FL',
    subtitle: 'Home Base',
    desc: 'Deeply rooted in the Stuart, FL community. Atlantic Crest has been a defining part of the Treasure Coast entertainment and business landscape for over a decade.',
  },
  {
    icon: <LuSun size={36} color="#9B6DCA" />,
    title: 'Throughout Florida',
    subtitle: 'Statewide Reach',
    desc: "From Miami to Jacksonville, Tampa to Orlando — Atlantic Crest has performed and consulted across the Sunshine State, bringing the same elevated standard everywhere we go.",
  },
  {
    icon: <LuFlag size={36} color="#9B6DCA" />,
    title: 'Across the USA',
    subtitle: 'National Experience',
    desc: 'Coast to coast, Atlantic Crest has taken the stage and the boardroom across multiple states, building a reputation for professionalism and performance that travels.',
  },
  {
    icon: <LuGlobe size={36} color="#9B6DCA" />,
    title: 'International',
    subtitle: 'Global Standard',
    desc: 'Atlantic Crest has brought world-class entertainment to international audiences, performing beyond U.S. borders and proving that exceptional talent has no boundaries.',
  },
]

export default function Experience() {
  const [partners, setPartners] = useState([])

  useEffect(() => {
    client.fetch(PARTNERS_QUERY).then((data) => {
      setPartners(data?.partners ?? [])
    })
  }, [])
  return (
    <PageTransition>
      <Helmet>
        <title>Experience | Atlantic Crest — International DJ & Marketing Consulting</title>
        <meta name="description" content="Atlantic Crest brings entertainment and marketing expertise to the Treasure Coast, across Florida, nationally, and internationally. 15+ years of proven performance." />
        <meta name="keywords" content="Atlantic Crest experience, international DJ Florida, entertainment Treasure Coast, marketing consulting nationwide, Stuart FL events" />
        <link rel="canonical" href="https://atlantic-crest.com/experience" />
        <meta property="og:url" content="https://atlantic-crest.com/experience" />
        <meta property="og:title" content="Experience | Atlantic Crest — International DJ & Marketing Consulting" />
        <meta property="og:description" content="From the Treasure Coast to international stages — Atlantic Crest brings 15+ years of entertainment and marketing expertise everywhere they go." />
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
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(15,82,186,0.2) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <SectionReveal>
            <p
              className="text-xs tracking-[0.35em] mb-5 uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.45)' }}
            >
              Our Track Record
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5"
              style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.04em' }}
            >
              Where We've Been
            </h1>
            <p
              className="text-base font-light tracking-wider"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.6)', letterSpacing: '0.08em' }}
            >
              From the Treasure Coast to the international stage
            </p>
            <div
              className="w-20 h-px mx-auto mt-8"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(229,228,226,0.4), transparent)' }}
            />
          </SectionReveal>
        </div>
      </section>

      {/* Intro Statement */}
      <section
        className="py-20 px-6"
        style={{
          background: '#080810',
          borderTop: '1px solid rgba(229,228,226,0.06)',
        }}
      >
        <SectionReveal>
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="text-base sm:text-lg leading-loose font-light"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.75)', lineHeight: '1.9' }}
            >
              Atlantic Crest has had the privilege of bringing elevated entertainment and strategic marketing to
              clients across the Treasure Coast, throughout Florida, across the United States, and on the{' '}
              <span style={{ color: '#E5E4E2', fontStyle: 'italic' }}>international stage</span>.
              Each engagement has sharpened our craft, broadened our perspective, and deepened our commitment to delivering
              nothing less than exceptional.
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* Region Cards */}
      <section className="py-24 px-6" style={{ background: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-14">
              <h2
                className="text-2xl sm:text-3xl font-bold text-white"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Our Reach
              </h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((r, i) => (
              <SectionReveal key={r.title} delay={i * 0.1}>
                <div
                  className="p-8 rounded-sm text-center h-full flex flex-col transition-all duration-400"
                  style={{
                    background: 'rgba(26,26,46,0.6)',
                    border: '1px solid rgba(229,228,226,0.09)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(15,82,186,0.5)'
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(15,82,186,0.2)'
                    e.currentTarget.style.transform = 'translateY(-4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(229,228,226,0.09)'
                    e.currentTarget.style.boxShadow = ''
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div className="flex justify-center mb-4">{r.icon}</div>
                  <h3
                    className="font-bold text-white text-base mb-1"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {r.title}
                  </h3>
                  <p
                    className="text-xs mb-4 tracking-wider"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#9B6DCA' }}
                  >
                    {r.subtitle}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.55)' }}
                  >
                    {r.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* International Callout Banner */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(15,82,186,0.3) 0%, rgba(91,45,142,0.25) 100%)',
          borderTop: '1px solid rgba(229,228,226,0.08)',
          borderBottom: '1px solid rgba(229,228,226,0.08)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(15,82,186,0.15) 0%, transparent 70%)',
          }}
        />
        <SectionReveal>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-6"><LuGlobe size={40} color="#9B6DCA" /></div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Beyond Borders
            </h2>
            <p
              className="text-base sm:text-lg leading-loose font-light"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.8)', lineHeight: '1.9' }}
            >
              Atlantic Crest has taken the stage internationally, bringing a world-class standard of entertainment
              to audiences far beyond the Treasure Coast. International experience has sharpened our craft,
              expanded our perspective, and proven that{' '}
              <em style={{ color: '#E5E4E2' }}>great performance knows no boundaries</em>.
            </p>
            <div
              className="w-16 h-px mx-auto mt-10"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(229,228,226,0.4), transparent)' }}
            />
          </div>
        </SectionReveal>
      </section>

      {/* Venues & Partners */}
      <section className="py-24 px-6" style={{ background: '#080810' }}>
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-14">
              <p
                className="text-xs tracking-[0.3em] mb-4 uppercase"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.4)' }}
              >
                Where We've Performed &amp; Partnered
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold text-white"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Venues &amp; Partners
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {partners.map((p, i) => (
              <SectionReveal key={p._key} delay={i * 0.04}>
                <div
                  className="relative aspect-video flex items-center justify-center p-2 rounded-sm transition-all duration-300 group overflow-hidden"
                  style={{
                    background: 'rgba(26,26,46,0.5)',
                    border: '1px solid rgba(229,228,226,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(229,228,226,0.25)'
                    e.currentTarget.style.background = 'rgba(26,26,46,0.8)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(229,228,226,0.08)'
                    e.currentTarget.style.background = 'rgba(26,26,46,0.5)'
                  }}
                >
                  <img
                    src={urlFor(p.logo).width(400).url()}
                    alt={p.name}
                    className="w-full h-full object-contain opacity-60 group-hover:opacity-20 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p
                      className="text-xs font-semibold tracking-widest text-center px-2 text-white"
                      style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.12em' }}
                    >
                      {p.name.toUpperCase()}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6"
        style={{
          background: '#0D0D0D',
          borderTop: '1px solid rgba(229,228,226,0.06)',
        }}
      >
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h3
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Ready to add your event to our list?
            </h3>
            <p
              className="text-sm mb-8"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.6)' }}
            >
              Let's create an experience that you'll remember for years to come.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest rounded-sm transition-all duration-300"
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
              BOOK AN EVENT <FiArrowRight />
            </Link>
          </div>
        </SectionReveal>
      </section>
    </PageTransition>
  )
}
