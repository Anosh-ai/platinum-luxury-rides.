import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Button } from '../../components/ui/Button'
import { Reveal } from '../../components/motion/Reveal'
import { enquirySectionCopy } from '../../content/enquiry'
import {
  hourOptions,
  occasionOptions,
  quoteSectionCopy,
  vehicleClasses,
} from '../../content/quote'
import { siteConfig } from '../../config/site.config'
import { gsap, registerGsapPlugins, ScrollTrigger } from '../../lib/animations/gsap'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { cn } from '../../lib/utils/cn'

type VehicleClassId = (typeof vehicleClasses)[number]['id']

/**
 * Final enquiry section — includes instant estimate fields (moved from post-hero).
 */
export function EnquiryCta() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  const [submitted, setSubmitted] = useState(false)
  const [vehicleClass, setVehicleClass] = useState<VehicleClassId>('mercedes')
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [hours, setHours] = useState<number>(4)
  const [occasion, setOccasion] = useState<string>(occasionOptions[0])
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (reduced) return
    const root = rootRef.current
    if (!root) return
    registerGsapPlugins()
    const ctx = gsap.context(() => {
      const media = root.querySelector('[data-enq-media]')
      if (media) {
        gsap.fromTo(
          media,
          { scale: 1.12 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: root,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      }
      requestAnimationFrame(() => ScrollTrigger.refresh())
    }, root)
    return () => ctx.revert()
  }, [reduced])

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const klass =
      vehicleClasses.find((item) => item.id === vehicleClass)?.label ?? vehicleClass
    if (siteConfig.contact.email) {
      const data = new FormData(event.currentTarget)
      const subject = encodeURIComponent(`Platinum enquiry — ${occasion || 'General'}`)
      const body = encodeURIComponent(
        [
          `Name: ${data.get('name') || ''}`,
          `Vehicle class: ${klass}`,
          `Occasion: ${occasion}`,
          `Preferred date: ${data.get('date') || ''}`,
          `Hours: ${hours}`,
          `Pickup: ${pickup}`,
          `Drop-off: ${dropoff}`,
          '',
          String(data.get('message') || message || ''),
        ].join('\n'),
      )
      window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`
      return
    }
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      ref={rootRef}
      className="relative scroll-mt-24 overflow-hidden"
      aria-labelledby="enquire-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          data-enq-media
          src={enquirySectionCopy.backdropSrc}
          alt=""
          className="h-full w-full scale-110 object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.78)_48%,rgba(90,70,20,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,_rgba(197,155,39,0.2),_transparent_50%)]" />
      </div>

      <div className="relative mx-auto grid max-w-[90rem] items-start gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-32">
        <div className="text-white lg:sticky lg:top-28">
          <Reveal>
            <p className="font-[family-name:var(--font-display-alt)] text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-gold)]">
              {quoteSectionCopy.eyebrow} · {enquirySectionCopy.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="enquire-heading"
              className="mt-5 font-[family-name:var(--font-display)] text-[2.5rem] leading-[0.95] sm:text-5xl"
            >
              {enquirySectionCopy.title}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
              {quoteSectionCopy.description}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-white/40 sm:text-sm">
              {quoteSectionCopy.disclaimer}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div
            id="enquire"
            className="glass-panel scroll-mt-28 p-5 sm:p-8"
          >
            <form className="space-y-5" onSubmit={onSubmit} noValidate>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                  Vehicle class
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {vehicleClasses.map((option) => {
                    const active = vehicleClass === option.id
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setVehicleClass(option.id)}
                        className={cn(
                          'border px-3 py-3 text-left transition-colors',
                          active
                            ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/10'
                            : 'border-white/15 hover:border-[var(--color-gold)]/50',
                        )}
                        aria-pressed={active}
                      >
                        <span className="block text-sm font-medium text-white">
                          {option.label}
                        </span>
                        <span className="mt-1 block text-xs text-white/45">{option.hint}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[0.65rem] uppercase tracking-[0.18em] text-white/55">
                    Pickup
                  </span>
                  <input
                    name="pickup"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    required
                    placeholder="Suburb or airport"
                    className="mt-2 w-full border border-white/20 bg-black/40 px-3 py-3 text-sm text-white placeholder:text-white/30 focus:border-[var(--color-gold)] focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-[0.65rem] uppercase tracking-[0.18em] text-white/55">
                    Drop-off
                  </span>
                  <input
                    name="dropoff"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    required
                    placeholder="Venue or address"
                    className="mt-2 w-full border border-white/20 bg-black/40 px-3 py-3 text-sm text-white placeholder:text-white/30 focus:border-[var(--color-gold)] focus:outline-none"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[0.65rem] uppercase tracking-[0.18em] text-white/55">
                    Hours
                  </span>
                  <select
                    name="hours"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="mt-2 w-full border border-white/20 bg-black/40 px-3 py-3 text-sm text-white focus:border-[var(--color-gold)] focus:outline-none"
                  >
                    {hourOptions.map((value) => (
                      <option key={value} value={value} className="bg-[var(--color-black)]">
                        {value} hours
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-[0.65rem] uppercase tracking-[0.18em] text-white/55">
                    Occasion
                  </span>
                  <select
                    name="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="mt-2 w-full border border-white/20 bg-black/40 px-3 py-3 text-sm text-white focus:border-[var(--color-gold)] focus:outline-none"
                  >
                    {occasionOptions.map((value) => (
                      <option key={value} value={value} className="bg-[var(--color-black)]">
                        {value}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" type="text" autoComplete="name" required />
                <Field label="Preferred date" name="date" type="date" />
              </div>

              <label className="block">
                <span className="text-[0.65rem] uppercase tracking-[0.18em] text-white/55">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 w-full border border-white/20 bg-black/40 px-3 py-3 text-sm text-white placeholder:text-white/30 focus:border-[var(--color-gold)] focus:outline-none"
                  placeholder="Any special requests…"
                />
              </label>

              <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                {quoteSectionCopy.ctaLabel}
              </Button>

              {submitted ? (
                <p className="text-sm text-[var(--color-gold-soft)]" role="status">
                  Thank you — your estimate request is noted. A live send destination will activate
                  once Platinum confirms contact details.
                </p>
              ) : null}

              <p className="text-xs leading-relaxed text-white/35">
                {enquirySectionCopy.secondaryNote}
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type,
  placeholder,
  autoComplete,
  required,
}: {
  label: string
  name: string
  type: string
  placeholder?: string
  autoComplete?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="text-[0.65rem] uppercase tracking-[0.18em] text-white/55">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full border border-white/20 bg-black/40 px-3 py-3 text-sm text-white placeholder:text-white/30 focus:border-[var(--color-gold)] focus:outline-none"
      />
    </label>
  )
}
