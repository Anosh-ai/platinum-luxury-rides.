import { useLayoutEffect, useRef } from 'react'
import { siteConfig } from '../../config/site.config'
import { siteContent } from '../../content/site'
import { useHeroIntro } from '../../hooks/useHeroIntro'
import { Button } from '../../components/ui/Button'
import { Container } from '../../components/layout/Container'

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)
  const veilRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const carWrapRef = useRef<HTMLDivElement>(null)
  const carRef = useRef<HTMLImageElement>(null)
  const headlightsRef = useRef<HTMLDivElement>(null)
  const smokeRef = useRef<HTMLDivElement>(null)
  const shadowRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)

  const { phase, reducedMotion, registerElements, replay, skip } = useHeroIntro()

  useLayoutEffect(() => {
    if (
      !rootRef.current ||
      !veilRef.current ||
      !logoRef.current ||
      !carWrapRef.current ||
      !carRef.current ||
      !headlightsRef.current ||
      !smokeRef.current ||
      !shadowRef.current ||
      !copyRef.current ||
      !ctasRef.current
    ) {
      return
    }

    registerElements({
      root: rootRef.current,
      veil: veilRef.current,
      logo: logoRef.current,
      carWrap: carWrapRef.current,
      car: carRef.current,
      headlights: headlightsRef.current,
      smoke: smokeRef.current,
      shadow: shadowRef.current,
      copy: copyRef.current,
      ctas: ctasRef.current,
    })
  }, [registerElements])

  const showSkip = !reducedMotion && phase !== 'complete'
  const showReplay = !reducedMotion && phase === 'complete'

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--color-black)] text-white"
      aria-label="Platinum Luxury Rides cinematic introduction"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_48%,rgba(0,212,232,0.16),transparent_40%),linear-gradient(180deg,#050505_0%,#0a0a0a_55%,#101010_100%)]"
        aria-hidden="true"
      />

      {/* Full-bleed cinematic vehicle */}
      <div className="absolute inset-0 z-[1]">
        <div
          ref={carWrapRef}
          className="absolute inset-0"
          style={{ willChange: 'transform, filter, opacity' }}
        >
          <img
            ref={carRef}
            src={siteContent.heroMedia.carSrc}
            alt={siteContent.heroMedia.carAlt}
            width={1600}
            height={1067}
            className="h-full w-full object-cover object-[62%_center] max-lg:object-center"
            decoding="async"
            fetchPriority="high"
          />
          <div
            ref={headlightsRef}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_55%,rgba(0,212,232,0.28),transparent_45%)]"
            aria-hidden="true"
          />
          <div
            ref={smokeRef}
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(180deg,transparent,rgba(200,205,211,0.12))]"
            aria-hidden="true"
          />
          <div
            ref={shadowRef}
            className="pointer-events-none absolute inset-x-[20%] bottom-[6%] h-10 rounded-[100%] bg-black/50 blur-2xl"
            aria-hidden="true"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.88)_0%,rgba(5,5,5,0.62)_36%,rgba(5,5,5,0.12)_66%,rgba(5,5,5,0.35)_100%)] max-lg:bg-[linear-gradient(180deg,rgba(5,5,5,0.78)_0%,rgba(5,5,5,0.35)_40%,rgba(5,5,5,0.1)_60%,rgba(5,5,5,0.7)_100%)]"
          aria-hidden="true"
        />
      </div>

      <div
        ref={veilRef}
        className="pointer-events-none absolute inset-0 z-[2] bg-black"
        aria-hidden="true"
      />

      <Container
        width="wide"
        className="relative z-[3] flex min-h-[100svh] flex-col justify-between pb-8 pt-28 sm:pb-12 sm:pt-32 lg:justify-center lg:pb-16 lg:pt-28"
      >
        <div className="max-w-xl lg:max-w-[36rem]">
          <div ref={logoRef} className="mb-6 sm:mb-7">
            <img
              src={siteConfig.logoSrc}
              alt=""
              width={240}
              height={80}
              className="h-12 w-auto object-contain sm:h-14 lg:h-16"
              decoding="async"
              aria-hidden="true"
            />
            <span className="sr-only">{siteConfig.brandName}</span>
          </div>

          <div ref={copyRef}>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.85rem,6.5vw,5.25rem)] leading-[0.94] tracking-[-0.02em] text-white">
              {siteContent.heroHeadline}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-chrome)] sm:text-lg">
              {siteContent.heroDescription}
            </p>
          </div>

          <div
            ref={ctasRef}
            className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
          >
            <Button href={siteContent.primaryCta.href} size="lg">
              {siteContent.primaryCta.label}
            </Button>
            <Button href={siteContent.secondaryCta.href} variant="secondary" size="lg">
              {siteContent.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="mt-10 flex items-end justify-between gap-4 lg:absolute lg:inset-x-8 lg:bottom-10 lg:mt-0 xl:inset-x-10">
          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-chrome)]/70">
            Luxury · Exotic · Chauffeur
          </p>

          {!reducedMotion ? (
            <div className="flex items-center gap-2">
              {showSkip ? (
                <Button
                  type="button"
                  variant="ghost"
                  size="md"
                  className="px-3 py-2 text-[0.65rem]"
                  onClick={skip}
                >
                  Skip intro
                </Button>
              ) : null}
              {showReplay ? (
                <Button
                  type="button"
                  variant="secondary"
                  size="md"
                  className="px-3 py-2 text-[0.65rem]"
                  onClick={replay}
                >
                  Replay
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
