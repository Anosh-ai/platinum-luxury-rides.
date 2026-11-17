/**
 * Animation contracts for GSAP / Motion integration.
 */

export type AnimationPhase =
  | 'idle'
  | 'logo'
  | 'headlights'
  | 'drive-in'
  | 'settle'
  | 'copy'
  | 'cta'
  | 'complete'

export interface HeroTimelineElements {
  root: HTMLElement
  veil: HTMLElement
  logo: HTMLElement
  carWrap: HTMLElement
  car: HTMLElement
  headlights: HTMLElement
  smoke: HTMLElement
  shadow: HTMLElement
  copy: HTMLElement
  ctas: HTMLElement
}

export interface HeroTimelineOptions {
  elements: HeroTimelineElements
  reducedMotion: boolean
  onPhaseChange?: (phase: AnimationPhase) => void
}

export interface ScrollRevealOptions {
  trigger: Element | string
  start?: string
  end?: string
  scrub?: boolean | number
  once?: boolean
}
