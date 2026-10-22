// Wygląd stron Psychoterapii (hub, dzieci, dorośli); treść: content/psychotherapy.ts.
import KulkaCztery from '@/assets/svg/psychotherapy-balls-4.svg?react'
import KulkaCzteryMobile from '@/assets/svg/psychotherapy-balls-4-mobile.svg?react'
import KulkaDorosli from '@/assets/svg/psychotherapy-balls-adults.svg?react'
import KulkaJeden from '@/assets/svg/psychotherapy-balls-1.svg?react'
import KulkaDwa from '@/assets/svg/psychotherapy-balls-2.svg?react'
import KulkaDwaMobile from '@/assets/svg/psychotherapy-balls-2-mobile.svg?react'
import KulkaTrzy from '@/assets/svg/psychotherapy-balls-3.svg?react'
import KulkaTrzyMobile from '@/assets/svg/psychotherapy-balls-3-mobile.svg?react'
import type { HeroLayout } from './hero'
import { photos } from './heroPhotos'
import type { TopicLook } from './topics'

// Dzieci: karty 01–04 (kolejność jak kidsTopics); desktop: linie z kulkami między kartami
export const kidsTopicLooks: TopicLook[] = [
  {
    toneClassName: 'text-rose-soft lg:text-mist-deep',
    bulletClassName: 'before:bg-ink/60',
    // telefon: przerywana linia z kropkami obok numeru, do prawej krawędzi karty
    mobileDecor: KulkaJeden,
    mobileDecorClassName: 'top-11 left-24 w-[calc(100%-7rem)]',
  },
  {
    toneClassName: 'text-rose-soft',
    bulletClassName: 'before:bg-rose-soft',
    // desktop: linia nad kartą, od lewej krawędzi ekranu
    decor: KulkaDwa,
    decorClassName: 'hidden lg:block lg:-top-[10.2vw] lg:left-0 lg:w-[90.8vw]',
    // telefon: łuk spod numeru (pod tytułem) do kulki w prawym górnym rogu karty
    mobileDecor: KulkaDwaMobile,
    mobileDecorClassName: 'top-14 left-6 w-[calc(100%-2.5rem)]',
  },
  {
    toneClassName: 'text-ink',
    bulletClassName: 'before:bg-ink/60',
    decor: KulkaTrzy,
    decorClassName:
      'hidden lg:block lg:-top-[6vw] lg:left-[19.1vw] lg:w-[14.2vw] lg:text-mist-deep',
    // telefon: pętla z kulkami obok numeru (niska i szeroka, desktopowa jest wysoka)
    mobileDecor: KulkaTrzyMobile,
    mobileDecorClassName: 'top-10 left-47 w-25 text-mist-deep',
  },
  {
    toneClassName: 'text-rose-soft',
    bulletClassName: 'before:bg-rose-soft',
    decor: KulkaCztery,
    decorClassName:
      'hidden lg:block lg:-top-[7.5vw] lg:left-[19.1vw] lg:w-[15.9vw]',
    // telefon: linia od kulki za tytułem do kulki w prawym górnym rogu karty
    mobileDecor: KulkaCzteryMobile,
    mobileDecorClassName: 'top-10 left-40 w-43',
  },
]

// Dorośli: karty 01–03 (kolejność jak adultsTopics)
export const adultsTopicLooks: TopicLook[] = [
  {
    toneClassName: 'text-rose-soft',
    bulletClassName: 'before:bg-ink/60',
  },
  {
    toneClassName: 'text-rose-soft',
    bulletClassName: 'before:bg-rose-soft',
    // desktop: linia z dwiema kulkami nad kartą (rysunek wg zrzutu, do podmiany na plik od grafika)
    decor: KulkaDorosli,
    decorClassName:
      'hidden lg:block lg:-top-[7.3vw] lg:left-[2.08vw] lg:w-[58.3vw] lg:text-rose',
  },
  {
    toneClassName: 'text-ink',
    bulletClassName: 'before:bg-ink',
    decor: KulkaCztery,
    decorClassName:
      'hidden lg:block lg:-top-[8.1vw] lg:left-[19.2vw] lg:w-[15.9vw] lg:text-mist-deep',
  },
]

export const psychotherapyHubHeroLayout: HeroLayout = {
  // desktop: hero 1230px, łuk kończy się wcześniej (1176px),
  // pod nim jasna fala sekcji „Współpraca”; zdjęcie w tej sekcji, nie w hero
  className: 'rounded-bl-[67px] lg:h-[64vw] lg:rounded-none', // telefon: zaokrąglony lewy dolny róg
  arcClassName: 'lg:bottom-[2.8vw]',
  headingClassName: 'top-35 items-center lg:top-[16.4vw] lg:items-start',
  lineClassName:
    'lg:ml-[10.1vw] lg:text-[6.35vw] lg:leading-none lg:tracking-[0.267em]',
  ...photos.lapels,
  imageMobileOnly: true,
  decor: 'kleks',
  card: {
    className:
      '-mb-6 lg:top-[25.15vw] lg:left-[9.9vw] lg:h-auto lg:w-[45vw] lg:rounded-none lg:bg-transparent lg:p-0', // telefon: karta dotyka dołu hero, pod nią białe tło strony
    titleClassName: 'lg:hidden', // desktop: tytułem jest nagłówek hero
    subtitleClassName:
      'normal-case tracking-widest lg:flex lg:items-center lg:gap-[0.5vw] lg:text-[2.5vw] lg:leading-[1.2] lg:tracking-[0.03em] lg:before:block lg:before:h-[0.2vw] lg:before:w-[2.1vw] lg:before:bg-current',
    // desktop: akapity bez odstępów, 2. i 3. w jednym ciągu, ostatni po pustej linii
    paragraphsClassName:
      'lg:mt-[0.45vw] lg:space-y-0 lg:text-[max(0.8125rem,1.38vw)] lg:leading-[1.35] lg:text-ink lg:[&>p:last-child]:mt-[1.9vw] lg:[&>p:nth-child(2)]:inline lg:[&>p:nth-child(3)]:inline lg:[&>p:nth-child(3)]:before:content-["_"]',
  },
}

export const psychotherapyKidsHeroLayout: HeroLayout = {
  // desktop: nagłówek i łuk jak na hubie, zdjęcie przy biurku na dole
  // po lewej, jego dół zakrywa jasny pas strony (pages/psychotherapy/Kids.tsx)
  className: 'lg:h-[64vw]',
  arcClassName: 'lg:bottom-[2.8vw]',
  headingClassName:
    'top-45 items-center text-center lg:top-[16.4vw] lg:items-start lg:text-left',
  lineClassName:
    'not-first:text-xl lg:ml-[10.1vw] lg:text-[6.35vw] lg:leading-none lg:tracking-[0.267em] lg:not-first:hidden',
  ...photos.desk,
  imageClassName: `${photos.desk.imageClassName} lg:bottom-[1.5vw] lg:left-[-1vw] lg:w-[44vw] lg:translate-none`,
  card: {
    className:
      '-mb-6 lg:top-[23.6vw] lg:left-[9.9vw] lg:h-auto lg:w-[48vw] lg:rounded-none lg:bg-transparent lg:p-0',
    titleClassName:
      'max-lg:hidden lg:mb-[1.3vw] lg:text-[2.5vw] lg:leading-[1.2] lg:tracking-[0.03em]',
    paragraphsClassName:
      'lg:space-y-0 lg:text-[max(0.8125rem,1.38vw)] lg:leading-[1.5] lg:text-ink',
  },
}

export const psychotherapyAdultsHeroLayout: HeroLayout = {
  // desktop: jak Dzieci, zdjęcie stoi przy lewej krawędzi łuku
  className: 'lg:h-[64vw]',
  arcClassName: 'lg:bottom-[2.8vw]',
  headingClassName:
    'top-45 items-center text-center lg:top-[16.4vw] lg:items-start lg:text-left',
  lineClassName:
    'not-first:text-xl lg:ml-[10.1vw] lg:text-[6.35vw] lg:leading-none lg:tracking-[0.267em] lg:not-first:hidden',
  ...photos.jacket,
  // desktop: prawy brzeg przy łuku; lg:z-0 = pojemnik z własną warstwą pod treścią strony,
  // więc fala pasa z nawigacją (TopicNav) zasłania dół zdjęcia
  imageClassName: `${photos.jacket.imageClassName} lg:bottom-[6.2vw] lg:left-[39.2vw] lg:z-0 lg:w-[22.1vw]`,
  card: {
    className:
      'lg:top-[24.9vw] lg:left-[9.9vw] lg:h-auto lg:w-[32.5vw] lg:rounded-none lg:bg-transparent lg:p-0',
    titleClassName:
      'max-lg:hidden lg:mb-[1.3vw] lg:text-[2.5vw] lg:leading-[1.2] lg:tracking-[0.03em]',
    paragraphsClassName:
      'lg:space-y-0 lg:text-[max(0.8125rem,1.38vw)] lg:leading-[1.5] lg:text-ink',
  },
}
