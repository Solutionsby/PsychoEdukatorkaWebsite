import { ContactButton } from '@/components/ContactButton'
import { TopicCard } from '@/components/TopicCard'
import { TopicNav } from '@/components/TopicNav'
import { SkyShape } from '@/components/ui/SkyShape'
import { adultsTopics, psychotherapyAdultsHero } from '@/content/psychotherapy'
import {
  adultsTopicLooks,
  psychotherapyAdultsHeroLayout,
} from '@/design/psychotherapy'
import { type RouteHandle, withLayout } from '@/lib/hero'
import { matchOrder } from '@/lib/order'
import { alternateSide } from '@/lib/side'

export const handle = {
  hero: withLayout(psychotherapyAdultsHero, psychotherapyAdultsHeroLayout),
} satisfies RouteHandle

// wygląd w kolejności treści (sprawdzane przy buildzie)
const topicLooks = matchOrder(
  adultsTopics,
  adultsTopicLooks,
  'adultsTopicLooks',
)

// Desktop: układ jak Dzieci (TopicNav + TopicCard),
// trzy obszary, kolumna tytułu szersza (lista od x=994), lista 01 w dwóch równych kolumnach.
// Między kartami przebicia z niebem (SkyShape): klin z prawej nad 02, pas nad 03,
// łuk w prawym dolnym rogu do stopki.
export default function PsychotherapyAdults() {
  return (
    // overflow-x-clip: karty wjeżdżają zza krawędzi ekranu;
    // isolate: fala pasa (-z-10) pod treścią, ale nad hero
    <div className="overflow-x-clip text-ink lg:relative lg:isolate lg:-mt-[1.3vw]">
      {/* telefon: skróty do kart na tle hero */}
      <nav aria-label="Obszary pracy" className="bg-mist px-2 pb-6 lg:hidden">
        <ul className="grid grid-cols-3 gap-2 text-center text-card tracking-wide uppercase">
          {adultsTopics.map((topic) => (
            <li key={topic.number}>
              <a href={`#${topic.id}`}>{topic.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <TopicNav
        topics={adultsTopics}
        label="Obszary pracy"
        gridClassName="lg:grid-cols-[25.8vw_26.6vw_1fr]"
      />

      {/* desktop: przycisk na dole po lewej, obok końca ostatniej listy (absolute),
          więc dłuższa lista przesuwa go razem ze stopką */}
      <div className="lg:relative lg:pb-[6.2vw]">
        <SkyShape
          viewBox="0 0 513 153"
          d="M0,153 C150,120 300,60 513,0 L513,47 C400,90 200,140 0,153 Z"
          className="top-[39.9vw] right-0 h-[8vw] w-[26.7vw]"
        />
        <SkyShape
          viewBox="0 0 1255 174"
          d="M0,62 C250,66 500,76 691,79 C900,80 1100,50 1255,0 L1255,65 C1150,100 1000,150 691,174 C500,160 337,123 0,101 Z"
          className="top-[67.4vw] right-0 h-[9.06vw] w-[65.4vw]"
        />
        <SkyShape
          viewBox="0 0 1255 336"
          d="M0,237 C90,250 180,262 259,271 C700,250 1050,160 1255,0 L1255,336 L0,336 Z"
          className="right-0 bottom-0 h-[10.5vw] w-[65.4vw]"
        />
        {/* karty na zmianę: nieparzyste przy lewej krawędzi, parzyste przy prawej */}
        <ol className="mt-6 space-y-6 lg:mt-[6.85vw] lg:space-y-0">
          {adultsTopics.map((topic, index) => (
            <li
              key={topic.number}
              className="lg:nth-2:mt-[3.3vw] lg:nth-3:mt-[5vw] lg:nth-2:[&_dl]:mt-[4.85vw] lg:nth-3:[&_dl]:mt-[6.55vw]"
            >
              <TopicCard
                topic={topic}
                look={topicLooks[index]}
                side={alternateSide(index)}
                wide={index === 0}
                headClassName="lg:w-[41.9vw]"
                listClassName={index === 0 ? 'lg:gap-x-0' : undefined}
                termClassName={
                  index === 0 ? 'lg:max-w-[37.5vw]' : 'lg:max-w-[40.5vw]'
                }
                textClassName={
                  index === 0 ? 'lg:max-w-[38.5vw]' : 'lg:max-w-[40.5vw]'
                }
              />
            </li>
          ))}
        </ol>

        <ContactButton className="mt-6 mr-edge mb-4 lg:absolute lg:bottom-[2.5vw] lg:left-[9.9vw] lg:m-0" />
      </div>
    </div>
  )
}
