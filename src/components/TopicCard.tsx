import { motion } from 'motion/react'
import type { Topic } from '@/content/topics'
import { cn } from '@/lib/cn'

type TopicCardProps = {
  topic: Topic
  side: 'left' | 'right' // krawędź ekranu, do której przylega karta
}

const sides = {
  left: 'mr-edge rounded-r-card',
  right: 'ml-edge rounded-l-card',
}

// Biała karta na białym tle: kształt rysuje tylko cień wewnętrzny (u góry), dół prawie niewidoczny.
// Wejście: wjeżdża od swojej krawędzi, raz, gdy pojawi się na ekranie.
// Rodzic musi mieć overflow-x-clip (przesunięcie wychodzi poza ekran).
export const TopicCard = ({ topic, side }: TopicCardProps) => {
  const Decor = topic.decor
  const placement = topic.decorPlacement ?? 'beside'

  return (
    <motion.article
      id={topic.id}
      // scroll-mt: przy skoku do #id karta nie chowa się pod menu (fixed, h-20)
      className={cn(
        'relative scroll-mt-24 bg-white py-10 pr-8 pl-10 inset-shadow-card',
        sides[side],
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

      <p
        aria-hidden
        className={cn(
          'w-fit border-b border-current text-number leading-none',
          topic.toneClassName,
        )}
      >
        {topic.number}
      </p>
      <h2 className={cn('mt-3 w-2/3 text-card-title', topic.toneClassName)}>
        {topic.title}
      </h2>

      {Decor && placement === 'between' && (
        <Decor
          aria-hidden
          className={cn(
            'pointer-events-none mt-4 block h-auto w-full text-rose-soft',
            topic.decorClassName,
          )}
        />
      )}

      <dl className="mt-6 space-y-5">
        {topic.items.map((item) => (
          <div key={item.term}>
            <dt
              className={cn(
                'flex gap-3 text-card tracking-[0.15em] text-ink/70 uppercase before:mt-1 before:size-2.5 before:shrink-0 before:rounded-full',
                topic.bulletClassName,
              )}
            >
              {item.term}
            </dt>
            {item.text && (
              <dd className="mt-1 pl-5.5 text-card">{item.text}</dd>
            )}
          </div>
        ))}
      </dl>
    </motion.article>
  )
}
