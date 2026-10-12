// Treść hero (same teksty); wygląd: design/hero.ts, połączenie: lib/hero.ts.

type HeroLink = { label: string; to: string }

type HeroCardItem = { title: string; text: string }

/** Wiersz danych kontaktowych: „Telefon: 519…”; `stacked` = etykieta w osobnej linii. */
type HeroCardDetail = {
  label: string
  lines: string[]
  href?: string // tel:, mailto:
  stacked?: boolean
}

export type HeroCardContent = {
  title?: string
  subtitle?: string // z podtytułem tytuł jest rozstrzelony (LeadHeading)
  lines?: string[] // krótkie linie bez odstępów (np. Home)
  paragraphs?: string[] // akapity z odstępami
  sections?: { title: string; text: string }[] // desktop: bloki pod akapitami (tytuł wersalikami + tekst)
  items?: HeroCardItem[] // punkty z kropką (np. O mnie)
  details?: HeroCardDetail[][] // dane kontaktowe w grupach (odstęp między grupami)
  cta?: HeroLink // różowy przycisk ze strzałką ('#id' = kotwica na stronie)
  link?: HeroLink // podkreślony link obok
}

export type HeroContent = {
  heading: string[]
  subheading?: string[] // desktop: linie pod nagłówkiem, rozdzielone kropką (np. tytuły zawodowe)
  imageAlt?: string // domyślnie „Agata Hemmerling-Goc”
  card?: HeroCardContent // biała karta u dołu hero
}
