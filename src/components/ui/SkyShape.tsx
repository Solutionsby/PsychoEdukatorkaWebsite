import { cn } from '@/lib/cn'

type SkyShapeProps = {
  viewBox: string // np. '0 0 1255 174': wymiary kształtu w px z projektu
  d: string // obrys kształtu
  className?: string // pozycja i rozmiar (top-*, left-*, w-*, h-*)
}

/**
 * Desktop: przebicie z niebem w kształcie ze ścieżki SVG (maska na bg-sky),
 * rozciągnięte na wymiary z className (preserveAspectRatio="none").
 * Rodzic strony: lg:relative lg:isolate (kształt -z-10 pod treścią, ale nad hero).
 */
export const SkyShape = ({ viewBox, d, className }: SkyShapeProps) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" preserveAspectRatio="none"><path d="${d}"/></svg>`
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute -z-10 hidden bg-sky mask-size-[100%_100%] mask-no-repeat lg:block',
        className,
      )}
      style={{ maskImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")` }}
    />
  )
}
