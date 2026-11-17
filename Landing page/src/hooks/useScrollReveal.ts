import { useEffect, useRef } from 'react'
import { gsap, registerGsapPlugins } from '../lib/animations/gsap'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

type Options = {
  y?: number
  start?: string
  staggerChildren?: string
  stagger?: number
}

/**
 * Scroll-triggered fade/rise for a section root (and optional children).
 */
export function useScrollReveal<T extends HTMLElement>(options: Options = {}) {
  const ref = useRef<T | null>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return

    registerGsapPlugins()
    const ctx = gsap.context(() => {
      const heading = el.querySelector('[data-reveal-heading]')
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: options.y ?? 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: heading, start: options.start ?? 'top 88%', once: true },
          },
        )
      }

      if (options.staggerChildren) {
        const kids = el.querySelectorAll(options.staggerChildren)
        if (kids.length) {
          gsap.fromTo(
            kids,
            { opacity: 0, y: 48 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: 'power3.out',
              stagger: options.stagger ?? 0.12,
              scrollTrigger: {
                trigger: kids[0]?.parentElement ?? el,
                start: options.start ?? 'top 82%',
                once: true,
              },
            },
          )
        }
      }
    }, el)

    return () => ctx.revert()
  }, [options.stagger, options.staggerChildren, options.start, options.y, reduced])

  return ref
}
