import { siteConfig } from '../config/site.config'
import type { CtaLink } from '../types/content'

/**
 * Brand-facing copy shell.
 * TODO: replace taglines with client-approved Platinum Luxury Rides wording.
 */
export const siteContent = {
  brandName: siteConfig.brandName,
  /** Placeholder — awaiting client-approved hero headline. */
  heroHeadline: '',
  /** Placeholder — awaiting client-approved supporting line. */
  heroDescription: '',
  primaryCta: {
    id: 'enquire',
    label: 'Enquire',
    href: siteConfig.enquiryHref,
    variant: 'primary',
  } satisfies CtaLink,
  secondaryCta: {
    id: 'explore-fleet',
    label: 'Explore the fleet',
    href: '#fleet',
    variant: 'secondary',
  } satisfies CtaLink,
}
