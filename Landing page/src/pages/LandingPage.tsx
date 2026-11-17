import { useCallback, useState } from 'react'
import { Footer, Navbar } from '../components/layout'
import { Hero } from '../sections/Hero'
import { FleetShowcase } from '../sections/Fleet'
import { Occasions } from '../sections/Occasions'
import { WhyChoose } from '../sections/WhyChoose'
import { Testimonials } from '../sections/Testimonials'
import { Faqs } from '../sections/Faqs'
import { EnquiryCta } from '../sections/Enquiry'

/**
 * Homepage — Hero locked. Instant estimate lives in the enquiry form (second-last).
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
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--color-gold)] focus:px-4 focus:py-2 focus:text-[var(--color-black)]"
      >
        Skip to content
      </a>
      <Navbar revealed={navRevealed} />
      <main>
        <Hero onUiReady={handleUiReady} />
        <FleetShowcase />
        <Occasions />
        <WhyChoose />
        <Testimonials />
        <Faqs />
        <EnquiryCta />
      </main>
      <Footer />
    </>
  )
}
