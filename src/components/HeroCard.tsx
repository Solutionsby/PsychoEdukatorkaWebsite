import { Link } from 'react-router'
import type { HeroCardData } from '@/content/hero'
import { cn } from '@/lib/cn'
import { LeadHeading } from './LeadHeading'

export const HeroCard = ({ card }: { card: HeroCardData }) => {
  return (
    <div
      className={cn(
        'relative z-30 -mt-16 ml-4 rounded-l-[4.5rem] bg-white py-6 pr-6 pl-12 text-ink inset-shadow-card',
        card.className,
      )}
    >
      {card.title &&
        (card.subtitle ? (
          <LeadHeading
            title={card.title}
            subtitle={card.subtitle}
            subtitleClassName={card.subtitleClassName}
            className="mb-2"
          />
        ) : (
          <h2
            className={cn(
              'mb-3 text-lg after:mt-1 after:block after:h-0.5 after:w-4 after:bg-current',
              card.titleClassName,
            )}
          >
            {card.title}
          </h2>
        ))}

      {card.lines && (
        <p className="text-sm leading-relaxed opacity-80">
          {card.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      )}

      {card.paragraphs && (
        <div className="space-y-4 text-card text-ink-soft">
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
        <dl className="space-y-4 text-sm leading-relaxed">
          {card.items.map((item) => (
            <div key={item.title}>
              <dt className="flex items-center gap-2 text-rose before:size-3 before:rounded-full before:bg-current">
                {item.title}
              </dt>
              <dd>{item.text}</dd>
            </div>
          ))}
        </dl>
      )}

      {(card.cta || card.link) && (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
          {card.cta && (
            <Link
              to={card.cta.to}
              className="flex items-center gap-6 rounded-full bg-rose px-3 py-1 text-sm text-white"
            >
              {card.cta.label}
              <svg
                aria-hidden
                viewBox="0 0 16 10"
                className="w-4"
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
              className="text-sm underline underline-offset-4"
            >
              {card.link.label}
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
