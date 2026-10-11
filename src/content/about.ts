import deskPhoto from '@/assets/img/agata-desk.png?format=webp&as=metadata'
import heroBlob from '@/assets/svg/about-hero-cloud.svg'
import therapyBlob from '@/assets/svg/about-therapy-blob.svg'
import trainingBlob from '@/assets/svg/about-training-blob.svg'
import type { HeroData, HeroImage } from './hero'
import type { PagePath } from './pages'
import { photos } from './heroPhotos'
import { typo } from '@/lib/typography'

export type WorkStep = {
  number: string
  title: string
  paragraphs: string[]
  tags?: string[] // pasek pod kartą: RELACJE • SEN • …; desktop: schemat (kółko)
  image?: { image: HeroImage; alt: string } // zdjęcie pod kartą; desktop: obok
}

export type WorkArea = {
  title: string
  subtitle: string
  text: string
  link: { label: string; to: PagePath }
  blob: string // desktop: kształt karty (adres SVG)
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
    blob: therapyBlob,
  },
  {
    title: 'Szkolenia i warsztaty',
    subtitle: 'Z miłości do rezyliencji.',
    text: 'Prowadzę szkolenia, warsztaty oraz prelekcje dla różnorodnych grup odbiorców — od placówek oświatowych i instytucji publicznych po sektor biznesowy. W swojej pracy łączę wiedzę naukową z doświadczeniem klinicznym oraz wieloletnią praktyką w działaniach profilaktycznych.',
    link: {
      label: 'Poznaj szkolenia i możliwości współpracy',
      to: '/szkolenia',
    },
    blob: trainingBlob,
  },
])

export const aboutHero: HeroData = typo({
  // desktop: hero wyższe (1248px), bo fala „Jak pracuję?” zachodzi na jego dół
  className: 'lg:h-[65vw]',
  heading: ['Agata', 'Hemmerling-Goc'],
  headingClassName:
    'top-35 items-start pl-6 normal-case lg:top-[12.1vw] lg:flex-row lg:gap-[0.3em] lg:pl-[11.2vw] lg:tracking-normal',
  lineClassName: 'lg:text-[1.6vw] lg:leading-[1.2]',
  subheading: credentials,
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
    // przycisk tylko na desktopie (na telefonie „Jak pracuję?” jest tuż pod hero)
    cta: { label: 'Jak pracuję?', to: '#jak-pracuje' },
    actionsClassName: 'max-lg:hidden lg:mt-[3.5vw] lg:pl-[5.9vw]',
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
