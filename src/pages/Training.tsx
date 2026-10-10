import { ContactCard } from '@/components/ContactCard'
import { LinkPanel } from '@/components/LinkPanel'
import { TopicCard } from '@/components/TopicCard'
import { trainingHero, type RouteHandle } from '@/content/hero'
import {
  resilience,
  trainingAreas,
  trainingContact,
  trainingTopics,
} from '@/content/training'

export const handle = { hero: trainingHero } satisfies RouteHandle

export default function Training() {
  return (
    // overflow-x-clip: karty wjeżdżają zza krawędzi ekranu
    <div className="overflow-x-clip text-ink">
      {/* panel jak „Jak pracuję?” w O mnie: kończy się razem z kartą */}
      <section className="mr-edge rounded-tr-card bg-mist pt-10">
        <h2 className="px-14 text-section">{resilience.title}</h2>
        <div className="mt-6 mr-edge rounded-r-card bg-mist-light py-8 pr-8 pl-10 inset-shadow-card">
          <h3 className="text-card-title tracking-wide text-rose-soft uppercase">
            {resilience.cardTitle}
          </h3>
          <div className="mt-3 space-y-4 text-card">
            {resilience.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <LinkPanel
        title={trainingAreas.title}
        links={trainingAreas.links}
        side="right"
        className="mt-6"
        linkClassName="ml-0 py-4"
      />

      {/* karty na zmianę: nieparzyste przy lewej krawędzi, parzyste przy prawej */}
      <ol className="mt-6 space-y-6">
        {trainingTopics.map((topic, index) => (
          <li key={topic.number}>
            <TopicCard topic={topic} side={index % 2 ? 'right' : 'left'} />
          </li>
        ))}
      </ol>

      <div className="mt-6 mb-4">
        <ContactCard {...trainingContact} />
      </div>
    </div>
  )
}
