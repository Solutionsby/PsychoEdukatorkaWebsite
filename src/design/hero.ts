// Wygląd hero z projektu (klasy, pozycje, zdjęcie z kleksem); treść: content/hero.ts.
import type { ImageAsset } from '@/content/image'

/** Dostępne dekoracje; komponenty SVG przypisuje `HeroFigure`. */
export type HeroDecor = 'kleks'

export type HeroCardLayout = {
  className?: string
  titleClassName?: string // klasy tytułu (bez podtytułu: <h2> z kreską; z podtytułem: duży tytuł)
  subtitleClassName?: string
  paragraphsClassName?: string // np. inne odstępy na desktopie
  actionsClassName?: string // wiersz z przyciskiem i linkiem (np. 'max-lg:hidden')
  blob?: string // desktop: kształt karty (adres SVG) zamiast elipsy
}

export type HeroLayout = {
  className?: string // klasy całej sekcji hero (np. zaokrąglenie tła)
  arcClassName?: string // klasy łuku (np. desktop: krótszy niż hero)
  sceneClassName?: string // scena ze zdjęciem i nagłówkiem (np. telefon: niższa, min-h-*)
  headingClassName?: string // klasy dla <h1> (pozycja, układ)
  lineClassName?: string // klasy dla każdej linii (też odd:/even:)
  subheadingClassName?: string // pozycja linii pod nagłówkiem
  image?: ImageAsset // zdjęcie Agaty: z `photos` (design/heroPhotos.ts)
  imageClassName?: string // pozycja/rozmiar zdjęcia z kleksem (pojemnik na dole sceny)
  imageMobileOnly?: boolean // zdjęcie tylko do lg: ukryte na desktopie i tam niepobierane
  decor?: HeroDecor // kleks za zdjęciem
  decorClassName?: string // pozycja/rozmiar kleksa w % zdjęcia
  card?: HeroCardLayout
}
