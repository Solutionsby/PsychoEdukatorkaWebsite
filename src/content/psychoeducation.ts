// Treść strony Psychoedukacja; wygląd: design/psychoeducation.ts.
import armchairPhoto from '@/assets/img/agata-armchair.png?w=1000&format=webp&as=metadata'
import booksPhoto from '@/assets/img/agata-books.png?w=1400&format=webp&as=metadata'
import agataTeddy from '@/assets/img/agata-teddy.png?w=800&format=webp&as=metadata'
import icon1 from '@/assets/img/psychoeducation-icon-1.png?w=400&format=webp&as=metadata'
import icon2 from '@/assets/img/psychoeducation-icon-2.png?w=400&format=webp&as=metadata'
import icon3 from '@/assets/img/psychoeducation-icon-3.png?w=400&format=webp&as=metadata'
import icon4 from '@/assets/img/psychoeducation-icon-4.png?w=400&format=webp&as=metadata'
import icon5 from '@/assets/img/psychoeducation-icon-5.png?w=400&format=webp&as=metadata'
import metaphors from '@/assets/img/psychoeducation-metaphors.png?format=webp&as=metadata'
import type { HeroContent } from './hero'
import type { ImageAsset } from './image'
import type { PagePath } from './pages'
import { typo } from '@/lib/typography'

/** Desktop: zdjęcie w „oknie” w kształcie kleksa; kształt i pozycja: design/psychoeducation.ts. */
export type HolePhoto = {
  image: ImageAsset
  alt: string
}

export const intro = typo({
  title: 'Psychoedukacja',
  subtitle: 'to dla mnie coś więcej niż przekazywanie informacji',
  lead: 'Traktuję ją jako formę towarzyszenia – spokojnego wyjaśniania, nazywania i oswajania tego, co bywa trudne, nieuchwytne lub przytłaczające. To także wspólne przyglądanie się mechanizmom, które stoją za naszymi emocjami, myślami i reakcjami.',
  paragraphsTitle: 'Zrozumienie jest pierwszym krokiem do zmiany.', // tylko desktop
  paragraphs: [
    'Zrozumienie tych procesów często staje się pierwszym krokiem do zmiany. Pomaga uporządkować doświadczenia, zmniejsza napięcie, nadaje im sens i pozwala spojrzeć na siebie z większą wyrozumiałością i życzliwością. Choć wiedza nie daje gotowych odpowiedzi na wszystkie pytania, może przywracać poczucie sprawstwa i wspierać podejmowanie decyzji bliższych naszym wartościom, potrzebom i życiowym celom. Bywa również źródłem inspiracji i sposobem na poszerzanie perspektywy.',
  ],
  // tylko desktop
  photo: {
    image: armchairPhoto,
    alt: 'Agata Hemmerling-Goc z notesem',
  } satisfies HolePhoto,
})

// Pasek pod hero (desktop): napis w pliku SVG
export const bridge = { alt: 'Między nauką a codziennością' }

export type Benefit = {
  label: string
  icon: ImageAsset // plama z ikoną
}

// Telefon: dwie kolumny, ostatnia pozycja na środku; desktop: rząd połączony linią.
export const benefits: Benefit[] = typo([
  {
    label: 'Porządkuje doświadczenia',
    icon: icon1,
  },
  {
    label: 'Zmniejsza napięcie',
    icon: icon2,
  },
  {
    label: 'Nadaje sens',
    icon: icon3,
  },
  {
    label: 'Przywraca poczucie sprawstwa',
    icon: icon4,
  },
  {
    label: 'Poszerza perspektywę',
    icon: icon5,
  },
])

export type Story = {
  title: string
  text: string
  image?: ImageAsset // ilustracja pod tekstem (desktop: obok)
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
      image: booksPhoto,
      alt: 'Agata Hemmerling-Goc ze stosem książek i pluszowymi misiami',
    },
  },
])

// Telefon: Agata z misiem między „Merytoryka…” a „Psychoedukacja w praktyce”.
export const practicePhoto: { image: ImageAsset; alt: string } = typo({
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

export const psychoeducationHero: HeroContent = typo({
  heading: ['Psychoedukacja'],
  card: {
    title: 'Psychoedukacja', // telefon; desktop: tytułem jest nagłówek hero
    subtitle: 'jest jednym z najważniejszych filarów mojej pracy',
    paragraphs: [
      'Postrzegam ją jako most między nauką a codziennością – narzędzie, które nie tylko wyjaśnia teoretyczne zagadnienia, ale przede wszystkim realnie wspiera w życiu. Zależy mi na tym, aby wiedza psychologiczna była rzetelna i oparta na badaniach, a jednocześnie bliska, zrozumiała i użyteczna.',
    ],
    sections: [{ title: `${intro.subtitle}.`, text: intro.lead }],
  },
})
