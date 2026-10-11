import { motion, type Variants } from 'motion/react'
import { LeadHeading } from '@/components/LeadHeading'
import { LinkPanel } from '@/components/LinkPanel'
import type { RouteHandle } from '@/content/hero'
import {
  benefits,
  intro,
  practice,
  practicePhoto,
  stories,
  type Benefit,
  type Story,
  psychoeducationHero,
} from '@/content/psychoeducation'
import { cn } from '@/lib/cn'

export const handle = { hero: psychoeducationHero } satisfies RouteHandle

export default function Psychoeducation() {
  return (
    <div className="text-ink">
      {/* panel jak „Jak pracuję?” w O mnie, ale tło kończy się zaokrąglonym dołem */}
      <section className="mr-edge rounded-tr-card rounded-b-card bg-mist pt-4 pb-10">
        {/* biały blok nie dochodzi do prawej krawędzi panelu */}
        <div className="rounded-r-[75px] bg-white py-8 pr-8 pl-10 inset-shadow-card">
          <LeadHeading title={intro.title} subtitle={intro.subtitle} />
          <p className="mt-2 text-card text-ink-soft">{intro.lead}</p>
        </div>
        <div className="mt-6 space-y-4 px-10 text-card">
          {intro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <BenefitList />

      <div className="space-y-8">
        {stories.map((story) => (
          <StoryCard key={story.title} story={story} />
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
        className="relative -mt-6 mr-14 ml-auto block h-auto w-2/5"
      />

      <LinkPanel title={practice.title} links={practice.links} side="left" />
    </div>
  )
}

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

const BenefitList = () => (
  <motion.ul
    aria-label="Co daje psychoedukacja"
    className="grid grid-cols-2 gap-x-4 gap-y-10 px-edge py-12"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    variants={list}
  >
    {benefits.map((benefit) => (
      <BenefitItem key={benefit.label} benefit={benefit} />
    ))}
  </motion.ul>
)

// Ostatnia pozycja przy nieparzystej liczbie: na środku, przez obie kolumny.
const BenefitItem = ({ benefit }: { benefit: Benefit }) => (
  <motion.li
    variants={item}
    className="flex flex-col items-center text-center last:odd:col-span-2"
  >
    <span className="relative grid size-20 place-items-center">
      <span
        aria-hidden
        className={cn(
          'absolute inset-0 rounded-[48%_52%_45%_55%/55%_45%_55%_45%] shadow-md',
          benefit.className,
        )}
      />
      {/* TODO: ikona SVG (fill/stroke="currentColor"), np. <Icon className="relative w-10 text-ink" /> */}
    </span>
    <span className="mt-4 text-card tracking-[0.15em] uppercase">
      {benefit.label}
    </span>
  </motion.li>
)

// Karty na zmianę jak w O mnie: pierwsza przy lewej krawędzi, druga przy prawej.
const StoryCard = ({ story }: { story: Story }) => (
  <section className="bg-mist-light py-10 pr-8 pl-10 inset-shadow-card odd:mr-edge odd:rounded-r-card even:ml-edge even:rounded-l-card">
    <h2 className="w-2/3 text-section text-rose-soft">{story.title}</h2>
    <p className="mt-6 text-card">{story.text}</p>
    {story.image && (
      <img
        src={story.image.src}
        width={story.image.width}
        height={story.image.height}
        alt={story.imageAlt ?? ''}
        loading="lazy"
        className="mt-6 h-auto w-full"
      />
    )}
  </section>
)
