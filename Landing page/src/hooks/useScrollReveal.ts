import { useEffect, type RefObject } from 'react'
import { createScrollReveal } from '../lib/animations/scrollReveal'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/**
 * Attaches scroll reveal behaviour in Phase 2.
 * Phase 1: no-op shell so sections can adopt the hook later.
 */
export function useScrollReveal(ref: RefObject<Element | null>) {
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion || !ref.current) return
    createScrollReveal({ trigger: ref.current, once: true })
  }, [ref, reducedMotion])
}
