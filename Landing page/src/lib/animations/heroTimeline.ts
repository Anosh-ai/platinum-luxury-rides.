import type { HeroTimelineOptions } from '../../types/animation'

/**
 * Cinematic hero sequence (Phase 2):
 * dark open → logo → headlights → optional ignition sound → car enter →
 * blur/smoke → settle + shadow → heading → CTAs.
 * Audio must never autoplay; gated by user gesture via audioController.
 */
export function createHeroTimeline(_options: HeroTimelineOptions): null {
  // Phase 2: return a GSAP timeline instance.
  return null
}

export function killHeroTimeline(): void {
  // Phase 2: dispose timeline + ScrollTrigger instances.
}
