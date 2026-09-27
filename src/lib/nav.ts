import { pages, type NavEntry, type Page } from '@/content/pages'

export type NavLink = NavEntry & { to: string }

// szeroki typ zamiast `as const`: nie każda strona ma `nav`
const list: readonly Page[] = pages

/** Linki dla danego miejsca; strona bez `nav.in` trafia wszędzie. */
export const navLinks = (place: 'menu' | 'footer'): NavLink[] =>
  list.flatMap(({ path, nav }) =>
    nav && (!nav.in || nav.in.includes(place)) ? [{ ...nav, to: path }] : [],
  )
