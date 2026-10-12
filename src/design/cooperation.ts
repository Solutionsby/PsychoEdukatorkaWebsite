// Wygląd strony Współpraca; treść: content/cooperation.ts.
import type { HeroLayout } from './hero'
import { photos } from './heroPhotos'

export const contactHeroLayout: HeroLayout = {
  // desktop: jeden ekran, sam tekst po lewej i łuk, bez zdjęcia
  headingClassName: 'top-40 pr-10 lg:top-[16.4vw] lg:pr-0 lg:items-start',
  lineClassName:
    'text-[8.5vw] tracking-[0.2em] lg:ml-[10vw] lg:text-[6.35vw] lg:leading-none lg:tracking-[0.255em]',
  ...photos.armsCrossed,
  imageClassName: `${photos.armsCrossed.imageClassName} lg:hidden`,
  decor: 'kleks',
  card: {
    className:
      'lg:top-[24.8vw] lg:left-[9.9vw] lg:h-auto lg:w-[45vw] lg:rounded-none lg:bg-transparent lg:p-0',
    titleClassName:
      'max-lg:hidden lg:mb-[0.6vw] lg:text-[2.6vw] lg:leading-[1.2] lg:tracking-[0.03em]',
    paragraphsClassName:
      'max-lg:hidden lg:mb-[2.1vw] lg:max-w-[41vw] lg:text-[max(0.8125rem,1.38vw)] lg:leading-[1.5] lg:text-ink',
  },
}
