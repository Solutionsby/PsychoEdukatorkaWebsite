import type { HeroData } from '@/lib/hero'
import { cn } from '@/lib/cn'

type HeroHeadingProps = Pick<
  HeroData,
  'heading' | 'headingClassName' | 'lineClassName'
>

export const HeroHeading = ({
  heading,
  headingClassName,
  lineClassName,
}: HeroHeadingProps) => {
  return (
    <h1
      className={cn(
        'absolute flex w-full flex-col items-end tracking-[0.2em] uppercase',
        headingClassName,
      )}
    >
      {heading.map((line) => (
        <span
          key={line}
          className={cn('block text-hero text-ink', lineClassName)}
        >
          {line}
        </span>
      ))}
    </h1>
  )
}
