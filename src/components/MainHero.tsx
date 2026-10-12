import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import type { HeroData } from '@/lib/hero'
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
        // desktop: jeden ekran w proporcjach projektu (1920×1080)
        'relative min-h-svh overflow-hidden bg-mist lg:h-[56.25vw] lg:min-h-0',
        hero.className,
      )}
    >
      {/* łuk z niebem: stały, nie animuje się przy zmianie strony */}
      {/* desktop: otwór 534 px od x=1174, y=171 */}
      <div
        className={cn(
          'absolute top-20 right-8 bottom-0 w-[60%] overflow-hidden rounded-t-full shadow-[inset_-20px_20px_20px_rgba(0,0,0,0.16)] lg:top-[8.9vw] lg:right-auto lg:left-[61.15vw] lg:w-[27.8vw] lg:shadow-[inset_-1.04vw_1.04vw_1.04vw_rgba(0,0,0,0.16)]',
          hero.arcClassName,
        )}
      >
        {/* TODO: zdjęcie nieba */}
      </div>

      {/* zmienna treść: scena (zdjęcie, kleks, nagłówek, wszystko absolute)
          + karta w normalnym przepływie, więc hero rośnie razem z jej treścią */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          className={cn(
            'relative flex min-h-svh flex-col pb-6 lg:h-full lg:min-h-0 lg:pb-0',
            !navigated && 'motion-safe:animate-hero-in',
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {/* desktop: scena na całe hero, karta (blob) leży na niej absolute */}
          <div className="relative min-h-148 flex-1 lg:absolute lg:inset-0 lg:min-h-0">
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
            {hero.subheading && (
              <p
                className={cn(
                  'absolute hidden text-[max(0.8125rem,1.15vw)] leading-[1.8] text-ink opacity-80 lg:block',
                  hero.subheadingClassName,
                )}
              >
                {hero.subheading.map((line) => (
                  <span
                    key={line}
                    className="not-last:after:mx-[0.5vw] not-last:after:content-['·']"
                  >
                    {line}
                  </span>
                ))}
              </p>
            )}
          </div>

          {hero.card && <HeroCard card={hero.card} />}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
