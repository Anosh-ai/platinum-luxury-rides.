import { motion, useReducedMotion } from 'motion/react'
import { Reveal } from '../../components/motion/Reveal'
import { whyChooseSectionCopy, whyChooseUs } from '../../content/why-choose-us'
import { cn } from '../../lib/utils/cn'

/**
 * Why Platinum — light editorial grid, minimal type, cyan accents (no dark theme).
 */
export function WhyChoose() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--color-warm-white)] text-[var(--color-charcoal)]"
      aria-labelledby="why-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(0,212,232,0.06),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[90rem] px-5 py-16 sm:px-8 sm:py-20">
        <header className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-cyan-deep)]">
              {whyChooseSectionCopy.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              id="why-heading"
              className="mt-3 font-[family-name:var(--font-display)] text-2xl leading-tight tracking-tight sm:text-3xl"
            >
              {whyChooseSectionCopy.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[var(--color-charcoal)]/60 sm:text-base">
              {whyChooseSectionCopy.description}
            </p>
          </Reveal>
          <div
            className="mx-auto mt-6 h-px w-14 bg-gradient-to-r from-transparent via-[var(--color-cyan)] to-transparent"
            aria-hidden="true"
          />
        </header>

        <ul className="mt-10 grid gap-px overflow-hidden border border-black/6 bg-black/6 sm:mt-12 sm:grid-cols-2">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <motion.li
                className={cn(
                  'group relative h-full bg-[var(--color-warm-white)] px-5 py-7 sm:px-7 sm:py-8',
                )}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  className="absolute left-0 top-7 h-8 w-0.5 bg-[var(--color-cyan)]/0 transition-colors duration-300 group-hover:bg-[var(--color-cyan)] sm:top-8"
                  aria-hidden="true"
                />
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-cyan-deep)]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg leading-snug text-[var(--color-charcoal)] sm:text-xl">
                  {item.title}
                </h3>
                {item.body ? (
                  <p className="mt-2.5 max-w-md text-sm leading-relaxed text-[var(--color-charcoal)]/60">
                    {item.body}
                  </p>
                ) : null}
              </motion.li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
