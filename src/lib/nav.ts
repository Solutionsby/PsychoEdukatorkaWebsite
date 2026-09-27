import type { RouteObject } from 'react-router'
import type { NavEntry, RouteHandle } from '@/content/hero'
import { pageRoutes } from '@/pageRoutes'

export type NavLink = NavEntry & { to: string }

/** Spłaszcza drzewo tras do listy linków: tylko trasy z `handle.nav`, z pełnymi adresami. */
function collect(routes: RouteObject[], base = ''): NavLink[] {
  return routes.flatMap((route) => {
    // ścieżki w trasach są względne: sklejamy z adresem rodzica
    const to = route.index
      ? base || '/'
      : `${base}/${route.path ?? ''}`.replace(/\/+/g, '/')
    const nav = (route.handle as RouteHandle | undefined)?.nav
    const self = nav ? [{ ...nav, to }] : []
    // dzieci: ta sama funkcja, z adresem tej trasy jako bazą
    return [...self, ...collect(route.children ?? [], route.path ? to : base)]
  })
}

// liczone raz: trasy nie zmieniają się w trakcie działania strony
const allLinks = collect(pageRoutes)

/** Linki dla danego miejsca; link bez `in` trafia wszędzie. */
export const navLinks = (place: 'menu' | 'footer') =>
  allLinks.filter((link) => !link.in || link.in.includes(place))
