# TODO

Stan na 2026-10-10. Wszystkie strony z mapy mają treść i układ z designu (mobile); brakuje głównie grafik. W kodzie miejsca oznaczone `// TODO`.

## Grafiki do wstawienia

Zdjęcia: `import x from '@/assets/img/….png?format=webp&as=metadata'`. SVG: `import X from '@/assets/svg/….svg?react'` (kolor przez `currentColor`, unikalne id w pliku).

### Wspólne
- [ ] Zdjęcie nieba w łuku hero (`components/MainHero.tsx`, zakomentowany `<img>`).
- [ ] Kuleczki z przerywaną linią w kartach z numerami: pole `decor` + `decorClassName` w danych kart (`content/psychotherapy.ts`: `kidsTopics`, `adultsTopics`; `content/training.ts`: `trainingTopics`). Pliki: `PSYCHOTERAPIA - KULKA*.svg`, `SZKOLENIA - KULKI*.svg`.

### Hero (zdjęcia: `content/heroPhotos.ts`; hero strony: jej plik w `content/`)
- [ ] O mnie (`aboutHero`): zdjęcie + kleks (`O MNIE - KLEKS NA AGATE.svg`: nowy klucz w `HeroDecor` + komponent w `HeroFigure`).
- [ ] Psychoedukacja (`psychoeducationHero`): zdjęcie + kleks.
- [ ] Psychoterapia hub (`psychotherapyHubHero`): zdjęcie + kleks.
- [ ] Dzieci i młodzież (`psychotherapyKidsHero`): Agata przy biurku z książkami.
- [ ] Dorośli (`psychotherapyAdultsHero`): zdjęcie.
- [ ] Szkolenia (`trainingHero`): zdjęcie + kleks.
- [ ] Współpraca (`contactHero`): zdjęcie + kleks.

### Strony
- [ ] O mnie (`pages/About.tsx`): tło z chmurami (`O MNIE - TŁO*.svg`), zdjęcie z książkami (`O MNIE - AGATA2.png`) między sekcjami.
- [ ] Psychoedukacja: ikony w plamach (`content/psychoeducation.ts` → `benefits`, miejsce w `BenefitItem`), ilustracja w „Metafory…” (`stories[0].image`, `PSYCHOEDUKACJA - OBRAZ.png`), zdjęcie Agaty z misiem przed „Psychoedukacja w praktyce”.
- [ ] Szkolenia: ~~ikony w pigułkach~~ (zrobione), zdjęcie w karcie „Współpraca” (`trainingContact.image`).

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
- [ ] Nagłówek „PSYCHOEDUKACJA” w hero: czy mieści się na wąskim ekranie (ew. mniejszy `tracking` w `lineClassName`).
- [ ] Przejścia białej karty hero w panele pod spodem (O mnie, Psychoedukacja, Szkolenia).
- [ ] Animacje wejścia: ikony (Psychoedukacja), karty z numerami (Dzieci, Dorośli, Szkolenia).

## Później
- [ ] Wersja desktop (brak projektu).
- [ ] `og:image` 1200×630, dane strukturalne JSON-LD.
- [ ] Blog (headless WordPress); do tego czasu link BLOG prowadzi na 404.
- [ ] Analityka, formularz kontaktowy, polityka prywatności / RODO, hosting.
