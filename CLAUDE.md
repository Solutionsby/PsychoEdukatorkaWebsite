# Psychoedukatorka

Strona osobista psycholożki/psychoterapeutki (polski, statyczna, bez backendu). Pełny brief i mapa stron: `docs/brief.md`. Zrzuty designu (mobile): `docs/`.

## Sposób pracy

Kod pisze użytkownik, Claude pomaga: doradza, sprawdza, podpowiada rozwiązania i pisze fragmenty na prośbę. Nie przebudowuj projektu ani nie dodawaj zależności bez uzgodnienia.

## Stack

Vite 8, React 19, TypeScript, Tailwind v4, React Router 8 (tryb declarative, `createBrowserRouter` w `src/routes.tsx`), Motion, Radix Dialog. Menedżer pakietów: npm.

## Komendy

- `npm run dev` / `npm run build` / `npm run lint` (oxlint) / `npm run format` (Prettier + wtyczka Tailwind)
- Dev i preview nasłuchują w sieci lokalnej (`host: true`): podgląd na telefonie pod adresem „Network” z logu Vite.

## Struktura `src/`

`components/` (Layout, Menu, MainHero + Hero*), `pages/` (`psychotherapy/` = hub + dzieci + dorośli), `content/` (teksty i dane hero), `lib/` (`cn()`), `assets/svg|img`. Alias `@/` → `src/`.

- SVG jako komponent: `import Logo from '@/assets/svg/logo.svg?react'` (bez `?react` import zwraca URL). Kolor przez `fill="currentColor"` w pliku + `text-*`; nie `bg-*` (koloruje prostokąt viewBoxa). Id w plikach SVG unikalne (np. `kleksHero-shadow`), bo eksporty z XD powtarzają `Path_2` itp.
- Zdjęcia: `import foto from '@/assets/img/x.png?format=webp&as=metadata'` → `{ src, width, height }` (typy w `src/imagetools.d.ts`).

## Layout i hero

- `Layout`: `Menu` (fixed, `z-50`, fala `menuTlo.svg` pod spodem) + `MainHero` + `<main><Outlet/></main>`. Hero zaczyna się od góry ekranu, pod menu.
- `MainHero` żyje w `Layout` i nie odmontowuje się przy zmianie trasy: łuk (CSS, `rounded-t-full`) stoi, a zmienna treść animuje się przez `AnimatePresence` z `key={pathname}`. `MotionConfig reducedMotion="user"` w `Layout`.
- Dane hero per strona w `src/content/hero.ts` (`HeroData`), przypięte do tras przez `handle: { hero }` w `routes.tsx`; `Layout` bierze najgłębsze (`useMatches().findLast`). Trasa bez `handle.hero` = brak hero (np. 404). Dzieci `/psychoterapia` dziedziczą hero rodzica.
- Części: `HeroFigure` (zdjęcie + dekoracja z mapy `decors`; nowa dekoracja = klucz w `HeroDecor` + komponent w mapie), `HeroHeading` (`<h1>`, linie), `HeroCard` (biała karta w przepływie, rośnie z treścią; tytuł `<h2>`, `cta` + `link`).
- Style z danych: `headingClassName`, `lineClassName` (warianty `odd:`/`even:`), `imageClassName`, `decorClassName`, `card.className`, sklejane przez `cn()` (tailwind-merge: dane nadpisują domyślne). Klasy tylko jako pełne stringi. Scena: elementy `absolute` (`top-*`); karta w przepływie: przesuwanie marginesami (`-mt-*`).

## Konwencje

- Design mobile-first; desktop jeszcze nie zaprojektowany.
- Cała treść po polsku, bez i18n.
- Tokeny (kolory, fonty) w `@theme` w CSS, nie w `tailwind.config`. Kolory: `mist` (tło hero), `ink` (tekst), `rose` (akcent).
- Animacje zawsze z uwzględnieniem `prefers-reduced-motion`.
- Zdjęcia: WebP/AVIF z kanałem alfa. SVG od grafiki importowane przez SVGR.
- Fonty self-hosted (Fontsource), z podzbiorem `latin-ext`.
- Blog: headless WordPress (REST API), osobny etap.
