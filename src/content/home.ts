// Treść strony głównej (całość w hero); wygląd: design/home.ts.
import type { HeroContent } from './hero'
import { credentials } from './about'
import { typo } from '@/lib/typography'

export const homeHero: HeroContent = typo({
  heading: ['Psychoterapia', 'Psychoedukacja', 'Szkolenia'],
  card: {
    title: 'Agata Hemmerling-Goc',
    lines: credentials,
    cta: { label: 'O mnie', to: '/o-mnie' },
    link: { label: 'Psychoterapia', to: '/psychoterapia' },
  },
})
