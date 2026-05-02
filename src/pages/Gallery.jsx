import { useState, useCallback, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { client } from '../sanity/client'
import { urlFor } from '../sanity/image'

const GALLERY_QUERY = `*[_type == "gallery"][0]{
  photos[]{
    _key,
    label,
    category,
    image
  }
}`

const FILTERS = ['All', 'DJ & Events', 'Marketing & Promotions', 'International', 'Venues']

function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const photo = photos[index]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.95)' }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors duration-200"
        style={{ background: 'rgba(229,228,226,0.1)', color: '#fff' }}
        onClick={onClose}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(229,228,226,0.2)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(229,228,226,0.1)')}
        aria-label="Close"
      >
        <HiX size={20} />
      </button>

      {/* Prev */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-colors duration-200"
        style={{ background: 'rgba(91,45,142,0.4)', color: '#fff', border: '1px solid rgba(229,228,226,0.15)' }}
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(91,45,142,0.7)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(91,45,142,0.4)')}
        aria-label="Previous"
      >
        <HiChevronLeft size={24} />
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-5xl max-h-[85vh] w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={photo.src}
            alt={photo.label}
            className="w-full h-full object-contain rounded-sm"
            style={{ maxHeight: '85vh' }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 py-4 px-6 text-center"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
              borderRadius: '0 0 4px 4px',
            }}
          >
            <p
              className="text-sm font-medium tracking-wider text-white"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {photo.label}
            </p>
            <p
              className="text-xs mt-1"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.5)' }}
            >
              {index + 1} / {photos.length}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Next */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-colors duration-200"
        style={{ background: 'rgba(91,45,142,0.4)', color: '#fff', border: '1px solid rgba(229,228,226,0.15)' }}
        onClick={(e) => { e.stopPropagation(); onNext() }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(91,45,142,0.7)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(91,45,142,0.4)')}
        aria-label="Next"
      >
        <HiChevronRight size={24} />
      </button>
    </motion.div>
  )
}

export default function Gallery() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
    client.fetch(GALLERY_QUERY).then((data) => {
      const mapped = (data?.photos ?? []).map((p) => ({
        _key: p._key,
        label: p.label,
        category: p.category,
        src: urlFor(p.image).width(900).quality(75).url(),
        thumb: urlFor(p.image).width(600).quality(70).url(),
      }))
      setPhotos(mapped)
      setLoading(false)
    })
  }, [])

  const filtered = activeFilter === 'All'
    ? photos
    : photos.filter((p) => p.category === activeFilter)

  const openLightbox = useCallback((i) => setLightboxIndex(i), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevPhoto = useCallback(() => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length), [filtered.length])
  const nextPhoto = useCallback(() => setLightboxIndex((i) => (i + 1) % filtered.length), [filtered.length])

  return (
    <PageTransition>
      <Helmet>
        <title>Gallery | Atlantic Crest LLC — Event Photos & Marketing</title>
        <meta name="description" content="Browse the Atlantic Crest LLC gallery — DJ performances, private events, corporate events, marketing campaigns, and international shows across the Treasure Coast and beyond." />
        <meta name="keywords" content="Atlantic Crest gallery, DJ photos Florida, event photography Treasure Coast, marketing content, Stuart FL events" />
        <link rel="canonical" href="https://atlantic-crest.com/gallery" />
        <meta property="og:url" content="https://atlantic-crest.com/gallery" />
        <meta property="og:title" content="Gallery | Atlantic Crest LLC — Event Photos & Marketing" />
        <meta property="og:description" content="Browse DJ performances, private events, corporate events, marketing campaigns, and international shows across the Treasure Coast and beyond." />
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
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(91,45,142,0.2) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <SectionReveal>
            <p
              className="text-xs tracking-[0.35em] mb-5 uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.45)' }}
            >
              Our Work
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5"
              style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.04em' }}
            >
              The Atlantic Crest<br />Experience
            </h1>
            <p
              className="text-base font-light tracking-wider"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.6)', letterSpacing: '0.08em' }}
            >
              A glimpse into the moments we've been trusted to elevate.
            </p>
            <div
              className="w-20 h-px mx-auto mt-8"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(229,228,226,0.4), transparent)' }}
            />
          </SectionReveal>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 pb-12" style={{ background: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {FILTERS.map((f) => {
                const isActive = activeFilter === f
                return (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className="px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      letterSpacing: '0.1em',
                      background: isActive ? '#5B2D8E' : 'rgba(26,26,46,0.7)',
                      color: isActive ? '#fff' : 'rgba(229,228,226,0.6)',
                      border: isActive
                        ? '1px solid rgba(229,228,226,0.4)'
                        : '1px solid rgba(229,228,226,0.12)',
                      boxShadow: isActive ? '0 0 16px rgba(91,45,142,0.4)' : '',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#E5E4E2'
                        e.currentTarget.style.borderColor = 'rgba(229,228,226,0.3)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'rgba(229,228,226,0.6)'
                        e.currentTarget.style.borderColor = 'rgba(229,228,226,0.12)'
                      }
                    }}
                  >
                    {f}
                  </button>
                )
              })}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="px-6 pb-24" style={{ background: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-sm animate-pulse"
                  style={{ background: 'rgba(26,26,46,0.6)', border: '1px solid rgba(229,228,226,0.06)' }}
                />
              ))}
            </div>
          ) : (
          <>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
            >
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo._key}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="relative overflow-hidden rounded-sm aspect-square cursor-pointer group"
                  style={{ border: '1px solid rgba(229,228,226,0.06)' }}
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={photo.thumb}
                    alt={photo.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-350"
                    style={{ background: 'rgba(91,45,142,0.82)', backdropFilter: 'blur(2px)' }}
                  >
                    <p
                      className="text-white font-semibold tracking-widest text-xs text-center px-4"
                      style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.15em' }}
                    >
                      {photo.label.toUpperCase()}
                    </p>
                    <p
                      className="text-xs mt-2"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        color: 'rgba(229,228,226,0.65)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {photo.category}
                    </p>
                    <div
                      className="mt-4 w-6 h-px"
                      style={{ background: 'rgba(229,228,226,0.5)' }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p
                className="text-base"
                style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(229,228,226,0.4)' }}
              >
                No photos in this category yet.
              </p>
            </div>
          )}
          </>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={filtered}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
