// Wygląd strony Psychoedukacja; treść: content/psychoeducation.ts.
import hole1 from '@/assets/svg/psychoeducation-hole-1.svg'
import hole2 from '@/assets/svg/psychoeducation-hole-2.svg'
import type { HeroLayout } from './hero'
import { photos } from './heroPhotos'

/** Desktop: „okno” w kształcie kleksa (maska z pliku SVG) na zdjęcie, za nim niebo. */
export type HoleFrame = {
  hole: string // adres SVG z kształtem okna (maska)
  ratio: string // proporcje okna = viewBox pliku, np. '478 / 518'
  imageClassName: string // pozycja i rozmiar zdjęcia w oknie (w % okna)
}

export const introPhotoFrame: HoleFrame = {
  hole: hole1,
  ratio: '478 / 518',
  imageClassName: 'top-[-3%] left-[-8%] w-[104%]',
}

// „Merytoryka spotyka się z wyobraźnią”
export const storyPhotoFrame: HoleFrame = {
  hole: hole2,
  ratio: '799 / 683',
  imageClassName: 'top-[10.3%] left-[-4.1%] w-[123%]',
}

/** Desktop: pozycje ikon w rzędzie (left/top w vw), w kolejności `benefits`. */
export const benefitPositions = [
  'lg:top-[1.1vw] lg:left-[3.96vw]',
  'lg:top-[5.63vw] lg:left-[22.24vw]',
  'lg:top-[8.18vw] lg:left-[37.7vw]',
  'lg:top-[8.9vw] lg:left-[54.27vw]',
  'lg:top-[5.63vw] lg:left-[72.4vw]',
]

export const psychoeducationHeroLayout: HeroLayout = {
  headingClassName: 'top-35 items-center lg:top-[16.4vw] lg:items-start',
  lineClassName:
    'text-[8.5vw] tracking-[0.2em] -mr-[0.2em] lg:mr-0 lg:ml-[10vw] lg:text-[6.35vw] lg:leading-none lg:tracking-[0.265em]',
  ...photos.armsCrossed,
  // desktop: bez zdjęcia i kleksa (zdjęcia są niżej, w oknach)
  imageMobileOnly: true,
  decor: 'kleks',
  card: {
    // telefon: karta dotyka panelu pod hero; desktop: sam tekst
    className:
      '-mb-6 lg:top-[25.8vw] lg:left-[9.9vw] lg:h-auto lg:w-[50vw] lg:rounded-none lg:bg-transparent lg:p-0',
    titleClassName: 'lg:hidden',
    subtitleClassName:
      'lg:text-[max(0.8125rem,1.4vw)] lg:leading-[1.5] lg:tracking-[0.12em] lg:after:content-["."]',
    paragraphsClassName:
      'lg:max-w-[47.5vw] lg:space-y-0 lg:text-[max(0.8125rem,1.38vw)] lg:leading-[1.5] lg:text-ink',
  },
}
