import { Link } from 'react-router'
import type { HeroCardData } from '@/content/hero'
import { cn } from '@/lib/cn'
import { LeadHeading } from './LeadHeading'

export const HeroCard = ({ card }: { card: HeroCardData }) => {
  return (
    <div
      className={cn(
        'relative z-30 -mt-16 ml-4 rounded-l-[4.5rem] bg-white py-6 pr-6 pl-12 text-ink inset-shadow-card',
        // desktop: półprzezroczysty blob na scenie; pozycja i rozmiar z card.className
        'lg:absolute lg:m-0 lg:flex lg:flex-col lg:justify-start lg:rounded-[50%] lg:bg-white/50 lg:pt-[5.1vw] lg:pr-[1.5vw] lg:pb-0 lg:pl-[3.25vw] lg:inset-shadow-none',
        card.blob && 'lg:rounded-none lg:bg-transparent',
        card.className,
      )}
    >
      {card.blob && (
        <img
          src={card.blob}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 hidden size-full max-w-none lg:block"
        />
      )}

      {card.title &&
        (card.subtitle ? (
          <LeadHeading
            title={card.title}
            subtitle={card.subtitle}
            titleClassName={card.titleClassName}
            subtitleClassName={card.subtitleClassName}
            className="mb-2"
          />
        ) : (
          <h2
            className={cn(
              'mb-3 text-lg after:mt-1 after:block after:h-0.5 after:w-4 after:bg-current',
              // desktop: kreska przed tytułem zamiast pod nim
              'lg:mb-[0.2vw] lg:flex lg:items-center lg:gap-[0.6vw] lg:text-[max(1.125rem,1.56vw)] lg:before:block lg:before:h-[0.2vw] lg:before:w-[2.1vw] lg:before:bg-current lg:after:hidden',
              card.titleClassName,
            )}
          >
            {card.title}
          </h2>
        ))}

      {card.lines && (
        <p className="text-sm leading-relaxed opacity-80 lg:text-[max(0.875rem,1.15vw)] lg:leading-[1.8]">
          {card.lines.map((line) => (
            // desktop: linie w jednym ciągu, rozdzielone kropką
            <span
              key={line}
              className="block lg:inline lg:not-last:after:mx-[0.5vw] lg:not-last:after:content-['·']"
            >
              {line}
            </span>
          ))}
        </p>
      )}

      {card.paragraphs && (
        <div
          className={cn(
            'space-y-4 text-card text-ink-soft',
            card.paragraphsClassName,
          )}
        >
          {card.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      {card.details && (
        <address className="space-y-4 text-card not-italic">
          {card.details.map((group) => (
            <div key={group[0].label}>
              {group.map((detail) => {
                const value = detail.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))
                return (
                  <div
                    key={detail.label}
                    className={cn(!detail.stacked && 'flex gap-1')}
                  >
                    <span className="block">{detail.label}:</span>
                    {detail.href ? <a href={detail.href}>{value}</a> : value}
                  </div>
                )
              })}
            </div>
          ))}
        </address>
      )}

      {card.items && (
        <dl className="space-y-4 text-sm leading-relaxed lg:space-y-[1.2vw] lg:text-[max(0.875rem,1.27vw)] lg:leading-[1.33]">
          {card.items.map((item) => (
            <div key={item.title}>
              {/* desktop: kreska zamiast kropki, tytuł w kolorze tekstu */}
              <dt className="flex items-center gap-2 text-rose before:size-3 before:rounded-full before:bg-current lg:gap-[0.6vw] lg:text-[max(1rem,1.5vw)] lg:text-ink lg:before:h-[0.2vw] lg:before:w-[2.2vw] lg:before:rounded-none">
                {item.title}
              </dt>
              <dd>{item.text}</dd>
            </div>
          ))}
        </dl>
      )}

      {(card.cta || card.link) && (
        <div
          className={cn(
            'mt-3 flex flex-wrap items-center justify-between gap-4 lg:mt-[2vw] lg:justify-start lg:gap-[2.2vw] lg:pl-[2.75vw]',
            card.actionsClassName,
          )}
        >
          {card.cta && (
            <Link
              to={card.cta.to}
              className="flex items-center gap-6 rounded-full bg-rose px-3 py-1 text-sm text-white lg:gap-[5.2vw] lg:py-[0.35vw] lg:pr-[0.5vw] lg:pl-[1vw] lg:text-[max(0.875rem,1.15vw)]"
            >
              {card.cta.label}
              <svg
                aria-hidden
                viewBox="0 0 16 10"
                className="w-4 lg:w-[1.5vw]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M0 5h14M10 1l4 4-4 4" />
              </svg>
            </Link>
          )}
          {card.link && (
            <Link
              to={card.link.to}
              className="text-sm underline underline-offset-4 lg:text-[max(0.875rem,1.15vw)]"
            >
              {card.link.label}
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
