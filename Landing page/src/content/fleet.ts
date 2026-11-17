import type { Vehicle } from '../types/fleet'

/**
 * Fleet cards — 4 vehicles, reference-style card layout.
 * No invented AUD amounts: rates are enquiry-only until client-approved.
 */
export const fleetSectionCopy = {
  eyebrow: 'Our fleet',
  title: 'Choose your arrival.',
  description:
    'Four signature silhouettes. Confirm availability, chauffeur or self-drive options, and pricing in your written enquiry.',
  ctaLabel: 'View vehicle',
  availabilityNote:
    'Imagery is illustrative. Rates shown as enquiry-only until Platinum confirms current pricing.',
}

export const fleet: Vehicle[] = [
  {
    id: 'signature-sedan',
    name: 'Signature Sedan',
    slug: 'signature-sedan',
    category: 'luxury-sedan',
    categoryLabel: 'Luxury Sedan',
    occasionHint: 'Weddings · formals · VIP',
    description: 'Polished presence for ceremonies and executive arrivals.',
    imageSrc: '/assets/images/fleet/fleet-luxury-sedan-white.jpg',
    imageAlt: 'White luxury sedan',
    featured: true,
    capacityNote: 'Passengers on enquiry',
    luggageNote: 'Luggage on enquiry',
    rates: [
      { mode: 'chauffeur', unit: 'hour', enquiryOnly: true },
      { mode: 'chauffeur', unit: 'day', enquiryOnly: true },
    ],
  },
  {
    id: 'executive-suv',
    name: 'Executive SUV',
    slug: 'executive-suv',
    category: 'premium-suv',
    categoryLabel: 'Premium SUV',
    occasionHint: 'Corporate · airport',
    description: 'Commanding stance for boardrooms and transfers.',
    imageSrc: '/assets/images/fleet/fleet-premium-suv-black.jpg',
    imageAlt: 'Black premium SUV',
    featured: true,
    capacityNote: 'Passengers on enquiry',
    luggageNote: 'Luggage on enquiry',
    rates: [
      { mode: 'chauffeur', unit: 'hour', enquiryOnly: true },
      { mode: 'self-drive', unit: 'day', enquiryOnly: true },
    ],
  },
  {
    id: 'night-sports',
    name: 'Night Sports Coupe',
    slug: 'night-sports-coupe',
    category: 'sports-car',
    categoryLabel: 'Sports Car',
    occasionHint: 'Celebrations · photos',
    description: 'Cinematic silhouette for statement moments.',
    imageSrc: '/assets/images/fleet/fleet-sports-coupe-night.jpg',
    imageAlt: 'Sports coupe at night',
    featured: true,
    capacityNote: 'Seating on enquiry',
    luggageNote: 'Light luggage',
    rates: [
      { mode: 'self-drive', unit: 'day', enquiryOnly: true },
      { mode: 'chauffeur', unit: 'hour', enquiryOnly: true },
    ],
  },
  {
    id: 'urban-suv',
    name: 'Urban Premium SUV',
    slug: 'urban-premium-suv',
    category: 'premium-suv',
    categoryLabel: 'Premium SUV',
    occasionHint: 'Guests · multi-stop',
    description: 'Refined space for city movements and groups.',
    imageSrc: '/assets/images/fleet/fleet-premium-suv-white.jpg',
    imageAlt: 'White premium SUV',
    featured: true,
    capacityNote: 'Passengers on enquiry',
    luggageNote: 'Luggage on enquiry',
    rates: [
      { mode: 'chauffeur', unit: 'day', enquiryOnly: true },
      { mode: 'self-drive', unit: 'day', enquiryOnly: true },
    ],
  },
]
