import { motion, useReducedMotion } from 'motion/react'
import { Button } from '../../components/ui/Button'
import { Reveal } from '../../components/motion/Reveal'
import { occasions, occasionsSectionCopy } from '../../content/occasions'
import { cn } from '../../lib/utils/cn'

/**
 * Occasions — left/right rows, normal sharp image sizing (no stretch blur).
 */
export function Occasions() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="occasions"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--color-warm-white)] text-[var(--color-charcoal)]"
      aria-labelledby="occasions-heading"
    >
      <div className="relative mx-auto max-w-[90rem] px-4 pt-12 sm:px-8 sm:pt-16 lg:pt-20">
        <header className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-cyan-deep)]">
              {occasionsSectionCopy.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              id="occasions-heading"
              className="mt-3 font-[family-name:var(--font-display)] text-2xl leading-tight tracking-tight text-[var(--color-charcoal)] sm:text-3xl"
            >
              {occasionsSectionCopy.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-charcoal)]/65 sm:text-base">
              {occasionsSectionCopy.description}
            </p>
          </Reveal>
          <div
            className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[var(--color-cyan)] to-transparent sm:mt-8"
            aria-hidden="true"
          />
        </header>
      </div>

      <div className="relative mt-8 space-y-6 px-4 pb-14 sm:mt-12 sm:space-y-8 sm:px-8 sm:pb-20 lg:pb-24">
        {occasions.map((item, index) => {
          const reverse = index % 2 === 1
          const indexLabel = String(index + 1).padStart(2, '0')

          return (
            <article
              key={item.id}
              id={`occasion-${item.id}`}
              className="mx-auto grid max-w-[90rem] overflow-hidden bg-white shadow-[0_14px_40px_rgba(10,10,10,0.05)] lg:grid-cols-2"
            >
              <div
                className={cn(
                  'relative aspect-[16/10] overflow-hidden sm:aspect-[5/3] lg:aspect-auto lg:min-h-[20rem] xl:min-h-[22rem]',
                  reverse && 'lg:order-2',
                )}
              >
                <motion.img
                  src={`${item.imageSrc}?v=new2`}
                  alt={item.imageAlt ?? ''}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover object-center"
                  initial={reduceMotion ? false : { opacity: 0.85 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1 }}
                  whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                  aria-hidden="true"
                />

                <span className="absolute left-4 top-4 text-sm font-semibold tracking-[0.2em] text-white/90 sm:left-5 sm:top-5 sm:text-base">
                  {indexLabel}
                </span>
              </div>

              <Reveal
                className={cn(
                  'flex flex-col justify-center bg-[var(--color-ivory)] px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-14',
                  reverse && 'lg:order-1',
                )}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cyan-deep)] sm:text-sm">
                  {item.shortLabel ?? 'Occasion'}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl leading-tight text-[var(--color-charcoal)] sm:mt-3 sm:text-2xl lg:text-3xl">
                  {item.title}
                </h3>
                {item.summary ? (
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--color-charcoal)]/70 sm:mt-4 sm:text-base">
                    {item.summary}
                  </p>
                ) : null}
                <div className="mt-6 sm:mt-8">
                  <Button href={item.href ?? '#enquire'} variant="cyan" size="md" className="w-full sm:w-auto">
                    {item.ctaLabel ?? 'Enquire for this occasion'}
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
