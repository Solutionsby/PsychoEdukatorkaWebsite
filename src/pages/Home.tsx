import { homeHero } from '@/content/home'
import { homeHeroLayout } from '@/design/home'
import { type RouteHandle, withLayout } from '@/lib/hero'

export const handle = {
  hero: withLayout(homeHero, homeHeroLayout),
} satisfies RouteHandle

export default function Home() {
  // cała treść strony głównej jest w hero (`homeHero`)
  return null
}
