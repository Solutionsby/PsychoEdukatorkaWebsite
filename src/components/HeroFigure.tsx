import type { ComponentType, SVGProps } from 'react'
import Kleks from '@/assets/svg/hero-blob.svg?react'
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
  if (!image) return null

  // zdjęcie i kleks w jednym pojemniku: kleks (pozycja w % pojemnika) jedzie razem
  // ze zdjęciem na każdym ekranie; pojemnik stoi na dole sceny, dół zdjęcia chowa się
  // pod kartą, więc na wysokim ekranie zdjęcie nie wisi nad kartą
  return (
    // desktop: pojemnik bez z-index i przesunięcia (bez kontekstu warstw), żeby
    // kleks był pod kartą (blobem), a zdjęcie nad nią
    <div
      className={cn(
        'absolute bottom-0 z-20 lg:z-auto lg:translate-none',
        imageClassName,
      )}
    >
      {Decor && (
        <Decor
          aria-hidden
          className={cn(
            'absolute rotate-230 text-rose opacity-73',
            decorClassName,
          )}
        />
      )}
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={imageAlt ?? 'Agata Hemmerling-Goc'}
        // największy element na ekranie: ładuj go przed resztą (LCP)
        fetchPriority="high"
        className="relative h-auto w-full lg:z-40"
      />
    </div>
  )
}
