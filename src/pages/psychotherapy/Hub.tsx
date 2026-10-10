import { LinkPanel } from '@/components/LinkPanel'
import { psychotherapyHubHero, type RouteHandle } from '@/content/hero'
import { cooperation, supportAreas } from '@/content/psychotherapy'

export const handle = { hero: psychotherapyHubHero } satisfies RouteHandle

export default function PsychotherapyHub() {
  return (
    <div className="text-ink">
      {/* szara karta przy lewej krawędzi, zaokrąglenie z prawej (jak karty w O mnie) */}
      <section className="mt-4 mr-edge rounded-r-card bg-mist-light py-8 pr-8 pl-10 inset-shadow-card">
        <h2 className="text-card-title text-rose-soft">{cooperation.title}</h2>
        <div className="mt-2 space-y-4 text-card">
          {cooperation.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-3 text-card text-rose-soft">{cooperation.note}</p>
      </section>

      <LinkPanel
        title={supportAreas.title}
        links={supportAreas.links}
        side="right"
        className="my-4"
      />
    </div>
  )
}
