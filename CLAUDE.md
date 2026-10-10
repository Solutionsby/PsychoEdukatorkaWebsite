# Psychoedukatorka

Strona osobista psycholożki/psychoterapeutki (polski, statyczna, bez backendu). Pełny brief i mapa stron: `docs/brief.md`. Lista zadań (grafiki, treści do potwierdzenia): `docs/TODO.md`. Zrzuty designu (mobile): `docs/`.

## Projekt

Marka osobista **Agaty Hemmerling-Goc**: psycholożka, certyfikowana psychoterapeutka poznawczo-behawioralna, psychodietetyczka. Odbiorcy: młodzi psychoterapeuci. Tylko polski. Design w Adobe (zrzuty mobilne w `docs/`), SVG od grafika. Desktop: brak projektu.

Strony: `/` (hasła Psychoterapia / Psychoedukacja / Szkolenia + karta z Agatą), `/o-mnie`, `/psychoedukacja`, `/psychoterapia` (hub → `/dzieci-i-mlodziez`, `/dorosli`), `/szkolenia`, `/wspolpraca` (kontakt), później `/blog`, `/blog/:slug` (headless WP). Menu: O mnie, Psychoedukacja, Psychoterapia, Szkolenia, Współpraca, BLOG (akcent `rose`).

- **Stan:** wszystkie strony z mapy mają treść i układ (mobile). **Brakuje:** grafik (zdjęcia hero, kleksy, niebo w łuku, logo, ikony, kuleczki w kartach; miejsca oznaczone `TODO`, lista w `docs/TODO.md`), `og:image` 1200×630, JSON-LD.
- **Otwarte:** desktop, animacja trzech haseł na Home, dokładne tokeny z Adobe, analityka, formularz kontaktowy, RODO, hosting (Netlify / Cloudflare Pages / Vercel).
- **Uwagi do designu:** niski kontrast jasnego nagłówka na łuku („PSYCHOTERAPIA” dla dzieci), rozstrzelone nagłówki przez `clamp()` („PSYCHOEDUKACJA” prawie dotyka krawędzi).

## Sposób pracy

Kod pisze użytkownik, Claude pomaga: doradza, sprawdza, podpowiada rozwiązania i pisze fragmenty na prośbę. Nie przebudowuj projektu ani nie dodawaj zależności bez uzgodnienia. Zmiany w małych krokach: najpierw pokaż, co zmienisz, wprowadź po akceptacji.

## Stack

Vite 8, React 19, TypeScript, Tailwind v4, React Router 8 w **framework mode** (`@react-router/dev`, `ssr: false`, prerender każdej strony do statycznego HTML), Motion, Radix Dialog. Menedżer pakietów: npm. Node ≥ 22.22 (wymóg React Routera 8.4).

## Komendy

- `npm run dev` (`react-router dev`) / `npm run build` (typegen + `tsc -b` + `react-router build`) / `npm run preview` / `npm run lint` (oxlint) / `npm run format` (Prettier + wtyczka Tailwind)
- Wynik builda: `build/client/` (strona do wdrożenia: `<strona>/index.html` dla każdej trasy, `404.html`, `sitemap.xml`, `robots.txt`). `.react-router/` = typy generowane (`+types`), w `.gitignore`.
- Dev i preview nasłuchują w sieci lokalnej (`host: true`): podgląd na telefonie pod adresem „Network” z logu Vite.

## Struktura `src/`

`root.tsx` (dokument HTML: `<html lang="pl">`, `<Meta/>`, `<Scripts/>`; domyślny `meta`), `routes.ts` (trasy budowane z `content/pages.ts` + `*` → 404), `components/` (Layout, Menu, Footer, MainHero + Hero*, wspólne bloki treści: niżej), `pages/` (moduły tras; `psychotherapy/` = hub + dzieci + dorośli), `content/` (dane: `pages.ts`, `seo.ts`, `hero.ts`, `contact.ts`, treści stron: `about.ts`, `psychoeducation.ts`, `psychotherapy.ts`, `training.ts`, typy kart z numerami: `topics.ts`), `lib/` (`cn()`, `nav.ts`), `assets/svg|img`, `public/` (pliki kopiowane bez zmian, np. `robots.txt`). Alias `@/` → `src/` (nie w `routes.ts`, tam importy względne). `react-router.config.ts`: prerender, `404.html`, generowanie `sitemap.xml`.

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
- `Menu`: nie-modalny Radix `Dialog.Root` (`modal={false}`, żeby logo i przycisk były klikalne). Logo + hamburger `z-20`, panel `z-10` wysuwany przez Motion (`AnimatePresence` + `forceMount`). Linki z `navLinks('menu')`.
- `Footer`: linki z `navLinks('footer')` (akcentowe, np. BLOG, po prawej), dane kontaktowe z `content/contact.ts`.
- `MainHero` żyje w `Layout` i nie odmontowuje się przy zmianie trasy: łuk (CSS, `rounded-t-full`) stoi, a zmienna treść animuje się przez `AnimatePresence` z `key={pathname}`. `MotionConfig reducedMotion="user"` w `Layout`.
- Animacja wejścia: pierwsze wyświetlenie animuje CSS (`motion-safe:animate-hero-in`, keyframes w `@theme`), bo działa w HTML z prerenderu przed JS; `AnimatePresence initial={false}`, żeby w HTML nie było `opacity:0`. Przejścia między stronami: Motion.
- Dane hero per strona w `src/content/hero.ts` (`HeroData`), eksportowane przez moduł strony jako `handle = { hero }`; `Layout` bierze najgłębsze (`useMatches().findLast`). Strona bez `handle.hero` = brak hero (np. 404). Każda strona ma własne `*Hero` (podstrony psychoterapii też).
- Części: `HeroFigure` (zdjęcie + dekoracja z mapy `decors`; nowa dekoracja = klucz w `HeroDecor` + komponent w mapie), `HeroHeading` (`<h1>`, linie), `HeroCard` (biała karta w przepływie, rośnie z treścią, `inset-shadow-card`). Pola karty (wszystkie opcjonalne): `title` (`<h2>` z kreską, styl z `titleClassName`) albo `title` + `subtitle` (`LeadHeading`, `subtitleClassName`), `lines` (krótkie linie, Home), `paragraphs` (akapity), `items` (punkty z kropką, O mnie), `details` (dane kontaktowe w `<address>`, Współpraca), `cta` + `link`. `card.className: '-mb-6'` = karta dotyka dołu hero (przejście w panel pod spodem).
- `HeroData.className`: klasy całej sekcji hero (np. `rounded-bl-[67px]` na hubie psychoterapii).
- Style z danych: `headingClassName`, `lineClassName` (warianty `odd:`/`even:`), `imageClassName`, `decorClassName`, `card.className`, sklejane przez `cn()` (tailwind-merge: dane nadpisują domyślne). Klasy tylko jako pełne stringi. Scena: elementy `absolute` (`top-*`); karta w przepływie: przesuwanie marginesami (`-mt-*`).

## Wspólne bloki treści (`components/`)

- `LeadHeading`: rozstrzelony `<h2>` wersalikami, tytuł (`text-lead`) + podtytuł (`text-lead-sub`).
- `TopicCard`: biała karta z numerem (dzieci, dorośli, szkolenia). Kształt rysuje tylko `inset-shadow-card` (dół prawie niewidoczny). `side` = krawędź, do której przylega (na liście: `index % 2 ? 'right' : 'left'`). Z danych (`Topic` w `content/topics.ts`): `toneClassName` (numer, tytuł), `bulletClassName` (kropki), `decor` + `decorClassName` (kuleczka SVG), `id` (kotwica). Animacja wejścia Motion `whileInView` od swojej krawędzi: rodzic strony ma `overflow-x-clip`.
- `LinkPanel`: panel `mist` z różowymi pigułkami-linkami, `side` left/right; link `to: '#id'` = kotwica (`<a>`), `icon` po prawej, `linkClassName` nadpisuje odstępy.
- `ContactCard` (szara karta: tytuł, tekst, opcjonalne zdjęcie, przycisk) i `ContactButton` (różowa pigułka „Skontaktuj się ze mną” → `/wspolpraca`).
- Karty przylegające do krawędzi: jedna strona przy ekranie, zaokrąglenie (`rounded-*-card`) tylko po drugiej; odstęp od przeciwnej krawędzi `mr-edge` / `ml-edge` (`-mr-edge` znosi margines rodzica). Karty na zmianę: `odd:`/`even:` albo `side` z indeksu.
- Panele `mist` z zaokrąglonym rogiem pod białą kartą hero: biel karty przechodzi w białe tło strony widoczne w wycięciu rogu („odwrócona fala”), dlatego strona nie ma tła na `<body>`.

## Konwencje

- Design mobile-first; desktop jeszcze nie zaprojektowany.
- Cała treść po polsku, bez i18n.
- Tokeny (kolory, fonty, animacje) w `@theme` w CSS, nie w `tailwind.config`. Kolory: `mist` (tło hero, panele), `mist-deep` (fala menu, stopka), `mist-light` (szare karty), `ink` (tekst), `ink-soft` (linki w menu, jasny tekst w kartach), `rose` (akcent), `rose-soft` (tekst w kartach: numery, tytuły, linki), `rose-light` (różowe karty i pigułki).
- Typografia płynna: `text-section` (24px), `text-number` (50px), `text-card-title` (16px), `text-card` (12px), `text-lead`, `text-lead-sub`; `clamp()` z minimum = wartość z XD (ekran 375px), rośnie z `vw`. **Nowy token `--text-*` = dopisz go do listy w `lib/cn.ts`**, inaczej tailwind-merge bierze go za kolor i usuwa przy `text-<kolor>`.
- Inne tokeny: `rounded-*-card` (65px, płynne), `inset-shadow-card` (`inset 0 3px 6px #00000029`, cień kart z XD), `*-edge` (odstęp kart od krawędzi ekranu).
- Kod renderowany też przy buildzie (prerender): bez `window`/`document` podczas renderu.
- Animacje zawsze z uwzględnieniem `prefers-reduced-motion` (`MotionConfig reducedMotion="user"` wyłącza ruch, zostaje przezroczystość). Animacje wejścia poniżej pierwszego ekranu (`whileInView`) startują z `opacity: 0` także w HTML z prerenderu; w hero tego unikamy.
- Zdjęcia: WebP/AVIF z kanałem alfa. SVG od grafiki importowane przez SVGR.
- Fonty self-hosted (Fontsource), z podzbiorem `latin-ext`.
- Blog: headless WordPress (REST API), osobny etap.
