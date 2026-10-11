// Treść strony głównej (na razie tylko hero).
import type { HeroData } from './hero'
import { photos } from './heroPhotos'

export const homeHero: HeroData = {
  heading: ['Psychoterapia', 'Psychoedukacja', 'Szkolenia'],
  lineClassName: 'odd:pr-8 odd:opacity-66 even:tracking-[0.3em]',
  headingClassName: 'top-35',
  ...photos.home,
  decor: 'kleks',
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
