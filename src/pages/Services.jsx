import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'
import { FiArrowRight } from 'react-icons/fi'
import {
  LuHeadphones, LuChartBar,
  LuGem, LuPartyPopper, LuSlidersHorizontal, LuBuilding2, LuMusic2,
  LuSmartphone, LuTarget, LuFilm, LuHandshake, LuMegaphone, LuLightbulb,
} from 'react-icons/lu'

const entertainmentServices = [
  {
    icon: <LuGem size={22} color="#E5E4E2" />,
    title: 'Wedding DJ Services',
    desc: 'Your wedding day deserves a soundtrack as perfect as the moment itself. We work closely with couples to curate a musical journey — from the ceremony processional to the last song of the reception. Every detail, every transition, every memory.',
  },
  {
    icon: <LuPartyPopper size={22} color="#E5E4E2" />,
    title: 'Birthday & Private Celebrations',
    desc: "Whether it's an intimate gathering or a milestone celebration, we bring the energy, the vibe, and the professionalism to make your party unforgettable. Your vision, perfectly executed.",
  },
  {
    icon: <LuSlidersHorizontal size={22} color="#E5E4E2" />,
    title: 'Venue & Club Events',
    desc: 'With international stage experience and a deep understanding of crowd dynamics, Atlantic Crest delivers high-energy performances built for venues of any size. We know how to move a room.',
  },
  {
    icon: <LuBuilding2 size={22} color="#E5E4E2" />,
    title: 'Corporate Events',
    desc: 'Our professional entertainment services add a polished, memorable layer to corporate gatherings, launch parties, and company celebrations. Sophisticated, on-brand, and impeccably delivered.',
  },
  {
    icon: <LuMusic2 size={22} color="#E5E4E2" />,
    title: 'Festivals & Special Events',
    desc: 'Festivals, fundraisers, cultural events and beyond — if you have an event, we have the experience to make it extraordinary. From stage setup to final song, we handle it all.',
  },
]

const marketingServices = [
  {
    icon: <LuSmartphone size={22} color="#E5E4E2" />,
    title: 'Social Media Management',
    desc: 'Full-service management of your social media presence across platforms. Content creation, scheduling, engagement, analytics, and growth strategy — all handled with a consistent, on-brand voice that resonates with your audience.',
  },
  {
    icon: <LuTarget size={22} color="#E5E4E2" />,
    title: 'Brand Development & Strategy',
    desc: 'From concept to comprehensive guidelines, we help businesses define who they are and how they show up in the world. Your brand identity, clarified and amplified.',
  },
  {
    icon: <LuFilm size={22} color="#E5E4E2" />,
    title: 'Content Creation & Marketing',
    desc: 'Eye-catching graphics, short-form video, reels, and promotional materials built to stop the scroll and drive action. Content that looks stunning and performs even better.',
  },
  {
    icon: <LuHandshake size={22} color="#E5E4E2" />,
    title: 'Influencer & Promotions Strategy',
    desc: "Leverage the right voices and the right platforms to amplify your brand's reach and credibility. Strategic influencer partnerships that align with your brand and deliver real results.",
  },
  {
    icon: <LuMegaphone size={22} color="#E5E4E2" />,
    title: 'Event Marketing & Promotion',
    desc: 'Promotional strategy, social campaigns, and buzz-building for events of all sizes. We make sure your event sells out — before the doors even open.',
  },
  {
    icon: <LuLightbulb size={22} color="#E5E4E2" />,
    title: 'Marketing Consultation',
    desc: 'Book a one-on-one session to get a professional assessment of your current marketing and a clear roadmap forward. Actionable insights, no fluff.',
  },
]

function ServiceCard({ icon, title, desc, delay = 0 }) {
  return (
    <SectionReveal delay={delay}>
      <div
        className="p-8 rounded-sm h-full flex flex-col transition-all duration-400 group"
        style={{
          background: 'rgba(26,26,46,0.6)',
          border: '1px solid rgba(229,228,226,0.09)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(91,45,142,0.45)'
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(91,45,142,0.2)'
          e.currentTarget.style.background = 'rgba(26,26,46,0.85)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(229,228,226,0.09)'
          e.currentTarget.style.boxShadow = ''
          e.currentTarget.style.background = 'rgba(26,26,46,0.6)'
        }}
      >
        <div
          className="w-12 h-12 rounded-sm flex items-center justify-center text-2xl mb-5 transition-all duration-300 group-hover:scale-110"
          style={{
            background: 'rgba(91,45,142,0.2)',
            border: '1px solid rgba(91,45,142,0.3)',
          }}
        >
          {icon}
        </div>
        <h3
          className="text-base font-bold text-white mb-3"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.6)' }}
        >
          {desc}
        </p>
      </div>
    </SectionReveal>
  )
}

export default function Services() {
  return (
    <PageTransition>
      <Helmet>
        <title>Services | Atlantic Crest LLC — DJ Entertainment & Marketing Consulting</title>
        <meta name="description" content="Atlantic Crest LLC offers professional DJ and entertainment services for weddings, clubs, and corporate events, plus full-service marketing consulting including social media, brand development, and content creation." />
        <meta name="keywords" content="DJ services Stuart FL, wedding DJ Treasure Coast, marketing consulting Florida, social media management, brand development, corporate events DJ" />
        <link rel="canonical" href="https://atlantic-crest.com/services" />
        <meta property="og:url" content="https://atlantic-crest.com/services" />
        <meta property="og:title" content="Services | Atlantic Crest LLC — DJ Entertainment & Marketing Consulting" />
        <meta property="og:description" content="Professional DJ services for weddings, clubs, and corporate events plus full-service marketing consulting — social media, brand development, and content creation." />
        <meta property="og:image" content="https://atlantic-crest.com/atlantic-crest-icon.png" />
      </Helmet>

      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #080810 100%)' }}
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
              What We Offer
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5"
              style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.04em' }}
            >
              Our Services
            </h1>
            <p
              className="text-base font-light tracking-wider"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.6)', letterSpacing: '0.08em' }}
            >
              Entertainment &amp; Marketing Consulting — Tailored to Excellence
            </p>
            <div
              className="w-20 h-px mx-auto mt-8"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(229,228,226,0.4), transparent)' }}
            />
          </SectionReveal>
        </div>
      </section>

      {/* Entertainment Services */}
      <section className="py-24 px-6" style={{ background: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <SectionReveal>
            <div className="flex items-center gap-5 mb-4">
              <LuHeadphones size={28} color="#9B6DCA" />
              <h2
                className="text-2xl sm:text-3xl font-bold text-white"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Entertainment Services
              </h2>
            </div>
            <p
              className="text-sm leading-relaxed mb-12 max-w-2xl"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.6)' }}
            >
              From the first song to the last dance, Atlantic Crest delivers unforgettable entertainment
              experiences tailored to your moment.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {entertainmentServices.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.08} />
            ))}
          </div>

          <SectionReveal delay={0.3}>
            <div className="mt-12 text-center">
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
                REQUEST A QUOTE <FiArrowRight />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Platinum Divider */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(229,228,226,0.25), transparent)' }}
          />
        </div>
      </div>

      {/* Marketing Services */}
      <section className="py-24 px-6" style={{ background: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <SectionReveal>
            <div className="flex items-center gap-5 mb-4">
              <LuChartBar size={28} color="#9B6DCA" />
              <h2
                className="text-2xl sm:text-3xl font-bold text-white"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Marketing Consulting Services
              </h2>
            </div>
            <p
              className="text-sm leading-relaxed mb-12 max-w-2xl"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.6)' }}
            >
              Your brand has a story. Atlantic Crest helps you tell it — strategically, beautifully, and effectively.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingServices.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.08} />
            ))}
          </div>

          <SectionReveal delay={0.3}>
            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest rounded-sm transition-all duration-300"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  letterSpacing: '0.12em',
                  background: '#0F52BA',
                  color: '#fff',
                  border: '1px solid rgba(229,228,226,0.35)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1A6FE0'
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(15,82,186,0.45)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#0F52BA'
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                REQUEST A CONSULTATION <FiArrowRight />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section
        className="py-20 px-6"
        style={{
          background: 'linear-gradient(135deg, rgba(91,45,142,0.25) 0%, rgba(15,82,186,0.25) 100%)',
          borderTop: '1px solid rgba(229,228,226,0.08)',
        }}
      >
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h3
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Not sure which service fits you?
            </h3>
            <p
              className="text-sm mb-8"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.65)' }}
            >
              Reach out and we'll help you find the perfect solution for your event or brand.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest rounded-sm transition-all duration-300"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '0.12em',
                background: 'rgba(255,255,255,0.05)',
                color: '#E5E4E2',
                border: '1px solid rgba(229,228,226,0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(91,45,142,0.3)'
                e.currentTarget.style.borderColor = 'rgba(229,228,226,0.7)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(229,228,226,0.4)'
              }}
            >
              LET'S TALK <FiArrowRight />
            </Link>
          </div>
        </SectionReveal>
      </section>
    </PageTransition>
  )
}
