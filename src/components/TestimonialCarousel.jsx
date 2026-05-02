import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

/* TODO: Replace with real client testimonials */
const testimonials = [
  {
    name: 'Sarah & Michael T.',
    role: 'Wedding Clients',
    quote:
      'Atlantic Crest made our wedding day absolutely magical. The music was perfectly curated, the transitions were seamless, and every guest commented on how incredible the vibe was all night long. We couldn\'t have asked for more.',
    stars: 5,
  },
  {
    name: 'James R.',
    role: 'Corporate Event Director',
    quote:
      'We hired Atlantic Crest for our annual company gala and were blown away by the professionalism and energy. The team was prepared, polished, and elevated the entire event beyond our expectations.',
    stars: 5,
  },
  {
    name: 'Destiny M.',
    role: 'Marketing Consulting Client',
    quote:
      'The marketing consultation completely transformed how we approach our brand online. Within two months of implementing the strategy, our engagement doubled and we saw real growth. Absolutely worth every penny.',
    stars: 5,
  },
  {
    name: 'Carlos V.',
    role: 'Venue Owner, Stuart FL',
    quote:
      'We\'ve had Atlantic Crest perform at our venue multiple times. The crowd response is always incredible. They know how to read a room and deliver exactly what the night calls for. Our go-to entertainment partner.',
    stars: 5,
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goNext = () => {
    setDirection(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }
  const goPrev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(goNext, 6000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[current]

  return (
    <div className="relative max-w-3xl mx-auto px-8">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, x: direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -60 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center px-4"
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(t.stars)].map((_, i) => (
              <FaStar key={i} size={18} style={{ color: '#0F52BA' }} />
            ))}
          </div>

          {/* Quote */}
          <blockquote
            className="text-lg leading-relaxed mb-8 italic"
            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.85)' }}
          >
            "{t.quote}"
          </blockquote>

          {/* Attribution */}
          <div>
            <p
              className="font-semibold text-white text-base"
              style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.05em' }}
            >
              {t.name}
            </p>
            <p
              className="text-sm mt-1"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.45)' }}
            >
              {t.role}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={goPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
        style={{
          background: 'rgba(91,45,142,0.3)',
          border: '1px solid rgba(229,228,226,0.15)',
          color: 'rgba(229,228,226,0.6)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(91,45,142,0.6)'
          e.currentTarget.style.color = '#fff'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(91,45,142,0.3)'
          e.currentTarget.style.color = 'rgba(229,228,226,0.6)'
        }}
        aria-label="Previous testimonial"
      >
        <HiChevronLeft size={20} />
      </button>
      <button
        onClick={goNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
        style={{
          background: 'rgba(91,45,142,0.3)',
          border: '1px solid rgba(229,228,226,0.15)',
          color: 'rgba(229,228,226,0.6)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(91,45,142,0.6)'
          e.currentTarget.style.color = '#fff'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(91,45,142,0.3)'
          e.currentTarget.style.color = 'rgba(229,228,226,0.6)'
        }}
        aria-label="Next testimonial"
      >
        <HiChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              background: i === current ? '#5B2D8E' : 'rgba(229,228,226,0.2)',
            }}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
