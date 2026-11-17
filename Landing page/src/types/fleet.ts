/**
 * Fleet domain types for Platinum Luxury Rides.
 * Prices and verified specs stay optional until client-approved.
 */

export type VehicleCategory =
  | 'luxury-sedan'
  | 'premium-suv'
  | 'sports-car'
  | 'group-van'
  | 'classic'

export type HireMode = 'chauffeur' | 'self-drive'

export type RateUnit = 'hour' | 'day'

export interface HireRate {
  mode: HireMode
  unit: RateUnit
  amountAud?: number
  enquiryOnly?: boolean
}

export interface Vehicle {
  id: string
  name: string
  slug: string
  category: VehicleCategory
  categoryLabel: string
  /** Soft occasion hint — not a verified capacity claim. */
  occasionHint?: string
  description?: string
  imageSrc: string
  imageAlt: string
  rates?: HireRate[]
  featured?: boolean
  /**
   * Soft capacity labels for CRO cards.
   * Always confirm exact passengers / luggage on enquiry — never treat as guaranteed.
   */
  capacityNote?: string
  luggageNote?: string
  featureHighlights?: string[]
}

export const categoryLabels: Record<VehicleCategory, string> = {
  'luxury-sedan': 'Luxury Sedan',
  'premium-suv': 'Premium SUV',
  'sports-car': 'Sports Car',
  'group-van': 'Group',
  classic: 'Classic',
}
