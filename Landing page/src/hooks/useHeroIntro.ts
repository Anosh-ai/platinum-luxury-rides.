import { useCallback, useEffect, useRef, useState } from 'react'
import { createHeroTimeline, killHeroTimeline } from '../lib/animations/heroTimeline'
import type { AnimationPhase, HeroTimelineElements } from '../types/animation'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/** Hero intro — muted cinematic drive-in, then copy + CTAs. */
export function useHeroIntro(onUiReady?: () => void) {
  const reducedMotion = usePrefersReducedMotion()
  const [phase, setPhase] = useState<AnimationPhase>('idle')
  const [ready, setReady] = useState(false)
  const elementsRef = useRef<HeroTimelineElements | null>(null)
  const uiReadySent = useRef(false)

  const markUiReady = useCallback(() => {
    if (uiReadySent.current) return
    uiReadySent.current = true
    onUiReady?.()
  }, [onUiReady])

  const handlePhase = useCallback(
    (next: AnimationPhase) => {
      setPhase(next)
      if (next === 'copy' || next === 'cta' || next === 'complete') {
        markUiReady()
      }
    },
    [markUiReady],
  )

  const ensureVideoPlaying = useCallback(async () => {
    const video = elementsRef.current?.video
    if (!video) return
    video.muted = true
    video.volume = 0
    try {
      await video.play()
    } catch {
      // Ignore — timeline will retry.
    }
  }, [])

  const runIntro = useCallback(() => {
    const elements = elementsRef.current
    if (!elements) return
    uiReadySent.current = false
    void ensureVideoPlaying()
    createHeroTimeline({
      elements,
      reducedMotion,
      onPhaseChange: handlePhase,
      onDriveStart: () => {
        void ensureVideoPlaying()
      },
    })
    if (reducedMotion) {
      markUiReady()
    }
  }, [reducedMotion, handlePhase, markUiReady, ensureVideoPlaying])

  const registerElements = useCallback((elements: HeroTimelineElements) => {
    elementsRef.current = elements
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    runIntro()
    return () => {
      killHeroTimeline()
    }
  }, [ready, runIntro])

  return {
    phase,
    reducedMotion,
    registerElements,
  }
}
