// Treść strony głównej (na razie tylko hero).
import type { HeroData } from './hero'
import { credentials } from './about'
import { photos } from './heroPhotos'

export const homeHero: HeroData = {
  heading: ['Psychoterapia', 'Psychoedukacja', 'Szkolenia'],
  lineClassName: [
    'odd:pr-8 odd:opacity-66 even:tracking-[0.3em]',
    // desktop (projekt 1920): 85 / 122 / 58 px, każda linia od swojego x
    'lg:not-first:mt-[0.94vw] lg:odd:pr-0 lg:leading-none',
    'lg:first:ml-[23.85vw] lg:first:text-[4.43vw] lg:first:tracking-[0.227em]',
    'lg:even:ml-[10vw] lg:even:text-[6.35vw] lg:even:tracking-[0.265em]',
    'lg:last:ml-[61.9vw] lg:last:text-[3.02vw] lg:last:tracking-[0.15em]',
  ].join(' '),
  headingClassName: 'top-35 lg:top-[11.04vw] lg:items-start',
  ...photos.home,
  decor: 'kleks',
  card: {
    // desktop: blob po lewej (projekt: x 159, y 687, 825×374)
    className: 'lg:top-[35.8vw] lg:left-[8.3vw] lg:h-[19.5vw] lg:w-[43vw]',
    title: 'Agata Hemmerling-Goc',
    lines: credentials,
    cta: { label: 'Poznaj Agatę', to: '/o-mnie' },
    link: { label: 'Psychoterapia', to: '/psychoterapia' },
  },
}
