import { motion, type Variants } from 'motion/react'
import bridgeImage from '@/assets/svg/psychoeducation-bridge.svg'
import { LeadHeading } from '@/components/LeadHeading'
import { LinkPanel } from '@/components/LinkPanel'
import type { RouteHandle } from '@/content/hero'
import {
  benefits,
  bridge,
  intro,
  practice,
  practicePhoto,
  stories,
  type Benefit,
  type HolePhoto,
  type Story,
  psychoeducationHero,
} from '@/content/psychoeducation'
import { cn } from '@/lib/cn'

export const handle = { hero: psychoeducationHero } satisfies RouteHandle

// Desktop: jasny pas „Między nauką…” zachodzi
// na dół hero, zdjęcia w oknach w kształcie kleksa (HoleWindow), rząd ikon połączony
// linią, „Metafory…” na fali mist. Fale i okna wychodzą poza swoje sekcje:
// overflow-x-clip, isolate (warstwy -z-10 pod treścią, ale nad hero).
const wave = 'pointer-events-none absolute left-0 -z-10 hidden w-full lg:block'
const sectionHeading =
  'lg:text-[2.5vw] lg:tracking-[0.03em] lg:text-ink lg:before:mr-[0.3vw] lg:before:inline-block lg:before:h-[0.16vw] lg:before:w-[1.7vw] lg:before:bg-current lg:before:align-[0.3em]'

export default function Psychoeducation() {
  return (
    <div className="text-ink lg:relative lg:isolate lg:overflow-x-clip">
      <svg
        aria-hidden
        viewBox="0 0 1920 470"
        preserveAspectRatio="none"
        className={cn(wave, '-top-[6.8vw] h-[24.5vw] fill-mist-light')}
      >
        <path d="M0,130 C250,80 500,15 1000,0 C1350,-5 1650,95 1920,160 L1920,330 C1750,360 1450,380 1200,370 C950,360 700,300 450,330 C250,350 100,390 0,420 Z" />
      </svg>
      <img
        src={bridgeImage}
        alt={bridge.alt}
        className="absolute -top-[3.9vw] left-[47.8vw] hidden w-[25.8vw] lg:block"
      />

      {/* panel jak „Jak pracuję?” w O mnie, ale tło kończy się zaokrąglonym dołem;
          desktop: tekst po lewej, zdjęcie w oknie po prawej */}
      <section className="mr-edge rounded-tr-card rounded-b-card bg-mist pt-4 pb-10 lg:relative lg:m-0 lg:rounded-none lg:bg-transparent lg:pt-[14.4vw] lg:pb-0">
        {/* biały blok nie dochodzi do prawej krawędzi panelu; desktop: ta treść jest w hero */}
        <div className="rounded-r-[75px] bg-white py-8 pr-8 pl-10 inset-shadow-card lg:hidden">
          <LeadHeading title={intro.title} subtitle={intro.subtitle} />
          <p className="mt-2 text-card text-ink-soft">{intro.lead}</p>
        </div>
        <h2
          className={cn(
            'hidden lg:block lg:max-w-[46vw] lg:pl-[9.9vw]',
            sectionHeading,
            'lg:leading-[0.86]', // po sectionHeading: text-[…] w cn() usuwa wcześniejsze leading-*
          )}
        >
          {intro.paragraphsTitle}
        </h2>
        <div className="mt-6 space-y-4 px-10 text-card lg:mt-[2.6vw] lg:max-w-[57.8vw] lg:px-0 lg:pl-[9.9vw] lg:text-[max(0.8125rem,1.38vw)] lg:leading-[1.5]">
          {intro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <HoleWindow
          photo={intro.photo}
          className="top-[14.6vw] left-[64.1vw] w-[24.8vw]"
        />
      </section>

      <BenefitList />

      <div className="space-y-8 lg:space-y-0">
        {stories.map((story, index) => (
          <StoryCard key={story.title} story={story} index={index} />
        ))}
      </div>

      {/* Agata z misiem: po prawej, lekko wchodzi na kartę powyżej (-mt-*, relative
          = rysowana nad kartą), stopami stoi na panelu poniżej */}
      <img
        src={practicePhoto.image.src}
        width={practicePhoto.image.width}
        height={practicePhoto.image.height}
        alt={practicePhoto.alt}
        loading="lazy"
        className="relative -mt-6 mr-14 ml-auto block h-auto w-2/5 max-w-64 lg:hidden"
      />

      <LinkPanel
        title={practice.title}
        links={practice.links}
        side="left"
        className="lg:mr-0 lg:rounded-none lg:bg-transparent lg:pt-[0.4vw] lg:pb-[4.2vw]"
        titleClassName="lg:flex lg:max-w-[36vw] lg:items-center lg:gap-[1.9vw] lg:px-0 lg:pl-[13.3vw] lg:text-[2.18vw] lg:leading-[1.2] lg:tracking-[0.05em] lg:text-rose-soft/70 lg:before:size-[2.4vw] lg:before:shrink-0 lg:before:rounded-full lg:before:bg-rose-light"
        listClassName="lg:mt-[3.2vw] lg:flex lg:gap-[8.85vw] lg:space-y-0 lg:pl-[10.9vw]"
        linkClassName="lg:mr-0 lg:h-[8.2vw] lg:w-[17.5vw] lg:items-start lg:justify-start lg:rounded-[3vw] lg:px-[2.65vw] lg:pt-[2.2vw] lg:text-[1.5vw] lg:leading-[1.3] lg:tracking-normal lg:text-ink lg:normal-case lg:shadow-[0_0.15vw_0.4vw_#00000014] lg:inset-shadow-none"
        arrow
      />
    </div>
  )
}

// Desktop: okno w kształcie kleksa (maska z SVG): za zdjęciem niebo.
// TODO: zdjęcie nieba (wspólne tło „przebić”; bg-fixed = jedno niebo widziane przez okna)
const HoleWindow = ({
  photo,
  className,
}: {
  photo: HolePhoto
  className: string
}) => (
  <div
    className={cn(
      'absolute -z-10 hidden overflow-hidden bg-mist-deep [mask-size:100%_100%] [mask-repeat:no-repeat] lg:block',
      className,
    )}
    style={{
      maskImage: `url("${photo.hole}")`,
      aspectRatio: photo.ratio,
    }}
  >
    <img
      src={photo.image.src}
      width={photo.image.width}
      height={photo.image.height}
      alt={photo.alt}
      loading="lazy"
      className={cn('absolute h-auto max-w-none', photo.imageClassName)}
    />
  </div>
)

// Ikony wchodzą kolejno, gdy lista pojawi się na ekranie (raz).
// Przy prefers-reduced-motion MotionConfig w Layout wyłącza ruch, zostaje samo pojawianie.
const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

// Desktop: rząd ikon (pozycje z danych), za nimi przerywana linia.
const BenefitList = () => (
  <motion.ul
    aria-label="Co daje psychoedukacja"
    className="mx-auto grid max-w-176 grid-cols-2 gap-x-4 gap-y-8 px-4 py-12 lg:relative lg:mt-0 lg:block lg:h-[20.8vw] lg:max-w-none lg:p-0"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    variants={list}
  >
    <svg
      aria-hidden
      viewBox="0 0 1920 400"
      fill="none"
      className="pointer-events-none absolute inset-x-0 top-0 hidden h-[20.8vw] w-full stroke-mist-light lg:block"
    >
      <path
        d="M158,103 C300,200 400,180 509,190 S700,260 806,239 S1000,240 1124,253 S1350,160 1472,190"
        strokeWidth="3"
        strokeDasharray="10"
      />
    </svg>
    {benefits.map((benefit) => (
      <BenefitItem key={benefit.label} benefit={benefit} />
    ))}
  </motion.ul>
)

// Ostatnia pozycja przy nieparzystej liczbie: na środku, przez obie kolumny.
const BenefitItem = ({ benefit }: { benefit: Benefit }) => (
  <motion.li
    variants={item}
    className={cn(
      'flex flex-col items-center text-center last:odd:col-span-2 lg:absolute lg:mt-[1.3vw] lg:w-[7.8vw]',
      benefit.className,
    )}
  >
    <img
      src={benefit.icon.src}
      width={benefit.icon.width}
      height={benefit.icon.height}
      alt=""
      loading="lazy"
      className="h-auto w-17 lg:w-full"
    />
    <span className="mt-3 w-36 text-card tracking-[0.15em] uppercase lg:mt-[1.3vw] lg:w-[10vw] lg:text-[max(0.75rem,0.91vw)] lg:leading-[1.35] lg:text-ink/60">
      {benefit.label}
    </span>
  </motion.li>
)

// Telefon: karty na zmianę jak w O mnie (pierwsza przy lewej krawędzi, druga przy prawej).
// Desktop: 1. na fali mist z ilustracją po lewej, 2. tekst po lewej i zdjęcie w oknie.
const StoryCard = ({ story, index }: { story: Story; index: number }) => (
  <section
    className={cn(
      'bg-mist-light py-10 pr-8 pl-10 inset-shadow-card odd:mr-edge odd:rounded-r-card even:ml-edge even:rounded-l-card',
      'lg:relative lg:m-0! lg:rounded-none! lg:bg-transparent lg:p-0 lg:inset-shadow-none',
      index === 0
        ? 'lg:h-[39.2vw] lg:pt-[10.45vw] lg:pl-[46.9vw]'
        : 'lg:h-[34.9vw] lg:pt-[6.3vw] lg:pl-[12.2vw]',
    )}
  >
    {index === 0 && (
      <svg
        aria-hidden
        viewBox="0 0 1920 720"
        preserveAspectRatio="none"
        className={cn(wave, 'top-0 h-[37.5vw] fill-mist')}
      >
        <path d="M0,0 C300,0 700,95 1100,90 C1450,85 1700,20 1920,0 L1920,530 C1800,620 1650,660 1500,650 C1300,640 1150,600 1000,620 C800,650 650,700 450,700 C250,700 100,600 0,490 Z" />
      </svg>
    )}
    <h2
      className={cn(
        'w-2/3 text-section text-rose-soft lg:w-auto lg:max-w-[30vw]',
        sectionHeading,
        'lg:leading-[1.05]',
      )}
    >
      {story.title}
    </h2>
    <p
      className={cn(
        'mt-6 text-card lg:text-[max(0.8125rem,1.38vw)] lg:leading-[1.5]',
        index === 0
          ? 'lg:mt-[1.4vw] lg:max-w-[44vw]'
          : 'lg:mt-[2.4vw] lg:max-w-[39.5vw]',
      )}
    >
      {story.text}
    </p>
    {story.image && (
      <img
        src={story.image.src}
        width={story.image.width}
        height={story.image.height}
        alt={story.imageAlt ?? ''}
        loading="lazy"
        className="mt-6 h-auto w-full lg:absolute lg:top-[7.3vw] lg:left-[7.3vw] lg:mt-0 lg:w-[33.9vw]"
      />
    )}
    {story.photo && (
      <HoleWindow
        photo={story.photo}
        className="top-[1.8vw] left-[53.2vw] w-[41.6vw]"
      />
    )}
  </section>
)
