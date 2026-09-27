import { homeHero, type RouteHandle } from '@/content/hero'

export const handle = { hero: homeHero } satisfies RouteHandle

export default function Home() {
  // Hero (hasła + zdjęcie) pochodzi z `homeHero` w `content/hero.ts`.
  // Tu trafia treść pod hero, np. karta z Agatą.
  return null
}
