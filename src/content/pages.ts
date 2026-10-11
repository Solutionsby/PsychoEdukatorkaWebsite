type NavPlace = 'menu' | 'footer'

/** Wpis w nawigacji; strona bez `nav` nie pojawia się w menu ani stopce. */
export type NavEntry = {
  label: string
  in?: readonly NavPlace[] // domyślnie oba miejsca
  accent?: boolean // wyróżniony link (np. BLOG)
  pill?: boolean // desktop: link jako pigułka z obrysem (Współpraca)
}

export type Page = {
  path: string // pełny adres
  file: string // moduł strony, względem src/
  nav?: NavEntry
}

// Nowa strona: wpis tutaj + plik w pages/ + tytuł i opis w content/seo.ts.
// Kolejność = kolejność w menu. `as const`: adresy znane typom (PagePath).
export const pages = [
  { path: '/', file: 'pages/Home.tsx' },
  { path: '/o-mnie', file: 'pages/About.tsx', nav: { label: 'O mnie' } },
  {
    path: '/psychoedukacja',
    file: 'pages/Psychoeducation.tsx',
    nav: { label: 'Psychoedukacja' },
  },
  {
    path: '/psychoterapia',
    file: 'pages/psychotherapy/Hub.tsx',
    nav: { label: 'Psychoterapia' },
  },
  {
    path: '/psychoterapia/dzieci-i-mlodziez',
    file: 'pages/psychotherapy/Kids.tsx',
  },
  { path: '/psychoterapia/dorosli', file: 'pages/psychotherapy/Adults.tsx' },
  {
    path: '/szkolenia',
    file: 'pages/Training.tsx',
    nav: { label: 'Szkolenia' },
  },
  {
    path: '/wspolpraca',
    file: 'pages/Contact.tsx',
    nav: { label: 'Współpraca', pill: true },
  },
] as const satisfies readonly Page[]

/** Adres dowolnej strony z listy, np. '/o-mnie'. */
export type PagePath = (typeof pages)[number]['path']
