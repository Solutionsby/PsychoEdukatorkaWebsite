import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import { Outlet, useMatches } from 'react-router'
import type { RouteHandle } from '@/lib/hero'
import { Footer } from './Footer'
import { MainHero } from './MainHero'
import { Menu } from './Menu'

export function Layout() {
  // Najgłębsza trasa z `handle.hero` wygrywa (np. /psychoterapia/dorosli nad hubem).
  const hero = useMatches()
    .map((match) => (match.handle as RouteHandle | undefined)?.hero)
    .findLast(Boolean)

  return (
    <MotionConfig reducedMotion="user">
      {/* animacje przez m.* (motion/react-m) z samym domAnimation = mniej JS;
          strict: pełne motion.* zgłasza błąd */}
      <LazyMotion features={domAnimation} strict>
        <Menu />
        {hero && <MainHero hero={hero} />}
        <main>
          <Outlet />
        </main>
        <Footer />
        {/* desktop: pionowy napis przy prawej krawędzi ekranu (czytany od dołu),
          fixed: jedzie razem z przewijaniem */}
        <p
          aria-hidden
          className="pointer-events-none fixed right-[1.1vw] bottom-[1.6vw] z-40 hidden rotate-180 font-script text-[1.78vw] leading-none text-rose [writing-mode:vertical-rl] lg:block"
        >
          psychoedukatorka
        </p>
      </LazyMotion>
    </MotionConfig>
  )
}
