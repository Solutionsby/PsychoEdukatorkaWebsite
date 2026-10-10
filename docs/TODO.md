# TODO

Stan na 2026-10-10, gałąź `grafiki` (z `dev`). Wszystkie strony z mapy mają treść i układ z designu (mobile); trwa wstawianie grafik. W kodzie miejsca oznaczone `// TODO`.

Plan: grafiki → przegląd mobile na telefonie → desktop (zrzuty desktopu od użytkownika; najpierw wspólne elementy, potem strony).

## Grafiki do wstawienia

Zdjęcia: `import x from '@/assets/img/….png?format=webp&as=metadata'`. SVG: `import X from '@/assets/svg/….svg?react'` (kolor przez `currentColor`, unikalne id w pliku).

### Wspólne
- [ ] Logo SVG w menu (`components/Menu.tsx`) i stopce (`components/Footer.tsx`), na razie tekst.
- [ ] Zdjęcie nieba w łuku hero (`components/MainHero.tsx`, zakomentowany `<img>`).
- [x] Font logo Sacramento (`@fontsource/sacramento`, token `--font-script`, klasa `font-script` w Menu i Footer); samo logo SVG nadal do decyzji.
- [ ] Kuleczki z przerywaną linią w kartach z numerami: pole `decor` (+ `decorClassName`, `decorPlacement`) w danych kart (`content/psychotherapy.ts`: `kidsTopics`, `adultsTopics`; `content/training.ts`: `trainingTopics`).
  - **Ustalone:** użytkownik eksportuje z XD osobny SVG dla każdej karty, w docelowym rozmiarze, *Presentation Attributes*, nazwy `kulka-dzieci-01.svg`, `kulka-dorosli-01.svg`, `kulka-szkolenia-01.svg`…, i podaje pozycję X/Y względem karty + szerokość. Claude czyści pliki i podpina.
  - Na razie: karta 02 Dzieci ma roboczo `KulkaPsychoterapiaDwa.svg` (oczyszczony stary `PSYCHOTERAPIA - KULKA.svg`, obrócony `-rotate-10`); po eksporcie do usunięcia. Pozostałe stare pliki kulek (`PSYCHOTERAPIA- KULKA 2/3.svg`, `SZKOLENIA - KULKI*.svg`) mają `<style>` z `.cls-1`, nie używać bez czyszczenia.

### Hero (`content/hero.ts`: `image`, `imageAlt`, `imageClassName`, `decor`, `decorClassName`)
- [~] O mnie (`aboutHero`): roboczo zdjęcie z Home (`home - Agata.png`) + kleks z Home; w designie inne zdjęcie (Agata z okularami) i kleks `O MNIE - KLEKS NA AGATE.svg` (nowy klucz w `HeroDecor` + komponent w `HeroFigure`).
- [x] Psychoedukacja (`psychoeducationHero`): `Agata3.png` + kleks. Pozycje ustawione przez użytkownika (`top-55`, kleks jak na Home); nagłówek zmieniony na `normal-case` z lewej, w designie wersaliki na środku: do potwierdzenia.
- [ ] Psychoterapia hub (`psychotherapyHubHero`): zdjęcie + kleks.
- [ ] Dzieci i młodzież (`psychotherapyKidsHero`): Agata przy biurku z książkami.
- [ ] Dorośli (`psychotherapyAdultsHero`): zdjęcie.
- [ ] Szkolenia (`trainingHero`): zdjęcie + kleks.
- [ ] Współpraca (`contactHero`): zdjęcie + kleks.

### Strony
- [ ] O mnie (`pages/About.tsx`): tło z chmurami (`O MNIE - TŁO*.svg`).
- [x] O mnie: zdjęcie przy biurku (`O MNIE - AGATA2.png`) między sekcjami.
- [ ] Psychoedukacja: ikony w plamach (`content/psychoeducation.ts` → `benefits`, miejsce w `BenefitItem`).
- [x] Psychoedukacja: ilustracja w „Metafory…” (`stories[0].image`), Agata z misiem (`Agata7.png`, `practicePhoto`, `-mt-6` wchodzi na kartę, stoi na panelu).
- [ ] Szkolenia: ikony w pigułkach (`SZKOLENIA - IKONA 1/2/3.png`, pole `icon` w `trainingAreas.links`), zdjęcie w karcie „Współpraca” (`trainingContact.image`).

## Treści do potwierdzenia z Agatą
- [ ] O mnie: teksty kart „Poznaj obszary mojej pracy” (`content/about.ts`), wypełniacz z designu.
- [ ] Dzieci: opis „Osobowość nieprawidłowo kształtująca się” (ucięty na zrzucie), opis „Sytuacje trudne” (powtórzony z „Zaburzenia nastroju”), brak opisu „Adaptacja do nowych etapów”.
- [ ] Psychoterapia hub: dokończenie 2. akapitu karty hero („…z którymi współpracuję.”); nazwa towarzystwa (na zrzucie „Polskiego Towarzystwa Psychoterapii Poznawczo-Behawioralnej”, oficjalnie PTTPB: Polskie Towarzystwo Terapii Poznawczej i Behawioralnej).
- [ ] Dorośli: podtytuł „dorośli” w nagłówku hero (brak w designie).
- [ ] Współpraca: adres e-mail `agata@psycho-edukatorka.pl` (czy skrzynka istnieje), co jest pod akapitem na dole strony.
- [ ] Opisy SEO (`content/seo.ts`): szkice.

## Wartości z XD do uzupełnienia
- [ ] Rozmiary nagłówka rozstrzelonego (`--text-lead`, `--text-lead-sub`, na razie szacowane).
- [ ] Kolor jasnego tekstu w białych kartach (na razie `ink-soft`), kolor tagów w karcie 01 O mnie (na razie `ink/40`).
- [ ] Dokładne tokeny kolorów i odstępów.

## Do sprawdzenia na telefonie
- [ ] O mnie: odstęp nad zdjęciem przy biurku (`pb-10` sekcji „Jak pracuję?”), szerokość `w-[108%]`.
- [ ] Psychoedukacja: podtytuł karty hero łamie się na 3 linie (w designie 2): rozmiar/rozstrzelenie `text-lead-sub`.
- [ ] Nagłówek „PSYCHOEDUKACJA” w hero: czy mieści się na wąskim ekranie (ew. mniejszy `tracking` w `lineClassName`).
- [ ] Przejścia białej karty hero w panele pod spodem (O mnie, Psychoedukacja, Szkolenia).
- [ ] Animacje wejścia: ikony (Psychoedukacja), karty z numerami (Dzieci, Dorośli, Szkolenia).

## Później
- [ ] Wersja desktop (brak projektu).
- [ ] `og:image` 1200×630, dane strukturalne JSON-LD.
- [ ] Blog (headless WordPress); do tego czasu link BLOG prowadzi na 404.
- [ ] Analityka, formularz kontaktowy, polityka prywatności / RODO, hosting.
