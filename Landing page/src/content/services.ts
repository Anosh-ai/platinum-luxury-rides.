import type { ServiceItem } from '../types/content'

/**
 * Service pillars — structural reference only.
 * Confirm chauffeur / self-drive availability per vehicle on enquiry.
 */
export const servicesSectionCopy = {
  eyebrow: 'Services',
  title: 'How you travel with Platinum.',
  description:
    'Chauffeur-driven presence, considered transfers, and self-drive experiences — each arranged around your itinerary.',
}

export const services: ServiceItem[] = [
  {
    id: 'chauffeur',
    title: 'Chauffeur service',
    summary:
      'A professional driver for the full itinerary — waiting time, multi-stop plans, and a composed arrival wherever the evening takes you.',
    href: '#enquire',
    imageSrc: '/assets/images/services/chauffeur.jpg',
  },
  {
    id: 'airport-transfers',
    title: 'Airport transfers',
    summary:
      'Meet-and-greet style transfers with room for luggage. Share flight numbers so timing can be planned carefully.',
    href: '#enquire',
    imageSrc: '/assets/images/services/airport-transfer.jpg',
  },
  {
    id: 'self-drive',
    title: 'Self-drive hire',
    summary:
      'Take the wheel when you want the drive itself to be the experience. Eligibility, bond, and terms are confirmed per vehicle.',
    href: '#enquire',
    imageSrc: '/assets/images/services/self-drive.jpg',
  },
  {
    id: 'events',
    title: 'Events & production',
    summary:
      'Artist arrivals, guest fleets, and production schedules. Send the run-of-show and we will discuss vehicle options for each movement.',
    href: '#enquire',
    imageSrc: '/assets/images/services/events.jpg',
  },
]
