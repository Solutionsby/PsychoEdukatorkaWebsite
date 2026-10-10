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
      className,
    )}
  >
    Skontaktuj się ze mną
  </Link>
)
