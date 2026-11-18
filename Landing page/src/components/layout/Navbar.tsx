import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useId, useState } from 'react'
import { siteConfig } from '../../config/site.config'
import { mainNavigation } from '../../content/navigation'
import { routes } from '../../constants/routes'
import { cn } from '../../lib/utils/cn'
import { Button } from '../ui/Button'
import { Container } from './Container'

type NavbarProps = {
  /** Hidden during cinematic intro so the logo is not shown twice. */
  revealed?: boolean
}

/**
 * Sticky header — Book Now CTA. Nav items use bottom underline only (no text recolor).
 */
export function Navbar({ revealed = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('')
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const syncHash = () => setActiveHref(window.location.hash || '')
    syncHash()
    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!revealed) setOpen(false)
  }, [revealed])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[opacity,transform,background-color,border-color,backdrop-filter] duration-500',
        revealed
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-3 opacity-0',
        scrolled || open
          ? 'border-b border-[var(--color-cyan)]/20 bg-[var(--color-black)]/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
      aria-hidden={!revealed}
    >
      <Container
        width="wide"
        className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-20"
      >
        <a
          href="#hero"
          tabIndex={revealed ? 0 : -1}
          className="relative z-10 flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-cyan)]"
          aria-label={`${siteConfig.brandName} — home`}
        >
          <img
            src={siteConfig.logoSrc}
            alt={siteConfig.brandName}
            width={210}
            height={70}
            className="h-11 w-auto object-contain sm:h-[3.25rem] lg:h-14"
            decoding="async"
          />
        </a>

        <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
          <nav className="flex items-center gap-5 xl:gap-7" aria-label="Primary">
            {mainNavigation.map((item) => {
              const isActive = activeHref === item.href
              return (
                <a
                  key={item.id}
                  href={item.href}
                  tabIndex={revealed ? 0 : -1}
                  onClick={() => setActiveHref(item.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className="group relative pb-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--color-chrome)]"
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute inset-x-0 bottom-0 h-px origin-left bg-[var(--color-cyan)] transition-transform duration-300',
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                    )}
                    aria-hidden="true"
                  />
                </a>
              )
            })}
          </nav>

          <Button
            href={routes.sections.quote}
            variant="cyan"
            size="md"
            tabIndex={revealed ? 0 : -1}
          >
            Book Now
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            href={routes.sections.quote}
            variant="cyan"
            size="md"
            tabIndex={revealed ? 0 : -1}
            className="!px-3 !py-2.5 text-[0.65rem]"
          >
            Book
          </Button>
          <button
            type="button"
            tabIndex={revealed ? 0 : -1}
            className="relative z-10 flex h-11 w-11 items-center justify-center border border-white/15 text-white"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close' : 'Menu'}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span
                className={cn(
                  'h-px w-full bg-current transition-transform duration-300',
                  open && 'translate-y-[3.5px] rotate-45',
                )}
              />
              <span
                className={cn(
                  'h-px w-full bg-current transition-opacity duration-300',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'h-px w-full bg-current transition-transform duration-300',
                  open && '-translate-y-[3.5px] -rotate-45',
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && revealed ? (
          <motion.div
            id={menuId}
            className="border-t border-[var(--color-cyan)]/20 bg-[var(--color-black)]/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Container className="flex flex-col gap-1 py-6">
              {mainNavigation.map((item) => {
                const isActive = activeHref === item.href
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      setActiveHref(item.href)
                      closeMenu()
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className="relative w-fit px-1 py-3 text-sm uppercase tracking-[0.16em] text-[var(--color-chrome-bright)]"
                  >
                    {item.label}
                    <span
                      className={cn(
                        'absolute inset-x-1 bottom-2 h-px bg-[var(--color-cyan)] transition-opacity',
                        isActive ? 'opacity-100' : 'opacity-0',
                      )}
                      aria-hidden="true"
                    />
                  </a>
                )
              })}
              <div className="pt-4">
                <Button
                  href={routes.sections.quote}
                  variant="cyan"
                  className="w-full"
                  onClick={closeMenu}
                >
                  Book Now
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
