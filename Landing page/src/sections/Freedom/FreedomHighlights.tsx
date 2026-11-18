import { useCallback, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Reveal } from '../../components/motion/Reveal'
import { freedomFeatures, freedomSectionCopy } from '../../content/freedom'
import { cn } from '../../lib/utils/cn'

/**
 * Post-fleet highlight — left feature list + right copy/car.
 * Car plays a white shine sweep on section enter and on hover.
 */
export function FreedomHighlights() {
  const reduceMotion = useReducedMotion()
  const fallbackFeature = freedomFeatures[0]!
  const [activeId, setActiveId] = useState(freedomFeatures[1]?.id ?? fallbackFeature.id)
  const [shineKey, setShineKey] = useState(0)
  const active = freedomFeatures.find((item) => item.id === activeId) ?? fallbackFeature

  const triggerShine = useCallback(() => {
    if (reduceMotion) return
    setShineKey((key) => key + 1)
  }, [reduceMotion])

  return (
    <section
      id="difference"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--color-warm-white)] text-[var(--color-charcoal)]"
      aria-labelledby="freedom-heading"
    >
      <div className="relative mx-auto grid max-w-[90rem] gap-8 px-4 py-12 sm:gap-10 sm:px-8 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-20">
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-cyan-deep)]">
              {freedomSectionCopy.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              id="freedom-heading"
              className="mt-3 max-w-lg font-[family-name:var(--font-display)] text-3xl leading-tight tracking-tight text-[var(--color-charcoal)] sm:text-4xl"
            >
              {freedomSectionCopy.title}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-0 border-l border-black/10" role="list">
              {freedomFeatures.map((feature) => {
                const isActive = feature.id === activeId
                return (
                  <li key={feature.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(feature.id)}
                      onMouseEnter={() => {
                        if (!reduceMotion) setActiveId(feature.id)
                      }}
                      className={cn(
                        'group flex w-full items-center gap-2.5 py-2.5 pl-4 text-left transition-colors duration-300 sm:pl-5',
                        isActive
                          ? 'text-[var(--color-charcoal)]'
                          : 'text-[var(--color-charcoal)]/45 hover:text-[var(--color-charcoal)]/75',
                      )}
                      aria-pressed={isActive}
                    >
                      <span
                        className={cn(
                          'inline-flex w-3.5 shrink-0 justify-center text-sm font-semibold transition-opacity',
                          isActive ? 'text-[var(--color-cyan)] opacity-100' : 'opacity-0 group-hover:opacity-40',
                        )}
                        aria-hidden="true"
                      >
                        ›
                      </span>
                      <span
                        className={cn(
                          'text-base leading-snug',
                          isActive ? 'font-semibold' : 'font-normal',
                        )}
                      >
                        {feature.title}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>

        <div className="relative flex flex-col">
          <Reveal delay={0.08}>
            <div className="min-h-[4.5rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-xl text-base leading-relaxed text-[var(--color-charcoal)]/65"
                >
                  {active.detail}
                </motion.p>
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="mt-6">
            <motion.div
              className="relative mx-auto w-full max-w-2xl scale-[1.06] overflow-hidden bg-transparent sm:scale-110"
              initial={false}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onViewportEnter={triggerShine}
              viewport={{ once: true, amount: 0.45 }}
              onMouseEnter={triggerShine}
            >
              <img
                src={freedomSectionCopy.imageSrc}
                alt={freedomSectionCopy.imageAlt}
                width={960}
                height={540}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="pointer-events-none h-auto w-full select-none bg-transparent object-contain"
              />

              {!reduceMotion ? (
                <AnimatePresence>
                  {shineKey > 0 ? (
                    <motion.div
                      key={shineKey}
                      aria-hidden="true"
                      className="car-shine-beam pointer-events-none absolute inset-y-[-10%] left-0 w-[55%]"
                      initial={{ x: '-130%', opacity: 0.35 }}
                      animate={{ x: '220%', opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ) : null}
                </AnimatePresence>
              ) : null}
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
