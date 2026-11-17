import { siteConfig } from '../config/site.config'
import type { CtaLink } from '../types/content'

/**
 * Brand-facing copy for Platinum Luxury Rides.
 * Generic positioning only — no invented prices, contacts, or testimonials.
 */
export const siteContent = {
  brandName: siteConfig.brandName,
  heroHeadline: 'Arrive in platinum.',
  heroDescription:
    'Premium luxury and exotic car hire for weddings, formals, corporate travel, and occasions that deserve a remarkable arrival.',
  primaryCta: {
    id: 'enquire',
    label: 'Enquire now',
    href: siteConfig.enquiryHref,
    variant: 'primary',
  } satisfies CtaLink,
  secondaryCta: {
    id: 'explore-fleet',
    label: 'Explore the fleet',
    href: '#fleet',
    variant: 'secondary',
  } satisfies CtaLink,
  heroMedia: {
    carSrc: '/assets/images/hero/rolls-royce-ghost-urban-cinematic.jpg',
    carAlt: 'White Rolls-Royce Ghost in a dramatic urban setting',
    glowSrc: '/assets/images/textures/headlight-glow-detail.jpg',
  },
}
