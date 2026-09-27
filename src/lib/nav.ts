import { pages, type NavEntry } from '@/content/pages'

export type NavLink = NavEntry & { to: string }

/** Linki dla danego miejsca; strona bez `nav.in` trafia wszędzie. */
export const navLinks = (place: 'menu' | 'footer'): NavLink[] =>
  pages.flatMap(({ path, nav }) =>
    nav && (!nav.in || nav.in.includes(place)) ? [{ ...nav, to: path }] : [],
  )
