import { cn } from '@/lib/cn'

type WaveProps = {
  viewBox: string // np. '0 0 1920 560': szerokość artboardu z projektu
  d: string // ścieżka fali
  className?: string // pozycja (top-*), wysokość (h-*), kolor (fill-*)
}

/**
 * Desktop: fala tła rozciągnięta na szerokość ekranu (preserveAspectRatio="none").
 * Rodzic strony: lg:relative lg:isolate (fala -z-10 pod treścią, ale nad hero).
 */
export const Wave = ({ viewBox, d, className }: WaveProps) => (
  <svg
    aria-hidden
    viewBox={viewBox}
    preserveAspectRatio="none"
    className={cn(
      'pointer-events-none absolute left-0 -z-10 hidden w-full lg:block',
      className,
    )}
  >
    <path d={d} />
  </svg>
)
