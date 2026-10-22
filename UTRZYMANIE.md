# Utrzymanie strony psycho-edukatorka.pl

Praktyczna instrukcja: co gdzie leży i jak wprowadzić typowe zmiany. Szczegóły techniczne i konwencje kodu są w `CLAUDE.md`.

## Szybki start

Wymagania: Node ≥ 22.22, npm.

| Komenda           | Co robi                                                                                            |
| ----------------- | -------------------------------------------------------------------------------------------------- |
| `npm install`     | instaluje zależności (raz, po sklonowaniu)                                                         |
| `npm run dev`     | podgląd na żywo: `http://localhost:5173`; na telefonie adres „Network” z logu (ta sama sieć Wi-Fi) |
| `npm run build`   | sprawdza typy i buduje gotową stronę do `build/client/`                                            |
| `npm run preview` | podgląd zbudowanej strony (tak, jak będzie na hostingu)                                            |
| `npm run lint`    | szuka błędów w kodzie                                                                              |
| `npm run format`  | formatuje kod (Prettier, porządkuje też klasy Tailwind)                                            |

Gałęzie: praca na osobnej gałęzi → merge do `dev`; `main` = gałąź główna.

## Mapa projektu (co gdzie jest)

```
src/
  content/     TREŚĆ: same teksty, opisy zdjęć, linki (tu robisz zmiany w tekstach)
  design/      WYGLĄD z projektu: klasy Tailwind, pozycje, kolory kart, kształty, zdjęcia w hero
  pages/       strony: układ sekcji danej strony (łączy content/ i design/)
  components/  elementy wspólne: menu, stopka, hero, karty, panele
    ui/        małe klocki: Image, DecorImage, Wave, Paragraphs, SmartLink, ArrowIcon
  lib/         funkcje pomocnicze (typografia, nawigacja, łączenie treści z wyglądem)
  assets/      grafiki: img/ (zdjęcia PNG), svg/ (kształty, fale, ikony)
  index.css    kolory, fonty, rozmiary tekstu (tokeny w @theme)
public/        pliki kopiowane bez zmian (robots.txt)
```

Zasada: **tekst zmieniasz w `content/`, wygląd w `design/` albo w `pages/`.** W `content/` nie ma żadnych klas CSS.

### Która strona = które pliki

| Strona                             | Treść                        | Wygląd                      | Układ strony                     |
| ---------------------------------- | ---------------------------- | --------------------------- | -------------------------------- |
| `/` Home (całość w hero)           | `content/home.ts`            | `design/home.ts`            | `pages/Home.tsx`                 |
| `/o-mnie`                          | `content/about.ts`           | `design/about.ts`           | `pages/About.tsx`                |
| `/psychoedukacja`                  | `content/psychoeducation.ts` | `design/psychoeducation.ts` | `pages/Psychoeducation.tsx`      |
| `/psychoterapia` (hub)             | `content/psychotherapy.ts`   | `design/psychotherapy.ts`   | `pages/psychotherapy/Hub.tsx`    |
| `/psychoterapia/dzieci-i-mlodziez` | `content/psychotherapy.ts`   | `design/psychotherapy.ts`   | `pages/psychotherapy/Kids.tsx`   |
| `/psychoterapia/dorosli`           | `content/psychotherapy.ts`   | `design/psychotherapy.ts`   | `pages/psychotherapy/Adults.tsx` |
| `/szkolenia`                       | `content/training.ts`        | `design/training.ts`        | `pages/Training.tsx`             |
| `/wspolpraca`                      | `content/cooperation.ts`     | `design/cooperation.ts`     | `pages/Contact.tsx`              |
| 404                                | —                            | —                           | `pages/NotFound.tsx`             |

Wspólne dla wielu stron:

| Co                                   | Plik                               |
| ------------------------------------ | ---------------------------------- |
| dane kontaktowe (stopka, Współpraca) | `content/contact.ts`               |
| tytuły zawodowe Agaty (Home, O mnie) | `credentials` w `content/about.ts` |
| tytuły i opisy stron dla Google      | `content/seo.ts`                   |
| lista stron, menu, stopka, sitemap   | `content/pages.ts`                 |
| zdjęcia Agaty w hero (pozycje)       | `design/heroPhotos.ts`             |

## Najczęstsze zmiany

### Zmiana tekstu

1. Znajdź stronę w tabeli wyżej i otwórz plik z `content/`.
2. Wyszukaj fragment tekstu (Cmd+F) i popraw go między apostrofami `'…'`.
3. Zapisz: `npm run dev` od razu pokaże zmianę.

Dobrze wiedzieć:

- **Apostrof w tekście:** tekst jest w `'…'`, więc apostrof wewnątrz zapisz jako `\'` albo użyj `’`. Cudzysłowy „…” i półpauza — wpisuj normalnie.
- **Jednoliterowe słowa** (i, w, z, o…) same przechodzą do następnej linii (funkcja `typo()`), nie trzeba wstawiać twardych spacji.
- **`\n` w tytule** (np. `'Rezyliencja\nw edukacji'`) = złamanie linii na desktopie; na telefonie zwykła spacja.
- Komentarze `// tylko desktop` / `// telefon` mówią, gdzie dany tekst jest widoczny.
- Karta w hero ma pola: `title`, `subtitle`, `paragraphs` (akapity), `lines` (krótkie linie), `items` (punkty), `cta` (różowy przycisk), `link` (podkreślony link).

### Dane kontaktowe (telefon, e-mail, adres)

`content/contact.ts`. Zmieniaj parami: `label` (co widać) i `href` (`tel:+48…`, `mailto:…`). Zmiana pojawi się w stopce i na stronie Współpraca.

### Tytuł i opis strony w Google

`content/seo.ts`: `name` (krótka nazwa strony w ścieżce nawigacji w Google, np. „Dorośli”), `title` (karta przeglądarki, wynik w Google, do ok. 60 znaków) i `description` (ok. 150 znaków). Dane dla Google o Agacie (zawód, gabinet, mapa, Instagram, LinkedIn) budują się same z `content/contact.ts` (`officeAddress`, `mapUrl`, `profiles`) w `lib/structuredData.ts`. Każda strona z `pages.ts` musi tu mieć wpis, inaczej build zgłosi błąd typów.

### Punkt na liście w karcie (np. nowy obszar terapii)

W `content/` dopisz obiekt do tablicy `items` danej karty, np.:

```ts
{ term: 'Nazwa obszaru', text: 'krótki opis' },
```

Wygląd nie wymaga zmian. Kolejność w tablicy = kolejność na stronie.

### Nowa karta / nowa ikona / nowy obszar

Wygląd kart jest w `design/` w tablicach **w tej samej kolejności co treść** (`kidsTopicLooks`, `adultsTopicLooks`, `trainingTopicLooks`, `benefitPositions`, `workAreaBlobs`). Dodając lub usuwając element w `content/`, zrób to samo w odpowiedniej tablicy w `design/`.

Jeśli zapomnisz, build się zatrzyma z komunikatem w rodzaju:

```
kidsTopicLooks: 3 w design/, a 4 w content/
```

Najprościej skopiować wygląd sąsiedniej karty i potem dopasować pozycje na desktopie.

### Podmiana zdjęcia

1. Plik od grafika przytnij z przezroczystych marginesów (inaczej pozycje liczą się z pustym tłem) i zmniejsz do ok. **2× szerokości, w jakiej jest używany** (import `?w=800` → plik 1600 px szerokości). Zostaw PNG z przezroczystością.
2. Podmień plik w `src/assets/img/` **pod tą samą nazwą** — import się nie zmienia.
3. Popraw opis zdjęcia (`alt` / `imageAlt`) w `content/`, jeśli zmienił się kadr.
4. Zdjęcie Agaty w hero: inny kadr może wymagać korekty pozycji w `design/heroPhotos.ts` (`translate-y-[…%]` wyrównuje głowę między stronami).

Nowe zdjęcie: nazwa po angielsku, kebab-case, z prefiksem strony (`training-…`, `about-…`; zdjęcia Agaty `agata-<kadr>.png`). Import:

```ts
import foto from '@/assets/img/nazwa.png?w=800&format=webp&as=metadata'
```

Do zrobienia: `agata-home.png` (hero na Home) ma tylko 426×659 px — warto poprosić grafika o większy plik.

### Nowa grafika SVG (kształt, fala, ikona)

- Eksport z XD/Illustratora z _Styling: Presentation Attributes_ (bez `<style>` w pliku). Plik z `<style>` i klasami `.cls-1` psuje inne grafiki na stronie.
- `id` w pliku muszą być unikalne (eksporty powtarzają `Path_2` itp.).
- Kolor zmieniany z kodu: `fill="currentColor"` w pliku + import z `?react`. Grafika o stałych kolorach (tło): zwykły import bez `?react` i `DecorImage`.
- Wzór oczyszczonego pliku: `src/assets/svg/psychotherapy-balls-2.svg`.

### Zmiana wyglądu (położenie, rozmiar, kolor elementu)

- Klasy Tailwind są w `design/` (hero, karty) albo w `pages/` (sekcje strony).
- Klasy bez prefiksu = telefon i tablet; z prefiksem `lg:` = desktop (od 1024 px).
- Desktop jest liczony w `vw` z projektu 1920 px: **px z XD / 19,2** (np. 122 px → `6.35vw`).
- Tekst na desktopie ma minimum: `text-[max(0.8125rem,1.15vw)]` (nie mniej niż 13 px).
- Klasy pisz w całości (`lg:top-[12vw]`), nie składaj ich z kawałków w kodzie — Tailwind ich wtedy nie znajdzie.

### Kolory, fonty, rozmiary tekstu (dla całej strony)

`src/index.css`, blok `@theme`: kolory (`--color-mist`, `--color-rose`…), fonty, rozmiary tekstu (`--text-*`). Zmiana koloru tutaj zmienia go wszędzie.

Nowy rozmiar tekstu `--text-coś` dopisz też do listy w `src/lib/cn.ts`, inaczej będzie znikał przy łączeniu klas.

Fonty: Playfair Display Regular (cała strona), Sacramento (tylko logo i pionowy napis „psychoedukatorka”).

### Link w menu lub stopce

`content/pages.ts`: pole `nav` przy stronie (`label` = napis). `in: ['footer']` = tylko w stopce, `accent: true` = wyróżniony (np. BLOG), `pill: true` = pigułka z obrysem na desktopie. Kolejność wpisów = kolejność w menu.

### Nowa strona

1. `content/pages.ts`: wpis `{ path: '/adres', file: 'pages/Nazwa.tsx', nav: { label: 'Nazwa' } }`.
2. `content/seo.ts`: tytuł i opis (bez tego build się nie uda).
3. `content/nazwa.ts`: treść, w tym hero (`HeroContent`), owinięta w `typo()`.
4. `design/nazwa.ts`: wygląd hero (`HeroLayout`).
5. `pages/Nazwa.tsx`: komponent strony i
   ```ts
   export const handle = {
     hero: withLayout(nazwaHero, nazwaHeroLayout),
   } satisfies RouteHandle
   ```

Trasa, menu, stopka i `sitemap.xml` uzupełnią się same. Wzór najprostszej strony: `pages/Contact.tsx`.

## Przed publikacją

1. `npm run lint` i `npm run build` — oba bez błędów.
2. `npm run preview` i przejrzyj zmienione strony w kilku szerokościach: telefon (~390 px), tablet (768 i ~1000 px), desktop (1024, 1440, 1920). W Chrome: DevTools → przełącznik urządzeń.
3. Telefon na żywo: `npm run dev`, adres „Network” z logu.
4. `npm run format` przed commitem.

Częste błędy:

| Komunikat                                              | Przyczyna                                                                                |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| `…Looks: X w design/, a Y w content/`                  | inna liczba elementów w treści i wyglądzie (patrz „Nowa karta”)                          |
| błąd typów w `seo.ts` (`Property '/adres' is missing`) | nowa strona bez wpisu w `seo.ts`                                                         |
| `Prerender … 500`                                      | błąd w kodzie strony przy budowaniu; komunikat z przyczyną jest kilka linii wyżej w logu |
| `window is not defined`                                | kod używa `window`/`document` podczas renderu; strona jest budowana bez przeglądarki     |

## Publikacja

`npm run build` tworzy gotową, statyczną stronę w `build/client/`: każda podstrona jako `<adres>/index.html`, do tego `404.html`, `sitemap.xml`, `robots.txt`. Na hosting wgrywa się całą zawartość tego folderu, razem z ukrytym plikiem `.htaccess` (z `public/.htaccess`; w FTP włącz pokazywanie ukrytych plików). `.htaccess` działa na serwerze Apache (typowy hosting współdzielony): przekierowuje na `https://psycho-edukatorka.pl` (bez www), podpina `404.html`, kompresuje tekst i ustawia cache (`assets/` rok, bo nazwy plików zmieniają się z treścią; HTML zawsze świeży). Na innym serwerze (nginx, Netlify itp.) te same reguły ustawia się w jego konfiguracji.

## Gdzie szukać więcej

- `CLAUDE.md` — konwencje kodu, szczegóły hero, desktopu, responsywności.
- `docs/brief.md`, `docs/TODO.md` — brief projektu i lista rzeczy do zrobienia (folder `docs/` jest tylko lokalnie, poza repozytorium).
