// Typy hero; dane: hero każdej strony w jej pliku treści, zdjęcia w heroPhotos.ts.
type HeroLink = { label: string; to: string }

export type HeroImage = { src: string; width: number; height: number }

/** Dostępne dekoracje; komponenty SVG przypisuje `HeroFigure`. */
export type HeroDecor = 'kleks'

export type HeroCardItem = { title: string; text: string }

/** Wiersz danych kontaktowych: „Telefon: 519…”; `stacked` = etykieta w osobnej linii. */
export type HeroCardDetail = {
  label: string
  lines: string[]
  href?: string // tel:, mailto:
  stacked?: boolean
}

export type HeroCardData = {
  title?: string
  titleClassName?: string // klasy tytułu (bez podtytułu: <h2> z kreską; z podtytułem: duży tytuł)
  subtitle?: string // z podtytułem tytuł jest rozstrzelony (LeadHeading)
  subtitleClassName?: string
  lines?: string[] // krótkie linie bez odstępów (np. Home)
  paragraphs?: string[] // akapity z odstępami
  paragraphsClassName?: string // np. inne odstępy na desktopie
  sections?: { title: string; text: string }[] // desktop: bloki pod akapitami (tytuł wersalikami + tekst)
  items?: HeroCardItem[] // punkty z kropką (np. O mnie)
  details?: HeroCardDetail[][] // dane kontaktowe w grupach (odstęp między grupami)
  cta?: HeroLink // różowy przycisk ze strzałką ('#id' = kotwica na stronie)
  link?: HeroLink // podkreślony link obok
  actionsClassName?: string // wiersz z przyciskiem i linkiem (np. 'max-lg:hidden')
  blob?: string // desktop: kształt karty (adres SVG) zamiast elipsy
  className?: string
}

export type HeroData = {
  className?: string // klasy całej sekcji hero (np. zaokrąglenie tła)
  arcClassName?: string // klasy łuku (np. desktop: krótszy niż hero)
  heading: string[]
  headingClassName?: string // klasy dla <h1> (pozycja, układ)
  lineClassName?: string // klasy dla każdej linii (też odd:/even:)
  subheading?: string[] // desktop: linie pod nagłówkiem, rozdzielone kropką (np. tytuły zawodowe)
  subheadingClassName?: string // pozycja linii pod nagłówkiem
  image?: HeroImage
  imageAlt?: string // domyślnie „Agata Hemmerling-Goc”
  imageClassName?: string // pozycja/rozmiar zdjęcia z kleksem (pojemnik na dole sceny)
  decor?: HeroDecor // kleks za zdjęciem
  decorClassName?: string // pozycja/rozmiar kleksa w % zdjęcia
  card?: HeroCardData // biała karta u dołu hero
}

/** Dane eksportowane przez moduł strony jako `handle`. */
export type RouteHandle = {
  hero?: HeroData
}
