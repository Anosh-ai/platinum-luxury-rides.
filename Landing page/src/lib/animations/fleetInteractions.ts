import { gsap, registerGsapPlugins, ScrollTrigger } from './gsap'

let ctx: gsap.Context | null = null

/**
 * Fleet parallax / scrub only — entrance reveals handled by Motion whileInView.
 */
export function initFleetInteractions(root: Element | null): void {
  if (!root) return
  registerGsapPlugins()
  destroyFleetInteractions()

  ctx = gsap.context(() => {
    const stage = root.querySelector('[data-fleet-stage]')
    const stageMedia = root.querySelector('[data-fleet-stage-media]')
    if (stage && stageMedia) {
      gsap.to(stageMedia, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: stage,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, root)
}

export function destroyFleetInteractions(): void {
  if (ctx) {
    ctx.revert()
    ctx = null
  }
}
