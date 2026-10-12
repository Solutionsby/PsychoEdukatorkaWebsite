// Treść strony O mnie; wygląd: design/about.ts.
import deskPhoto from '@/assets/img/agata-desk.png?format=webp&as=metadata'
import type { HeroContent } from './hero'
import type { ImageAsset } from './image'
import type { PagePath } from './pages'
import { typo } from '@/lib/typography'

export type WorkStep = {
  number: string
  title: string
  paragraphs: string[]
  tags?: string[] // pasek pod kartą: RELACJE • SEN • …; desktop: schemat (kółko)
  image?: { image: ImageAsset; alt: string } // zdjęcie pod kartą; desktop: obok
}

export type WorkArea = {
  title: string
  subtitle: string
  text: string
  link: { label: string; to: PagePath }
}

/** Tytuły zawodowe: karta hero na Home, linia pod nagłówkiem O mnie (desktop). */
export const credentials = typo([
  'psycholożka',
  'certyfikowana psychoterapeutka poznawczo-behawioralna (Nr certyfikatu PTTPB: 1819)',
  'psychodietetyczka',
])

export const workSteps: WorkStep[] = typo([
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
    // telefon: na całą szerokość pod kartą; desktop: obok tekstu
    image: {
      image: deskPhoto,
      alt: 'Agata Hemmerling-Goc czyta książkę przy biurku z książkami i pluszowymi misiami',
    },
  },
])

export const workAreas: WorkArea[] = typo([
  {
    title: 'Psychoterapia',
    subtitle: 'Z troski o zdrowie psychiczne.',
    text: 'Prowadzę konsultacje psychologiczne oraz psychoterapię indywidualną dla dzieci, młodzieży i ich opiekunów, a także dla osób dorosłych.',
    link: { label: 'Zobacz, jak wygląda psychoterapia', to: '/psychoterapia' },
  },
  {
    title: 'Szkolenia i warsztaty',
    subtitle: 'Z miłości do rezyliencji.',
    text: 'Prowadzę szkolenia, warsztaty oraz prelekcje dla różnorodnych grup odbiorców — od placówek oświatowych i instytucji publicznych po sektor biznesowy. W swojej pracy łączę wiedzę naukową z doświadczeniem klinicznym oraz wieloletnią praktyką w działaniach profilaktycznych.',
    link: {
      label: 'Poznaj szkolenia i możliwości współpracy',
      to: '/szkolenia',
    },
  },
])

export const aboutHero: HeroContent = typo({
  heading: ['Agata', 'Hemmerling-Goc'],
  subheading: credentials,
  card: {
    // przycisk tylko na desktopie (na telefonie „Jak pracuję?” jest tuż pod hero)
    cta: { label: 'Jak pracuję?', to: '#jak-pracuje' },
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
})
