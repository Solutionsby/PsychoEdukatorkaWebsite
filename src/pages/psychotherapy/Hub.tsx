import waveLight from '@/assets/svg/wave-light.svg'
import { LinkPanel } from '@/components/LinkPanel'
import { Image } from '@/components/ui/Image'
import { Paragraphs } from '@/components/ui/Paragraphs'
import {
  cooperation,
  supportAreas,
  psychotherapyHubHero,
} from '@/content/psychotherapy'
import { psychotherapyHubHeroLayout } from '@/design/psychotherapy'
import { photos } from '@/design/heroPhotos'
import { type RouteHandle, withLayout } from '@/lib/hero'

export const handle = {
  hero: withLayout(psychotherapyHubHero, psychotherapyHubHeroLayout),
} satisfies RouteHandle

// Desktop: jasna fala zachodzi na dół hero (-mt), zdjęcie Agaty stoi
// na stopce po lewej, tekst i karty „Obszary wsparcia” po prawej.
// Fala to <img> wychodzący poza ekran: overflow-x-clip, isolate (warstwa -z-10 nad hero).
export default function PsychotherapyHub() {
  return (
    <div className="text-ink lg:relative lg:isolate lg:-mt-[2.4vw] lg:overflow-x-clip lg:pb-[1.8vw]">
      {/* pojemnik ucina falę na dole sekcji (inaczej wystaje pod stopką i wydłuża stronę) */}
      <div className="pointer-events-none absolute inset-x-0 -top-[7.76vw] bottom-0 -z-10 hidden overflow-hidden lg:block">
        <img
          src={waveLight}
          alt=""
          className="absolute top-0 -left-[9.3vw] w-[126.1vw] max-w-none"
        />
      </div>
      <Image
        image={photos.lapels.image}
        alt="Agata Hemmerling-Goc"
        className="absolute bottom-0 left-[9.27vw] hidden h-auto w-[17.7vw] lg:block"
      />

      {/* szara karta przy lewej krawędzi, zaokrąglenie z prawej (jak karty w O mnie);
          desktop: sam tekst na fali, tytuł tylko dla czytników ekranu */}
      <section className="mt-4 mr-edge rounded-r-card bg-mist-light py-8 pr-8 pl-10 inset-shadow-card lg:m-0 lg:max-w-[87.2vw] lg:rounded-none lg:bg-transparent lg:p-0 lg:pl-[33.65vw] lg:inset-shadow-none">
        <h2 className="text-card-title text-rose-soft lg:sr-only">
          {cooperation.title}
        </h2>
        <Paragraphs
          items={cooperation.paragraphs}
          className="mt-2 lg:mt-0 lg:space-y-[1.8vw] lg:text-[max(0.8125rem,1.38vw)] lg:leading-[1.43]"
        />
        <p className="mt-3 text-card text-rose-soft lg:mt-0 lg:text-[max(0.8125rem,1.38vw)] lg:leading-[1.43]">
          {cooperation.notes.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </section>

      <LinkPanel
        title={supportAreas.title}
        links={supportAreas.links}
        side="right"
        className="my-4 lg:mt-[2.8vw] lg:mb-0 lg:ml-0 lg:rounded-none lg:bg-transparent lg:py-0"
        titleClassName="lg:flex lg:items-center lg:gap-[0.9vw] lg:px-0 lg:pl-[36.8vw] lg:text-[1.6vw] lg:text-rose-soft lg:before:size-[1.5vw] lg:before:rounded-full lg:before:bg-rose/60"
        listClassName="lg:mt-[1.67vw] lg:flex lg:gap-[1.9vw] lg:space-y-0 lg:pl-[36.9vw]"
        linkClassName="lg:ml-0 lg:h-[8.3vw] lg:w-[17.45vw] lg:justify-start lg:rounded-[3vw] lg:bg-white/60 lg:px-[2.55vw] lg:py-0 lg:text-[1.6vw] lg:leading-[1.3] lg:tracking-normal lg:text-ink lg:normal-case lg:shadow-[0_0.15vw_0.4vw_#00000014] lg:inset-shadow-none"
        arrow
      />
    </div>
  )
}
