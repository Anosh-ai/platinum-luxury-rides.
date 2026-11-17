import { routes } from '../constants/routes'
import type { NavItem } from '../types/content'

/**
 * Landing navigation anchors.
 * Labels are structural only; refine with client-approved naming in Phase 2.
 */
export const mainNavigation: NavItem[] = [
  { id: 'fleet', label: 'Fleet', href: routes.sections.fleet },
  { id: 'occasions', label: 'Occasions', href: routes.sections.occasions },
  { id: 'services', label: 'Services', href: routes.sections.services },
  { id: 'why-choose-us', label: 'Why choose us', href: routes.sections.whyChooseUs },
  { id: 'faqs', label: 'FAQs', href: routes.sections.faqs },
  { id: 'enquire', label: 'Enquire', href: routes.sections.enquire },
]
