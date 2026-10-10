import { Link } from 'react-router'
import {
  deskImage,
  workAreas,
  workSteps,
  type WorkArea,
  type WorkStep,
} from '@/content/about'
import { aboutHero, type RouteHandle } from '@/content/hero'

export const handle = { hero: aboutHero } satisfies RouteHandle

export default function About() {
  return (
    <div className="text-ink">
      {/* tło: mist pod nagłówkiem, na pierwszej karcie przechodzi w białe
          TODO: tło z chmurami (O MNIE - TŁO) */}
      <section className="mr-edge pb-10">
        <h2 className="rounded-tr-card bg-mist px-14 pt-10 pb-6 text-section">
          Jak pracuję?
        </h2>
        <ol className="space-y-8">
          {workSteps.map((step) => (
            <WorkStepCard key={step.number} step={step} />
          ))}
        </ol>
      </section>

      {/* zdjęcie szersze niż ekran (biurko od krawędzi do krawędzi), wyśrodkowane;
          overflow-hidden obcina nadmiar, strona się nie poszerza.
          max-w-none: preflight Tailwinda ogranicza img do 100% rodzica.
          Dół zdjęcia (biurko) styka się z sekcją poniżej. */}
      <div className="overflow-hidden">
        <img
          src={deskImage.image.src}
          width={deskImage.image.width}
          height={deskImage.image.height}
          alt={deskImage.alt}
          loading="lazy"
          className="relative left-1/2 block h-auto w-[108%] max-w-none -translate-x-1/2"
        />
      </div>

      <section className="mr-5 rounded-r-card bg-mist py-10">
        <h2 className="px-10 text-section">Poznaj obszary mojej pracy</h2>
        <ul className="mt-6 space-y-6">
          {workAreas.map((area) => (
            <WorkAreaCard key={area.title} area={area} />
          ))}
        </ul>
      </section>
    </div>
  )
}

// Karty na zmianę, z tym samym odstępem (`edge` w index.css) od przeciwnej krawędzi:
// nieparzyste przylegają do lewej (zaokrąglenie z prawej, odstęp = mr-edge sekcji),
// parzyste do prawej (zaokrąglenie z lewej; -mr-edge znosi margines sekcji, ml-edge odstęp).
// Pierwsza zamyka panel „Jak pracuję?”: gradient mist → białe widać w jej zaokrąglonych rogach.
const WorkStepCard = ({ step }: { step: WorkStep }) => (
  <li className="group first:bg-linear-to-b first:from-mist first:to-white first:to-70% even:-mr-edge even:ml-edge">
    <article className="bg-mist-light px-10 py-8 inset-shadow-card group-odd:rounded-r-card group-even:rounded-l-card">
      <p
        aria-hidden
        className="w-fit border-b border-current text-number leading-none text-rose-soft"
      >
        {step.number}
      </p>
      <h3 className="mt-3 text-card-title text-rose-soft">{step.title}</h3>
      <div className="mt-3 space-y-4 text-card">
        {step.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {step.tags && (
        <p className="mt-6 text-card tracking-widest text-ink/40 uppercase">
          {step.tags.join(' • ')}
        </p>
      )}
    </article>
  </li>
)

const WorkAreaCard = ({ area }: { area: WorkArea }) => (
  <li className="mr-4 rounded-r-card bg-rose-light py-8 pr-8 pl-10 inset-shadow-card">
    <h3 className="text-card-title text-rose-soft">{area.title}</h3>
    <p className="text-card text-rose-soft">{area.subtitle}</p>
    <p className="mt-3 text-card">{area.text}</p>
    <Link
      to={area.link.to}
      className="mt-3 inline-block text-card text-rose-soft underline underline-offset-4"
    >
      {area.link.label}
    </Link>
  </li>
)
