import type { ComponentType, SVGProps } from 'react'

/** Wygląd karty z numerami (TopicCard), w kolejności kart; treść: content/topics.ts. */
export type TopicLook = {
  toneClassName: string // kolor numeru i tytułu, np. 'text-rose-soft'
  bulletClassName: string // kolor kropek, np. 'before:bg-rose-soft'
  decor?: ComponentType<SVGProps<SVGSVGElement>>
  // 'beside' (domyślnie): nałożona na kartę (absolute), nie zajmuje miejsca; pozycja: top-*, right-*.
  // 'between': w przepływie między tytułem a listą, odsuwa listę w dół; pozycja: ml-*, -mt-*, w-*.
  decorPlacement?: 'beside' | 'between'
  decorClassName?: string // pozycja i rozmiar dekoracji
}
