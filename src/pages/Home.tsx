import type { RouteHandle } from '@/content/hero'
import { homeHero } from '@/content/home'

export const handle = { hero: homeHero } satisfies RouteHandle

export default function Home() {
  // Hero (hasła + zdjęcie) pochodzi z `homeHero` w `content/home.ts`.
  // Tu trafia treść pod hero, np. karta z Agatą.
  return null
}
