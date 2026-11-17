import { Reveal } from '../../components/motion/Reveal'
import { VehicleCard } from '../../components/fleet'
import { fleet, fleetSectionCopy } from '../../content/fleet'

/**
 * Fleet showcase — light contrasting section after dark Hero.
 */
export function FleetShowcase() {
  return (
    <section
      id="fleet"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--color-ivory)] text-[var(--color-charcoal)]"
      aria-labelledby="fleet-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(197,155,39,0.08),_transparent_50%)]"
        aria-hidden="true"
      />
      <div className="gold-rule absolute inset-x-0 top-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[90rem] px-5 py-20 sm:px-8 sm:py-28">
        <header className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-[family-name:var(--font-display-alt)] text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-gold-deep)]">
              {fleetSectionCopy.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="fleet-heading"
              className="mt-5 font-[family-name:var(--font-display)] text-[2.5rem] leading-[0.95] text-[var(--color-charcoal)] sm:text-5xl"
            >
              {fleetSectionCopy.title}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-charcoal)]/65 sm:text-lg">
              {fleetSectionCopy.description}
            </p>
          </Reveal>
        </header>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:grid-cols-4 lg:gap-7">
          {fleet.slice(0, 4).map((vehicle, index) => (
            <Reveal key={vehicle.id} delay={index * 0.06}>
              <VehicleCard vehicle={vehicle} index={index} />
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-[var(--color-charcoal)]/45 sm:mt-12 sm:text-sm">
          {fleetSectionCopy.availabilityNote}
        </p>
      </div>
    </section>
  )
}
