import { Accordion } from '../../components/ui/Accordion'
import { Reveal } from '../../components/motion/Reveal'
import { faqs, faqsSectionCopy } from '../../content/faqs'

/**
 * FAQs — light panel, cyan accents, compact type.
 */
export function Faqs() {
  return (
    <section
      id="faqs"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--color-warm-white)] text-[var(--color-charcoal)]"
      aria-labelledby="faqs-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_at_top,rgba(0,212,232,0.05),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <header className="mx-auto max-w-xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-cyan-deep)]">
              {faqsSectionCopy.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              id="faqs-heading"
              className="mt-3 font-[family-name:var(--font-display)] text-2xl leading-tight tracking-tight sm:text-3xl"
            >
              {faqsSectionCopy.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-charcoal)]/60 sm:text-base">
              {faqsSectionCopy.description}
            </p>
          </Reveal>
          <div
            className="mx-auto mt-5 h-px w-14 bg-gradient-to-r from-transparent via-[var(--color-cyan)] to-transparent"
            aria-hidden="true"
          />
        </header>

        <Reveal
          delay={0.12}
          className="mt-8 border border-black/6 bg-white px-4 shadow-[0_12px_36px_rgba(10,10,10,0.04)] sm:mt-10 sm:px-6"
        >
          <Accordion items={faqs} tone="light" />
        </Reveal>
      </div>
    </section>
  )
}
