/**
 * Animation contracts for GSAP / Motion integration (Phase 2+).
 */

export type AnimationPhase =
  | 'idle'
  | 'logo'
  | 'headlights'
  | 'ignition'
  | 'drive-in'
  | 'settle'
  | 'copy'
  | 'cta'
  | 'complete'

export interface HeroTimelineOptions {
  reducedMotion: boolean
  soundEnabled: boolean
  onPhaseChange?: (phase: AnimationPhase) => void
}

export interface ScrollRevealOptions {
  trigger: Element | string
  start?: string
  end?: string
  scrub?: boolean | number
  once?: boolean
}
