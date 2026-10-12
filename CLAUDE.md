# Psychoedukatorka

Strona osobista psycholożki/psychoterapeutki (polski, statyczna, bez backendu). Pełny brief i mapa stron: `docs/brief.md`. Lista zadań (grafiki, treści do potwierdzenia): `docs/TODO.md`. Zrzuty designu (mobile): `docs/`.

## Projekt

Marka osobista **Agaty Hemmerling-Goc**: psycholożka, certyfikowana psychoterapeutka poznawczo-behawioralna, psychodietetyczka. Odbiorcy: młodzi psychoterapeuci. Tylko polski. Design w Adobe (zrzuty mobilne w `docs/`), SVG od grafika. Desktop: brak projektu.

Strony: `/` (hasła Psychoterapia / Psychoedukacja / Szkolenia + karta z Agatą), `/o-mnie`, `/psychoedukacja`, `/psychoterapia` (hub → `/dzieci-i-mlodziez`, `/dorosli`), `/szkolenia`, `/wspolpraca` (kontakt), później `/blog`, `/blog/:slug` (headless WP). Menu: O mnie, Psychoedukacja, Psychoterapia, Szkolenia, Współpraca, BLOG (akcent `rose`).

- **Stan:** wszystkie strony z mapy mają treść i układ (mobile); trwa wstawianie grafik (gałąź `grafiki`, z `dev`). Kolejność: grafiki → przegląd mobile na telefonie → desktop (najpierw wspólne: menu, hero, stopka, karty; potem strony). **Desktop:** w toku (gałąź `claude/Desktop`): menu, stopka, Home (hero), O mnie, hub Psychoterapii, Dzieci, Dorośli, Psychoedukacja i Współpraca zrobione wg projektu (zostały Szkolenia); brakuje nieba w łuku, wartości z XD (kolory, fonty), pozostałych stron. **Brakuje:** grafik (zdjęcia hero, kleksy, niebo w łuku, logo, ikony, kuleczki w kartach; miejsca oznaczone `TODO`, lista w `docs/TODO.md`), `og:image` 1200×630, JSON-LD.
- **Otwarte:** desktop, animacja trzech haseł na Home, dokładne tokeny z Adobe, analityka, formularz kontaktowy, RODO, hosting (Netlify / Cloudflare Pages / Vercel).
- **Uwagi do designu:** niski kontrast jasnego nagłówka na łuku („PSYCHOTERAPIA” dla dzieci), rozstrzelone nagłówki przez `clamp()` („PSYCHOEDUKACJA” prawie dotyka krawędzi).

## Sposób pracy

Kod pisze użytkownik, Claude pomaga: doradza, sprawdza, podpowiada rozwiązania i pisze fragmenty na prośbę. Projekt zwykle przekazuje zrzuty designu do `docs/` (najnowszy plik = aktualna prośba); grafiki wstawia głównie użytkownik, Claude dostraja pozycje. Nie przebudowuj projektu ani nie dodawaj zależności bez uzgodnienia. Zmiany w małych krokach: najpierw pokaż, co zmienisz, wprowadź po akceptacji.

## Stack

Vite 8, React 19, TypeScript, Tailwind v4, React Router 8 w **framework mode** (`@react-router/dev`, `ssr: false`, prerender każdej strony do statycznego HTML), Motion, Radix Dialog. Menedżer pakietów: npm. Node ≥ 22.22 (wymóg React Routera 8.4).

## Komendy

- `npm run dev` (`react-router dev`) / `npm run build` (typegen + `tsc -b` + `react-router build`) / `npm run preview` / `npm run lint` (oxlint) / `npm run format` (Prettier + wtyczka Tailwind)
- Wynik builda: `build/client/` (strona do wdrożenia: `<strona>/index.html` dla każdej trasy, `404.html`, `sitemap.xml`, `robots.txt`). `.react-router/` = typy generowane (`+types`), w `.gitignore`.
- Dev i preview nasłuchują w sieci lokalnej (`host: true`): podgląd na telefonie pod adresem „Network” z logu Vite.

## Struktura `src/`

`root.tsx` (dokument HTML: `<html lang="pl">`, `<Meta/>`, `<Scripts/>`; domyślny `meta`), `routes.ts` (trasy budowane z `content/pages.ts` + `*` → 404), `components/` (Layout, Menu, Footer, MainHero + Hero*, wspólne bloki treści: niżej), `pages/` (moduły tras; `psychotherapy/` = hub + dzieci + dorośli), `content/` (dane: `pages.ts`, `seo.ts`, `hero.ts` (typy hero), `heroPhotos.ts` (ustawienia zdjęć hero), `contact.ts`, treści stron razem z ich hero: `home.ts`, `about.ts`, `psychoeducation.ts`, `psychotherapy.ts`, `training.ts`, `cooperation.ts` (Współpraca), typy kart z numerami: `topics.ts`), `lib/` (`cn()`, `nav.ts`), `assets/svg|img`, `public/` (pliki kopiowane bez zmian, np. `robots.txt`). Alias `@/` → `src/` (nie w `routes.ts`, tam importy względne). `react-router.config.ts`: prerender, `404.html`, generowanie `sitemap.xml`.

## Strony, nawigacja, SEO

- **Nowa strona** = wpis w `content/pages.ts` (`path`, `file`, opcjonalnie `nav`) + plik w `pages/` (`export default` komponent, `export const handle = { hero }`) + wpis w `content/seo.ts`. Brak wpisu w `seo.ts` = błąd typów (`Record<PagePath, Seo>`). Trasy, menu, stopka i sitemapa uzupełniają się same.
- `pages.ts` to jedyne źródło listy stron: `routes.ts` (trasy), `lib/nav.ts` (`navLinks('menu' | 'footer')`; `nav.in` ogranicza miejsce, `nav.accent` wyróżnia, np. BLOG), sitemapa. Kolejność = kolejność w menu.
- `seo.ts`: `siteUrl` (domena `psycho-edukatorka.pl`), `pageUrl()` (adresy z ukośnikiem na końcu, jak `o-mnie/index.html` na hostingu), tytuł i opis każdej strony (opisy to szkice do akceptacji przez Agatę). `meta` w `root.tsx` wystawia title, description, og:*, canonical; 404 bez canonical. `location.pathname` przy prerenderze ma ukośnik na końcu: normalizować przed porównaniem.
- Na stronie jest jeden `<h1>`: w hero (`HeroHeading`); treść stron zaczyna się od `<h2>`. Wyjątek: 404 bez hero ma własny `<h1>`.
- W modułach tras dozwolone eksporty obok komponentu: `meta`, `links`, `handle`, `loader`, `clientLoader`, `headers` (oxlint `only-export-components`).

- SVG jako komponent: `import Logo from '@/assets/svg/logo.svg?react'` (bez `?react` import zwraca URL). Kolor przez `fill="currentColor"` w pliku + `text-*`; nie `bg-*` (koloruje prostokąt viewBoxa). Id w plikach SVG unikalne (np. `hero-blob-shadow`), bo eksporty z XD powtarzają `Path_2` itp.
- **SVG z XD/Illustratora:** SVGR nie ma SVGO, więc `<style>` z pliku trafia do HTML i działa globalnie: klasy `.cls-1`/`.cls-2` z różnych plików nadpisują się nawzajem. Eksport z _Styling: Presentation Attributes_ (bez `<style>`) albo ręcznie: usunąć `<style>`, `id`, `data-name`, kolor jako atrybut `currentColor`. Dekoracje eksportować osobno, w docelowym rozmiarze (`viewBox` w obrysie, nie 1785×226), wtedy grubość linii i przerwy są jak w designie; inaczej `vector-effect="non-scaling-stroke"`. Wzór oczyszczonego pliku: `assets/svg/psychotherapy-balls-2.svg`.
- Nazwy grafik: angielski kebab-case, prefiks strony (`about-`, `psychoeducation-`, `psychotherapy-`, `training-`), wspólne bez prefiksu (`hero-blob`, `menu-wave`, `wave-light`), zdjęcia `agata-<kadr>`.
- Zdjęcia: `import foto from '@/assets/img/x.png?format=webp&as=metadata'` → `{ src, width, height }` (typy w `src/imagetools.d.ts`). Duże pliki (zdjęcia `agata-*.png` ~4600×7000) z `?w=800&format=webp&as=metadata`. Pliki z grafiki mają przezroczyste marginesy: przycinać do treści (`sharp(f).trim({ threshold: 1 })`, skrypt node w projekcie, `sharp` jest z vite-imagetools), inaczej `w-*` i pozycje liczą się z pustym tłem. Przycięte już: wszystkie `agata-*.png`, `psychoeducation-icon-*`, `training-icon-*`. Obraz poniżej pierwszego ekranu: `loading="lazy"`.
- Zdjęcie szersze niż ekran bez poziomego scrolla: rodzic `overflow-hidden`, `img` `relative left-1/2 w-[108%] max-w-none -translate-x-1/2` (`max-w-none`, bo preflight daje `img` `max-width: 100%`). Nie `w-screen` (100vw wlicza pasek przewijania na desktopie).

## Layout i hero

- `Layout` (`components/Layout.tsx`, w `root.tsx` jako `SiteLayout`): `Menu` (fixed, `z-50`, fala `menu-wave.svg` pod spodem) + `MainHero` + `<main><Outlet/></main>` + `Footer`. Hero zaczyna się od góry ekranu, pod menu.
- `Menu`: nie-modalny Radix `Dialog.Root` (`modal={false}`, żeby logo i przycisk były klikalne). Logo + hamburger `z-20`, panel `z-10` wysuwany przez Motion (`AnimatePresence` + `forceMount`). Linki z `navLinks('menu')`.
- `Footer`: linki z `navLinks('footer')` (akcentowe, np. BLOG, po prawej), dane kontaktowe z `content/contact.ts`. Desktop: `body` `lg:flex lg:min-h-svh lg:flex-col`, stopka `lg:grow`, więc na krótkiej stronie dochodzi do dołu ekranu. Tła wychodzące pod stopkę ucinać pojemnikiem `absolute … bottom-0 overflow-hidden` (`clip-path` ucina tylko wizualnie, strona i tak się wydłuża).
- `MainHero` żyje w `Layout` i nie odmontowuje się przy zmianie trasy: łuk (CSS, `rounded-t-full`) stoi, a zmienna treść animuje się przez `AnimatePresence` z `key={pathname}`. `MotionConfig reducedMotion="user"` w `Layout`.
- Animacja wejścia: pierwsze wyświetlenie animuje CSS (`motion-safe:animate-hero-in`, keyframes w `@theme`), bo działa w HTML z prerenderu przed JS; `AnimatePresence initial={false}`, żeby w HTML nie było `opacity:0`. Przejścia między stronami: Motion.
- Dane hero per strona w pliku treści strony (np. `aboutHero` w `content/about.ts`; typ `HeroData` w `content/hero.ts`), eksportowane przez moduł strony jako `handle = { hero }`; `Layout` bierze najgłębsze (`useMatches().findLast`). Strona bez `handle.hero` = brak hero (np. 404). Każda strona ma własne `*Hero` (podstrony psychoterapii też).
- Części: `HeroFigure` (zdjęcie + dekoracja z mapy `decors` w jednym pojemniku przypiętym do dołu sceny: dół zdjęcia chowa się pod kartą, kleks pozycjonowany w % zdjęcia jedzie z nim; nowa dekoracja = klucz w `HeroDecor` + komponent w mapie; `imageAlt` domyślnie „Agata Hemmerling-Goc”), `HeroHeading` (`<h1>`, linie), `HeroCard` (biała karta w przepływie, rośnie z treścią, `inset-shadow-card`). Pola karty (wszystkie opcjonalne): `title` (`<h2>` z kreską, styl z `titleClassName`) albo `title` + `subtitle` (`LeadHeading`, `subtitleClassName`), `lines` (krótkie linie, Home), `paragraphs` (akapity), `items` (punkty z kropką, O mnie), `details` (dane kontaktowe w `<address>`, Współpraca), `cta` + `link`. `card.className: '-mb-6'` = karta dotyka dołu hero (przejście w panel pod spodem).
- `HeroData.className`: klasy całej sekcji hero (np. `rounded-bl-[67px]` na hubie psychoterapii).
- Style z danych: `headingClassName`, `lineClassName` (warianty `odd:`/`even:`), `imageClassName`, `decorClassName`, `card.className`, sklejane przez `cn()` (tailwind-merge: dane nadpisują domyślne). Klasy tylko jako pełne stringi. Zdjęcia: ustawienia raz na zdjęcie w `photos` (`content/heroPhotos.ts`), strona robi `...photos.x`, żeby Agata stała tak samo na każdej stronie; wartości w % (`left-[5%] w-[50%]`), `translate-y-[%]` wyrównuje głowę między kadrami, bez `top-*`. Od 480px szerokość z limitem wysokości ekranu (`min-[480px]:w-[min(%,max(rem,calc((100svh-…)/proporcje)))]`), żeby na tablecie i telefonie poziomo zdjęcie nie zasłaniało nagłówka; telefon w pionie: samo %. Nie `cqh` (Chrome liczy je od kontenera bez `min-height`, wychodzi 0). Nagłówek: `absolute` z `top-*`; karta w przepływie: przesuwanie marginesami (`-mt-*`).

## Desktop

- Od `lg:` (1024px); tablet = układ mobilny (karty do 44rem, patrz `edge`; tekst kart hero do ~40rem). Projekt: artboard 1920 (viewport 1920×1080), zrzuty w `docs/`. Gałąź `claude/Desktop`.
- Wymiary w `vw` z projektu: px z XD / 19.2 (np. 122px → `6.35vw`), więc kompozycja jest ta sama na 1024–1920. Tekst ciągły z minimum: `text-[max(0.8125rem,1.15vw)]` (13px: przy 1024 tekst mieści się w blobach; 14px wychodził).
- Klasy desktopowe obok mobilnych (`lg:*`), w komponentach (wspólny układ) i w danych stron (pozycje), jak na telefonie.
- Menu: linki w poziomie (`NavLink`, aktywna = kreska pod spodem), `nav.pill` = pigułka z obrysem (Współpraca); hamburger i panel tylko poniżej `lg`.
- Hero: wysokość `56.25vw`, scena `absolute inset-0`, łuk z wymiarów projektu (otwór 534px od x=1174, y=171), karta = półprzezroczysty blob (`bg-white/50`) pozycjonowany z `card.className`. Warstwy: kleks < blob (karta `z-30`) < zdjęcie (`lg:z-40`).
- Tła stron z SVG (fale, chmurki, linie, schemat): `<img>` z adresem pliku (import bez `?react`), nie SVGR: stałe kolory, filtry cieni, `<style>` zostaje w obrazku. Strona z tłami wychodzącymi poza ekran: `lg:overflow-x-clip lg:isolate`, warstwy `-z-*` (wzór: `pages/About.tsx`).
- Hero per strona: `className: 'lg:h-[…]'` (wyższe hero, np. O mnie), `subheading` (linie pod nagłówkiem), `card.blob` (kształt karty z SVG), `card.actionsClassName` (np. przycisk tylko na desktopie), `card.paragraphsClassName`, `titleClassName` też dla `LeadHeading`, `arcClassName` (łuk krótszy niż hero). Zdjęcie poza hero na desktopie (hub): `lg:hidden` w `imageClassName` i osobny `<img>` na stronie. Pionowy napis „psychoedukatorka” przy prawej krawędzi: `fixed` w `Layout` (jedzie z przewijaniem). `LinkPanel`: `titleClassName`, `listClassName`, `arrow` (strzałka z kresek na desktopie). Zdjęcie Agaty w tym samym miejscu na każdej stronie: przy wyższym hero `lg:bottom-[…]`.
- `TopicCard` desktop: bez karty, numer z kreską; `wide` = lista w dwóch kolumnach pod tytułem (Dzieci 01), inaczej tytuł z lewej, lista z prawej. `Topic.short` = etykieta w nawigacji 01–04 (`TopicNav`: jasny pas z falą i skrótami, Dzieci i Dorośli). Szerokości kolumn per strona: `headClassName`, `listClassName`, `termClassName`, `textClassName`. `ContactCard`/`ContactButton` mają wariant desktop (pigułka ze strzałką). SVG z `<style>` używane jako komponent: oczyszczona kopia z `currentColor` (`psychotherapy-balls-3/4.svg`).
- Okna w kształcie kleksa (Psychoedukacja): `HoleWindow` = div z `mask-image` z pliku `psychoeducation-hole-1/2.svg` (wycięty otwór z kleksa na Agatę), za zdjęciem tło (docelowo niebo). Karta hero: `card.sections` (bloki tylko na desktopie). `docs/` poza repozytorium (.gitignore).
- Porównanie z projektem: zrzut 1920×1080 i nałożony zrzut z XD (50%); zrzut z XD 11.13.26 ma skalę 1.918 px projektu na px i początek artboardu w (17, 21).

## Wspólne bloki treści (`components/`)

- `LeadHeading`: rozstrzelony `<h2>` wersalikami, tytuł (`text-lead`) + podtytuł (`text-lead-sub`).
- `TopicCard`: biała karta z numerem (dzieci, dorośli, szkolenia). Kształt rysuje tylko `inset-shadow-card` (dół prawie niewidoczny). `side` = krawędź, do której przylega (na liście: `index % 2 ? 'right' : 'left'`). Z danych (`Topic` w `content/topics.ts`): `toneClassName` (numer, tytuł), `bulletClassName` (kropki), `decor` + `decorClassName` (kuleczka SVG), `decorPlacement` (`'beside'` domyślnie: `absolute`, nie zmienia układu, pozycja `top-*`/`left-*`; `'between'`: w przepływie między tytułem a listą, pozycja marginesami), `id` (kotwica). Karta przy prawej krawędzi + strona z `overflow-x-clip`: dekoracja z `-right-*` znika za ekranem. Animacja wejścia Motion `whileInView` od swojej krawędzi: rodzic strony ma `overflow-x-clip`.
- `LinkPanel`: panel `mist` z różowymi pigułkami-linkami, `side` left/right; link `to: '#id'` = kotwica (`<a>`), `icon` po prawej, `linkClassName` nadpisuje odstępy.
- `ContactCard` (szara karta: tytuł, tekst, opcjonalne zdjęcie, przycisk) i `ContactButton` (różowa pigułka „Skontaktuj się ze mną” → `/wspolpraca`).
- Karty przylegające do krawędzi: jedna strona przy ekranie, zaokrąglenie (`rounded-*-card`) tylko po drugiej; odstęp od przeciwnej krawędzi `mr-edge` / `ml-edge` (`-mr-edge` znosi margines rodzica). `--spacing-edge` = `max(1rem, 100% - 44rem)` (od `lg`: 1rem): na tablecie karta ma najwyżej 44rem i stoi przy swojej krawędzi; `%` liczy się od rodzica, więc karta zagnieżdżona w takim bloku dostaje 1rem. Nie używać `px-edge` (padding z obu stron zwęża blok); wyśrodkowanie: `mx-auto max-w-176 px-4`. Karty na zmianę: `odd:`/`even:` albo `side` z indeksu.
- Panele `mist` z zaokrąglonym rogiem pod białą kartą hero: biel karty przechodzi w białe tło strony widoczne w wycięciu rogu („odwrócona fala”), dlatego strona nie ma tła na `<body>`.

## Podgląd jak na telefonie (dla Claude)

Headless Chrome z `--window-size=390,…` daje za szeroki układ (minimalna szerokość okna) i wysokie okno rozciąga hero (`min-h-svh`), więc takie zrzuty mylą. Używać `puppeteer-core` z systemowym Chrome (`/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`), instalowanego w katalogu tymczasowym (scratchpad), nie w projekcie: `setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true })`, `prefers-reduced-motion: reduce` (animacje wejścia od razu widoczne), `scrollIntoView` na element, potem zrzut; sprawdzać też `document.documentElement.scrollWidth === 390` (brak poziomego scrolla) i błędy konsoli. Dev server użytkownika zwykle działa na `localhost:5173`.

## Konwencje

- Design mobile-first; desktop jeszcze nie zaprojektowany.
- Cała treść po polsku, bez i18n.
- Polska typografia: eksporty danych w `content/` owinięte w `typo()` (`lib/typography.ts`): spacja po jednoliterowym słowie (i, w, z…) zamieniana na twardą, więc słowo nie zostaje na końcu linii. Pomija pola `*ClassName`, `to`, `href`, `src`, `id`, `blob`. Nowy eksport z tekstem = też w `typo()`. Pojedynczy tekst poza danymi: `nbsp()`.
- Tokeny (kolory, fonty, animacje) w `@theme` w CSS, nie w `tailwind.config`. Kolory: `mist` (tło hero, panele), `mist-deep` (fala menu, stopka), `mist-light` (szare karty), `ink` (tekst), `ink-soft` (linki w menu, jasny tekst w kartach), `rose` (akcent), `rose-soft` (tekst w kartach: numery, tytuły, linki), `rose-light` (różowe karty i pigułki).
- Typografia płynna: `text-section` (24px), `text-number` (50px), `text-card-title` (16px), `text-card` (12px), `text-lead`, `text-lead-sub`, `text-hero` (`<h1>` w hero, 7.5vw); `clamp()` z minimum = wartość z XD (ekran 375px), rośnie z `vw`. **Nowy token `--text-*` = dopisz go do listy w `lib/cn.ts`**, inaczej tailwind-merge bierze go za kolor i usuwa przy `text-<kolor>`.
- Inne tokeny: `rounded-*-card` (65px, płynne), `inset-shadow-card` (`inset 0 3px 6px #00000029`, cień kart z XD), `*-edge` (odstęp kart od krawędzi ekranu; na tablecie rośnie, patrz Wspólne bloki).
- Kod renderowany też przy buildzie (prerender): bez `window`/`document` podczas renderu.
- Animacje zawsze z uwzględnieniem `prefers-reduced-motion` (`MotionConfig reducedMotion="user"` wyłącza ruch, zostaje przezroczystość). Animacje wejścia poniżej pierwszego ekranu (`whileInView`) startują z `opacity: 0` także w HTML z prerenderu; w hero tego unikamy.
- Zdjęcia: WebP/AVIF z kanałem alfa. SVG od grafiki importowane przez SVGR.
- Fonty self-hosted (Fontsource), z podzbiorem `latin-ext`: `font-serif` (Playfair Display, cała strona), `font-script` (Sacramento, logo w Menu i Footer; bez `italic`).
- Blog: headless WordPress (REST API), osobny etap.
