/**
 * Site-level configuration for Platinum Luxury Rides.
 * Contact and booking endpoints remain unset until the client provides them.
 */

export const siteConfig = {
  brandName: 'Platinum Luxury Rides',
  shortName: 'Platinum',
  logoSrc: '/assets/brand/platinum-luxury-rides-logo.png',
  locale: 'en-AU',
  currency: 'AUD',
  /** TODO: client-approved contact details */
  contact: {
    phoneDisplay: undefined as string | undefined,
    phoneTel: undefined as string | undefined,
    email: undefined as string | undefined,
    locationLabel: undefined as string | undefined,
  },
  /** TODO: client-approved enquiry / booking endpoint */
  enquiryHref: '#enquire',
} as const
