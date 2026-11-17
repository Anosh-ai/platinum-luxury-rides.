/** Formatting helpers for rates and capacity — used when client data exists. */

export function formatAud(amount: number, locale = 'en-AU'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'AUD',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatPassengers(count: number): string {
  return `${count} ${count === 1 ? 'Passenger' : 'Passengers'}`
}
