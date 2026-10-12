import resilienceWave from '@/assets/svg/training-wave-resilience.svg'
import topicsWave from '@/assets/svg/training-wave-topics.svg'
import areasWave from '@/assets/svg/training-wave-areas.svg'
import contactWave from '@/assets/svg/training-wave-contact.svg'
import balls1 from '@/assets/svg/training-balls-1.svg'
import balls2 from '@/assets/svg/training-balls-2.svg'
import balls3 from '@/assets/svg/training-balls-3.svg'
import { ContactCard } from '@/components/ContactCard'
import { LinkPanel } from '@/components/LinkPanel'
import { TopicCard } from '@/components/TopicCard'
import type { RouteHandle } from '@/content/hero'
import { photos } from '@/content/heroPhotos'
import {
  resilience,
  trainingAreas,
  trainingContact,
  trainingTopics,
  trainingHero,
} from '@/content/training'
import { cn } from '@/lib/cn'

export const handle = { hero: trainingHero } satisfies RouteHandle

// Desktop: tła z SVG pozycjonowane względem
// całej strony (fale wychodzą poza ekran): jasna fala „Dlaczego rezyliencja?” zachodzi
// na dół hero, mist pod „Obszarami”, trzy białe pasy pod kartami 01–03 (między nimi
// prześwituje niebo), różowa fala pod „Współpracą”. Kolejność warstw = kolejność w DOM.
const decor =
  'pointer-events-none absolute -z-10 hidden h-auto max-w-none lg:block'
// kuleczki przy kartach, w kolejności kart
const balls = [
  { src: balls1, className: '-top-[7.48vw] left-[30.4vw] w-[9.2vw]' },
  { src: balls2, className: 'top-[5.12vw] left-[31.7vw] w-[9.1vw]' },
  { src: balls3, className: 'top-[1.24vw] left-[31.1vw] w-[12.5vw]' },
]

export default function Training() {
  return (
    // overflow-x-clip: karty wjeżdżają zza krawędzi ekranu;
    // isolate: tła (-z-10) pod treścią, ale nad hero;
    // flow-root: ujemny margines pierwszej sekcji nie przesuwa całego pojemnika (i teł);
    // clip-path: tła ucięte na dole strony (różowa fala nie wchodzi na stopkę), u góry nie (fala na hero)
    <div className="overflow-x-clip text-ink lg:relative lg:isolate lg:flow-root lg:[clip-path:inset(-30vw_0_0_0)]">
      {/* TODO: niebo (wspólne tło „przebić”); na razie jednolity kolor pod białymi pasami */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-[63.5vw] -z-10 hidden h-[67.7vw] bg-mist-deep lg:block"
      />
      <img
        src={resilienceWave}
        alt=""
        className={cn(decor, '-top-[14.17vw] -left-[13.23vw] w-[126.1vw]')}
      />
      <img
        src={areasWave}
        alt=""
        className={cn(decor, 'top-[6.56vw] -left-[9.5vw] w-[117.2vw]')}
      />
      <img
        src={photos.armsCrossed.image.src}
        width={photos.armsCrossed.image.width}
        height={photos.armsCrossed.image.height}
        alt=""
        loading="lazy"
        className={cn(decor, 'top-[13.44vw] left-[17.4vw] w-[14.58vw]')}
      />
      <img
        src={topicsWave}
        alt=""
        className={cn(decor, 'top-[39.69vw] -left-[22.34vw] w-[147.77vw]')}
      />
      {/* biel nad „Współpracą”: w projekcie niebo prześwituje tylko z prawej (od ~1010 px),
          z lewej biała fala schodzi aż do różowej (dół kształtu chowa się pod różową falą) */}
      <svg
        aria-hidden
        viewBox="0 0 1920 270"
        className="pointer-events-none absolute inset-x-0 top-[110.7vw] -z-10 hidden w-full fill-white lg:block"
      >
        <path d="M0,0 L1920,0 L1920,131 C1700,140 1350,160 1010,169 L1010,270 L0,270 Z" />
      </svg>
      {/* pojemnik ucina falę na dole strony (inaczej wystaje pod stopką i wydłuża stronę) */}
      <div className="pointer-events-none absolute inset-x-0 top-[118.4vw] bottom-0 -z-10 hidden overflow-hidden lg:block">
        <img
          src={contactWave}
          alt=""
          className="absolute top-0 -left-[15.89vw] h-auto w-[135.35vw] max-w-none"
        />
      </div>
      {/* przerywane linie między kartami „Obszarów” */}
      <svg
        aria-hidden
        viewBox="925 1660 401 70"
        fill="none"
        className="pointer-events-none absolute top-[30.7vw] left-[49.2vw] hidden w-[20.9vw] stroke-rose-light lg:block"
      >
        <path
          d="M928,1688 L998,1722 M1255,1700 L1326,1672"
          strokeWidth="3"
          strokeDasharray="10"
        />
      </svg>

      {/* panel jak „Jak pracuję?” w O mnie: kończy się razem z kartą;
          desktop: tytuł na środku, dwa akapity obok siebie na jasnej fali */}
      <section
        id="dlaczego-rezyliencja"
        className="mr-edge scroll-mt-24 rounded-tr-card bg-mist pt-10 lg:-mt-[9.875vw] lg:mr-0 lg:scroll-mt-[11vw] lg:rounded-none lg:bg-transparent lg:pt-0"
      >
        <h2 className="px-14 text-section lg:px-0 lg:text-center lg:text-[2.75vw] lg:leading-[1.2] lg:tracking-[0.03em] lg:text-rose-soft">
          {resilience.title}
        </h2>
        <div className="mt-6 mr-edge rounded-r-card bg-mist-light py-8 pr-8 pl-10 inset-shadow-card lg:mt-[2.93vw] lg:mr-0 lg:rounded-none lg:bg-transparent lg:p-0 lg:pl-[11.25vw] lg:inset-shadow-none">
          <h3 className="text-card-title tracking-wide text-rose-soft uppercase lg:hidden">
            {resilience.cardTitle}
          </h3>
          <div className="mt-3 space-y-4 text-card lg:mt-0 lg:grid lg:grid-cols-[35.4vw_36.1vw] lg:space-y-0 lg:gap-x-[6.6vw] lg:text-[max(0.8125rem,1.46vw)] lg:leading-[1.42] lg:tracking-[0.05em]">
            {resilience.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* desktop: ikony w białych kształtach, etykieta pod spodem, na zmianę wyżej i niżej */}
      <LinkPanel
        title={trainingAreas.title}
        links={trainingAreas.links}
        side="right"
        className="mt-6 lg:mt-[13.94vw] lg:ml-0 lg:rounded-none lg:bg-transparent lg:py-0"
        titleClassName="lg:px-0 lg:pl-[41.1vw] lg:text-[2.6vw] lg:leading-[1.2] lg:text-ink"
        listClassName="lg:mt-[3.6vw] lg:flex lg:items-start lg:gap-[3.75vw] lg:space-y-0 lg:pl-[35.8vw] lg:[&>li:nth-child(1)_img]:rounded-[38%_30%_28%_24%/40%_48%_40%_34%] lg:[&>li:nth-child(2)]:mt-[2.55vw] lg:[&>li:nth-child(2)_img]:rounded-[42%_50%_46%_40%/48%_50%_50%_50%] lg:[&>li:nth-child(3)]:mt-[0.94vw] lg:[&>li:nth-child(3)_img]:rounded-[28%_22%_26%_30%/34%_30%_36%_50%]"
        linkClassName="ml-0 py-4 lg:w-[13.4vw] lg:flex-col-reverse lg:justify-start lg:gap-[0.5vw] lg:rounded-none lg:bg-transparent lg:p-0 lg:text-center lg:text-[max(0.75rem,0.91vw)] lg:leading-[1.35] lg:tracking-[0.15em] lg:whitespace-pre-line lg:text-ink/70 lg:inset-shadow-none"
        // kształty pól z ikonami: nieregularne, każde inne (listClassName)
        iconClassName="lg:h-[7.5vw] lg:w-full lg:bg-white lg:object-contain lg:px-[4vw] lg:py-[1.8vw] lg:shadow-[0_0.15vw_0.4vw_#00000014]"
      />

      {/* karty na zmianę: nieparzyste przy lewej krawędzi, parzyste przy prawej */}
      <ol className="mt-6 space-y-6 lg:mt-[12.02vw] lg:space-y-0">
        {trainingTopics.map((topic, index) => (
          <li
            key={topic.number}
            className="lg:relative lg:nth-2:mt-[4.4vw] lg:nth-3:mt-[4.84vw]"
          >
            <img
              src={balls[index].src}
              alt=""
              loading="lazy"
              className={cn(decor, 'z-0', balls[index].className)}
            />
            <TopicCard
              topic={topic}
              side={index % 2 ? 'right' : 'left'}
              className="lg:pl-[12.9vw]"
              headClassName="lg:mt-[1.1vw] lg:w-[35.5vw] lg:[&>h2]:mt-[1.3vw] lg:[&>h2]:max-w-none lg:[&>h2]:text-[2.3vw] lg:[&>h2]:tracking-[0.03em] lg:[&>h2]:whitespace-pre-line"
              listClassName="lg:space-y-[1.35vw]"
              termClassName="lg:max-w-none lg:text-[1.4vw] lg:tracking-[0.19em] lg:normal-case lg:before:mt-[0.45vw] lg:before:size-[0.9vw]"
              textClassName="lg:mt-0 lg:max-w-[42vw] lg:text-[max(0.75rem,1.27vw)] lg:leading-[1.65]"
            />
          </li>
        ))}
      </ol>

      <div className="mt-6 mb-4 lg:mt-[12.03vw] lg:mb-0 lg:pb-[4.27vw]">
        <ContactCard
          {...trainingContact}
          className="lg:pl-[12.76vw]"
          titleClassName="lg:text-rose-ink lg:before:hidden"
          buttonClassName="lg:mt-[1.87vw] lg:bg-rose-deep lg:py-[0.2vw]"
        />
      </div>
    </div>
  )
}
