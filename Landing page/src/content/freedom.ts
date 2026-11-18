/**
 * Post-fleet highlight section — interactive pillars + hero car visual.
 * Copy stays claim-safe (no invented pricing, rewards, or roadside programs).
 */
export const freedomSectionCopy = {
  eyebrow: 'The Platinum difference',
  title: 'Keys to freedom, wheels to adventure.',
  description:
    'Travel on your terms with a composed luxury hire — choose the car for the moment, share your plans, and we confirm availability in writing.',
  imageSrc: '/assets/images/freedom/freedom-luxury-sedan.png',
  imageAlt: 'Dark metallic luxury sedan for Platinum Luxury Rides',
  ctaLabel: 'Enquire now',
  ctaHref: '#enquire',
}

export type FreedomFeature = {
  id: string
  title: string
  detail: string
}

export const freedomFeatures: FreedomFeature[] = [
  {
    id: 'flexible',
    title: 'Flexible booking options',
    detail:
      'Share your date, route, and preferred vehicle style. We confirm what is available and outline the next steps clearly.',
  },
  {
    id: 'luxury',
    title: 'Luxury and comfort',
    detail:
      'Quiet cabins, polished presentation, and a composed ride — whether the occasion is a wedding, formal, or executive arrival.',
  },
  {
    id: 'support',
    title: '24/7 enquiry support',
    detail:
      'Reach out any time for last-minute calendars or planned events. We respond with written confirmation once details are locked.',
  },
 
  {
    id: 'occasions',
    title: 'Occasion-ready planning',
    detail:
      'Weddings, formals, corporate transfers, and private celebrations — start with the moment, then match the car to your itinerary.',
  },
  {
    id: 'chauffeur',
    title: 'Chauffeur-led arrivals',
    detail:
      'Professional chauffeurs focused on timing, route care, and a polished guest experience from pickup to final drop-off.',
  },
]
