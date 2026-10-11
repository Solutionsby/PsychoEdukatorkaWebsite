import armchairPhoto from '@/assets/img/agata-armchair.png?w=1000&format=webp&as=metadata'
import booksPhoto from '@/assets/img/agata-books.png?w=1400&format=webp&as=metadata'
import agataTeddy from '@/assets/img/agata-teddy.png?w=800&format=webp&as=metadata'
import icon1 from '@/assets/img/psychoeducation-icon-1.png?w=400&format=webp&as=metadata'
import icon2 from '@/assets/img/psychoeducation-icon-2.png?w=400&format=webp&as=metadata'
import icon3 from '@/assets/img/psychoeducation-icon-3.png?w=400&format=webp&as=metadata'
import icon4 from '@/assets/img/psychoeducation-icon-4.png?w=400&format=webp&as=metadata'
import icon5 from '@/assets/img/psychoeducation-icon-5.png?w=400&format=webp&as=metadata'
import metaphors from '@/assets/img/psychoeducation-metaphors.png?format=webp&as=metadata'
import hole1 from '@/assets/svg/psychoeducation-hole-1.svg'
import hole2 from '@/assets/svg/psychoeducation-hole-2.svg'
import type { HeroData, HeroImage } from './hero'
import type { PagePath } from './pages'
import { photos } from './heroPhotos'
import { typo } from '@/lib/typography'

/** Desktop: zdjęcie w „oknie” w kształcie kleksa (maska z pliku SVG), za nim niebo. */
export type HolePhoto = {
  hole: string // adres SVG z kształtem okna (maska)
  ratio: string // proporcje okna = viewBox pliku, np. '478 / 518'
  image: HeroImage
  alt: string
  imageClassName: string // pozycja i rozmiar zdjęcia w oknie (w % okna)
}

export const intro = typo({
  title: 'Psychoedukacja',
  subtitle: 'to dla mnie coś więcej niż przekazywanie informacji',
  lead: 'Traktuję ją jako formę towarzyszenia — spokojnego wyjaśniania, nazywania i oswajania tego, co bywa trudne, nieuchwytne lub przytłaczające. To także wspólne przyglądanie się mechanizmom, które stoją za naszymi emocjami, myślami i reakcjami.',
  paragraphsTitle: 'Zrozumienie jest pierwszym krokiem do zmiany.', // tylko desktop
  paragraphs: [
    'Zrozumienie tych procesów często staje się pierwszym krokiem do zmiany. Pomaga uporządkować doświadczenia, zmniejsza napięcie, nadaje im sens i pozwala spojrzeć na siebie z większą wyrozumiałością i życzliwością. Choć wiedza nie daje gotowych odpowiedzi na wszystkie pytania, może przywracać poczucie sprawstwa i wspierać podejmowanie decyzji bliższych naszym wartościom, potrzebom i życiowym celom. Bywa również źródłem inspiracji i sposobem na poszerzanie perspektywy.',
  ],
  // tylko desktop
  photo: {
    hole: hole1,
    ratio: '478 / 518',
    image: armchairPhoto,
    alt: 'Agata Hemmerling-Goc z notesem',
    imageClassName: 'top-[-3%] left-[-8%] w-[104%]',
  } satisfies HolePhoto,
})

// Pasek pod hero (desktop): napis w pliku SVG
export const bridge = { alt: 'Między nauką a codziennością' }

export type Benefit = {
  label: string
  icon: HeroImage // plama z ikoną (wyciągnięte z PSYCHOEDUKACJA - SCHEMAT.svg)
  className: string // desktop: pozycja w rzędzie (left/top w vw, projekt 1920)
}

// Telefon: dwie kolumny, ostatnia pozycja na środku; desktop: rząd połączony linią.
export const benefits: Benefit[] = typo([
  {
    label: 'Porządkuje doświadczenia',
    icon: icon1,
    className: 'lg:top-[1.1vw] lg:left-[3.96vw]',
  },
  {
    label: 'Zmniejsza napięcie',
    icon: icon2,
    className: 'lg:top-[5.63vw] lg:left-[22.24vw]',
  },
  {
    label: 'Nadaje sens',
    icon: icon3,
    className: 'lg:top-[8.18vw] lg:left-[37.7vw]',
  },
  {
    label: 'Przywraca poczucie sprawstwa',
    icon: icon4,
    className: 'lg:top-[8.9vw] lg:left-[54.27vw]',
  },
  {
    label: 'Poszerza perspektywę',
    icon: icon5,
    className: 'lg:top-[5.63vw] lg:left-[72.4vw]',
  },
])

export type Story = {
  title: string
  text: string
  image?: HeroImage // ilustracja pod tekstem (desktop: obok)
  imageAlt?: string
  photo?: HolePhoto // tylko desktop: zdjęcie w oknie obok tekstu
}

export const stories: Story[] = typo([
  {
    title: 'Metafory, obrazy i analogie',
    text: 'W swojej pracy szczególnie bliskie są mi metafory, obrazy i analogie. Inspiracji szukam zarówno w narzędziach terapeutycznych, jak i w codziennych, pozornie zwyczajnych przedmiotach, które okazują się dobrym pretekstem do wyjaśniania tego, co złożone.',
    image: metaphors,
    imageAlt:
      'Ilustracja: papierowe łódki na wodzie w trzech oknach połączonych linią',
  },
  {
    title: 'Merytoryka spotyka się z wyobraźnią',
    text: 'Psychoedukacja jest dla mnie także przestrzenią twórczą. Cenię momenty, w których mogę tworzyć spersonalizowane narzędzia dopasowane do doświadczeń i zainteresowań moich klientów. To właśnie wtedy merytoryka spotyka się z wyobraźnią, a złożone treści stają się naprawdę zrozumiałe, pozostają z nami na dłużej i stają się realnym wsparciem w codziennym życiu.',
    photo: {
      hole: hole2,
      ratio: '799 / 683',
      image: booksPhoto,
      alt: 'Agata Hemmerling-Goc ze stosem książek i pluszowymi misiami',
      imageClassName: 'top-[10.3%] left-[-4.1%] w-[123%]',
    },
  },
])

// Telefon: Agata z misiem między „Merytoryka…” a „Psychoedukacja w praktyce”.
export const practicePhoto: { image: HeroImage; alt: string } = typo({
  image: agataTeddy,
  alt: 'Agata Hemmerling-Goc z pluszowym misiem',
})

// TODO: link do bloga (osobny etap)
export const practice = typo({
  title: 'Psychoedukacja w praktyce',
  links: [
    { label: 'Psychoterapia', to: '/psychoterapia' },
    { label: 'Szkolenia i warsztaty', to: '/szkolenia' },
  ] satisfies { label: string; to: PagePath }[],
})

export const psychoeducationHero: HeroData = typo({
  heading: ['Psychoedukacja'],
  headingClassName: 'top-35 items-center lg:top-[16.4vw] lg:items-start',
  lineClassName:
    'text-[8.5vw] tracking-[0.2em] -mr-[0.2em] lg:mr-0 lg:ml-[10vw] lg:text-[6.35vw] lg:leading-none lg:tracking-[0.265em]',
  ...photos.armsCrossed,
  // desktop: bez zdjęcia i kleksa (zdjęcia są niżej, w oknach)
  imageClassName: `${photos.armsCrossed.imageClassName} lg:hidden`,
  decor: 'kleks',
  card: {
    // telefon: karta dotyka panelu pod hero; desktop: sam tekst
    className:
      '-mb-6 lg:top-[25.8vw] lg:left-[9.9vw] lg:h-auto lg:w-[50vw] lg:rounded-none lg:bg-transparent lg:p-0',
    title: 'Psychoedukacja',
    titleClassName: 'lg:hidden',
    subtitle: 'jest jednym z najważniejszych filarów mojej pracy',
    subtitleClassName:
      'lg:text-[max(0.875rem,1.4vw)] lg:leading-[1.5] lg:tracking-[0.12em] lg:after:content-["."]',
    paragraphs: [
      'Postrzegam ją jako most między nauką a codziennością — narzędzie, które nie tylko wyjaśnia teoretyczne zagadnienia, ale przede wszystkim realnie wspiera w życiu. Zależy mi na tym, aby wiedza psychologiczna była rzetelna i oparta na badaniach, a jednocześnie bliska, zrozumiała i użyteczna.',
    ],
    paragraphsClassName:
      'lg:max-w-[47.5vw] lg:space-y-0 lg:text-[max(0.875rem,1.38vw)] lg:leading-[1.5] lg:text-ink',
    sections: [{ title: `${intro.subtitle}.`, text: intro.lead }],
  },
})
