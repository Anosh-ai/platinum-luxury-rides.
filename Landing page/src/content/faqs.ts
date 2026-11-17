import type { FaqItem } from '../types/content'

/**
 * Generic luxury-hire FAQs for Platinum.
 * No third-party phone/email; no invented fleet model lists or prices.
 */
export const faqsSectionCopy = {
  eyebrow: 'FAQs',
  title: 'Questions, answered clearly.',
  description:
    'A starting point for planning. Specific terms, availability, and inclusions are always confirmed in your written enquiry.',
}

export const faqs: FaqItem[] = [
  {
    id: 'what-vehicles',
    question: 'What types of vehicles can I enquire about?',
    answer:
      'Explore the collection on this page — signature sedans, premium SUVs, and sporting options. Imagery is illustrative; confirm current availability for your preferred date when you enquire.',
  },
  {
    id: 'minimum-hire',
    question: 'Is there a minimum hire period?',
    answer:
      'Minimum duration can vary by vehicle and occasion. Include your date, pickup time, and itinerary in the enquiry so the team can confirm what is available.',
  },
  {
    id: 'chauffeur',
    question: 'Can I book a chauffeur?',
    answer:
      'Yes — discuss a chauffeur-driven booking when you enquire. Confirm the vehicle, itinerary, waiting time, and any special requests in the written quote.',
  },
  {
    id: 'self-drive',
    question: 'Is self-drive available?',
    answer:
      'Self-drive may be available for selected vehicles. Ask about licence and age requirements, bond, insurance terms, mileage, and permitted use before committing.',
  },
  {
    id: 'insurance',
    question: 'Is insurance included?',
    answer:
      'Insurance terms differ by vehicle and hire mode. Request cover details, excess, and bond information as part of your written confirmation.',
  },
  {
    id: 'how-to-book',
    question: 'How do I enquire or book?',
    answer:
      'Use the Enquire section on this page to share your occasion, preferred vehicle style, date, and locations. Bookings are subject to availability and written confirmation. Contact details will appear once Platinum provides them.',
  },
]
