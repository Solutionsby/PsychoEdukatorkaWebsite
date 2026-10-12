import type { HeroCardContent, HeroContent } from '@/content/hero'
import type { HeroCardLayout, HeroLayout } from '@/design/hero'

export type HeroCardData = HeroCardContent & HeroCardLayout

/** Hero gotowe do wyświetlenia: treść (content/) + wygląd (design/). */
export type HeroData = Omit<HeroContent, 'card'> &
  Omit<HeroLayout, 'card'> & { card?: HeroCardData }

/** Dane eksportowane przez moduł strony jako `handle`. */
export type RouteHandle = {
  hero?: HeroData
}

/** Łączy treść hero z jego wyglądem (karta: pole po polu). */
export const withLayout = (
  content: HeroContent,
  layout: HeroLayout,
): HeroData => ({
  ...content,
  ...layout,
  card: content.card && { ...content.card, ...layout.card },
})
