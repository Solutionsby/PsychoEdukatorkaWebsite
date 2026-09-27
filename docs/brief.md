# Psychoedukatorka — brief

## Cel
Strona promująca markę osobistą **Agaty Hemmerling-Goc** (psycholożka, certyfikowana psychoterapeutka poznawczo-behawioralna, psychodietetyczka). Odbiorcy: **młodzi psychoterapeuci**. Język: **tylko polski**.

## Zakres
- Frontend statyczny, **bez backendu** (na razie).
- **Blog headless** na WordPressie (WP REST API), później — nie w pierwszym etapie.
- Design w Adobe, zrzuty mobilne w `docs/`. Desktop: brak, do ustalenia. SVG od grafiki dostarczone.

## Mapa stron
| Ścieżka | Strona |
|---|---|
| `/` | Home (hasła: Psychoterapia / Psychoedukacja / Szkolenia + karta z Agatą) |
| `/o-mnie` | O mnie (praktyka kliniczna, psychoedukacja i szkolenia, doświadczenie) |
| `/psychoedukacja` | Psychoedukacja |
| `/psychoterapia` | Hub — wybór: dzieci i młodzież / dorośli |
| `/psychoterapia/dzieci-i-mlodziez` | Psychoterapia dzieci, młodzieży, rodziców i opiekunów |
| `/psychoterapia/dorosli` | Psychoterapia dorosłych |
| `/szkolenia` | Szkolenia |
| `/wspolpraca` | Współpraca / kontakt |
| `/blog`, `/blog/:slug` | Blog (headless WP) — później |

Menu (hamburger, overlay): O mnie, Psychoedukacja, Psychoterapia, Szkolenia, Współpraca, BLOG (kolor akcentowy).

## Wspólny układ strony (z designu)
Falowany nagłówek z logo (kaligrafia, SVG) i hamburgerem → łuk z chmurami → wycięta postać na różowej plamie → rozstrzelony nagłówek nakładający się na łuk → biała karta z zaokrągleniem wychodzącym za krawędź. Łuk jest stały, zmieniają się zdjęcie, nagłówek i karta (`MainHero` sterowany danymi z `src/content/hero.ts`).

## Stan prac
- Gotowe: menu (fala, fixed; bez logo, hamburgera i overlay), hero z łukiem, zdjęciem, kleksem, hasłami i białą kartą, animacja zmiany strony, stopka (linki z listy stron, kontakt). Dane hero: pełne dla Home, pozostałe strony tylko nagłówek.
- SEO: prerender każdej strony do HTML, tytuły/opisy (szkice, do akceptacji), canonical, Open Graph, `sitemap.xml`, `robots.txt`, `404.html`. Domena: `psycho-edukatorka.pl`.
- Brakuje: zdjęcie nieba do łuku, logo, hamburger + overlay (Radix Dialog), zdjęcia i karty dla pozostałych stron, `og:image` (grafika 1200×630), dane strukturalne JSON-LD.

## Stack
Vite, React 19, TypeScript, Tailwind v4, React Router 8 (framework mode, prerender do statycznego HTML), Motion (animacje), Radix UI/Headless UI (menu), Fontsource Playfair Display (`latin-ext`), vite-plugin-svgr, vite-imagetools.

## Decyzje otwarte
- Wersja desktop (układ łuk + karta).
- Zachowanie Home: trzy hasła naraz — animacja/scroll?
- Dokładne tokeny (kolory, odstępy) z Adobe; wstępne kolory `mist`/`ink`/`rose` w `src/index.css`.
- Analityka, formularz kontaktowy, polityka prywatności/RODO.
- Hosting (Netlify / Cloudflare Pages / Vercel).

## Uwagi
- Kontrast jasnego nagłówka na łuku (zwł. „PSYCHOTERAPIA" w wersji dla dzieci) jest niski — omówić z grafiką.
- Nagłówki rozstrzelone: rozmiary przez `clamp()` (fluid typography), „PSYCHOEDUKACJA" prawie dotyka krawędzi na zrzucie.
- Zdjęcia z przezroczystością: WebP/AVIF z alfa, nie PNG.
- Respektować `prefers-reduced-motion`.
