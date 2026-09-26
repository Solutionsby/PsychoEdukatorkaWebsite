import { Link } from 'react-router'
import type { HeroCardData } from '@/content/hero'
import { cn } from '@/lib/cn'

export const HeroCard = ({ card }: { card: HeroCardData }) => {
  return (
    <div
      className={cn(
        'relative z-30 -mt-16 ml-4 rounded-l-[4.5rem] bg-white py-6 pr-6 pl-12 text-ink',
        card.className,
      )}
    >
      <h2 className="text-lg after:mt-1 after:block after:h-0.5 after:w-4 after:bg-current">
        {card.title}
      </h2>

      <p className="mt-3 text-sm leading-relaxed opacity-80">
        {card.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>

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
