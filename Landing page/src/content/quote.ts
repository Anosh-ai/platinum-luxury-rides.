/**
 * Quote calculator options — class selectors for enquiry, not published prices.
 * Final quote is always confirmed in writing.
 */
export const quoteSectionCopy = {
  eyebrow: 'Instant estimate',
  title: 'Build your journey in seconds.',
  description:
    'Select a vehicle class, route, and occasion. We prepare a written estimate — no invented rates on this page.',
  ctaLabel: 'Request my estimate',
  disclaimer:
    'This calculator prepares your enquiry. Availability, chauffeur options, duration, and total price are confirmed in writing by Platinum Luxury Rides.',
}

export const vehicleClasses = [
  { id: 'mercedes', label: 'Mercedes class', hint: 'Executive sedan / SUV presence' },
  { id: 'bmw', label: 'BMW class', hint: 'Sport-luxury touring' },
  { id: 'audi', label: 'Audi class', hint: 'Refined performance' },
  { id: 'stretch', label: 'Stretch limousine', hint: 'Group arrivals & celebrations' },
] as const

export const occasionOptions = [
  'Wedding',
  'Corporate / executive',
  'Airport transfer',
  'School formal',
  'Special occasion',
  'Other',
] as const

export const hourOptions = [2, 3, 4, 5, 6, 8, 10, 12] as const
