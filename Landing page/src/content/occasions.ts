import type { OccasionItem } from '../types/content'

/**
 * Four occasion blocks — client visuals for wedding, formals, and private; corporate clean plate.
 */
export const occasionsSectionCopy = {
  eyebrow: 'Occasions',
  title: 'Begin with the moment.',
  description:
    'From the wedding exit to the boardroom arrival — choose the tone of the day, then enquire for availability.',
}

export const occasions: OccasionItem[] = [
  {
    id: 'weddings',
    title: 'Wedding car hire',
    summary:
      'Ceremony to reception with a composed arrival. Share your date, venues, and preferred car style when you enquire.',
    href: '#enquire',
    imageSrc: '/assets/images/occasions/wedding.jpg',
  },
  {
    id: 'corporate',
    title: 'Corporate & executive',
    summary:
      'Quiet cabin time for calls, briefings, and polished guest transfers. Outline the schedule and we confirm the vehicle.',
    href: '#enquire',
    imageSrc: '/assets/images/occasions/corporate.jpg',
  },
  {
    id: 'formals',
    title: 'School formals',
    summary:
      'A considered pickup, photo stop, and venue arrival — timed so the night feels effortless from the first step out.',
    href: '#enquire',
    imageSrc: '/assets/images/occasions/formal.jpg',
  },
  {
    id: 'special',
    title: 'Private celebrations',
    summary:
      'Anniversaries, proposals, birthdays, and shoots. Tell us the brief and locations — we match the car to the moment.',
    href: '#enquire',
    imageSrc: '/assets/images/occasions/special.jpg',
  },
]
