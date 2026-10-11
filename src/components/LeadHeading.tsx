import { cn } from '@/lib/cn'

type LeadHeadingProps = {
  title: string
  subtitle: string // dokończenie zdania tytułu, mniejsze
  className?: string
  titleClassName?: string
  subtitleClassName?: string // np. normal-case: podtytuł bez wersalików
}

/** Rozstrzelony nagłówek: duży tytuł + podtytuł wersalikami, np. „PSYCHOEDUKACJA / jest jednym z…”. */
export const LeadHeading = ({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: LeadHeadingProps) => (
  <h2 className={cn('tracking-[0.2em] text-ink uppercase', className)}>
    <span className={cn('block text-lead', titleClassName)}>{title}</span>
    <span className={cn('block text-lead-sub', subtitleClassName)}>
      {subtitle}
    </span>
  </h2>
)
