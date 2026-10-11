import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// Własne rozmiary tekstu z @theme (index.css). Bez tej listy tailwind-merge bierze
// np. `text-card-title` za kolor i usuwa je, gdy obok stoi `text-rose-soft`.
// Nowy token `--text-*` w index.css = dopisz go tutaj.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ['section', 'number', 'card-title', 'card', 'lead', 'lead-sub', 'hero'],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
