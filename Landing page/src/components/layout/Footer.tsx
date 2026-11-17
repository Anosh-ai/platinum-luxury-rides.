import { siteConfig } from '../../config/site.config'
import { mainNavigation } from '../../content/navigation'
import { routes } from '../../constants/routes'
import { Button } from '../ui/Button'
import { Container } from './Container'

const footerLinks = [
  ...mainNavigation,
  { id: 'faqs', label: 'FAQs', href: routes.sections.faqs },
  { id: 'enquire', label: 'Enquire', href: routes.sections.enquire },
]

export function Footer() {
  const year = new Date().getFullYear()
  const contactHref = siteConfig.contact.phoneTel ?? routes.sections.contact

  return (
    <footer className="border-t border-[var(--color-gold)]/20 bg-[var(--color-black)] text-white">
      <Container width="wide" className="py-16 sm:py-20">
        <div className="mb-14 glass-panel flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="font-[family-name:var(--font-display-alt)] text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-gold)]">
              Ready when you are
            </p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
              Request your estimate or book a conversation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={routes.sections.quote} size="lg">
              Book Now
            </Button>
            <Button href={contactHref} variant="secondary" size="lg">
              Contact
            </Button>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <a href="#hero" className="inline-block" aria-label={`${siteConfig.brandName} — home`}>
              <img
                src={siteConfig.logoSrc}
                alt={siteConfig.brandName}
                width={200}
                height={68}
                className="h-14 w-auto object-contain"
                decoding="async"
              />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Luxury chauffeur and vehicle hire for weddings, formals, corporate arrivals, and
              private occasions. Confirm availability when you enquire.
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-[var(--color-gold)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-sm text-white/65">
              {siteConfig.contact.phoneDisplay ? (
                <p>
                  <a
                    href={siteConfig.contact.phoneTel ?? '#'}
                    className="hover:text-[var(--color-gold)]"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </p>
              ) : (
                <p>Phone — to be confirmed</p>
              )}
              {siteConfig.contact.email ? (
                <p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-[var(--color-gold)]"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
              ) : (
                <p>Email — to be confirmed</p>
              )}
              {siteConfig.contact.locationLabel ? (
                <p>{siteConfig.contact.locationLabel}</p>
              ) : (
                <p>Location — to be confirmed</p>
              )}
              <p className="pt-2 text-xs text-white/40">
                Verified contact details will replace these placeholders once provided by Platinum
                Luxury Rides.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.brandName}. All rights reserved.
          </p>
          <p className="tracking-[0.12em] uppercase text-[var(--color-gold)]/50">
            Luxury · Presence · Arrival
          </p>
        </div>
      </Container>
    </footer>
  )
}
