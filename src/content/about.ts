import deskPhoto from '@/assets/img/O MNIE - AGATA2.png?format=webp&as=metadata'
import type { HeroData, HeroImage } from './hero'
import type { PagePath } from './pages'
import { photos } from './heroPhotos'

export type WorkStep = {
  number: string
  title: string
  paragraphs: string[]
  tags?: string[] // pasek pod kartą: RELACJE • SEN • …
}

export type WorkArea = {
  title: string
  subtitle: string
  text: string
  link: { label: string; to: PagePath }
}

export const workSteps: WorkStep[] = [
  {
    number: '01',
    title: 'Całościowe spojrzenie na zdrowie psychiczne',
    paragraphs: [
      'Bliskie jest mi całościowe spojrzenie na zdrowie psychiczne, dlatego w swojej pracy kieruję się zasadami praktyki opartej na dowodach naukowych (evidence-based practice), wzbogacając je o elementy medycyny stylu życia.',
      'Zwracam uwagę na znaczenie codziennych nawyków — snu, odżywiania, ruchu, kontaktu z naturą, relacji czy sposobów radzenia sobie ze stresem — dla naszego dobrostanu psychicznego.',
    ],
    tags: ['Relacje', 'Sen', 'Odżywianie', 'Ruch', 'Natura', 'Stres'],
  },
  {
    number: '02',
    title: 'Kryzys, zasoby i rezyliencja',
    paragraphs: [
      'W swojej pracy towarzyszę osobom zarówno w momentach kryzysu, jak i w procesie wzmacniania zasobów potrzebnych do radzenia sobie z codziennymi wyzwaniami oraz budowania bardziej satysfakcjonującego życia. Szczególnie interesują mnie zagadnienia związane z rezyliencją, rozumianą jako zdolność do radzenia sobie z trudnościami i odzyskiwania równowagi po sytuacjach kryzysowych.',
    ],
  },
  {
    number: '03',
    title: 'Dzieci i młodzież',
    paragraphs: [
      'Wyjątkowo ważnym aspektem mojej praktyki jest wspieranie dzieci i młodzieży w rozumieniu ich świata wewnętrznego oraz bezpiecznym przeprowadzaniu ich przez wyzwania rozwojowe.',
    ],
  },
]

// Zdjęcie między „Jak pracuję?” a „Poznaj obszary mojej pracy”, na całą szerokość.
export const deskImage: { image: HeroImage; alt: string } = {
  image: deskPhoto,
  alt: 'Agata Hemmerling-Goc czyta książkę przy biurku z książkami i pluszowymi misiami',
}

// TODO: teksty to wypełniacz z designu, do podmiany
export const workAreas: WorkArea[] = [
  {
    title: 'Psychoterapia',
    subtitle: 'Z troski o zdrowie psychiczne.',
    text: 'Prowadzę konsultacje psychologiczne oraz psychoterapię indywidualną dla dzieci, młodzieży i ich opiekunów, a także dla osób dorosłych.',
    link: { label: 'Zobacz, jak wygląda psychoterapia', to: '/psychoterapia' },
  },
  {
    title: 'Szkolenia i warsztaty',
    subtitle: 'Z miłości do rezyliencji.',
    text: 'Prowadzę konsultacje psychologiczne oraz psychoterapię indywidualną dla dzieci, młodzieży i ich opiekunów, a także dla osób dorosłych.',
    link: { label: 'Poznaj szkolenia i warsztaty', to: '/szkolenia' },
  },
]

export const aboutHero: HeroData = {
  heading: ['Agata', 'Hemmerling-Goc'],
  headingClassName: 'top-35 items-start pl-6 normal-case',
  ...photos.home,
  decor: 'kleks',

  card: {
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
