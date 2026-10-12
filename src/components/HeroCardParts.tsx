import type { HeroCardData } from '@/content/hero'
import { cn } from '@/lib/cn'
import { ArrowIcon } from './ui/ArrowIcon'
import { SmartLink } from './ui/SmartLink'
import { LeadHeading } from './LeadHeading'

// Części karty hero: każda renderuje jedno pole `HeroCardData`, `HeroCard` je składa.
// Nowe pole karty = nowa część tutaj + jedna linia w HeroCard.

type Card = HeroCardData

/** Tytuł: z podtytułem rozstrzelony (LeadHeading), bez niego <h2> z kreską. */
export const HeroCardTitle = ({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
}: Pick<
  Card,
  'title' | 'subtitle' | 'titleClassName' | 'subtitleClassName'
>) => {
  if (!title) return null
  if (subtitle)
    return (
      <LeadHeading
        title={title}
        subtitle={subtitle}
        titleClassName={titleClassName}
        subtitleClassName={subtitleClassName}
        className="mb-2"
      />
    )
  return (
    <h2
      className={cn(
        'mb-3 text-lg after:mt-1 after:block after:h-0.5 after:w-4 after:bg-current',
        // desktop: kreska przed tytułem zamiast pod nim
        'lg:mb-[0.2vw] lg:flex lg:items-center lg:gap-[0.6vw] lg:text-[max(1.125rem,1.56vw)] lg:before:block lg:before:h-[0.2vw] lg:before:w-[2.1vw] lg:before:bg-current lg:after:hidden',
        titleClassName,
      )}
    >
      {title}
    </h2>
  )
}

/** Krótkie linie (Home); desktop: w jednym ciągu, rozdzielone kropką. */
export const HeroCardLines = ({ lines }: { lines: string[] }) => (
  <p className="text-sm leading-relaxed opacity-80 lg:text-[max(0.8125rem,1.15vw)] lg:leading-[1.8]">
    {lines.map((line) => (
      <span
        key={line}
        className="block lg:inline lg:not-last:after:mx-[0.5vw] lg:not-last:after:content-['·']"
      >
        {line}
      </span>
    ))}
  </p>
)

/** Tylko desktop: bloki pod akapitami; na telefonie ta treść jest na stronie pod hero. */
export const HeroCardSections = ({
  sections,
}: {
  sections: NonNullable<Card['sections']>
}) => (
  <div className="hidden lg:mt-[2.55vw] lg:block">
    {sections.map((section) => (
      <section key={section.title}>
        <h3 className="text-[max(0.8125rem,1.4vw)] leading-[1.5] tracking-[0.12em] uppercase">
          {section.title}
        </h3>
        <p className="text-[max(0.8125rem,1.38vw)] leading-[1.5]">
          {section.text}
        </p>
      </section>
    ))}
  </div>
)

/** Dane kontaktowe w grupach (Współpraca). */
export const HeroCardDetails = ({
  details,
}: {
  details: NonNullable<Card['details']>
}) => (
  <address className="space-y-4 text-card not-italic lg:space-y-[2.1vw] lg:text-[max(0.8125rem,1.38vw)] lg:leading-[1.5]">
    {details.map((group) => (
      <div key={group[0].label}>
        {group.map((detail) => {
          // desktop: etykieta i pierwsza linia w jednym wierszu, dalsze linie z wcięciem
          const value = detail.lines.map((line) => (
            <span
              key={line}
              className="block lg:pl-[0.6vw] lg:nth-2:inline lg:nth-2:pl-[0.3em]"
            >
              {line}
            </span>
          ))
          return (
            <div
              key={detail.label}
              className={cn(
                !detail.stacked && 'flex gap-1 lg:pl-[0.6vw]',
                'lg:gap-[0.3em]',
              )}
            >
              <span className="block lg:inline">{detail.label}:</span>
              {detail.href ? <a href={detail.href}>{value}</a> : value}
            </div>
          )
        })}
      </div>
    ))}
  </address>
)

/** Punkty z kropką (O mnie); desktop: kreska zamiast kropki, tytuł w kolorze tekstu. */
export const HeroCardItems = ({
  items,
}: {
  items: NonNullable<Card['items']>
}) => (
  <dl className="space-y-4 text-sm leading-relaxed lg:space-y-[1.2vw] lg:text-[max(0.8125rem,1.27vw)] lg:leading-[1.33]">
    {items.map((item) => (
      <div key={item.title}>
        <dt className="flex items-center gap-2 text-rose before:size-3 before:rounded-full before:bg-current lg:gap-[0.6vw] lg:text-[max(1rem,1.5vw)] lg:text-ink lg:before:h-[0.2vw] lg:before:w-[2.2vw] lg:before:rounded-none">
          {item.title}
        </dt>
        <dd>{item.text}</dd>
      </div>
    ))}
  </dl>
)

/** Wiersz akcji: różowy przycisk ze strzałką i podkreślony link. */
export const HeroCardActions = ({
  cta,
  link,
  actionsClassName,
}: Pick<Card, 'cta' | 'link' | 'actionsClassName'>) => {
  if (!cta && !link) return null
  return (
    <div
      className={cn(
        'mt-3 flex flex-wrap items-center justify-between gap-4 lg:mt-[2vw] lg:justify-start lg:gap-[2.2vw] lg:pl-[2.75vw]',
        actionsClassName,
      )}
    >
      {cta && (
        <SmartLink
          to={cta.to}
          className="flex items-center gap-6 rounded-full bg-rose px-3 py-1 text-sm text-white lg:gap-[5.2vw] lg:py-[0.35vw] lg:pr-[0.5vw] lg:pl-[1vw] lg:text-[max(0.8125rem,1.15vw)]"
        >
          {cta.label}
          <ArrowIcon className="w-4 lg:w-[1.5vw]" />
        </SmartLink>
      )}
      {link && (
        <SmartLink
          to={link.to}
          className="text-sm underline underline-offset-4 lg:text-[max(0.8125rem,1.15vw)]"
        >
          {link.label}
        </SmartLink>
      )}
    </div>
  )
}
