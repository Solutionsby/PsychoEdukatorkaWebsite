import { ContactCard } from '@/components/ContactCard'
import { TopicCard } from '@/components/TopicCard'
import { TopicNav } from '@/components/TopicNav'
import { Wave } from '@/components/ui/Wave'
import type { RouteHandle } from '@/content/hero'
import {
  kidsTopics,
  parents,
  psychotherapyKidsHero,
} from '@/content/psychotherapy'
import { alternateSide } from '@/lib/side'

export const handle = { hero: psychotherapyKidsHero } satisfies RouteHandle

// Desktop: jasny pas z nawigacją 01–04 (TopicNav),
// karty bez tła (TopicCard), „Rodzice i opiekunowie” na różowej fali (Wave).
// TODO: pasy z niebem między kartami (czekają na zdjęcie nieba)

export default function PsychotherapyKids() {
  return (
    // overflow-x-clip: karty wjeżdżają zza krawędzi ekranu;
    // isolate: fale (-z-10) pod treścią, ale nad hero
    <div className="overflow-x-clip pt-6 text-ink lg:relative lg:isolate lg:pt-0">
      <TopicNav
        topics={kidsTopics}
        label="Obszary wsparcia"
        gridClassName="lg:grid-cols-[19.7vw_20.5vw_20.4vw_1fr]"
      />

      {/* karty na zmianę: nieparzyste przy lewej krawędzi, parzyste przy prawej */}
      <ol className="space-y-6 lg:mt-[6.85vw] lg:space-y-0">
        {kidsTopics.map((topic, index) => (
          <li
            key={topic.number}
            className="lg:nth-2:mt-[4.36vw] lg:nth-3:mt-[8.5vw] lg:nth-4:mt-[9.5vw] lg:nth-2:[&_dl]:mt-[5.4vw]"
          >
            <TopicCard
              topic={topic}
              side={alternateSide(index)}
              wide={index === 0}
            />
          </li>
        ))}
      </ol>

      <div className="mt-6 mb-4 lg:relative lg:mt-[1.65vw] lg:mb-0 lg:pt-[7.5vw] lg:pb-[10.2vw]">
        <Wave
          viewBox="0 0 1920 760"
          d="M0,50 C500,10 1100,0 1920,30 L1920,570 C1650,690 1350,760 1050,750 C650,740 300,660 0,518 Z"
          className="top-0 h-[39.6vw] fill-rose-light"
        />
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
