import { useEffect } from 'react'
import { createHeroTimeline, killHeroTimeline } from '../lib/animations/heroTimeline'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'
import { useSoundToggle } from './useSoundToggle'

/**
 * Wires the cinematic hero timeline in Phase 2.
 * Phase 1: hook shell only — no timeline execution.
 */
export function useHeroIntro() {
  const reducedMotion = usePrefersReducedMotion()
  const sound = useSoundToggle(false)

  useEffect(() => {
    createHeroTimeline({
      reducedMotion,
      soundEnabled: sound.enabled,
    })
    return () => {
      killHeroTimeline()
    }
  }, [reducedMotion, sound.enabled])

  return { reducedMotion, sound }
}
