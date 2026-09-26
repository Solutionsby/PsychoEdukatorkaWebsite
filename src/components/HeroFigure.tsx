import type { ComponentType, SVGProps } from 'react'
import Kleks from '@/assets/svg/kleksHero.svg?react'
import type { HeroData, HeroDecor } from '@/content/hero'
import { cn } from '@/lib/cn'

// Nowa dekoracja: dopisz klucz do `HeroDecor` w content/hero.ts i komponent tutaj.
const decors: Record<HeroDecor, ComponentType<SVGProps<SVGSVGElement>>> = {
  kleks: Kleks,
}

type HeroFigureProps = Pick<
  HeroData,
  'image' | 'imageAlt' | 'imageClassName' | 'decor' | 'decorClassName'
>

export const HeroFigure = ({
  image,
  imageAlt,
  imageClassName,
  decor,
  decorClassName,
}: HeroFigureProps) => {
  const Decor = decor && decors[decor]

  return (
    <>
      {Decor && (
        <Decor
          aria-hidden
          className={cn('absolute z-10 text-rose', decorClassName)}
        />
      )}
      {image && (
        <img
          src={image.src}
          width={image.width}
          height={image.height}
          alt={imageAlt ?? ''}
          // największy element na ekranie: ładuj go przed resztą (LCP)
          fetchPriority="high"
          className={cn('absolute bottom-0 z-20 h-auto', imageClassName)}
        />
      )}
    </>
  )
}
