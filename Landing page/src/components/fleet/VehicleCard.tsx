import { motion, useReducedMotion } from 'motion/react'
import { Button } from '../ui/Button'
import { siteConfig } from '../../config/site.config'
import { cn } from '../../lib/utils/cn'
import { formatAud } from '../../lib/utils/format'
import type { HireRate, Vehicle } from '../../types/fleet'

type VehicleCardProps = {
  vehicle: Vehicle
  className?: string
  index?: number
}

function rateLabel(rate: HireRate): string {
  const mode = rate.mode === 'chauffeur' ? 'With chauffeur' : 'Self drive'
  const unit = rate.unit === 'hour' ? '/ hour' : '/ day'
  if (rate.enquiryOnly || rate.amountAud == null) {
    return `${mode} · Enquire ${unit}`
  }
  return `${mode} ${formatAud(rate.amountAud)} ${unit}`
}

/**
 * Fleet card on light sections — car photo + price/enquire rows.
 */
export function VehicleCard({ vehicle, className, index = 0 }: VehicleCardProps) {
  const reduceMotion = useReducedMotion()
  const enquireHref = siteConfig.enquiryHref
  const rates = vehicle.rates?.slice(0, 2) ?? [
    { mode: 'chauffeur' as const, unit: 'hour' as const, enquiryOnly: true },
  ]

  return (
    <article
      data-fleet-card
      className={cn(
        'group flex h-full flex-col overflow-hidden border border-black/8 bg-white shadow-[0_10px_40px_rgba(10,10,10,0.06)]',
        className,
      )}
    >
      <div className="relative aspect-[16/11] overflow-hidden bg-[var(--color-beige)]">
        <motion.img
          src={vehicle.imageSrc}
          alt={vehicle.imageAlt}
          loading={index < 2 ? 'eager' : 'lazy'}
          decoding="async"
          className="h-full w-full object-cover"
          initial={false}
          whileHover={reduceMotion ? undefined : { scale: 1.05 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        />
        <span className="absolute left-3 top-3 bg-white/95 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-cyan-deep)] shadow-sm">
          {vehicle.categoryLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-charcoal)] sm:text-[1.65rem]">
          {vehicle.name}
        </h3>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--color-charcoal)]/50">
          {vehicle.capacityNote ? <span>{vehicle.capacityNote}</span> : null}
          {vehicle.luggageNote ? <span>{vehicle.luggageNote}</span> : null}
        </div>

        <ul className="mt-5 space-y-2 border-t border-black/8 pt-4">
          {rates.map((rate) => (
            <li
              key={`${rate.mode}-${rate.unit}`}
              className="flex items-center justify-between gap-3 text-sm"
            >
              <span className="text-[var(--color-charcoal)]/55">
                {rate.mode === 'chauffeur' ? 'With chauffeur' : 'Self drive'}
              </span>
              <span className="font-semibold text-[var(--color-cyan-deep)]">
                {rate.enquiryOnly || rate.amountAud == null
                  ? 'Price on enquiry'
                  : `${formatAud(rate.amountAud)} / ${rate.unit}`}
              </span>
            </li>
          ))}
        </ul>

        <p className="sr-only">{rates.map(rateLabel).join('. ')}</p>

        <div className="mt-auto pt-5">
          <Button href={enquireHref} variant="primary" size="md" className="w-full">
            Enquire
          </Button>
        </div>
      </div>
    </article>
  )
}
