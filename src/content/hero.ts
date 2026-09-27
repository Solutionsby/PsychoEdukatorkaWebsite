import agataHome from '@/assets/img/home - Agata.png?format=webp&as=metadata'

type HeroLink = { label: string; to: string }

export type HeroImage = { src: string; width: number; height: number }

/** Dostępne dekoracje; komponenty SVG przypisuje `HeroFigure`. */
export type HeroDecor = 'kleks'

export type HeroCardData = {
  title: string
  lines: string[]
  cta?: HeroLink // różowy przycisk ze strzałką
  link?: HeroLink // podkreślony link obok
  className?: string
}

export type HeroData = {
  heading: string[]
  headingClassName?: string // klasy dla <h1> (pozycja, układ)
  lineClassName?: string // klasy dla każdej linii (też odd:/even:)
  image?: HeroImage
  imageAlt?: string
  imageClassName?: string // pozycja/rozmiar zdjęcia
  decor?: HeroDecor // kleks za zdjęciem
  decorClassName?: string // pozycja/kolor dekoracji
  card?: HeroCardData // biała karta u dołu hero
}

/** Wpis trasy w nawigacji; trasa bez `nav` nie pojawia się w menu ani stopce. */
export type NavEntry = {
  label: string
  in?: ('menu' | 'footer')[] // domyślnie oba miejsca
  accent?: boolean // wyróżniony link (np. BLOG)
}

/** Dane przypinane do tras w `pageRoutes.tsx` przez `handle`. */
export type RouteHandle = {
  hero?: HeroData
  nav?: NavEntry
}

export const homeHero: HeroData = {
  heading: ['Psychoterapia', 'Psychoedukacja', 'Szkolenia'],
  lineClassName: 'odd:pr-8 odd:opacity-66 even:tracking-[0.3em]',
  headingClassName: 'top-35',
  image: agataHome,
  imageAlt: 'Agata Hemmerling-Goc',
  imageClassName: 'left-0 w-[70%] top-40',
  decor: 'kleks',
  decorClassName: 'top-35 right-50 w-50 rotate-230 opacity-73',
  card: {
    title: 'Agata Hemmerling-Goc',
    lines: [
      'psycholożka',
      'certyfikowana psychoterapeutka poznawczo-behawioralna (Nr certyfikatu PTTPB: 1819)',
      'psychodietetyczka',
    ],
    cta: { label: 'Poznaj Agatę', to: '/o-mnie' },
    link: { label: 'Psychoterapia', to: '/psychoterapia' },
  },
}

export const aboutHero: HeroData = {
  heading: ['O mnie'],
  headingClassName: 'top-35 items-center',
}
export const psychoeducationHero: HeroData = { heading: ['Psychoedukacja'] }
export const psychotherapyHero: HeroData = { heading: ['Psychoterapia'] }
export const trainingHero: HeroData = { heading: ['Szkolenia'] }
export const contactHero: HeroData = { heading: ['Współpraca'] }
