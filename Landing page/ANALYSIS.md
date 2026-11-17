# Phase 1 Analysis — Platinum Luxury Rides

## Brand decision

- **Product brand:** Platinum Luxury Rides
- **Logo:** `public/assets/brand/platinum-luxury-rides-logo.png` (original, unmodified)
- **Visual identity:** chrome / cyan / black from the logo; light editorial surfaces for non-hero sections
- **Red Carpet Rides Melbourne:** content and section-structure reference only — no branding, colours, logo, prices, contacts, or testimonials copied as Platinum facts

## Reference website studied

Primary source: https://redcarpetridesmelbourne.com.au/

Pages and content areas reviewed:

| Area | URL / location | Notes |
| --- | --- | --- |
| Homepage | `/` | Hero, fleet grid, occasions, services, booking steps, reviews, locations, FAQs |
| Our Fleet | `/pages/our-fleet`, `/pages/fleet`, `/collections/fleets` | Vehicle cards, capacities, hire modes |
| Vehicle products | `/products/*` | Ghost, Cullinan, Bentayga, G-63, Urus, 190 SL, RS6, McLaren, AMG C63, Sprinter |
| Services | `/pages/services` | Photoshoot, getaways, anniversary, birthday, formals, chauffeur, corporate, airport, wedding |
| Wedding | `/pages/wedding`, `/pages/wedding-car-hire-melbourne` | Occasion copy + wedding FAQs |
| Chauffeur | `/pages/chauffeur-service` | Service + FAQs |
| Airport | `/pages/airport-transfers` | Tullamarine transfers + FAQs |
| Self-drive | `/pages/self-drive-car-hire-melbourne` | Eligibility, routes, FAQs |
| School formals | `/pages/school-formals` | Occasion + FAQs |
| Other occasions | birthday, anniversary, getaways, photoshoot, corporate-transfer, music-video | Service landing pages |
| Booking | `/pages/booking` (+ step-2 / final) | Enquiry / reserve flow |
| Contact | `/pages/contact` | Phone, email, location pattern |
| Terms | `/pages/terms-and-conditions` | Booking request terms |
| Service areas | `/pages/service-areas` + many `luxury-car-hire-*` pages | SEO location pages |
| Journal | `/blogs/news` | Editorial stories |
| Testing | `/pages/testing` | Internal / low value — ignore |

## Information architecture mapped to Platinum landing

1. **Hero** — cinematic brand opening + primary/secondary CTAs
2. **Fleet** — vehicle categories, capacities, chauffeur / self-drive modes
3. **Occasions** — weddings, corporate, airport, self-drive, formals, shoots / events
4. **Services** — chauffeur, self-drive, transfers, event hire pillars
5. **Why Choose Us** — differentiators only when Platinum-verified
6. **Testimonials** — empty until Platinum-approved reviews exist
7. **FAQs** — accordion content from client-approved Q&A
8. **Footer / Enquire** — contact + CTA (awaiting Platinum details)

## Reference fleet shape (structure only)

Categories observed: Luxury Sedan, Premium SUV, Sports Car, Group / van, Classic.

Vehicles listed on the reference homepage / fleet (do **not** treat as Platinum inventory or pricing):

- 1958 Mercedes 190 SL
- Rolls-Royce Ghost
- Rolls-Royce Cullinan
- Bentley Bentayga
- Mercedes-Benz G-63
- Lamborghini Urus
- Audi RS6
- McLaren
- Mercedes AMG C63
- Mercedes Sprinter

Hire modes observed: chauffeur hourly/daily; self-drive hourly/daily where published. Published rates on the reference site are **indicative and brand-specific** — never reuse as Platinum pricing.

Unresolved inventory mentions on the reference site (BMW M2/M3/M4, LDV Mifa Luxe) are excluded unless Platinum confirms them.

## Logo and asset analysis

| Asset | Status |
| --- | --- |
| Platinum logo | Present — 1024×341 PNG, ARGB, black background, chrome “PLATINUM”, cyan script “Luxury Rides”, chrome car outline with cyan underglow |
| Client hero video / car photography | Not provided — placeholders under `public/assets/` |
| Design reference screenshot | Not provided — cinematic full-bleed dark hero inferred from brief |

## Animation requirements captured (not implemented)

- **Hero timeline:** dark open → logo → headlights → optional user-gated ignition audio → high-speed enter → blur/smoke → center settle → shadow/reflection → heading → CTAs → sound toggle / replay
- **Section motion:** fleet stagger/zoom, occasions clip-path/parallax, services stagger, why-choose reveals, testimonial carousel, FAQ accordion, nav/footer micro-motion
- **Rules:** animation logic in `src/lib/animations/`; hooks in `src/hooks/`; audio never autoplays

## Technical architecture selected

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- GSAP (+ ScrollTrigger in Phase 2)
- Motion for React (micro-interactions in Phase 2)
- Lenis deferred until needed
- Content in `src/content/`; types in `src/types/`; media in `public/assets/`

## Open questions for the client

1. Platinum phone, email, ABN, and service geography
2. Confirmed fleet list, passenger capacities, hire modes, and pricing policy (publish vs enquire-only)
3. Approved testimonials and any verified statistics
4. Client-owned photography / hero driving video
5. Enquiry form endpoint vs mailto / third-party booking
6. Whether later phases need multi-page SEO (vehicle detail, location pages)

## Phase 1 confirmation

- Folder architecture created and documented
- No landing UI sections, navbar, hero visuals, or GSAP timelines implemented
- No invented prices, contacts, or testimonials
- Ready for Phase 2 after approval
