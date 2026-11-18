import type { HeroTimelineOptions } from '../../types/animation'
import { gsap, registerGsapPlugins } from './gsap'

let activeTimeline: gsap.core.Timeline | null = null
let settleBreath: gsap.core.Tween | null = null

function killSettleBreath(): void {
  if (settleBreath) {
    settleBreath.kill()
    settleBreath = null
  }
}

function resetVideo(video: HTMLVideoElement): void {
  try {
    video.pause()
    video.currentTime = 0
    video.playbackRate = 1
    video.loop = false
  } catch {
    // ignore
  }
}

async function playMovingCar(video: HTMLVideoElement, rate: number): Promise<void> {
  video.muted = true
  video.playsInline = true
  video.loop = false
  video.playbackRate = rate
  try {
    await video.play()
  } catch {
    try {
      await video.play()
    } catch {
      // timeline continues
    }
  }
}

/** Slow the race into a living settle — keep motion, do not freeze dead. */
function brakeToCruise(video: HTMLVideoElement, onStopped?: () => void): gsap.core.Tween {
  const state = { rate: video.playbackRate || 2.15 }
  return gsap.to(state, {
    rate: 0.72,
    duration: 1.25,
    ease: 'power2.inOut',
    onUpdate: () => {
      try {
        video.playbackRate = Math.max(0.55, state.rate)
      } catch {
        // ignore
      }
    },
    onComplete: () => {
      try {
        video.loop = true
        video.playbackRate = 0.85
        if (video.paused) {
          void video.play().catch(() => undefined)
        }
      } catch {
        // ignore
      }
      onStopped?.()
    },
  })
}

function startSettleBreath(video: HTMLVideoElement): void {
  killSettleBreath()
  settleBreath = gsap.to(video, {
    scale: 1.012,
    duration: 5.5,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
  })
}

function setFinalState(elements: HeroTimelineOptions['elements']): void {
  killSettleBreath()
  gsap.set(elements.veil, { opacity: 0 })
  gsap.set(elements.video, {
    opacity: 1,
    xPercent: 0,
    scale: 1,
    filter: 'blur(0px) brightness(1) contrast(1.05)',
  })
  gsap.set(elements.headlights, { opacity: 0.35 })
  gsap.set(elements.smoke, { opacity: 0.2, scale: 1 })
  gsap.set(elements.shadow, { opacity: 0.85, scaleX: 1 })
  gsap.set(elements.reflection, { opacity: 0.55 })
  gsap.set(elements.overlay, { opacity: 1 })
  gsap.set(elements.headline, { opacity: 1, y: 0 })
  gsap.set(elements.description, { opacity: 1, y: 0 })
  gsap.set(elements.ctas, { opacity: 1, y: 0 })

  try {
    elements.video.loop = true
    elements.video.playbackRate = 0.85
    if (elements.video.paused) {
      void elements.video.play().catch(() => undefined)
    }
  } catch {
    // ignore
  }
  startSettleBreath(elements.video)
}

export function createHeroTimeline(options: HeroTimelineOptions): gsap.core.Timeline | null {
  registerGsapPlugins()
  killHeroTimeline()

  const {
    elements,
    reducedMotion,
    onPhaseChange,
    onIgnition,
    onDriveStart,
    onDriveStop,
  } = options

  if (reducedMotion) {
    setFinalState(elements)
    onPhaseChange?.('complete')
    return null
  }

  resetVideo(elements.video)
  killSettleBreath()

  gsap.set(elements.veil, { opacity: 1 })
  gsap.set(elements.video, {
    opacity: 1,
    xPercent: 0,
    scale: 1.08,
    filter: 'blur(3px) brightness(0.72) contrast(1.08)',
  })
  gsap.set(elements.headlights, { opacity: 0 })
  gsap.set(elements.smoke, { opacity: 0, scale: 0.8 })
  gsap.set(elements.shadow, { opacity: 0, scaleX: 0.4 })
  gsap.set(elements.reflection, { opacity: 0 })
  gsap.set(elements.overlay, { opacity: 0.08 })
  gsap.set(elements.headline, { opacity: 0, y: 40 })
  gsap.set(elements.description, { opacity: 0, y: 28 })
  gsap.set(elements.ctas, { opacity: 0, y: 24 })

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete: () => onPhaseChange?.('complete'),
  })

  tl.add(() => onPhaseChange?.('idle'))
  tl.to({}, { duration: 0.18 })

  tl.add(() => {
    onPhaseChange?.('drive-in')
    onIgnition?.()
    onDriveStart?.()
    void playMovingCar(elements.video, 2.15)
  })

  tl.to(elements.veil, { opacity: 0.1, duration: 0.4 }, '<')
  tl.to(elements.headlights, { opacity: 0.95, duration: 0.35 }, '<0.04')
  tl.to(elements.smoke, { opacity: 0.5, scale: 1.15, duration: 0.7 }, '<')

  tl.to(
    elements.video,
    {
      xPercent: 0,
      scale: 1,
      filter: 'blur(0.5px) brightness(1.05) contrast(1.12)',
      duration: 0.95,
      ease: 'power4.in',
    },
    '-=0.05',
  )
  tl.to(elements.veil, { opacity: 0, duration: 0.4 }, '<')

  tl.add(() => onPhaseChange?.('settle'))
  tl.add(() => {
    brakeToCruise(elements.video, onDriveStop)
  })
  tl.to(
    elements.video,
    {
      xPercent: 0,
      scale: 1,
      filter: 'blur(0px) brightness(1) contrast(1.05)',
      duration: 1.2,
      ease: 'power3.out',
    },
    '-=0.1',
  )
  tl.to(elements.shadow, { opacity: 0.9, scaleX: 1, duration: 0.75 }, '<')
  tl.to(elements.reflection, { opacity: 0.6, duration: 0.85 }, '<')
  tl.to(elements.overlay, { opacity: 1, duration: 0.75 }, '<')
  tl.to(elements.headlights, { opacity: 0.35, duration: 0.5 }, '<')
  tl.to(elements.smoke, { opacity: 0.18, duration: 0.9 }, '<')
  tl.add(() => {
    startSettleBreath(elements.video)
  })
  tl.to({}, { duration: 0.28 })

  tl.add(() => onPhaseChange?.('copy'))
  tl.to(elements.headline, { opacity: 1, y: 0, duration: 0.75 })
  tl.to(elements.description, { opacity: 1, y: 0, duration: 0.6 }, '-=0.38')

  tl.add(() => onPhaseChange?.('cta'))
  tl.to(elements.ctas, { opacity: 1, y: 0, duration: 0.55 }, '-=0.25')

  activeTimeline = tl
  return tl
}

export function killHeroTimeline(): void {
  killSettleBreath()
  if (activeTimeline) {
    activeTimeline.kill()
    activeTimeline = null
  }
}
