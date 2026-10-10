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
  linkClassName?: string // nadpisuje odstępy pigułek (np. ml-0)
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
  linkClassName,
}: LinkPanelProps) => (
  <section className={cn('bg-mist py-10', sides[side].panel, className)}>
    <h2 className={cn('text-card-title', sides[side].title)}>{title}</h2>
    <ul className="mt-6 space-y-3">
      {links.map((link) => {
        const className = cn(
          'flex items-center justify-between gap-4 bg-rose-light py-2 pr-6 text-card-title tracking-wide text-rose-soft uppercase inset-shadow-card',
          sides[side].link,
          linkClassName,
        )
        const content = (
          <>
            {link.label}
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
