# Psychoedukatorka

Strona osobista psycholożki/psychoterapeutki (polski, statyczna, bez backendu). Pełny brief i mapa stron: `docs/brief.md`. Zrzuty designu (mobile): `docs/`.

## Sposób pracy

Kod pisze użytkownik, Claude pomaga: doradza, sprawdza, podpowiada rozwiązania i pisze fragmenty na prośbę. Nie przebudowuj projektu ani nie dodawaj zależności bez uzgodnienia.

## Stack

Vite 8, React 19, TypeScript, Tailwind v4, React Router 8 (tryb declarative, `createBrowserRouter` w `src/routes.tsx`), Motion, Radix Dialog. Menedżer pakietów: npm.

## Komendy

- `npm run dev` / `npm run build` / `npm run lint` (oxlint) / `npm run format` (Prettier + wtyczka Tailwind)

## Struktura `src/`

`components/` (Layout, PageHero, ...), `pages/` (`psychotherapy/` = hub + dzieci + dorośli), `content/` (teksty), `lib/` (`cn()`), `assets/svg|img`. Alias `@/` → `src/`. SVG jako komponent: `import Logo from '@/assets/svg/logo.svg?react'`.

## Konwencje

- Design mobile-first; desktop jeszcze nie zaprojektowany.
- Cała treść po polsku, bez i18n.
- Tokeny (kolory, fonty) w `@theme` w CSS, nie w `tailwind.config`.
- Animacje zawsze z uwzględnieniem `prefers-reduced-motion`.
- Zdjęcia: WebP/AVIF z kanałem alfa. SVG od grafiki importowane przez SVGR.
- Fonty self-hosted (Fontsource), z podzbiorem `latin-ext`.
- Blog: headless WordPress (REST API), osobny etap.
