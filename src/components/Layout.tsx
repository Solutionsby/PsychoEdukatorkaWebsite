import { MotionConfig } from 'motion/react'
import { Outlet, useMatches } from 'react-router'
import type { RouteHandle } from '@/content/hero'
import { MainHero } from './MainHero'
import { Menu } from './Menu'

export function Layout() {
  // Najgłębsza trasa z `handle.hero` wygrywa (np. /psychoterapia/dorosli nad hubem).
  const hero = useMatches()
    .map((match) => (match.handle as RouteHandle | undefined)?.hero)
    .findLast(Boolean)

  return (
    <MotionConfig reducedMotion="user">
      <Menu />
      {hero && <MainHero hero={hero} />}
      <main>
        <Outlet />
      </main>
    </MotionConfig>
  )
}
