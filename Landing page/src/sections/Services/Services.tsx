import { motion, useReducedMotion } from 'motion/react'
import { Button } from '../../components/ui/Button'
import { ClipReveal, Reveal } from '../../components/motion/Reveal'
import { services, servicesSectionCopy } from '../../content/services'
import { cn } from '../../lib/utils/cn'

export function Services() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--color-black)] text-white"
      aria-labelledby="services-heading"
    >
      <div className="relative mx-auto max-w-[90rem] px-5 pt-20 sm:px-8 sm:pt-28">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between lg:pb-16">
          <div className="max-w-xl">
            <Reveal>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-cyan)]">
                {servicesSectionCopy.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="services-heading"
                className="mt-5 font-[family-name:var(--font-display)] text-[2.6rem] leading-[0.95] sm:text-5xl lg:text-6xl"
              >
                {servicesSectionCopy.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-md text-base leading-relaxed text-white/55 sm:text-lg">
              {servicesSectionCopy.description}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="relative mx-auto max-w-[90rem]">
        {services.map((service, index) => {
          const reverse = index % 2 === 1
          return (
            <article
              key={service.id}
              className="grid items-stretch border-b border-white/10 lg:grid-cols-12"
            >
              <div
                className={cn(
                  'relative min-h-[50vh] overflow-hidden lg:col-span-7 lg:min-h-[68vh]',
                  reverse && 'lg:order-2',
                )}
              >
                <ClipReveal className="absolute inset-0 h-full w-full">
                  <motion.img
                    src={service.imageSrc}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                    whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </ClipReveal>
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              <Reveal
                className={cn(
                  'flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:col-span-5 lg:px-14',
                  reverse && 'lg:order-1',
                )}
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-cyan)]">
                  {String(index + 1).padStart(2, '0')} · Service
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[2.75rem]">
                  {service.title}
                </h3>
                {service.summary ? (
                  <p className="mt-5 text-base leading-relaxed text-white/60">
                    {service.summary}
                  </p>
                ) : null}
                <div className="mt-8">
                  <Button href={service.href ?? '#enquire'} variant="secondary" size="lg">
                    Enquire
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
