import { Link } from 'react-router'
import type { HeroImage } from '@/content/hero'
import { cn } from '@/lib/cn'

export type PanelLink = {
  label: string
  to: string // adres strony albo kotwica na tej samej stronie ('#id')
  icon?: HeroImage // ikona po prawej stronie pigułki (np. Szkolenia)
}

type LinkPanelProps = {
  title: string
  links: PanelLink[]
  side: 'left' | 'right' // krawędź ekranu, do której przylega panel i linki
  className?: string
  titleClassName?: string
  listClassName?: string
  linkClassName?: string // nadpisuje odstępy pigułek (np. ml-0)
  arrow?: boolean // desktop: strzałka z kresek za tekstem linku
}

const sides = {
  left: {
    panel: 'mr-edge rounded-r-card',
    title: 'px-14',
    link: 'mr-edge rounded-r-full pl-14',
  },
  right: {
    panel: 'ml-edge rounded-l-card',
    title: 'px-12',
    link: 'ml-14 rounded-l-full pl-8',
  },
}

/** Panel mist z tytułem i różowymi linkami-pigułkami (np. „Psychoedukacja w praktyce”). */
export const LinkPanel = ({
  title,
  links,
  side,
  className,
  titleClassName,
  listClassName,
  linkClassName,
  arrow,
}: LinkPanelProps) => (
  <section className={cn('bg-mist py-10', sides[side].panel, className)}>
    <h2 className={cn('text-card-title', sides[side].title, titleClassName)}>
      {title}
    </h2>
    <ul className={cn('mt-6 space-y-3', listClassName)}>
      {links.map((link) => {
        const className = cn(
          'flex items-center justify-between gap-4 bg-rose-light py-2 pr-6 text-card-title tracking-wide text-rose-soft uppercase inset-shadow-card',
          sides[side].link,
          linkClassName,
        )
        const content = (
          <>
            {arrow ? (
              <span>
                {link.label}
                <DashedArrow />
              </span>
            ) : (
              link.label
            )}
            {link.icon && (
              <img
                src={link.icon.src}
                width={link.icon.width}
                height={link.icon.height}
                alt=""
                loading="lazy"
                className="h-auto w-14 shrink-0"
              />
            )}
          </>
        )

        return (
          <li key={link.to}>
            {/* kotwica: zwykły <a>, przeglądarka sama przewinie do #id */}
            {link.to.startsWith('#') ? (
              <a href={link.to} className={className}>
                {content}
              </a>
            ) : (
              <Link to={link.to} className={className}>
                {content}
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  </section>
)

// Strzałka z kresek (desktop, np. karty „Obszary wsparcia” na Psychoterapii).
const DashedArrow = () => (
  <svg
    aria-hidden
    viewBox="0 0 84 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    className="ml-[1.4vw] hidden w-[4.4vw] align-middle lg:inline-block"
  >
    <path d="M0 7h76" strokeDasharray="5 3" />
    <path d="M71 1l7 6-7 6M76 1l7 6-7 6" />
  </svg>
)
