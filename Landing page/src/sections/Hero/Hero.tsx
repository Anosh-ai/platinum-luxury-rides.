import { useLayoutEffect, useRef } from 'react'
import { siteContent } from '../../content/site'
import { useHeroIntro } from '../../hooks/useHeroIntro'
import { Button } from '../../components/ui/Button'
import { Container } from '../../components/layout/Container'

type HeroProps = {
  onUiReady?: () => void
}

/**
 * Hero intro driven by a real moving-car video.
 * Video plays at speed, settles, then headline + copy + CTAs reveal.
 */
export function Hero({ onUiReady }: HeroProps) {
  const rootRef = useRef<HTMLElement>(null)
  const veilRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const headlightsRef = useRef<HTMLDivElement>(null)
  const smokeRef = useRef<HTMLDivElement>(null)
  const shadowRef = useRef<HTMLDivElement>(null)
  const reflectionRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)

  const { registerElements } = useHeroIntro(onUiReady)

  useLayoutEffect(() => {
    if (
      !rootRef.current ||
      !veilRef.current ||
      !videoRef.current ||
      !headlightsRef.current ||
      !smokeRef.current ||
      !shadowRef.current ||
      !reflectionRef.current ||
      !overlayRef.current ||
      !headlineRef.current ||
      !descriptionRef.current ||
      !ctasRef.current
    ) {
      return
    }

    registerElements({
      root: rootRef.current,
      veil: veilRef.current,
      video: videoRef.current,
      headlights: headlightsRef.current,
      smoke: smokeRef.current,
      shadow: shadowRef.current,
      reflection: reflectionRef.current,
      overlay: overlayRef.current,
      headline: headlineRef.current,
      description: descriptionRef.current,
      ctas: ctasRef.current,
    })
  }, [registerElements])

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative isolate min-h-[100svh] overflow-hidden bg-black text-white"
      aria-label="Platinum Luxury Rides cinematic introduction"
    >
      <div className="absolute inset-0 z-[1] overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full origin-center object-cover will-change-transform"
          src={`${siteContent.heroMedia.videoSrc}?v=clean`}
          poster={siteContent.heroMedia.posterSrc}
          muted
          playsInline
          preload="auto"
          controls={false}
          aria-label={siteContent.heroMedia.carAlt}
        />

        <div
          ref={smokeRef}
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(220,225,230,0.28),transparent_70%)] blur-3xl"
          aria-hidden="true"
        />
        <div
          ref={headlightsRef}
          className="pointer-events-none absolute inset-x-[10%] top-[30%] h-[42%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.3),rgba(0,212,232,0.12),transparent_70%)] blur-2xl"
          aria-hidden="true"
        />
        <div
          ref={shadowRef}
          className="pointer-events-none absolute inset-x-[18%] bottom-[6%] h-12 rounded-[100%] bg-black/75 blur-2xl sm:h-16"
          aria-hidden="true"
        />
        <div
          ref={reflectionRef}
          className="pointer-events-none absolute inset-x-[14%] bottom-[3%] h-28 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(200,210,220,0.28),transparent_70%)] blur-xl sm:h-36"
          aria-hidden="true"
        />
      </div>

      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-[2]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.4)_52%,rgba(0,0,0,0.75)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,transparent_26%,transparent_50%,rgba(0,0,0,0.8)_100%)]" />
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.75)]" />
      </div>

      <div
        ref={veilRef}
        className="pointer-events-none absolute inset-0 z-[3] bg-black"
        aria-hidden="true"
      />

      <Container
        width="wide"
        className="relative z-[4] flex min-h-[100svh] flex-col items-center justify-center px-5 pb-16 pt-28 text-center"
      >
        <div className="mx-auto max-w-3xl">
          <h1
            ref={headlineRef}
            className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-white"
          >
            Your ultimate <span className="text-[var(--color-cyan)]">luxury</span> drive
            awaits.
          </h1>
          <p
            ref={descriptionRef}
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--color-chrome)] sm:text-lg"
          >
            {siteContent.heroDescription}
          </p>
          <div
            ref={ctasRef}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Button href={siteContent.primaryCta.href} variant="cyan" size="lg">
              {siteContent.primaryCta.label}
            </Button>
            <Button
              href={siteContent.secondaryCta.href}
              variant="cyanOutline"
              size="lg"
            >
              {siteContent.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
