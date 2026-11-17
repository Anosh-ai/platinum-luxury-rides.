/**
 * Fleet domain types for Platinum Luxury Rides.
 * Populate from client-approved inventory only — do not invent vehicles or prices.
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
  /** Indicative amount in AUD; omit until client-approved. */
  amountAud?: number
  /** When true, show enquire CTA instead of a number. */
  enquiryOnly?: boolean
}

export interface Vehicle {
  id: string
  name: string
  slug: string
  category: VehicleCategory
  passengerCapacity?: number
  description?: string
  imageSrc?: string
  rates?: HireRate[]
  featured?: boolean
}
