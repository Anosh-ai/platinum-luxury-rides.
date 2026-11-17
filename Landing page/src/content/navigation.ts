import { routes } from '../constants/routes'
import type { NavItem } from '../types/content'

/** Primary navigation — Quote/Book points to enquiry form. */
export const mainNavigation: NavItem[] = [
  { id: 'fleet', label: 'Fleet', href: routes.sections.fleet },
  { id: 'occasions', label: 'Occasions', href: routes.sections.occasions },
  { id: 'about', label: 'Why us', href: routes.sections.about },
  { id: 'contact', label: 'Contact', href: routes.sections.contact },
]
