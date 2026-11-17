import { routes } from '../constants/routes'
import type { NavItem } from '../types/content'

/** Primary navigation — Milestone 1 labels. */
export const mainNavigation: NavItem[] = [
  { id: 'fleet', label: 'Fleet', href: routes.sections.fleet },
  { id: 'services', label: 'Services', href: routes.sections.services },
  { id: 'about', label: 'About', href: routes.sections.about },
  { id: 'contact', label: 'Contact', href: routes.sections.contact },
]
