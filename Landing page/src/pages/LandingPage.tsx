import { Navbar } from '../components/layout'
import { Hero } from '../sections/Hero'

/**
 * Homepage composition — Milestone 1: Navbar + Hero only.
 * Later milestones append Fleet, Occasions, Services, etc.
 */
export function LandingPage() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--color-cyan)] focus:px-4 focus:py-2 focus:text-[var(--color-black)]"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />

        {/* Anchor stubs so Milestone 1 nav/CTA links resolve until later sections ship */}
        <section id="fleet" className="scroll-mt-24" aria-hidden="true" />
        <section id="services" className="scroll-mt-24" aria-hidden="true" />
        <section id="about" className="scroll-mt-24" aria-hidden="true" />
        <section
          id="contact"
          className="scroll-mt-24 border-t border-black/5 bg-[var(--color-ivory)] px-5 py-24 sm:px-8"
          aria-labelledby="enquire-heading"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="enquire-heading"
              className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-charcoal)] sm:text-4xl"
            >
              Enquire
            </h2>
            <p className="mt-4 text-[var(--color-charcoal)]/75">
              Contact details and booking form will appear here once confirmed by
              Platinum Luxury Rides. This is a placeholder enquiry section.
            </p>
            <p id="enquire" className="mt-6 text-sm uppercase tracking-[0.18em] text-[var(--color-cyan-deep)]">
              Enquiry placeholder
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
