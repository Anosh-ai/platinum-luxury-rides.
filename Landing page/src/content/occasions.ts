import type { OccasionItem } from '../types/content'

/**
 * Four occasion blocks — original client / project occasion imagery.
 */
export const occasionsSectionCopy = {
  eyebrow: 'Occasions',
  title: 'Start with the occasion.',
  description:
    'Find the car that feels right for your plans — weddings, corporate travel, formals, and private celebrations.',
}

export const occasions: OccasionItem[] = [
  {
    id: 'weddings',
    shortLabel: 'Weddings',
    title: 'Wedding car hire',
    summary:
      'Choose a wedding car that complements your day. Plan the journey between getting ready, the ceremony, photographs, and the reception — then enquire with your date and venues.',
    href: '#enquire',
    ctaLabel: 'Enquire for weddings',
    imageSrc: '/assets/images/occasions/wedding.jpg',
    imageAlt: 'Classic wedding car with Just Married floral wreath',
  },
  {
    id: 'corporate',
    shortLabel: 'Corporate',
    title: 'Corporate & executive',
    summary:
      'Plan vehicle hire for corporate functions, event guests, and executive travel. Share the schedule, passenger numbers, and pickup points so we can confirm the right car.',
    href: '#enquire',
    ctaLabel: 'Enquire for corporate',
    imageSrc: '/assets/images/occasions/corporate.jpg',
    imageAlt: 'Black luxury executive sedan for corporate travel',
  },
  {
    id: 'formals',
    shortLabel: 'Formals',
    title: 'School formals',
    summary:
      'A stylish, timed arrival for formal night — pickup, optional photo stop, and venue drop-off. Share the date, venue, and passenger count when you enquire.',
    href: '#enquire',
    ctaLabel: 'Enquire for formals',
    imageSrc: '/assets/images/occasions/formal.jpg',
    imageAlt: 'White classic convertible for school formals',
  },
  {
    id: 'special',
    shortLabel: 'Private',
    title: 'Private celebrations',
    summary:
      'Birthdays, anniversaries, proposals, photoshoots, and special nights out. Tell us the brief and locations — we match the car to the moment.',
    href: '#enquire',
    ctaLabel: 'Enquire for your occasion',
    imageSrc: '/assets/images/occasions/special.jpg',
    imageAlt: 'Dark luxury sports car for private celebrations',
  },
]
