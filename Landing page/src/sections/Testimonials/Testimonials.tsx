import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'
import { Container } from '../../components/layout/Container'
import {
  testimonialPlaceholders,
  testimonials,
  testimonialsSectionCopy,
} from '../../content/testimonials'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { cn } from '../../lib/utils/cn'

export function Testimonials() {
  const rootRef = useScrollReveal<HTMLElement>()
  const reduceMotion = useReducedMotion()
  const items =
    testimonials.length > 0 ? testimonials : testimonialPlaceholders
  const isPlaceholder = testimonials.length === 0
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((current) => {
        const next = current + dir
        if (next < 0) return items.length - 1
        if (next >= items.length) return 0
        return next
      })
    },
    [items.length],
  )

  useEffect(() => {
    if (reduceMotion || paused || items.length < 2) return
    const id = window.setInterval(() => go(1), 5200)
    return () => window.clearInterval(id)
  }, [go, items.length, paused, reduceMotion])

  const active = items[index]

  return (
    <section
      id="testimonials"
      ref={rootRef}
      className="relative scroll-mt-24 overflow-hidden bg-[var(--color-charcoal)] py-20 text-white sm:py-28"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,212,232,0.1),_transparent_45%)]"
        aria-hidden="true"
      />

      <Container width="wide" className="relative">
        <header data-reveal-heading className="mx-auto max-w-2xl text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-cyan)]">
            {testimonialsSectionCopy.eyebrow}
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 font-[family-name:var(--font-display)] text-[2.25rem] leading-tight sm:text-5xl"
          >
            {testimonialsSectionCopy.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
            {testimonialsSectionCopy.description}
          </p>
        </header>

        <div
          className="mx-auto mt-14 max-w-3xl sm:mt-16"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          {isPlaceholder ? (
            <p className="mb-6 text-center text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-cyan)]/80">
              {testimonialsSectionCopy.placeholderNote}
            </p>
          ) : null}

          <div className="relative min-h-[14rem] border border-white/10 bg-black/30 px-6 py-10 backdrop-blur-sm sm:min-h-[16rem] sm:px-12 sm:py-14">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.blockquote
                  key={active.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center"
                >
                  <p className="font-[family-name:var(--font-display)] text-2xl leading-snug italic text-white/95 sm:text-3xl">
                    “{active.quote}”
                  </p>
                  <footer className="mt-8 text-sm tracking-wide text-white/55">
                    <cite className="not-italic text-white/80">{active.author}</cite>
                    {active.source ? (
                      <span className="mt-1 block text-xs uppercase tracking-[0.18em]">
                        {active.source}
                        {active.dateLabel ? ` · ${active.dateLabel}` : ''}
                      </span>
                    ) : null}
                  </footer>
                </motion.blockquote>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cyan)]"
              aria-label="Previous testimonial"
            >
              <Chevron dir="left" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
              {items.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    'h-1.5 w-6 transition-colors',
                    i === index ? 'bg-[var(--color-cyan)]' : 'bg-white/25 hover:bg-white/45',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cyan)]"
              aria-label="Next testimonial"
            >
              <Chevron dir="right" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={dir === 'left' ? 'rotate-180' : undefined}
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
