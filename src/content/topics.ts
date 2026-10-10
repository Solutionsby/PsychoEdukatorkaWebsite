import type { ComponentType, SVGProps } from 'react'

// Dane kart z numerami (TopicCard): psychoterapia dzieci i dorośli, szkolenia.
export type TopicItem = { term: string; text?: string }

export type Topic = {
  id?: string // kotwica (#id), np. dla nawigacji nad kartami
  number: string
  title: string
  items: TopicItem[]
  toneClassName: string // kolor numeru i tytułu, np. 'text-rose-soft'
  bulletClassName: string // kolor kropek, np. 'before:bg-rose-soft'
  // TODO: kuleczka z linią przerywaną: SVG z ?react (fill/stroke="currentColor")
  decor?: ComponentType<SVGProps<SVGSVGElement>>
  decorClassName?: string // pozycja dekoracji w karcie (absolute)
}
