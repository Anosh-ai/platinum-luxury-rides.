import { useCallback, useEffect, useRef, useState } from 'react'
import {
  createHeroTimeline,
  killHeroTimeline,
  replayHeroTimeline,
  skipHeroTimeline,
} from '../lib/animations/heroTimeline'
import type { AnimationPhase, HeroTimelineElements } from '../types/animation'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useHeroIntro() {
  const reducedMotion = usePrefersReducedMotion()
  const [phase, setPhase] = useState<AnimationPhase>('idle')
  const [ready, setReady] = useState(false)
  const elementsRef = useRef<HeroTimelineElements | null>(null)

  const runIntro = useCallback(() => {
    const elements = elementsRef.current
    if (!elements) return
    createHeroTimeline({
      elements,
      reducedMotion,
      onPhaseChange: setPhase,
    })
  }, [reducedMotion])

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

  const replay = useCallback(() => {
    const elements = elementsRef.current
    if (!elements) return
    setPhase('idle')
    replayHeroTimeline({
      elements,
      reducedMotion,
      onPhaseChange: setPhase,
    })
  }, [reducedMotion])

  const skip = useCallback(() => {
    const elements = elementsRef.current
    if (!elements) return
    skipHeroTimeline({
      elements,
      reducedMotion,
      onPhaseChange: setPhase,
    })
  }, [reducedMotion])

  return {
    phase,
    reducedMotion,
    registerElements,
    replay,
    skip,
  }
}
