import { motion } from 'motion/react'
import type { Topic } from '@/content/topics'
import { cn } from '@/lib/cn'

type TopicCardProps = {
  topic: Topic
  side: 'left' | 'right' // krawędź ekranu, do której przylega karta
  wide?: boolean // desktop: lista w dwóch kolumnach pod tytułem (domyślnie: tytuł z lewej, lista z prawej)
  // desktop: nadpisania ze strony (karta, kolumna tytułu, lista, punkty, opisy)
  className?: string
  headClassName?: string
  listClassName?: string
  termClassName?: string
  textClassName?: string
}

const sides = {
  left: 'mr-edge rounded-r-card',
  right: 'ml-edge rounded-l-card',
}

// Biała karta na białym tle: kształt rysuje tylko cień wewnętrzny (u góry), dół prawie niewidoczny.
// Wejście: wjeżdża od swojej krawędzi, raz, gdy pojawi się na ekranie.
// Rodzic musi mieć overflow-x-clip (przesunięcie wychodzi poza ekran).
// Desktop (projekt 1920): bez karty, tekst na tle strony; numer z kreską pod spodem.
export const TopicCard = ({
  topic,
  side,
  wide,
  className,
  headClassName,
  listClassName,
  termClassName,
  textClassName,
}: TopicCardProps) => {
  const Decor = topic.decor
  const placement = topic.decorPlacement ?? 'beside'

  return (
    <motion.article
      id={topic.id}
      // scroll-mt: przy skoku do #id karta nie chowa się pod menu (fixed, h-20)
      className={cn(
        'relative scroll-mt-24 bg-white py-10 pr-8 pl-10 inset-shadow-card',
        sides[side],
        'lg:m-0 lg:scroll-mt-[11vw] lg:rounded-none lg:bg-transparent lg:py-0 lg:pr-[6vw] lg:pl-[9.9vw] lg:inset-shadow-none',
        !wide && 'lg:flex lg:items-start',
        className,
      )}
      initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {Decor && placement === 'beside' && (
        <Decor
          aria-hidden
          className={cn(
            'pointer-events-none absolute text-rose-soft',
            topic.decorClassName,
          )}
        />
      )}

      <div className={cn(!wide && 'lg:w-[32.2vw] lg:shrink-0', headClassName)}>
        <p
          aria-hidden
          className={cn(
            'w-fit border-b border-current text-number leading-none',
            'lg:border-b-0 lg:text-[4.46vw] lg:after:mt-[0.5vw] lg:after:block lg:after:h-[0.16vw] lg:after:w-[2.1vw] lg:after:bg-current',
            topic.toneClassName,
          )}
        >
          {topic.number}
        </p>
        <h2
          className={cn(
            'mt-3 w-2/3 text-card-title lg:mt-[0.8vw] lg:w-auto lg:max-w-[25vw] lg:text-[2.16vw] lg:leading-[1.45]',
            topic.toneClassName,
          )}
        >
          {topic.title}
        </h2>
        {topic.subtitle && (
          <p
            className={cn(
              'hidden lg:mt-[1.4vw] lg:block lg:text-[max(0.75rem,1.3vw)] lg:tracking-[0.03em]',
              topic.toneClassName,
            )}
          >
            {topic.subtitle}
          </p>
        )}

        {Decor && placement === 'between' && (
          <Decor
            aria-hidden
            className={cn(
              'pointer-events-none mt-4 block h-auto w-full text-rose-soft',
              topic.decorClassName,
            )}
          />
        )}
      </div>

      <dl
        className={cn(
          'mt-6 space-y-5',
          wide
            ? // dwie niezależne kolumny (bez wspólnych wierszy), druga od 4. punktu
              'lg:mt-[2vw] lg:columns-2 lg:space-y-0 lg:gap-x-[8.9vw] lg:[&>div]:mb-[1.6vw] lg:[&>div]:break-inside-avoid lg:[&>div:nth-child(4)]:break-before-column'
            : 'lg:mt-0 lg:flex-1 lg:space-y-[1.6vw]',
          listClassName,
        )}
      >
        {topic.items.map((item) => (
          <div key={item.term}>
            <dt
              className={cn(
                'flex gap-3 text-card tracking-[0.15em] text-ink/70 uppercase before:mt-1 before:size-2.5 before:shrink-0 before:rounded-full',
                'lg:gap-[1vw] lg:text-[1.5vw] lg:leading-[1.38] lg:before:mt-[0.5vw] lg:before:size-[1vw]',
                // szerokość z projektu: łamanie jak w XD
                wide ? 'lg:max-w-[34.5vw]' : 'lg:max-w-[42vw]',
                termClassName,
                topic.bulletClassName,
              )}
            >
              {item.term}
            </dt>
            {item.text && (
              <dd
                className={cn(
                  'mt-1 pl-5.5 text-card lg:mt-[0.2vw] lg:pl-[2vw] lg:text-[1.48vw] lg:leading-[1.55]',
                  wide ? 'lg:max-w-[37.5vw]' : 'lg:max-w-[42vw]',
                  textClassName,
                )}
              >
                {item.text}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </motion.article>
  )
}
