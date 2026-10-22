import type { PagePath } from './pages.ts'

export type Seo = {
  name: string // krótka nazwa strony: ścieżka nawigacji w wynikach Google (BreadcrumbList)
  title: string // do ok. 60 znaków
  description: string // ok. 150 znaków: tyle pokazuje Google
}

export const siteUrl = 'https://psycho-edukatorka.pl'

/** Pełny adres strony, z ukośnikiem na końcu (tak serwuje ją hosting: o-mnie/index.html). */
export const pageUrl = (path: string) =>
  siteUrl + (path === '/' ? '/' : `${path}/`)

/** Podgląd linku (Facebook, Messenger, LinkedIn): public/og-image.jpg, z design-sources/og-image-source.jpg. Nieużywany: czeka na poprawioną grafikę (literówka „psychodedukatorka”). */
export const ogImage = {
  url: `${siteUrl}/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: 'Agata Hemmerling-Goc – psychoterapia, psychoedukacja, szkolenia',
}

export const notFoundTitle = 'Nie znaleziono strony | Psychoedukatorka'

// Nazwa, tytuł i opis każdej strony (zaakceptowane). Brak wpisu dla strony z pages.ts = błąd typów.
export const seo: Record<PagePath, Seo> = {
  '/': {
    name: 'Strona główna',
    title: 'Agata Hemmerling-Goc – psychoterapeutka CBT, psychoedukacja',
    description:
      'Psycholożka, certyfikowana psychoterapeutka poznawczo-behawioralna i psychodietetyczka z Gdańska. Psychoterapia, psychoedukacja i szkolenia z rezyliencji.',
  },
  '/o-mnie': {
    name: 'O mnie',
    title: 'O mnie – Agata Hemmerling-Goc, psychoterapeutka CBT',
    description:
      'Całościowe spojrzenie na zdrowie psychiczne, praktyka oparta na dowodach i medycyna stylu życia. Doświadczenie kliniczne, psychoedukacja i współprace.',
  },
  '/psychoedukacja': {
    name: 'Psychoedukacja',
    title: 'Psychoedukacja | Agata Hemmerling-Goc',
    description:
      'Psychoedukacja jako most między nauką a codziennością: rzetelna wiedza o emocjach, myślach i reakcjach, przekazana przez metafory i własne narzędzia.',
  },
  '/psychoterapia': {
    name: 'Psychoterapia',
    title: 'Psychoterapia CBT w Gdańsku | Agata Hemmerling-Goc',
    description:
      'Psychoterapia CBT i konsultacje psychologiczne dla dzieci, młodzieży, rodziców i dorosłych w Gdańsku. Praca oparta na dowodach naukowych i superwizji.',
  },
  '/psychoterapia/dzieci-i-mlodziez': {
    name: 'Dzieci i młodzież',
    title: 'Psychoterapia dzieci i młodzieży w Gdańsku | A. Hemmerling-Goc',
    description:
      'Psychoterapia poznawczo-behawioralna dzieci i nastolatków: lęk, nastrój, regulacja emocji, kryzysy, neuroróżnorodność. Wsparcie dla rodziców.',
  },
  '/psychoterapia/dorosli': {
    name: 'Dorośli',
    title: 'Psychoterapia dorosłych w Gdańsku | Agata Hemmerling-Goc',
    description:
      'Psychoterapia poznawczo-behawioralna dorosłych: zaburzenia nastroju i lękowe, OCD, trauma, zaburzenia odżywiania, kryzysy życiowe, psychodietetyka.',
  },
  '/szkolenia': {
    name: 'Szkolenia',
    title: 'Szkolenia i warsztaty z rezyliencji | Agata Hemmerling-Goc',
    description:
      'Szkolenia, warsztaty i prelekcje o rezyliencji dla kadry pedagogicznej, uczniów, rodziców i organizacji. Program dopasowany do potrzeb placówki.',
  },
  '/wspolpraca': {
    name: 'Współpraca',
    title: 'Kontakt i współpraca | Agata Hemmerling-Goc',
    description:
      'Telefon, e-mail i adres gabinetu: Centrum Zdrowia Psychicznego Psycho Academy, ul. Okrąg 21/23, Gdańsk. Konsultacje, psychoterapia i szkolenia.',
  },
}
