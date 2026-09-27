import type { PagePath } from './pages.ts'

export type Seo = {
  title: string
  description: string // ok. 150 znaków: tyle pokazuje Google
}

export const siteUrl = 'https://psycho-edukatorka.pl'

/** Pełny adres strony, z ukośnikiem na końcu (tak serwuje ją hosting: o-mnie/index.html). */
export const pageUrl = (path: string) =>
  siteUrl + (path === '/' ? '/' : `${path}/`)

export const notFoundTitle = 'Nie znaleziono strony | Psychoedukatorka'

// Tytuł i opis każdej strony. Brak wpisu dla strony z pages.ts = błąd typów.
// Opisy to szkice do akceptacji przez Agatę.
export const seo: Record<PagePath, Seo> = {
  '/': {
    title: 'Agata Hemmerling-Goc – psychoterapia, psychoedukacja, szkolenia',
    description:
      'Psycholożka, certyfikowana psychoterapeutka poznawczo-behawioralna i psychodietetyczka. Psychoterapia, psychoedukacja i szkolenia dla psychoterapeutów.',
  },
  '/o-mnie': {
    title: 'O mnie | Agata Hemmerling-Goc',
    description:
      'Praktyka kliniczna, psychoedukacja i szkolenia. Poznaj doświadczenie i kwalifikacje Agaty Hemmerling-Goc, psychoterapeutki poznawczo-behawioralnej.',
  },
  '/psychoedukacja': {
    title: 'Psychoedukacja | Agata Hemmerling-Goc',
    description:
      'Psychoedukacja: rzetelna wiedza o zdrowiu psychicznym, emocjach i terapii poznawczo-behawioralnej, przekazana przystępnie.',
  },
  '/psychoterapia': {
    title: 'Psychoterapia poznawczo-behawioralna | Agata Hemmerling-Goc',
    description:
      'Psychoterapia poznawczo-behawioralna dla dzieci, młodzieży i dorosłych. Sprawdź, jak wygląda terapia i wybierz ofertę dla siebie.',
  },
  '/psychoterapia/dzieci-i-mlodziez': {
    title: 'Psychoterapia dzieci i młodzieży | Agata Hemmerling-Goc',
    description:
      'Psychoterapia poznawczo-behawioralna dzieci i młodzieży oraz wsparcie dla rodziców i opiekunów.',
  },
  '/psychoterapia/dorosli': {
    title: 'Psychoterapia dorosłych | Agata Hemmerling-Goc',
    description:
      'Psychoterapia poznawczo-behawioralna dla dorosłych: pomoc w lęku, obniżonym nastroju, stresie i trudnościach w relacjach.',
  },
  '/szkolenia': {
    title: 'Szkolenia dla psychoterapeutów | Agata Hemmerling-Goc',
    description:
      'Szkolenia dla psychoterapeutów i psychologów: praktyczne umiejętności pracy w nurcie poznawczo-behawioralnym.',
  },
  '/wspolpraca': {
    title: 'Współpraca i kontakt | Agata Hemmerling-Goc',
    description:
      'Umów się na konsultację lub zaproś do współpracy przy szkoleniach i projektach psychoedukacyjnych. Dane kontaktowe.',
  },
}
