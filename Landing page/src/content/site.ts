import { siteConfig } from '../config/site.config'
import type { CtaLink } from '../types/content'

/**
 * Brand-facing copy for Platinum Luxury Rides.
 * Generic positioning only — no invented prices, contacts, or testimonials.
 */
export const siteContent = {
  brandName: siteConfig.brandName,
  heroHeadline: 'Your ultimate luxury drive awaits.',
  heroDescription:
    'Rent the world\'s finest cars and redefine luxury travel for weddings, formals, corporate arrivals, and private occasions.',
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
    /** Clean cinematic moving-car hero (no stock watermark; muted playback). */
    videoSrc: '/assets/video/hero/luxury-hero-drive.mp4',
    posterSrc: '/assets/images/hero/cinematic-supercar-headlights-smoke.png',
    carAlt: 'Black luxury supercar racing toward camera on a bridge',
  },
}
