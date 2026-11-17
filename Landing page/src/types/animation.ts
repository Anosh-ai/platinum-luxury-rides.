/**
 * Animation contracts for GSAP / Motion integration.
 */

export type AnimationPhase =
  | 'idle'
  | 'drive-in'
  | 'settle'
  | 'copy'
  | 'cta'
  | 'complete'

/** Single moving-car video hero — no layered still-car plate. */
export interface HeroTimelineElements {
  root: HTMLElement
  veil: HTMLElement
  video: HTMLVideoElement
  headlights: HTMLElement
  smoke: HTMLElement
  shadow: HTMLElement
  reflection: HTMLElement
  overlay: HTMLElement
  headline: HTMLElement
  description: HTMLElement
  ctas: HTMLElement
}

export interface HeroTimelineOptions {
  elements: HeroTimelineElements
  reducedMotion: boolean
  onPhaseChange?: (phase: AnimationPhase) => void
  onIgnition?: () => void
  onDriveStart?: () => void
  onDriveStop?: () => void
}

export interface ScrollRevealOptions {
  trigger: Element | string
  start?: string
  end?: string
  scrub?: boolean | number
  once?: boolean
}
