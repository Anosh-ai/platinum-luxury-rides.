import { useCallback, useState } from 'react'
import { Footer, Navbar } from '../components/layout'
import {
  EnquiryCta,
  Faqs,
  FleetShowcase,
  FreedomHighlights,
  Hero,
  Occasions,
  WhyChoose,
} from '../sections'

/**
 * Homepage composition — section order is the product story.
 */
export function LandingPage() {
  const [navRevealed, setNavRevealed] = useState(false)

  const handleUiReady = useCallback(() => {
    setNavRevealed(true)
  }, [])

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--color-cyan)] focus:px-4 focus:py-2 focus:text-[var(--color-black)]"
      >
        Skip to content
      </a>
      <Navbar revealed={navRevealed} />
      <main>
        <Hero onUiReady={handleUiReady} />
        <FleetShowcase />
        <FreedomHighlights />
        <Occasions />
        <WhyChoose />
        <Faqs />
        <EnquiryCta />
      </main>
      <Footer />
    </>
  )
}
