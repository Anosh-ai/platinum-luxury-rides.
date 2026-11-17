import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useId, useState } from 'react'
import { siteConfig } from '../../config/site.config'
import { mainNavigation } from '../../content/navigation'
import { siteContent } from '../../content/site'
import { cn } from '../../lib/utils/cn'
import { Button } from '../ui/Button'
import { Container } from './Container'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled || open
          ? 'border-b border-white/10 bg-[var(--color-black)]/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container
        width="wide"
        className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-20"
      >
        <a
          href="#hero"
          className="relative z-10 flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-cyan)]"
          aria-label={`${siteConfig.brandName} — home`}
        >
          <img
            src={siteConfig.logoSrc}
            alt={siteConfig.brandName}
            width={180}
            height={60}
            className="h-10 w-auto object-contain sm:h-12"
            decoding="async"
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-8" aria-label="Primary">
            {mainNavigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--color-chrome)] transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button href={siteContent.primaryCta.href} size="md">
            {siteContent.primaryCta.label}
          </Button>
        </div>

        <button
          type="button"
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 text-white lg:hidden"
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
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            className="border-t border-white/10 bg-[var(--color-black)] lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Container className="flex flex-col gap-1 py-6">
              {mainNavigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={closeMenu}
                  className="px-1 py-3 text-sm uppercase tracking-[0.16em] text-[var(--color-chrome-bright)]"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <Button
                  href={siteContent.primaryCta.href}
                  className="w-full"
                  onClick={closeMenu}
                >
                  {siteContent.primaryCta.label}
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
