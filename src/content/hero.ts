import { contact } from './contact'
import agataHome from '@/assets/img/home - Agata.png?format=webp&as=metadata'

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
  titleClassName?: string // tytuł bez podtytułu (styl jak na Home): nadpisanie klas
  subtitle?: string // z podtytułem tytuł jest rozstrzelony (LeadHeading)
  subtitleClassName?: string
  lines?: string[] // krótkie linie bez odstępów (np. Home)
  paragraphs?: string[] // akapity z odstępami
  items?: HeroCardItem[] // punkty z kropką (np. O mnie)
  details?: HeroCardDetail[][] // dane kontaktowe w grupach (odstęp między grupami)
  cta?: HeroLink // różowy przycisk ze strzałką
  link?: HeroLink // podkreślony link obok
  className?: string
}

export type HeroData = {
  className?: string // klasy całej sekcji hero (np. zaokrąglenie tła)
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

/** Dane eksportowane przez moduł strony jako `handle`. */
export type RouteHandle = {
  hero?: HeroData
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
  heading: ['Agata', 'Hemmerling-Goc'],
  headingClassName: 'top-50 items-start pl-6 normal-case',
  // TODO: image (zdjęcie Agaty) + decor (kleks na Agatę)
  card: {
    // -mb-6 znosi dolny odstęp hero: karta dotyka sekcji „Jak pracuję?”,
    // a jej biel przechodzi w białe tło obok zaokrąglonego rogu sekcji
    className: '-mb-6',
    items: [
      {
        title: 'Praktyka kliniczna',
        text: 'Psychoterapia i konsultacje dla dzieci, młodzieży, rodziców oraz osób dorosłych.',
      },
      {
        title: 'Psychoedukacja i szkolenia',
        text: 'Warsztaty dla placówek oświatowych, uczelni wyższych, organizacji pozarządowych oraz firm.',
      },
      {
        title: 'Doświadczenie i współprace',
        text: 'Wojewódzki Szpital Psychiatryczny w Gdańsku, Fundacja Praesterno, WSB Merito, SKN Psychologii GUMed, Uniwersytet Gdański, NAMI (Grupa INVICTA), Psycho Academy.',
      },
    ],
  },
}
export const psychoeducationHero: HeroData = {
  heading: ['Psychoedukacja'],
  headingClassName: 'top-50 items-center',
  // TODO: image (zdjęcie Agaty) + decor (kleks na Agatę)
  card: {
    className: '-mb-6', // jak w O mnie: karta dotyka panelu pod hero
    title: 'Psychoedukacja',
    subtitle: 'jest jednym z najważniejszych filarów mojej pracy',
    paragraphs: [
      'Postrzegam ją jako most między nauką a codziennością — narzędzie, które nie tylko wyjaśnia teoretyczne zagadnienia, ale przede wszystkim realnie wspiera w życiu. Zależy mi na tym, aby wiedza psychologiczna była rzetelna i oparta na badaniach, a jednocześnie bliska, zrozumiała i użyteczna.',
    ],
  },
}
export const psychotherapyHero: HeroData = { heading: ['Psychoterapia'] }
export const psychotherapyHubHero: HeroData = {
  ...psychotherapyHero,
  className: 'rounded-bl-[67px]', // tło hero: zaokrąglony lewy dolny róg
  headingClassName: 'top-35 items-center',
  // TODO: image (zdjęcie Agaty) + decor (kleks na Agatę)
  card: {
    className: '-mb-6', // karta dotyka dołu hero, pod nią białe tło strony
    title: 'Psychoterapia',
    subtitle: 'Z troski o zdrowie psychiczne',
    subtitleClassName: 'normal-case tracking-widest',
    paragraphs: [
      'Prowadzę konsultacje psychologiczne oraz psychoterapię indywidualną dla dzieci, młodzieży i ich opiekunów, a także dla osób dorosłych.',
      'W swojej pracy łączę podejście poznawczo-behawioralne (CBT) z metodami tzw. trzeciej fali, tak aby jak najlepiej odpowiadać na indywidualne potrzeby osób, z którymi współpracuję.',
      'W swojej praktyce kieruję się zasadami podejścia opartego na dowodach naukowych (evidence-based practice), wzbogacając je o elementy medycyny stylu życia.',
      'Jestem członkinią Polskiego Towarzystwa Psychoterapii Poznawczo-Behawioralnej, regularnie korzystam z superwizji oraz stale rozwijam swoje kompetencje, uczestnicząc w szkoleniach i konferencjach naukowych.',
    ],
  },
}
export const psychotherapyKidsHero: HeroData = {
  heading: ['Psychoterapia', 'dzieci i młodzież,', 'rodzice i opiekunowie.'],
  headingClassName: 'top-45 items-center text-center',
  lineClassName: 'not-first:text-xl', // pierwsza linia duża, reszta mniejsza
  // TODO: image (Agata przy biurku z książkami)
  card: {
    className: '-mb-6',
    paragraphs: [
      'Wspieram dzieci i młodzież w lepszym rozumieniu ich świata wewnętrznego, bezpiecznym przechodzeniu przez wyzwania rozwojowe oraz budowaniu umiejętności, które wzmacniają odporność i elastyczność psychologiczną.',
      'W pracy ważna jest dla mnie relacja oparta na szacunku i uważności. Korzystam z kreatywnych form pracy, które pomagają zaciekawić i zaangażować moich małych i większych pacjentów.',
    ],
  },
}
export const psychotherapyAdultsHero: HeroData = {
  heading: ['Psychoterapia', 'dorośli'],
  headingClassName: 'top-45 items-center text-center',
  lineClassName: 'not-first:text-xl', // jak u dzieci: podtytuł mniejszy
  // TODO: image (zdjęcie Agaty)
  card: {
    paragraphs: [
      'Wspieram osoby dorosłe w procesie zdrowienia oraz radzenia sobie z trudnościami dnia codziennego. Pomagam rozwijać umiejętności, które pozwalają budować bardziej satysfakcjonujące życie — w zgodzie z własnymi wartościami i potrzebami.',
    ],
  },
}
export const trainingHero: HeroData = {
  heading: ['Szkolenia'],
  headingClassName: 'top-45 pr-4',
  // TODO: image (zdjęcie Agaty) + decor (kleks na Agatę)
  card: {
    className: '-mb-6', // karta dotyka panelu „Dlaczego rezyliencja?”
    title: 'Z miłości do rezyliencji.',
    titleClassName: 'text-lead-sub tracking-[0.2em] uppercase after:hidden',
    paragraphs: [
      'Prowadzę szkolenia, warsztaty oraz prelekcje dla różnorodnych grup odbiorców — od placówek oświatowych i instytucji publicznych po sektor biznesowy. W swojej pracy łączę wiedzę naukową z doświadczeniem klinicznym oraz wieloletnią praktyką w działaniach profilaktycznych. Zależy mi na tym, aby każde spotkanie było dla uczestników okazją do zatrzymania się i chwili refleksji, a jednocześnie dostarczało konkretnych narzędzi, które realnie wspierają w codziennej pracy i życiu osobistym.',
    ],
  },
}
export const contactHero: HeroData = {
  heading: ['Współpraca'],
  headingClassName: 'top-50 items-center',
  // TODO: image (zdjęcie Agaty) + decor (kleks na Agatę)
  card: {
    details: [
      [
        {
          label: 'Telefon',
          lines: [contact.phone.label],
          href: contact.phone.href,
        },
        {
          label: 'E-mail',
          lines: [contact.email.label],
          href: contact.email.href,
        },
      ],
      [
        {
          label: 'Adres gabinetu',
          lines: [contact.office.name, contact.office.address],
          stacked: true,
        },
      ],
    ],
  },
}
