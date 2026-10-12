import { ContactButton } from '@/components/ContactButton'
import { TopicCard } from '@/components/TopicCard'
import { TopicNav } from '@/components/TopicNav'
import type { RouteHandle } from '@/content/hero'
import { adultsTopics, psychotherapyAdultsHero } from '@/content/psychotherapy'
import { alternateSide } from '@/lib/side'

export const handle = { hero: psychotherapyAdultsHero } satisfies RouteHandle

// Desktop: układ jak Dzieci (TopicNav + TopicCard),
// trzy obszary, kolumna tytułu szersza (lista od x=994), lista 01 w dwóch równych kolumnach.
// TODO: pasy z niebem między kartami (czekają na zdjęcie nieba)
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
        {/* karty na zmianę: nieparzyste przy lewej krawędzi, parzyste przy prawej */}
        <ol className="mt-6 space-y-6 lg:mt-[6.85vw] lg:space-y-0">
          {adultsTopics.map((topic, index) => (
            <li
              key={topic.number}
              className="lg:nth-2:mt-[3.3vw] lg:nth-3:mt-[5vw] lg:nth-2:[&_dl]:mt-[4.85vw] lg:nth-3:[&_dl]:mt-[6.55vw]"
            >
              <TopicCard
                topic={topic}
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
