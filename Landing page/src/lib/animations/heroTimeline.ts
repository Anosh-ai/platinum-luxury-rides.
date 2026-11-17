import type { HeroTimelineOptions } from '../../types/animation'
import { gsap, registerGsapPlugins } from './gsap'

let activeTimeline: gsap.core.Timeline | null = null

function setFinalState(elements: HeroTimelineOptions['elements']): void {
  gsap.set(elements.veil, { opacity: 0 })
  gsap.set(elements.logo, { opacity: 1, y: 0, scale: 1 })
  gsap.set(elements.carWrap, { opacity: 1, x: 0, filter: 'blur(0px)' })
  gsap.set(elements.car, { scale: 1 })
  gsap.set(elements.headlights, { opacity: 0.9 })
  gsap.set(elements.smoke, { opacity: 0.35, scale: 1 })
  gsap.set(elements.shadow, { opacity: 0.55, scaleX: 1 })
  gsap.set(elements.copy, { opacity: 1, y: 0 })
  gsap.set(elements.ctas, { opacity: 1, y: 0 })
}

export function createHeroTimeline(options: HeroTimelineOptions): gsap.core.Timeline | null {
  registerGsapPlugins()
  killHeroTimeline()

  const { elements, reducedMotion, onPhaseChange } = options

  if (reducedMotion) {
    setFinalState(elements)
    onPhaseChange?.('complete')
    return null
  }

  gsap.set(elements.veil, { opacity: 1 })
  gsap.set(elements.logo, { opacity: 0, y: 28, scale: 0.92 })
  gsap.set(elements.carWrap, {
    opacity: 0,
    x: '28vw',
    filter: 'blur(12px)',
  })
  gsap.set(elements.car, { scale: 1.06 })
  gsap.set(elements.headlights, { opacity: 0 })
  gsap.set(elements.smoke, { opacity: 0, scale: 0.85 })
  gsap.set(elements.shadow, { opacity: 0, scaleX: 0.4 })
  gsap.set(elements.copy, { opacity: 0, y: 36 })
  gsap.set(elements.ctas, { opacity: 0, y: 24 })

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete: () => onPhaseChange?.('complete'),
  })

  tl.add(() => onPhaseChange?.('idle'))
  tl.to(elements.veil, { opacity: 0.55, duration: 0.8 }, 0)

  tl.add(() => onPhaseChange?.('logo'))
  tl.to(
    elements.logo,
    { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'power2.out' },
    0.35,
  )

  tl.add(() => onPhaseChange?.('headlights'), '+=0.15')
  tl.to(elements.headlights, { opacity: 0.95, duration: 0.9 }, '<')
  tl.to(elements.veil, { opacity: 0.2, duration: 0.9 }, '<')

  tl.add(() => onPhaseChange?.('drive-in'))
  tl.to(
    elements.carWrap,
    {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      duration: 1.35,
      ease: 'power3.inOut',
    },
    '-=0.2',
  )
  tl.to(elements.car, { scale: 1, duration: 1.35, ease: 'power3.inOut' }, '<')
  tl.to(
    elements.smoke,
    { opacity: 0.4, scale: 1, duration: 1.2, ease: 'power2.out' },
    '-=1',
  )

  tl.add(() => onPhaseChange?.('settle'))
  tl.to(elements.shadow, { opacity: 0.6, scaleX: 1, duration: 0.8 }, '-=0.45')
  tl.to(elements.veil, { opacity: 0, duration: 0.6 }, '<')
  tl.to(elements.smoke, { opacity: 0.22, duration: 1.2 }, '<')

  tl.add(() => onPhaseChange?.('copy'))
  tl.to(elements.copy, { opacity: 1, y: 0, duration: 0.85 }, '-=0.2')

  tl.add(() => onPhaseChange?.('cta'))
  tl.to(elements.ctas, { opacity: 1, y: 0, duration: 0.7 }, '-=0.35')

  activeTimeline = tl
  return tl
}

export function killHeroTimeline(): void {
  if (activeTimeline) {
    activeTimeline.kill()
    activeTimeline = null
  }
}

export function replayHeroTimeline(options: HeroTimelineOptions): gsap.core.Timeline | null {
  return createHeroTimeline(options)
}

export function skipHeroTimeline(options: HeroTimelineOptions): void {
  killHeroTimeline()
  setFinalState(options.elements)
  options.onPhaseChange?.('complete')
}
