import type { WhyChooseUsItem } from '../types/content'

/**
 * Trust / differentiator points — qualitative service pillars.
 * No invented statistics or unverified awards.
 */
export const whyChooseSectionCopy = {
  eyebrow: 'Why Platinum',
  title: 'Trust built into every arrival.',
  description:
    'Luxury chauffeur travel should feel assured from the first conversation — availability, professionalism, and a composed finish.',
}

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    id: 'availability',
    title: 'Around-the-clock coordination',
    body: 'Enquire any time for weddings, airports, and executive calendars. We respond with clear next steps and written confirmation.',
  },
  {
    id: 'chauffeurs',
    title: 'Professional chauffeurs',
    body: 'Discreet, presentation-ready drivers focused on timing, route care, and a polished guest experience.',
  },
  {
    id: 'flight-tracking',
    title: 'Flight-aware transfers',
    body: 'Share flight details when you enquire so pickup timing can be planned around arrivals and delays.',
  },
  {
    id: 'corporate',
    title: 'Corporate-ready accounts',
    body: 'Recurring executive travel and event guest movements arranged around your itinerary and branding standards.',
  },
]

/** Compact trust badges for floating / strip UI. */
export const trustBadges = [
  { id: '247', label: '24/7 enquiry' },
  { id: 'chauffeur', label: 'Pro chauffeurs' },
  { id: 'flight', label: 'Flight tracking' },
  { id: 'corporate', label: 'Corporate accounts' },
] as const
