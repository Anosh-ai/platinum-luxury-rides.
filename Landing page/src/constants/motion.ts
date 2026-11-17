/**
 * Shared motion timing constants for Phase 2 GSAP / Motion work.
 * No timelines are implemented in Phase 1.
 */

export const motionTokens = {
  duration: {
    instant: 0.2,
    fast: 0.4,
    base: 0.8,
    slow: 1.4,
    cinematic: 2.4,
  },
  ease: {
    soft: 'power2.out',
    cinematic: 'power3.inOut',
    snappy: 'power3.out',
  },
  stagger: {
    fleet: 0.12,
    services: 0.1,
    faqs: 0.06,
  },
} as const
