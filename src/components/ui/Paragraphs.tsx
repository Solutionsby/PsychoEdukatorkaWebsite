import { cn } from '@/lib/cn'

type ParagraphsProps = {
  items: readonly string[]
  className?: string // odstępy, rozmiar tekstu, szerokość (np. desktop)
}

/** Akapity z danych (`paragraphs` w content/) z odstępem między nimi. */
export const Paragraphs = ({ items, className }: ParagraphsProps) => (
  <div className={cn('space-y-4 text-card', className)}>
    {items.map((paragraph) => (
      <p key={paragraph}>{paragraph}</p>
    ))}
  </div>
)
