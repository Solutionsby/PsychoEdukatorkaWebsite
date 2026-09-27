# Psychoedukatorka

Strona osobista psycholożki/psychoterapeutki (polski, statyczna, bez backendu). Pełny brief i mapa stron: `docs/brief.md`. Zrzuty designu (mobile): `docs/`.

## Sposób pracy

Kod pisze użytkownik, Claude pomaga: doradza, sprawdza, podpowiada rozwiązania i pisze fragmenty na prośbę. Nie przebudowuj projektu ani nie dodawaj zależności bez uzgodnienia. Zmiany w małych krokach: najpierw pokaż, co zmienisz, wprowadź po akceptacji.

## Stack

Vite 8, React 19, TypeScript, Tailwind v4, React Router 8 w **framework mode** (`@react-router/dev`, `ssr: false`, prerender każdej strony do statycznego HTML), Motion, Radix Dialog. Menedżer pakietów: npm. Node ≥ 22.22 (wymóg React Routera 8.4).

## Komendy

- `npm run dev` (`react-router dev`) / `npm run build` (typegen + `tsc -b` + `react-router build`) / `npm run preview` / `npm run lint` (oxlint) / `npm run format` (Prettier + wtyczka Tailwind)
- Wynik builda: `build/client/` (strona do wdrożenia: `<strona>/index.html` dla każdej trasy, `404.html`, `sitemap.xml`, `robots.txt`). `.react-router/` = typy generowane (`+types`), w `.gitignore`.
- Dev i preview nasłuchują w sieci lokalnej (`host: true`): podgląd na telefonie pod adresem „Network” z logu Vite.

## Struktura `src/`

`root.tsx` (dokument HTML: `<html lang="pl">`, `<Meta/>`, `<Scripts/>`; domyślny `meta`), `routes.ts` (trasy budowane z `content/pages.ts` + `*` → 404), `components/` (Layout, Menu, Footer, MainHero + Hero*), `pages/` (moduły tras; `psychotherapy/` = hub + dzieci + dorośli), `content/` (dane: `pages.ts`, `seo.ts`, `hero.ts`, `contact.ts`), `lib/` (`cn()`, `nav.ts`), `assets/svg|img`, `public/` (pliki kopiowane bez zmian, np. `robots.txt`). Alias `@/` → `src/` (nie w `routes.ts`, tam importy względne). `react-router.config.ts`: prerender, `404.html`, generowanie `sitemap.xml`.

## Strony, nawigacja, SEO

- **Nowa strona** = wpis w `content/pages.ts` (`path`, `file`, opcjonalnie `nav`) + plik w `pages/` (`export default` komponent, `export const handle = { hero }`) + wpis w `content/seo.ts`. Brak wpisu w `seo.ts` = błąd typów (`Record<PagePath, Seo>`). Trasy, menu, stopka i sitemapa uzupełniają się same.
- `pages.ts` to jedyne źródło listy stron: `routes.ts` (trasy), `lib/nav.ts` (`navLinks('menu' | 'footer')`; `nav.in` ogranicza miejsce, `nav.accent` wyróżnia, np. BLOG), sitemapa. Kolejność = kolejność w menu.
- `seo.ts`: `siteUrl` (domena `psycho-edukatorka.pl`), `pageUrl()` (adresy z ukośnikiem na końcu, jak `o-mnie/index.html` na hostingu), tytuł i opis każdej strony (opisy to szkice do akceptacji przez Agatę). `meta` w `root.tsx` wystawia title, description, og:*, canonical; 404 bez canonical. `location.pathname` przy prerenderze ma ukośnik na końcu: normalizować przed porównaniem.
- Na stronie jest jeden `<h1>`: w hero (`HeroHeading`); treść stron zaczyna się od `<h2>`. Wyjątek: 404 bez hero ma własny `<h1>`.
- W modułach tras dozwolone eksporty obok komponentu: `meta`, `links`, `handle`, `loader`, `clientLoader`, `headers` (oxlint `only-export-components`).

- SVG jako komponent: `import Logo from '@/assets/svg/logo.svg?react'` (bez `?react` import zwraca URL). Kolor przez `fill="currentColor"` w pliku + `text-*`; nie `bg-*` (koloruje prostokąt viewBoxa). Id w plikach SVG unikalne (np. `kleksHero-shadow`), bo eksporty z XD powtarzają `Path_2` itp.
- Zdjęcia: `import foto from '@/assets/img/x.png?format=webp&as=metadata'` → `{ src, width, height }` (typy w `src/imagetools.d.ts`).

## Layout i hero

- `Layout` (`components/Layout.tsx`, w `root.tsx` jako `SiteLayout`): `Menu` (fixed, `z-50`, fala `menuTlo.svg` pod spodem) + `MainHero` + `<main><Outlet/></main>` + `Footer`. Hero zaczyna się od góry ekranu, pod menu.
- `MainHero` żyje w `Layout` i nie odmontowuje się przy zmianie trasy: łuk (CSS, `rounded-t-full`) stoi, a zmienna treść animuje się przez `AnimatePresence` z `key={pathname}`. `MotionConfig reducedMotion="user"` w `Layout`.
- Animacja wejścia: pierwsze wyświetlenie animuje CSS (`motion-safe:animate-hero-in`, keyframes w `@theme`), bo działa w HTML z prerenderu przed JS; `AnimatePresence initial={false}`, żeby w HTML nie było `opacity:0`. Przejścia między stronami: Motion.
- Dane hero per strona w `src/content/hero.ts` (`HeroData`), eksportowane przez moduł strony jako `handle = { hero }`; `Layout` bierze najgłębsze (`useMatches().findLast`). Strona bez `handle.hero` = brak hero (np. 404). Podstrony psychoterapii mają na razie hero huba.
- Części: `HeroFigure` (zdjęcie + dekoracja z mapy `decors`; nowa dekoracja = klucz w `HeroDecor` + komponent w mapie), `HeroHeading` (`<h1>`, linie), `HeroCard` (biała karta w przepływie, rośnie z treścią; tytuł `<h2>`, `cta` + `link`).
- Style z danych: `headingClassName`, `lineClassName` (warianty `odd:`/`even:`), `imageClassName`, `decorClassName`, `card.className`, sklejane przez `cn()` (tailwind-merge: dane nadpisują domyślne). Klasy tylko jako pełne stringi. Scena: elementy `absolute` (`top-*`); karta w przepływie: przesuwanie marginesami (`-mt-*`).

## Konwencje

- Design mobile-first; desktop jeszcze nie zaprojektowany.
- Cała treść po polsku, bez i18n.
- Tokeny (kolory, fonty, animacje) w `@theme` w CSS, nie w `tailwind.config`. Kolory: `mist` (tło hero), `mist-deep` (fala menu, stopka), `ink` (tekst), `rose` (akcent).
- Kod renderowany też przy buildzie (prerender): bez `window`/`document` podczas renderu.
- Animacje zawsze z uwzględnieniem `prefers-reduced-motion`.
- Zdjęcia: WebP/AVIF z kanałem alfa. SVG od grafiki importowane przez SVGR.
- Fonty self-hosted (Fontsource), z podzbiorem `latin-ext`.
- Blog: headless WordPress (REST API), osobny etap.
