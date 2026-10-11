import type { ComponentType, SVGProps } from 'react'

// Dane kart z numerami (TopicCard): psychoterapia dzieci i dorośli, szkolenia.
export type TopicItem = { term: string; text?: string }

export type Topic = {
  id?: string // kotwica (#id), np. dla nawigacji nad kartami
  short?: string // etykieta w nawigacji nad kartami (desktop), domyślnie title
  number: string
  title: string
  subtitle?: string // desktop: dopisek pod tytułem, np. „(Warsztaty dla uczniów)”
  items: TopicItem[]
  toneClassName: string // kolor numeru i tytułu, np. 'text-rose-soft'
  bulletClassName: string // kolor kropek, np. 'before:bg-rose-soft'
  // TODO: kuleczka z linią przerywaną: SVG z ?react (fill/stroke="currentColor")
  decor?: ComponentType<SVGProps<SVGSVGElement>>
  // 'beside' (domyślnie): nałożona na kartę (absolute), nie zajmuje miejsca; pozycja: top-*, right-*.
  // 'between': w przepływie między tytułem a listą, odsuwa listę w dół; pozycja: ml-*, -mt-*, w-*.
  decorPlacement?: 'beside' | 'between'
  decorClassName?: string // pozycja i rozmiar dekoracji
}
