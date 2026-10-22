import { Link } from 'react-router'
import stepBlob from '@/assets/svg/about-step-cloud.svg'
import areasLine from '@/assets/svg/about-areas-line.svg'
import areasBranch from '@/assets/svg/about-areas-branch.svg'
import waveLight from '@/assets/svg/wave-light.svg'
import waveMist from '@/assets/svg/about-wave-mist.svg'
import {
  aboutHero,
  workAreas,
  workSteps,
  type WorkArea,
  type WorkStep,
} from '@/content/about'
import { aboutHeroLayout, workAreaBlobs } from '@/design/about'
import { type RouteHandle, withLayout } from '@/lib/hero'
import { matchOrder } from '@/lib/order'
import { HabitsCircle } from '@/components/HabitsCircle'
import { DecorImage } from '@/components/ui/DecorImage'
import { Image } from '@/components/ui/Image'
import { Paragraphs } from '@/components/ui/Paragraphs'
import { cn } from '@/lib/cn'

export const handle = {
  hero: withLayout(aboutHero, aboutHeroLayout),
} satisfies RouteHandle

// wygląd w kolejności treści (sprawdzane przy buildzie)
const areaBlobs = matchOrder(workAreas, workAreaBlobs, 'workAreaBlobs')

// Desktop: tła (fale, chmurki, linie) to DecorImage (<img>)
// z SVG w stałych kolorach: wychodzą poza ekran (overflow-x-clip), a isolate trzyma je
// (-z-*) pod treścią, ale nad hero, bo fala „Jak pracuję?” zachodzi na dół hero.
// Kolejność warstw: fala mist (02) < fala jasna (01) < chmurka karty 01.
export default function About() {
  return (
    <div className="text-ink lg:isolate lg:overflow-x-clip">
      {/* tło: mist pod nagłówkiem, na pierwszej karcie przechodzi w białe */}
      <section
        id="jak-pracuje"
        // scroll-mt: przy skoku z przycisku w hero nagłówek nie chowa się pod menu
        className="mr-4 scroll-mt-20 lg:relative lg:mr-0 lg:scroll-mt-[9.5vw]"
      >
        <DecorImage
          src={waveLight}
          className="top-[-10.8vw] left-[-12.1vw] -z-20 w-[126.1vw]"
        />
        <h2 className="max-w-176 rounded-tr-card bg-mist px-14 pt-10 pb-6 text-section lg:mt-[-0.57vw] lg:ml-[11.4vw] lg:w-fit lg:max-w-none lg:rounded-none lg:bg-transparent lg:p-0 lg:text-[3.1vw] lg:leading-[1.2] lg:before:block lg:before:h-[0.2vw] lg:before:w-[2vw] lg:before:bg-current">
          Jak pracuję?
        </h2>
        <ol className="space-y-8 lg:mt-[3.4vw] lg:space-y-0">
          {workSteps.map((step, index) => (
            <WorkStepCard key={step.number} step={step} index={index} />
          ))}
        </ol>
      </section>

      <section className="mr-5 rounded-r-card bg-mist py-10 md:mr-edge lg:relative lg:mt-[12.5vw] lg:mr-0 lg:rounded-none lg:bg-transparent lg:pt-0 lg:pb-[3vw]">
        {/* linia nad nagłówkiem (z dołkiem nad nim) i rozgałęzienie do kart */}
        <DecorImage
          src={areasLine}
          className="top-[-16.3vw] left-[-4.87vw] w-[106.5vw]"
        />
        <DecorImage
          src={areasBranch}
          className="top-[4.53vw] left-[40.9vw] w-[14.27vw]"
        />
        <h2 className="px-10 text-section lg:pr-0 lg:pl-[30.1vw] lg:text-[3.1vw] lg:leading-[1.2]">
          Poznaj obszary mojej pracy
        </h2>
        <ul className="mt-6 space-y-6 lg:mt-[2.1vw] lg:flex lg:items-start lg:space-y-0">
          {workAreas.map((area, index) => (
            <WorkAreaCard
              key={area.title}
              area={area}
              blob={areaBlobs[index]}
            />
          ))}
        </ul>
      </section>
    </div>
  )
}

// Telefon: karty na zmianę, z tym samym odstępem (`edge` w index.css) od przeciwnej krawędzi:
// nieparzyste przylegają do lewej (zaokrąglenie z prawej, odstęp = mr-4 sekcji),
// parzyste do prawej (zaokrąglenie z lewej; -mr-4 znosi margines sekcji, ml-edge odstęp).
// Tablet: karty najwyżej 44rem (max-w-176 / ml-edge), na zmianę przy lewej i prawej.
// Pierwsza zamyka panel „Jak pracuję?”: gradient mist → białe widać w jej zaokrąglonych rogach.
// Desktop: tekst bez karty, każdy krok z własnym tłem: 01 chmurka + schemat, 02 fala mist,
// 03 zdjęcie obok.
const WorkStepCard = ({ step, index }: { step: WorkStep; index: number }) => (
  <li className="group first:bg-linear-to-b first:from-mist first:to-white first:to-70% odd:max-w-176 even:-mr-4 even:ml-edge lg:relative lg:m-0 lg:max-w-none! lg:pl-[14.2vw] lg:first:bg-none lg:even:mx-0 lg:nth-2:mt-[8.4vw] lg:nth-3:mt-[12.5vw]">
    {index === 0 && (
      <DecorImage
        src={stepBlob}
        className="-top-[12.4vw] left-[0.63vw] -z-10 w-[54.95vw]"
      />
    )}
    {index === 1 && (
      <DecorImage
        src={waveMist}
        className="top-[-28.75vw] left-[-12.1vw] -z-30 w-[126.1vw]"
      />
    )}

    <article className="bg-mist-light px-10 py-8 inset-shadow-card group-odd:rounded-r-card group-even:rounded-l-card lg:rounded-none! lg:bg-transparent lg:p-0 lg:inset-shadow-none">
      <p
        aria-hidden
        className="w-fit border-b border-current text-number leading-none text-rose-soft lg:text-[3.2vw]"
      >
        {step.number}
      </p>
      <h3 className="mt-3 text-card-title text-rose-soft lg:mt-[0.6vw] lg:max-w-[33.2vw] lg:text-[1.73vw] lg:leading-[1.27]">
        {step.title}
      </h3>
      <Paragraphs
        items={step.paragraphs}
        className={cn(
          'mt-3 lg:mt-[1.4vw] lg:space-y-[2.1vw] lg:text-[max(0.8125rem,1.27vw)] lg:leading-[1.6]',
          // szerokość tekstu z projektu: 02 na całą szerokość, 01 i 03 obok grafiki
          index === 1 ? 'lg:max-w-[76vw]' : 'lg:max-w-[33.2vw]',
        )}
      />

      {step.tags && (
        <p className="mt-6 text-card tracking-widest text-ink/40 uppercase lg:hidden">
          {step.tags.join(' • ')}
        </p>
      )}
    </article>

    {step.tags && (
      <HabitsCircle className="pointer-events-none absolute top-[-2.9vw] left-[57.35vw] hidden h-auto w-[35.7vw] max-w-none lg:block" />
    )}

    {/* telefon: zdjęcie szersze niż ekran (biurko od krawędzi do krawędzi), wyśrodkowane;
        overflow-hidden obcina nadmiar, -mr-edge znosi margines sekcji.
        max-w-none: preflight Tailwinda ogranicza img do 100% rodzica.
        desktop: przy prawej krawędzi obok tekstu, dół wycięty łukiem (clip-path),
        lewa krawędź rozmyta (mask) */}
    {/* desktop: okno z niebem za zdjęciem (elipsa, góra chowa się pod falą mist) */}
    {step.image && (
      <div
        aria-hidden
        className="absolute top-[-12.7vw] left-[47.5vw] -z-40 hidden h-[33.3vw] w-[54.6vw] rounded-[50%] bg-sky lg:block"
      />
    )}
    {step.image && (
      <div className="mt-10 -mr-edge overflow-hidden lg:absolute lg:-top-[1vw] lg:right-0 lg:mt-0 lg:mr-0 lg:w-[47.9vw] lg:overflow-visible">
        <Image
          image={step.image.image}
          alt={step.image.alt}
          className="relative left-1/2 block h-auto w-[108%] max-w-none -translate-x-1/2 lg:left-0 lg:w-full lg:translate-none lg:mask-[linear-gradient(to_right,transparent,black_8%)] lg:[clip-path:ellipse(65.3%_113.5%_at_48.9%_-26.8%)]"
        />
      </div>
    )}
  </li>
)

// Desktop: dwie karty obok siebie na kształtach z SVG, pozycje z projektu.
const WorkAreaCard = ({ area, blob }: { area: WorkArea; blob: string }) => (
  <li className="group mr-edge rounded-r-card bg-rose-light py-8 pr-8 pl-10 inset-shadow-card lg:relative lg:m-0 lg:rounded-none lg:bg-transparent lg:inset-shadow-none lg:odd:ml-[6.77vw] lg:odd:min-h-[20.6vw] lg:odd:w-[36.6vw] lg:odd:pt-[2.5vw] lg:odd:pr-[0.6vw] lg:odd:pl-[2.6vw] lg:even:mt-[1.15vw] lg:even:ml-[9.32vw] lg:even:min-h-[23.9vw] lg:even:w-[42vw] lg:even:pt-[1.25vw] lg:even:pr-[3vw] lg:even:pl-[4.9vw]">
    <DecorImage
      src={blob}
      className="-z-10 lg:left-[-5.57vw] lg:group-odd:top-[-11.25vw] lg:group-odd:w-[46.25vw] lg:group-even:top-[-15vw] lg:group-even:w-[55vw]"
    />
    {/* desktop, Szkolenia: niebo w tym samym kształcie, przesunięte w górę i w prawo */}
    <div
      aria-hidden
      className="absolute top-[-16vw] left-[-4.4vw] -z-20 hidden aspect-[1050.9/1018.4] w-[55vw] bg-sky mask-size-[100%_100%] mask-no-repeat lg:group-even:block"
      style={{ maskImage: `url("${blob}")` }}
    />
    <h3 className="text-card-title text-rose-soft lg:text-[2.27vw] lg:leading-[1.2] lg:group-odd:text-white">
      {area.title}
    </h3>
    <p className="text-card text-rose-soft lg:text-[1.85vw] lg:leading-[1.2] lg:group-odd:text-white">
      {area.subtitle}
    </p>
    <p className="mt-3 text-card lg:mt-[2vw] lg:text-[max(0.8125rem,1.27vw)] lg:leading-[1.65]">
      {area.text}
    </p>
    <Link
      to={area.link.to}
      className="mt-3 inline-block text-card text-rose-soft underline underline-offset-4 lg:mt-[1.35vw] lg:text-[max(0.75rem,1.16vw)] lg:group-odd:ml-[11.1vw] lg:group-even:ml-[2.3vw]"
    >
      {area.link.label}
    </Link>
  </li>
)
