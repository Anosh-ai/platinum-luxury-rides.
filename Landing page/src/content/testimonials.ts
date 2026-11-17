import type { TestimonialItem } from '../types/content'

/**
 * Testimonials — empty until Platinum supplies approved reviews.
 * UI shows clearly marked placeholders instead of invented quotes.
 */
export const testimonialsSectionCopy = {
  eyebrow: 'Client voices',
  title: 'Words from the journey.',
  description:
    'Verified Platinum Luxury Rides reviews will appear here once approved. Until then, these cards are placeholders only.',
  placeholderNote: 'Placeholder — awaiting client-approved review',
}

export const testimonials: TestimonialItem[] = []

/** Display-only placeholders — not real customer quotes. */
export const testimonialPlaceholders: TestimonialItem[] = [
  {
    id: 'placeholder-1',
    quote:
      'A verified client review will sit here once Platinum Luxury Rides provides approved testimonials.',
    author: 'Client name',
    source: 'Placeholder',
    dateLabel: 'Pending',
  },
  {
    id: 'placeholder-2',
    quote:
      'This space is reserved for an authentic experience story — never generated or copied from another brand.',
    author: 'Client name',
    source: 'Placeholder',
    dateLabel: 'Pending',
  },
  {
    id: 'placeholder-3',
    quote:
      'When real reviews are ready, this carousel will feature them with source attribution.',
    author: 'Client name',
    source: 'Placeholder',
    dateLabel: 'Pending',
  },
]
