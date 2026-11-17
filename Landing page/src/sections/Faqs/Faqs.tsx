import { Accordion } from '../../components/ui/Accordion'
import { Reveal } from '../../components/motion/Reveal'
import { faqs, faqsSectionCopy } from '../../content/faqs'

export function Faqs() {
  return (
    <section
      id="faqs"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--color-warm-white)] text-[var(--color-charcoal)]"
      aria-labelledby="faqs-heading"
    >
      <div className="relative mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <header className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-[family-name:var(--font-display-alt)] text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-gold-deep)]">
              {faqsSectionCopy.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="faqs-heading"
              className="mt-5 font-[family-name:var(--font-display)] text-[2.5rem] leading-tight sm:text-5xl"
            >
              {faqsSectionCopy.title}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-charcoal)]/65 sm:text-lg">
              {faqsSectionCopy.description}
            </p>
          </Reveal>
        </header>

        <Reveal delay={0.1} className="mt-12 rounded-sm border border-black/6 bg-white px-5 sm:mt-16 sm:px-8">
          <Accordion items={faqs} tone="light" />
        </Reveal>
      </div>
    </section>
  )
}
