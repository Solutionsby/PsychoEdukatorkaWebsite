import { ContactCard } from '@/components/ContactCard'
import { TopicCard } from '@/components/TopicCard'
import { psychotherapyKidsHero, type RouteHandle } from '@/content/hero'
import { kidsTopics, parents } from '@/content/psychotherapy'

export const handle = { hero: psychotherapyKidsHero } satisfies RouteHandle

export default function PsychotherapyKids() {
  return (
    // overflow-x-clip: karty wjeżdżają zza krawędzi ekranu
    <div className="overflow-x-clip pt-6 text-ink">
      {/* karty na zmianę: nieparzyste przy lewej krawędzi, parzyste przy prawej */}
      <ol className="space-y-6">
        {kidsTopics.map((topic, index) => (
          <li key={topic.number}>
            <TopicCard topic={topic} side={index % 2 ? 'right' : 'left'} />
          </li>
        ))}
      </ol>

      <div className="mt-6 mb-4">
        <ContactCard title={parents.title} text={parents.text} />
      </div>
    </div>
  )
}
