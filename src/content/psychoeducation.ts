import type { HeroImage } from './hero'
import type { PagePath } from './pages'

export const intro = {
  title: 'Psychoedukacja',
  subtitle: 'to dla mnie coś więcej niż przekazywanie informacji',
  lead: 'Traktuję ją jako formę towarzyszenia — spokojnego wyjaśniania, nazywania i oswajania tego, co bywa trudne, nieuchwytne lub przytłaczające. To także wspólne przyglądanie się mechanizmom, które stoją za naszymi emocjami, myślami i reakcjami.',
  paragraphs: [
    'Zrozumienie tych procesów często staje się pierwszym krokiem do zmiany. Pomaga uporządkować doświadczenia, zmniejsza napięcie, nadaje im sens i pozwala spojrzeć na siebie z większą wyrozumiałością i życzliwością. Choć wiedza nie daje gotowych odpowiedzi na wszystkie pytania, może przywracać poczucie sprawstwa i wspierać podejmowanie decyzji bliższych naszym wartościom, potrzebom i życiowym celom. Bywa również źródłem inspiracji i sposobem na poszerzanie perspektywy.',
  ],
}

export type Benefit = {
  label: string
  className: string // kolor (i ewentualnie obrót) plamy pod ikoną
  // TODO: icon (SVG od grafika, import z ?react)
}

// Kolejność jak w designie: dwie kolumny, ostatnia pozycja na środku.
export const benefits: Benefit[] = [
  { label: 'Porządkuje doświadczenia', className: 'bg-mist-deep' },
  { label: 'Zmniejsza napięcie', className: 'bg-rose-light rotate-90' },
  { label: 'Nadaje sens', className: 'bg-mist-light -rotate-45' },
  {
    label: 'Przywraca poczucie sprawstwa',
    className: 'bg-rose-soft rotate-180',
  },
  { label: 'Poszerza perspektywę', className: 'bg-mist rotate-45' },
]

export type Story = {
  title: string
  text: string
  image?: HeroImage // ilustracja pod tekstem
  imageAlt?: string
}

export const stories: Story[] = [
  {
    title: 'Metafory, obrazy i analogie',
    text: 'W swojej pracy szczególnie bliskie są mi metafory, obrazy i analogie. Inspiracji szukam zarówno w narzędziach terapeutycznych, jak i w codziennych, pozornie zwyczajnych przedmiotach, które okazują się dobrym pretekstem do wyjaśniania tego, co złożone.',
    // TODO: image: ilustracja (PSYCHOEDUKACJA - OBRAZ), import z ?format=webp&as=metadata
  },
  {
    title: 'Merytoryka spotyka się z wyobraźnią',
    text: 'Psychoedukacja jest dla mnie także przestrzenią twórczą. Cenię momenty, w których mogę tworzyć spersonalizowane narzędzia dopasowane do doświadczeń i zainteresowań moich klientów. To właśnie wtedy merytoryka spotyka się z wyobraźnią, a złożone treści stają się naprawdę zrozumiałe, pozostają z nami na dłużej i stają się realnym wsparciem w codziennym życiu.',
  },
]

export const practice = {
  title: 'Psychoedukacja w praktyce',
  links: [
    { label: 'Psychoterapia', to: '/psychoterapia' },
    { label: 'Szkolenia i warsztaty', to: '/szkolenia' },
    { label: 'Blog', to: '/blog' }, // blog to osobny etap: do tego czasu 404
  ] satisfies { label: string; to: PagePath | '/blog' }[],
}
