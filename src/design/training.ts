// Wygląd strony Szkolenia; treść: content/training.ts.
import type { HeroLayout } from './hero'
import { photos } from './heroPhotos'
import type { TopicLook } from './topics'

// Karty 01–03 (kolejność jak trainingTopics)
export const trainingTopicLooks: TopicLook[] = [
  // desktop: 01 w jasnym mist
  {
    toneClassName: 'text-rose-soft lg:text-mist-deep',
    bulletClassName: 'before:bg-ink/60 lg:before:bg-mist-light',
  },
  {
    toneClassName: 'text-rose-soft lg:text-rose-deep',
    bulletClassName: 'before:bg-rose-soft lg:before:bg-rose-deep',
  },
  {
    toneClassName: 'text-ink lg:text-ink-soft',
    bulletClassName: 'before:bg-ink lg:before:bg-ink-soft',
  },
]

export const trainingHeroLayout: HeroLayout = {
  // desktop: jak Współpraca, sam tekst po lewej i łuk; zdjęcie niżej (Obszary).
  // Wyższe hero: fala „Dlaczego rezyliencja?” zaczyna się przy dole pierwszego ekranu.
  className: 'lg:h-[66.7vw]',
  headingClassName: 'top-45 pr-10 lg:top-[14.6vw] lg:items-start lg:pr-0',
  lineClassName:
    'tracking-[0.1em] lg:ml-[10vw] lg:text-[6.35vw] lg:leading-none lg:tracking-[0.255em]',
  ...photos.glasses,
  imageClassName: `${photos.glasses.imageClassName} lg:hidden`,
  decor: 'kleks',
  card: {
    // telefon: karta dotyka panelu „Dlaczego rezyliencja?”
    className:
      '-mb-6 lg:top-[22.6vw] lg:left-[9.9vw] lg:h-auto lg:w-[50vw] lg:rounded-none lg:bg-transparent lg:p-0',
    titleClassName:
      'text-lead-sub tracking-[0.2em] uppercase after:hidden lg:mb-[0.6vw] lg:text-[2.6vw] lg:leading-[1.2] lg:tracking-[0.03em] lg:normal-case',
    paragraphsClassName:
      'lg:max-w-[37vw] lg:text-[max(0.8125rem,1.25vw)] lg:leading-[1.67] lg:tracking-[0.05em] lg:text-ink',
    actionsClassName:
      "hidden lg:mt-[4vw] lg:flex lg:w-[37vw] lg:justify-end lg:pr-[2.4vw] lg:pl-0 lg:[&>a]:text-[max(0.75rem,1vw)] lg:[&>a]:tracking-[0.04em] lg:[&>a]:text-ink/80 lg:[&>a]:uppercase lg:[&>a]:after:ml-[0.4vw] lg:[&>a]:after:inline-block lg:[&>a]:after:content-['>']",
  },
}
