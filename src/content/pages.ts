/** Wpis w nawigacji; strona bez `nav` nie pojawia się w menu ani stopce. */
export type NavEntry = {
  label: string
  in?: ('menu' | 'footer')[] // domyślnie oba miejsca
  accent?: boolean // wyróżniony link (np. BLOG)
}

type Page = {
  path: string // pełny adres
  file: string // moduł strony, względem src/
  nav?: NavEntry
}

// Nowa strona: wpis tutaj + plik w pages/. Kolejność = kolejność w menu.
export const pages: Page[] = [
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
    nav: { label: 'Współpraca' },
  },
]
