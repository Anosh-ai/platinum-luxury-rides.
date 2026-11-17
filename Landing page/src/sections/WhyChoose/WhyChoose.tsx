import { Reveal } from '../../components/motion/Reveal'
import {
  trustBadges,
  whyChooseSectionCopy,
  whyChooseUs,
} from '../../content/why-choose-us'

export function WhyChoose() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--color-ivory)] text-[var(--color-charcoal)]"
      aria-labelledby="why-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,155,39,0.1),_transparent_45%)]"
        aria-hidden="true"
      />
      <div className="gold-rule absolute inset-x-0 top-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[90rem] px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <div className="mb-12 flex flex-wrap gap-3 sm:mb-16">
          {trustBadges.map((badge, index) => (
            <span
              key={badge.id}
              className="float-badge glass-panel-light px-4 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold-deep)]"
              style={{ animationDelay: `${index * 0.35}s` }}
            >
              {badge.label}
            </span>
          ))}
        </div>

        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <header className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="font-[family-name:var(--font-display-alt)] text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-gold-deep)]">
                {whyChooseSectionCopy.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="why-heading"
                className="mt-5 font-[family-name:var(--font-display)] text-[2.75rem] leading-[0.95] sm:text-5xl lg:text-6xl"
              >
                {whyChooseSectionCopy.title}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-charcoal)]/65 sm:text-lg">
                {whyChooseSectionCopy.description}
              </p>
            </Reveal>
            <div
              className="mt-10 h-px w-28 bg-gradient-to-r from-[var(--color-gold)] to-transparent"
              aria-hidden="true"
            />
          </header>

          <ul className="space-y-0 rounded-sm border border-black/6 bg-white px-5 sm:px-8">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.06}>
                <li className="group border-t border-black/8 py-8 first:border-t-0 sm:py-10">
                  <div className="flex gap-6 sm:gap-10">
                    <span className="mt-1 font-[family-name:var(--font-display-alt)] text-2xl text-[var(--color-gold)]/70 transition-colors group-hover:text-[var(--color-gold-deep)] sm:text-3xl">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
                        {item.title}
                      </h3>
                      {item.body ? (
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-charcoal)]/60 sm:text-base">
                          {item.body}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
