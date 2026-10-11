import type { RouteHandle } from '@/content/hero'
import { homeHero } from '@/content/home'

export const handle = { hero: homeHero } satisfies RouteHandle

export default function Home() {
  // cała treść strony głównej jest w hero (`homeHero`)
  return null
}
