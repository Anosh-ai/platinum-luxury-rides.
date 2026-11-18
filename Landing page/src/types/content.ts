/**
 * Shared content types for landing sections.
 * Fill only with Platinum-approved copy — no invented claims.
 */

export interface NavItem {
  id: string
  label: string
  href: string
}

export interface CtaLink {
  id: string
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

export interface OccasionItem {
  id: string
  title: string
  shortLabel?: string
  summary?: string
  href?: string
  ctaLabel?: string
  imageSrc?: string
  imageAlt?: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface WhyChooseUsItem {
  id: string
  title: string
  body?: string
  /** Only use when the statistic is client-verified. */
  verifiedStat?: {
    value: number
    suffix?: string
    label: string
  }
}

export interface SiteContact {
  phoneDisplay?: string
  phoneTel?: string
  email?: string
  locationLabel?: string
}
