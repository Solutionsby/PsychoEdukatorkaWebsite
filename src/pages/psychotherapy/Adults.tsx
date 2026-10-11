import { ContactButton } from '@/components/ContactButton'
import { TopicCard } from '@/components/TopicCard'
import type { RouteHandle } from '@/content/hero'
import { adultsTopics, psychotherapyAdultsHero } from '@/content/psychotherapy'

export const handle = { hero: psychotherapyAdultsHero } satisfies RouteHandle

export default function PsychotherapyAdults() {
  return (
    // overflow-x-clip: karty wjeżdżają zza krawędzi ekranu
    <div className="overflow-x-clip text-ink">
      {/* skróty do kart, na tle hero */}
      <nav aria-label="Obszary pracy" className="bg-mist px-2 pb-6">
        <ul className="grid grid-cols-3 gap-2 text-center text-card tracking-wide uppercase">
          {adultsTopics.map((topic) => (
            <li key={topic.number}>
              <a href={`#${topic.id}`}>{topic.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* karty na zmianę: nieparzyste przy lewej krawędzi, parzyste przy prawej */}
      <ol className="mt-6 space-y-6">
        {adultsTopics.map((topic, index) => (
          <li key={topic.number}>
            <TopicCard topic={topic} side={index % 2 ? 'right' : 'left'} />
          </li>
        ))}
      </ol>

      <ContactButton className="mt-6 mr-edge mb-4" />
    </div>
  )
}
