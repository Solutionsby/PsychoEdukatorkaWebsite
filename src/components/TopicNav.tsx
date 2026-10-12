import type { Topic } from '@/content/topics'
import { cn } from '@/lib/cn'
import { Wave } from './ui/Wave'

type TopicNavProps = {
  topics: Topic[]
  label: string // aria-label nawigacji
  gridClassName: string // szerokości kolumn, np. 'lg:grid-cols-[19.7vw_20.5vw_20.4vw_1fr]'
}

/**
 * Desktop: jasny pas zachodzący na dół hero ze skrótami 01–04 do kart (Dzieci, Dorośli).
 * Fala: `Wave` (rodzic strony: lg:relative lg:isolate).
 */
export const TopicNav = ({ topics, label, gridClassName }: TopicNavProps) => (
  <>
    <Wave
      viewBox="0 0 1920 560"
      d="M0,150 C250,95 500,20 1000,0 C1350,-5 1650,110 1920,185 L1920,455 C1750,490 1450,470 1200,440 C950,410 700,370 450,395 C250,415 100,470 0,510 Z"
      className="-top-[9.3vw] h-[29.2vw] fill-mist-light"
    />

    <nav
      aria-label={label}
      className={cn(
        'hidden lg:grid lg:pt-[1.1vw] lg:pl-[9.9vw]',
        gridClassName,
      )}
    >
      {topics.map((topic, index) => (
        <a
          key={topic.number}
          href={`#${topic.id}`}
          className={cn(
            'block',
            index > 0 && 'border-l border-white pl-[1.85vw]',
          )}
        >
          <span className="block w-fit border-b border-current text-[1.88vw] leading-none text-rose-soft">
            {topic.number}
          </span>
          <span className="mt-[0.6vw] block max-w-[13vw] text-[max(0.75rem,1.13vw)] leading-[1.8]">
            {topic.short ?? topic.title}
          </span>
        </a>
      ))}
    </nav>
  </>
)
