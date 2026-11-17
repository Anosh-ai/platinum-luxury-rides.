import type { ScrollRevealOptions } from '../../types/animation'
import { gsap, registerGsapPlugins } from './gsap'

/**
 * Fade/rise reveal for section headers and blocks.
 */
export function createScrollReveal(options: ScrollRevealOptions): gsap.core.Tween | null {
  registerGsapPlugins()
  const { trigger, start = 'top 85%', once = true } = options
  const el = typeof trigger === 'string' ? document.querySelector(trigger) : trigger
  if (!el) return null

  gsap.set(el, { opacity: 0, y: 36 })

  return gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start,
      once,
      toggleActions: once ? 'play none none none' : 'play none none reverse',
    },
  })
}

/** Stagger children inside a container on scroll. */
export function createStaggerReveal(
  container: Element,
  childSelector: string,
  options?: { start?: string; stagger?: number },
): gsap.core.Tween | null {
  registerGsapPlugins()
  const children = container.querySelectorAll(childSelector)
  if (!children.length) return null

  gsap.set(children, { opacity: 0, y: 48 })

  return gsap.to(children, {
    opacity: 1,
    y: 0,
    duration: 0.85,
    ease: 'power3.out',
    stagger: options?.stagger ?? 0.12,
    scrollTrigger: {
      trigger: container,
      start: options?.start ?? 'top 80%',
      once: true,
    },
  })
}
