import type { ReactNode } from 'react'
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
  const phone = siteConfig.contact.phoneDisplay
  const email = siteConfig.contact.email
  const location = siteConfig.contact.locationLabel

  return (
    <footer
      id="contact"
      className="border-t border-[var(--color-cyan)]/20 bg-[var(--color-black)] text-white"
    >
      <Container width="wide" className="py-12 sm:py-16 lg:py-20">
        <div className="mb-10 flex flex-col items-start justify-between gap-5 border border-white/10 bg-white/[0.03] p-5 sm:mb-14 sm:flex-row sm:items-center sm:gap-6 sm:p-7">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cyan)]">
              Ready when you are
            </p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-xl leading-snug sm:text-2xl">
              Request your estimate or book a conversation.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button href={routes.sections.quote} variant="cyan" size="md" className="w-full sm:w-auto">
              Book Now
            </Button>
            <Button
              href={contactHref}
              variant="cyanOutline"
              size="md"
              className="w-full sm:w-auto"
            >
              Contact
            </Button>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1.1fr] lg:gap-12">
          <div>
            <a href="#hero" className="inline-block" aria-label={`${siteConfig.brandName} — home`}>
              <img
                src={siteConfig.logoSrc}
                alt={siteConfig.brandName}
                width={200}
                height={68}
                className="h-12 w-auto object-contain sm:h-14"
                decoding="async"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              Luxury chauffeur and vehicle hire for weddings, formals, corporate arrivals, and
              private occasions. Confirm availability when you enquire.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cyan)]">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:block sm:space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-[var(--color-cyan)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-cyan)]">
              Contact
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
              <li>
                <ContactIcon
                  icon={<PhoneIcon />}
                  label="Phone"
                  href={phone ? (siteConfig.contact.phoneTel ?? undefined) : routes.sections.enquire}
                />
              </li>
              <li>
                <ContactIcon
                  icon={<MailIcon />}
                  label="Email"
                  href={email ? `mailto:${email}` : routes.sections.enquire}
                />
              </li>
              <li>
                <ContactIcon
                  icon={<PinIcon />}
                  label="Location"
                  href={location ? undefined : routes.sections.enquire}
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
          <p>
            © {year} {siteConfig.brandName}. All rights reserved.
          </p>
          <p className="tracking-[0.12em] uppercase text-[var(--color-cyan)]/45">
            Luxury · Presence · Arrival
          </p>
        </div>
      </Container>
    </footer>
  )
}

function ContactIcon({
  icon,
  label,
  href,
}: {
  icon: ReactNode
  label: string
  href?: string
}) {
  const className =
    'flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-colors hover:border-white hover:bg-white/5'

  if (href) {
    return (
      <a href={href} className={className} aria-label={label}>
        {icon}
      </a>
    )
  }

  return (
    <span className={className} aria-label={label} role="img">
      {icon}
    </span>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 3.2c.5-.5 1.3-.6 1.9-.2l2.1 1.3c.6.4.8 1.1.6 1.8l-.7 2.2c-.1.4 0 .8.3 1.1l2.7 2.7c.3.3.7.4 1.1.3l2.2-.7c.7-.2 1.4 0 1.8.6l1.3 2.1c.4.6.3 1.4-.2 1.9l-1.2 1.2c-.5.5-1.2.8-1.9.7-2.1-.2-5.1-1.4-7.9-4.2S4.6 9.2 4.4 7.1c-.1-.7.2-1.4.7-1.9L6.6 3.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
