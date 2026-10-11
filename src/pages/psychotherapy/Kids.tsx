import { ContactCard } from '@/components/ContactCard'
import { TopicCard } from '@/components/TopicCard'
import type { RouteHandle } from '@/content/hero'
import {
  kidsTopics,
  parents,
  psychotherapyKidsHero,
} from '@/content/psychotherapy'
import { cn } from '@/lib/cn'

export const handle = { hero: psychotherapyKidsHero } satisfies RouteHandle

// Desktop (projekt 1920, wymiary w vw = px / 19.2): jasny pas z nawigacją 01–04 zachodzi
// na dół hero, karty bez tła (TopicCard), „Rodzice i opiekunowie” na różowej fali.
// Fale to ścieżki SVG rozciągane na szerokość ekranu (preserveAspectRatio="none").
// TODO: pasy z niebem między kartami (czekają na zdjęcie nieba)
const wave = 'pointer-events-none absolute left-0 -z-10 hidden w-full lg:block'

export default function PsychotherapyKids() {
  return (
    // overflow-x-clip: karty wjeżdżają zza krawędzi ekranu;
    // isolate: fale (-z-10) pod treścią, ale nad hero
    <div className="overflow-x-clip pt-6 text-ink lg:relative lg:isolate lg:pt-0">
      <svg
        aria-hidden
        viewBox="0 0 1920 560"
        preserveAspectRatio="none"
        className={cn(wave, '-top-[9.3vw] h-[29.2vw] fill-mist-light')}
      >
        <path d="M0,150 C250,95 500,20 1000,0 C1350,-5 1650,110 1920,185 L1920,455 C1750,490 1450,470 1200,440 C950,410 700,370 450,395 C250,415 100,470 0,510 Z" />
      </svg>

      {/* desktop: skróty do kart */}
      <nav
        aria-label="Obszary wsparcia"
        className="hidden lg:grid lg:grid-cols-[19.7vw_20.5vw_20.4vw_1fr] lg:pt-[1.1vw] lg:pl-[9.9vw]"
      >
        {kidsTopics.map((topic, index) => (
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

      {/* karty na zmianę: nieparzyste przy lewej krawędzi, parzyste przy prawej */}
      <ol className="space-y-6 lg:mt-[6.85vw] lg:space-y-0">
        {kidsTopics.map((topic, index) => (
          <li
            key={topic.number}
            className="lg:nth-2:mt-[4.36vw] lg:nth-3:mt-[8.5vw] lg:nth-4:mt-[9.5vw] lg:nth-2:[&_dl]:mt-[5.4vw]"
          >
            <TopicCard
              topic={topic}
              side={index % 2 ? 'right' : 'left'}
              wide={index === 0}
            />
          </li>
        ))}
      </ol>

      <div className="mt-6 mb-4 lg:relative lg:mt-[1.65vw] lg:mb-0 lg:pt-[7.5vw] lg:pb-[10.2vw]">
        <svg
          aria-hidden
          viewBox="0 0 1920 760"
          preserveAspectRatio="none"
          className={cn(wave, 'top-0 h-[39.6vw] fill-rose-light')}
        >
          <path d="M0,50 C500,10 1100,0 1920,30 L1920,570 C1650,690 1350,760 1050,750 C650,740 300,660 0,518 Z" />
        </svg>
        <ContactCard
          title={parents.title}
          text={parents.text}
          image={parents.image}
          imageAlt={parents.imageAlt}
          imageClassName="max-lg:hidden lg:absolute lg:-top-[5.2vw] lg:left-[64.3vw] lg:w-[28.9vw]"
          buttonClassName="lg:mt-[5.5vw] lg:ml-[35.7vw]"
        />
      </div>
    </div>
  )
}
