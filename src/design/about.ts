// Wygląd strony O mnie; treść: content/about.ts.
import heroBlob from '@/assets/svg/about-hero-cloud.svg'
import therapyBlob from '@/assets/svg/about-therapy-blob.svg'
import trainingBlob from '@/assets/svg/about-training-blob.svg'
import type { HeroLayout } from './hero'
import { photos } from './heroPhotos'

export const aboutHeroLayout: HeroLayout = {
  // desktop: hero wyższe (1248px), bo fala „Jak pracuję?” zachodzi na jego dół
  className: 'lg:h-[65vw]',
  headingClassName:
    'top-35 items-start pl-6 normal-case lg:top-[12.1vw] lg:flex-row lg:gap-[0.3em] lg:pl-[11.2vw] lg:tracking-normal',
  lineClassName: 'lg:text-[1.6vw] lg:leading-[1.2]',
  subheadingClassName: 'lg:top-[14.4vw] lg:left-[11.2vw] lg:w-[38vw]',
  ...photos.home,
  // zdjęcie w tym samym miejscu co na Home (hero wyższe o 168px), bez kleksa
  imageClassName: `${photos.home.imageClassName} lg:bottom-[8.2vw]`,
  decorClassName: `${photos.home.decorClassName} lg:hidden`,
  decor: 'kleks',
  card: {
    className:
      '-mb-6 lg:top-[21.2vw] lg:left-[2.7vw] lg:h-[34.5vw] lg:w-[47.1vw] lg:pt-[4.6vw] lg:pr-[6vw] lg:pl-[5.6vw]',
    blob: heroBlob,
    actionsClassName: 'max-lg:hidden lg:mt-[3.5vw] lg:pl-[5.9vw]',
  },
}

/** Desktop: kształty kart „Poznaj obszary mojej pracy” (adresy SVG), w kolejności kart. */
export const workAreaBlobs = [therapyBlob, trainingBlob]
