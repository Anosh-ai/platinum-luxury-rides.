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
  summary?: string
  href?: string
  imageSrc?: string
}

export interface ServiceItem {
  id: string
  title: string
  summary?: string
  href?: string
  imageSrc?: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface TestimonialItem {
  id: string
  quote: string
  author: string
  source?: string
  dateLabel?: string
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
