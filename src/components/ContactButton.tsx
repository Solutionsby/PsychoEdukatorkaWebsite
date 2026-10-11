import { Link } from 'react-router'
import type { PagePath } from '@/content/pages'
import { cn } from '@/lib/cn'

const contactPath: PagePath = '/wspolpraca'

/** Różowa pigułka „Skontaktuj się ze mną” przy lewej krawędzi, prowadzi do Współpracy. */
export const ContactButton = ({ className }: { className?: string }) => (
  <Link
    to={contactPath}
    className={cn(
      'block rounded-r-full bg-rose-light py-2 pl-18 text-card-title tracking-wide text-rose-soft uppercase inset-shadow-card',
      // desktop: różowa pigułka ze strzałką (jak przycisk w karcie hero)
      'lg:inline-flex lg:items-center lg:gap-[1.67vw] lg:rounded-full lg:bg-rose lg:py-[0.35vw] lg:pr-[0.6vw] lg:pl-[1vw] lg:text-[max(0.875rem,1.16vw)] lg:tracking-normal lg:text-white lg:normal-case lg:inset-shadow-none',
      className,
    )}
  >
    Skontaktuj się ze mną
    <svg
      aria-hidden
      viewBox="0 0 16 10"
      className="hidden w-[1.5vw] lg:block"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M0 5h14M10 1l4 4-4 4" />
    </svg>
  </Link>
)
