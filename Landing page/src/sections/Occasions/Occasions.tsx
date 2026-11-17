import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Button } from '../../components/ui/Button'
import { ClipReveal, Reveal } from '../../components/motion/Reveal'
import { occasions, occasionsSectionCopy } from '../../content/occasions'
import { gsap, registerGsapPlugins, ScrollTrigger } from '../../lib/animations/gsap'
import { cn } from '../../lib/utils/cn'

/**
 * Four occasion rows — light, readable, high-contrast with fresh imagery.
 */
export function Occasions() {
  const rootRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const root = rootRef.current
    if (!root) return
    registerGsapPlugins()
    const ctx = gsap.context(() => {
      root.querySelectorAll('[data-occ-media]').forEach((media) => {
        const row = media.closest('[data-occ-row]')
        if (!row) return
        gsap.to(media, {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: row,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
      requestAnimationFrame(() => ScrollTrigger.refresh())
    }, root)
    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section
      id="occasions"
      ref={rootRef}
      className="relative scroll-mt-24 overflow-hidden bg-[var(--color-warm-white)] text-[var(--color-charcoal)]"
      aria-labelledby="occasions-heading"
    >
      <div className="relative mx-auto max-w-[90rem] px-5 pt-16 sm:px-8 sm:pt-20 lg:pt-24">
        <header className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[var(--color-gold)]" aria-hidden="true" />
              <p className="font-[family-name:var(--font-display-alt)] text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-gold-deep)]">
                {occasionsSectionCopy.eyebrow}
              </p>
              <span className="h-px w-8 bg-[var(--color-gold)]" aria-hidden="true" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="occasions-heading"
              className="font-[family-name:var(--font-display)] text-[2.5rem] leading-[1.05] tracking-tight text-[var(--color-charcoal)] sm:text-5xl lg:text-[3.35rem]"
            >
              {occasionsSectionCopy.title}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--color-charcoal)]/65 sm:mt-6 sm:text-lg">
              {occasionsSectionCopy.description}
            </p>
          </Reveal>
          <div
            className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent sm:mt-10"
            aria-hidden="true"
          />
        </header>
      </div>

      <div className="relative mt-12 space-y-8 px-5 pb-20 sm:mt-14 sm:space-y-10 sm:px-8 sm:pb-28">
        {occasions.map((item, index) => {
          const reverse = index % 2 === 1
          return (
            <article
              key={item.id}
              data-occ-row
              className="mx-auto grid max-w-[90rem] overflow-hidden border border-black/6 bg-white shadow-[0_12px_40px_rgba(10,10,10,0.05)] lg:grid-cols-2"
            >
              <div
                className={cn(
                  'relative min-h-[42vh] overflow-hidden lg:min-h-[28rem]',
                  reverse && 'lg:order-2',
                )}
              >
                <ClipReveal className="absolute inset-0">
                  <div data-occ-media className="absolute inset-0 will-change-transform">
                    <motion.img
                      src={`${item.imageSrc}?v=4`}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className={cn(
                        'h-[115%] w-full object-cover',
                        item.id === 'weddings' && 'object-[center_45%]',
                        item.id === 'corporate' && 'object-[center_40%]',
                        item.id === 'formals' && 'object-[center_55%]',
                        item.id === 'special' && 'object-center',
                      )}
                      whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </ClipReveal>
                <span className="absolute left-5 top-5 font-[family-name:var(--font-display-alt)] text-4xl text-white/80 drop-shadow sm:left-6 sm:top-6 sm:text-5xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <Reveal
                className={cn(
                  'flex flex-col justify-center bg-[var(--color-ivory)] px-6 py-10 sm:px-10 sm:py-14 lg:px-14',
                  reverse && 'lg:order-1',
                )}
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">
                  Occasion
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight text-[var(--color-charcoal)] sm:text-4xl">
                  {item.title}
                </h3>
                {item.summary ? (
                  <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-charcoal)]/65">
                    {item.summary}
                  </p>
                ) : null}
                <div className="mt-8">
                  <Button href={item.href ?? '#enquire'} variant="primary" size="lg">
                    Enquire for this occasion
                  </Button>
                </div>
              </Reveal>
            </article>
          )
        })}
      </div>
    </section>
  )
}
