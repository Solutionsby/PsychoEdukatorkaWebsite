import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import type { HeroData } from '@/content/hero'
import { cn } from '@/lib/cn'
import { HeroCard } from './HeroCard'
import { HeroFigure } from './HeroFigure'
import { HeroHeading } from './HeroHeading'

export const MainHero = ({ hero }: { hero: HeroData }) => {
  const { pathname } = useLocation()
  // pierwsze wejście animuje CSS (działa w HTML z prerenderu, zanim wczyta się JS);
  // kolejne zmiany strony: Motion
  const [initialPath] = useState(pathname)
  const [navigated, setNavigated] = useState(false)
  if (!navigated && pathname !== initialPath) setNavigated(true)

  return (
    <section
      className={cn(
        'relative min-h-svh overflow-hidden bg-mist',
        hero.className,
      )}
    >
      {/* łuk z niebem: stały, nie animuje się przy zmianie strony */}
      <div className="absolute top-20 right-8 bottom-0 w-[60%] overflow-hidden rounded-t-full shadow-[inset_-20px_20px_20px_rgba(0,0,0,0.16)]">
        {/* <img src={niebo} alt="" className="h-full w-full object-cover" /> */}
      </div>

      {/* zmienna treść: scena (zdjęcie, kleks, nagłówek, wszystko absolute)
          + karta w normalnym przepływie, więc hero rośnie razem z jej treścią */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          className={cn(
            'relative flex min-h-svh flex-col pb-6',
            !navigated && 'motion-safe:animate-hero-in',
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative min-h-148 flex-1">
            <HeroFigure
              image={hero.image}
              imageAlt={hero.imageAlt}
              imageClassName={hero.imageClassName}
              decor={hero.decor}
              decorClassName={hero.decorClassName}
            />
            <HeroHeading
              heading={hero.heading}
              headingClassName={hero.headingClassName}
              lineClassName={hero.lineClassName}
            />
          </div>

          {hero.card && <HeroCard card={hero.card} />}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
