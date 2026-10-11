import type { PagePath } from './pages'
import type { Topic } from './topics'
import armchairPhoto from '@/assets/img/agata-armchair.png?w=800&format=webp&as=metadata'
import KulkaCztery from '@/assets/svg/psychotherapy-balls-4.svg?react'
import KulkaDorosli from '@/assets/svg/psychotherapy-balls-adults.svg?react'
import KulkaDwa from '@/assets/svg/psychotherapy-balls-2.svg?react'
import KulkaTrzy from '@/assets/svg/psychotherapy-balls-3.svg?react'
import type { HeroData } from './hero'
import { photos } from './heroPhotos'
import { typo } from '@/lib/typography'

export const cooperation = typo({
  title: 'Współpraca',
  paragraphs: [
    'Współpracę rozpoczynamy od 1 do 3 spotkań konsultacyjnych. To czas na poznanie się oraz przyjrzenie się zgłaszanym trudnościom. Wspólnie określamy możliwe kierunki pracy i wybieramy formę wsparcia najlepiej dopasowaną do potrzeb.',
    'W przypadku psychoterapii dzieci i młodzieży pierwsze spotkanie odbywa się wyłącznie z opiekunami.',
  ],
  note: 'Sesje trwają 50 minut, a ich koszt wynosi 250 zł.',
})

export const supportAreas = typo({
  title: 'Obszary wsparcia psychoterapeutycznego',
  links: [
    {
      label: 'Dzieci, młodzież i rodzice',
      to: '/psychoterapia/dzieci-i-mlodziez',
    },
    { label: 'Dorośli', to: '/psychoterapia/dorosli' },
  ] satisfies { label: string; to: PagePath }[],
})

// Dzieci i młodzież
// Desktop: nawigacja 01–04 nad kartami (id, short), linie z kulkami między kartami.
export const kidsTopics: Topic[] = typo([
  {
    id: 'zdrowie-psychiczne',
    number: '01',
    title: 'Odzyskiwanie zdrowia psychicznego',
    toneClassName: 'text-rose-soft lg:text-mist-deep',
    bulletClassName: 'before:bg-ink/60',
    items: [
      {
        term: 'Zaburzenia nastroju',
        text: 'wsparcie w stanach obniżonego samopoczucia oraz w procesie leczenia depresji',
      },
      {
        term: 'Zaburzenia lękowe',
        text: 'praca z lękiem uogólnionym, napadami paniki, fobią społeczną, fobiami prostymi oraz nadmiernym zamartwianiem się',
      },
      {
        term: 'Zaburzenie obsesyjno-kompulsyjne (OCD)',
        text: 'praca z natrętnymi myślami i przymusem wykonywania czynności utrudniających codzienne funkcjonowanie',
      },
      {
        term: 'Zespół stresu pourazowego (PTSD) i złożony zespół stresu pourazowego (Complex PTSD)',
        text: 'leczenie traumy i traumy złożonej',
      },
      {
        term: 'Zaburzenia odżywiania',
        text: 'wsparcie w leczeniu anoreksji, bulimii, ortoreksji, napadowego objadania się oraz nadwagi i otyłości',
      },
      {
        term: 'Osobowość nieprawidłowo kształtująca się',
        text: 'nauka konstruktywnych sposobów przeżywania siebie i innych',
      },
    ],
  },
  {
    id: 'kryzysy-i-zmiany',
    number: '02',
    title: 'Kryzysy i zmiany',
    short: 'Wsparcie w sytuacjach kryzysowych i zmianach',
    toneClassName: 'text-rose-soft',
    bulletClassName: 'before:bg-rose-soft',
    decor: KulkaDwa,
    // telefon: łuk od lewej krawędzi pod tytułem do kulki na wysokości numeru;
    // desktop: linia nad kartą, od lewej krawędzi ekranu
    decorClassName:
      'top-14 left-2 w-[calc(100%-3rem)] -rotate-10 lg:-top-[10.2vw] lg:left-0 lg:w-[90.8vw] lg:rotate-0',
    items: [
      {
        term: 'Sytuacje trudne (strata, rozwód, choroba)',
        text: 'pomoc w przeżywaniu i radzeniu sobie z wymagającymi doświadczeniami',
      },
      { term: 'Adaptacja do nowych etapów (przedszkole, szkoła, dojrzewanie)' },
      {
        term: 'Trudności okresu dorastania',
        text: 'towarzyszenie w procesie kształtowania tożsamości i budowania relacji rówieśniczych',
      },
    ],
  },
  {
    id: 'regulacja-emocji',
    number: '03',
    title: 'Regulacja emocji',
    toneClassName: 'text-ink',
    bulletClassName: 'before:bg-ink/60',
    decor: KulkaTrzy,
    decorClassName:
      'hidden lg:block lg:-top-[6vw] lg:left-[19.1vw] lg:w-[14.2vw] lg:text-mist-deep',
    items: [
      {
        term: 'Dysregulacja emocji',
        text: 'nauka rozumienia, nazywania i konstruktywnego wyrażania uczuć oraz radzenia sobie z impulsywnymi reakcjami',
      },
      {
        term: 'Samouszkodzenia',
        text: 'rozwijanie bezpiecznych sposobów regulowania silnego napięcia i bólu emocjonalnego',
      },
      {
        term: 'Masturbacja instrumentalna',
        text: 'wsparcie dziecka w regulacji emocji oraz psychoedukacja opiekunów w obszarze rozwoju psychoseksualnego',
      },
    ],
  },
  {
    id: 'rozwoj-i-dobrostan',
    number: '04',
    title: 'Rozwój potencjału i dobrostan',
    toneClassName: 'text-rose-soft',
    bulletClassName: 'before:bg-rose-soft',
    decor: KulkaCztery,
    decorClassName:
      'hidden lg:block lg:-top-[7.5vw] lg:left-[19.1vw] lg:w-[15.9vw]',
    items: [
      {
        term: 'Neuroróżnorodność',
        text: 'rozwijanie umiejętności samoregulacji oraz budowanie strategii',
      },
      {
        term: 'Wzmacnianie zasobów',
        text: 'praca nad poczuciem własnej wartości, budowaniem i podtrzymywaniem relacji oraz odkrywaniem siebie',
      },
      {
        term: 'Psychodietetyka',
        text: 'wspieranie w budowaniu zdrowych nawyków żywieniowych, z uwzględnieniem elementów medycyny stylu życia oraz pracy nad relacją z jedzeniem i ciałem',
      },
    ],
  },
])

export const parents = typo({
  title: 'Rodzice i opiekunowie',
  // desktop: zdjęcie na fotelu obok tekstu
  image: armchairPhoto,
  imageAlt: 'Agata Hemmerling-Goc na fotelu z notesem',
  text: 'Wsparcie rodziców traktuję jako ważny element pracy z dzieckiem. To przestrzeń, w której można na chwilę się zatrzymać, przyjrzeć trudnym sytuacjom i lepiej zrozumieć, co stoi za zachowaniem dziecka. Podczas konsultacji wspólnie szukamy sposobów reagowania, które są wspierające i adekwatne do potrzeb oraz etapu rozwoju dziecka. To również miejsce, w którym można zadbać o siebie w roli rodzica — z większą łagodnością i zrozumieniem.',
})

// Dorośli
export const adultsTopics: Topic[] = typo([
  {
    id: 'zdrowie-psychiczne',
    number: '01',
    title: 'Odzyskiwanie zdrowia psychicznego',
    toneClassName: 'text-rose-soft',
    bulletClassName: 'before:bg-ink/60',
    items: [
      {
        term: 'Zespół stresu pourazowego (PTSD) i złożony zespół stresu pourazowego (Complex PTSD)',
        text: 'leczenie traumy i traumy złożonej',
      },
      {
        term: 'Zaburzenia odżywiania',
        text: 'wsparcie w leczeniu anoreksji, bulimii, ortoreksji, napadowego objadania się oraz nadwagi i otyłości',
      },
      {
        term: 'Trudności w regulacji emocji',
        text: 'rozwijanie umiejętności radzenia sobie z silnymi emocjami, redukcji napięcia oraz zastępowaniu impulsywnych reakcji',
      },
      {
        term: 'Zaburzenia nastroju',
        text: 'wsparcie w stanach obniżonego samopoczucia oraz w procesie leczenia depresji',
      },
      {
        term: 'Zaburzenia lękowe',
        text: 'praca z lękiem uogólnionym, napadami paniki, fobią społeczną, fobiami prostymi oraz nadmiernym zamartwianiem się',
      },
      {
        term: 'Zaburzenie obsesyjno-kompulsyjne (OCD)',
        text: 'praca z natrętnymi myślami i przymusem wykonywania czynności utrudniających codzienne funkcjonowanie',
      },
    ],
  },
  {
    id: 'kryzysy',
    number: '02',
    title: 'Kryzysy i zmiany',
    toneClassName: 'text-rose-soft',
    bulletClassName: 'before:bg-rose-soft',
    // desktop: linia z dwiema kulkami nad kartą (rysunek wg zrzutu, do podmiany na plik od grafika)
    decor: KulkaDorosli,
    decorClassName:
      'hidden lg:block lg:-top-[7.3vw] lg:left-[2.08vw] lg:w-[58.3vw] lg:text-rose',
    items: [
      {
        term: 'Wyjście z relacji przemocowych',
        text: 'wsparcie w uwalnianiu się z przemocy oraz odbudowie życia „po”',
      },
      {
        term: 'Kryzysy życiowe i egzystencjalne',
        text: 'towarzyszenie w ważnych momentach życia (zmiana, strata, choroba)',
      },
    ],
  },
  {
    id: 'rozwoj',
    number: '03',
    title: 'Rozwój potencjału i dobrostanu',
    short: 'Rozwój potencjału i dobrostan',
    toneClassName: 'text-ink',
    bulletClassName: 'before:bg-ink',
    decor: KulkaCztery,
    decorClassName:
      'hidden lg:block lg:-top-[8.1vw] lg:left-[19.2vw] lg:w-[15.9vw] lg:text-mist-deep',
    items: [
      {
        term: 'Neuroróżnorodność',
        text: 'wspieranie samoregulacji i codziennego funkcjonowania',
      },
      {
        term: 'Wzmacnianie zasobów',
        text: 'praca nad odkrywaniem potrzeb, poczuciem własnej wartości, wewnętrznym krytykiem oraz umiejętnościami interpersonalnymi (komunikacja, granice, relacje)',
      },
      {
        term: 'Psychodietetyka',
        text: 'wspieranie w budowaniu zdrowych nawyków żywieniowych, z uwzględnieniem elementów medycyny stylu życia oraz pracy nad relacją z jedzeniem i ciałem',
      },
    ],
  },
])

export const psychotherapyHero: HeroData = typo({ heading: ['Psychoterapia'] })
export const psychotherapyHubHero: HeroData = typo({
  ...psychotherapyHero,
  // desktop (projekt 1920): hero 1230px, łuk kończy się wcześniej (1176px),
  // pod nim jasna fala sekcji „Współpraca”; zdjęcie w tej sekcji, nie w hero
  className: 'rounded-bl-[67px] lg:h-[64vw] lg:rounded-none', // telefon: zaokrąglony lewy dolny róg
  arcClassName: 'lg:bottom-[2.8vw]',
  headingClassName: 'top-35 items-center lg:top-[16.4vw] lg:items-start',
  lineClassName:
    'lg:ml-[10.1vw] lg:text-[6.35vw] lg:leading-none lg:tracking-[0.267em]',
  ...photos.lapels,
  imageClassName: `${photos.lapels.imageClassName} lg:hidden`,
  decor: 'kleks',
  card: {
    className:
      '-mb-6 lg:top-[25.15vw] lg:left-[9.9vw] lg:h-auto lg:w-[45vw] lg:rounded-none lg:bg-transparent lg:p-0', // telefon: karta dotyka dołu hero, pod nią białe tło strony
    title: 'Psychoterapia',
    titleClassName: 'lg:hidden', // desktop: tytułem jest nagłówek hero
    subtitle: 'Z troski o zdrowie psychiczne',
    subtitleClassName:
      'normal-case tracking-widest lg:flex lg:items-center lg:gap-[0.5vw] lg:text-[2.5vw] lg:leading-[1.2] lg:tracking-[0.03em] lg:before:block lg:before:h-[0.2vw] lg:before:w-[2.1vw] lg:before:bg-current',
    // desktop: akapity bez odstępów, 2. i 3. w jednym ciągu, ostatni po pustej linii
    paragraphsClassName:
      'lg:mt-[0.45vw] lg:space-y-0 lg:text-[max(0.875rem,1.38vw)] lg:leading-[1.35] lg:text-ink lg:[&>p:last-child]:mt-[1.9vw] lg:[&>p:nth-child(2)]:inline lg:[&>p:nth-child(3)]:inline lg:[&>p:nth-child(3)]:before:content-["_"]',
    paragraphs: [
      'Prowadzę konsultacje psychologiczne oraz psychoterapię indywidualną dla dzieci, młodzieży i ich opiekunów, a także dla osób dorosłych.',
      'W swojej pracy łączę podejście poznawczo-behawioralne (CBT) z metodami tzw. trzeciej fali, tak aby jak najlepiej odpowiadać na indywidualne potrzeby osób, z którymi współpracuję.',
      'W swojej praktyce kieruję się zasadami podejścia opartego na dowodach naukowych (evidence-based practice), wzbogacając je o elementy medycyny stylu życia.',
      'Jestem członkinią Polskiego Towarzystwa Psychoterapii Poznawczo-Behawioralnej, regularnie korzystam z superwizji oraz stale rozwijam swoje kompetencje, uczestnicząc w szkoleniach i konferencjach naukowych.',
    ],
  },
})
export const psychotherapyKidsHero: HeroData = typo({
  // desktop (projekt 1920): nagłówek i łuk jak na hubie, zdjęcie przy biurku na dole
  // po lewej, jego dół zakrywa jasny pas strony (pages/psychotherapy/Kids.tsx)
  className: 'lg:h-[64vw]',
  arcClassName: 'lg:bottom-[2.8vw]',
  heading: ['Psychoterapia', 'dzieci i młodzież,', 'rodzice i opiekunowie.'],
  headingClassName:
    'top-45 items-center text-center lg:top-[16.4vw] lg:items-start lg:text-left',
  lineClassName:
    'not-first:text-xl lg:ml-[10.1vw] lg:text-[6.35vw] lg:leading-none lg:tracking-[0.267em] lg:not-first:hidden',
  ...photos.desk,
  imageClassName: `${photos.desk.imageClassName} lg:bottom-[1.5vw] lg:left-[-1vw] lg:w-[44vw] lg:translate-none`,
  card: {
    className:
      '-mb-6 lg:top-[23.6vw] lg:left-[9.9vw] lg:h-auto lg:w-[48vw] lg:rounded-none lg:bg-transparent lg:p-0',
    title: 'Dzieci i młodzież', // tylko desktop
    titleClassName:
      'max-lg:hidden lg:mb-[1.3vw] lg:text-[2.5vw] lg:leading-[1.2] lg:tracking-[0.03em]',
    paragraphsClassName:
      'lg:space-y-0 lg:text-[max(0.875rem,1.38vw)] lg:leading-[1.5] lg:text-ink',
    paragraphs: [
      'Wspieram dzieci i młodzież w lepszym rozumieniu ich świata wewnętrznego, bezpiecznym przechodzeniu przez wyzwania rozwojowe oraz budowaniu umiejętności, które wzmacniają odporność i elastyczność psychologiczną.',
      'W pracy ważna jest dla mnie relacja oparta na szacunku i uważności. Korzystam z kreatywnych form pracy, które pomagają zaciekawić i zaangażować moich małych i większych pacjentów.',
    ],
  },
})
export const psychotherapyAdultsHero: HeroData = typo({
  // desktop (projekt 1920): jak Dzieci, zdjęcie stoi przy lewej krawędzi łuku
  className: 'lg:h-[64vw]',
  arcClassName: 'lg:bottom-[2.8vw]',
  heading: ['Psychoterapia', 'dorośli'],
  headingClassName:
    'top-45 items-center text-center lg:top-[16.4vw] lg:items-start lg:text-left',
  lineClassName:
    'not-first:text-xl lg:ml-[10.1vw] lg:text-[6.35vw] lg:leading-none lg:tracking-[0.267em] lg:not-first:hidden',
  ...photos.armsCrossed,
  imageClassName: `${photos.armsCrossed.imageClassName} lg:-bottom-[1vw] lg:left-[39.2vw] lg:w-[22.1vw]`,
  card: {
    className:
      'lg:top-[24.9vw] lg:left-[9.9vw] lg:h-auto lg:w-[32.5vw] lg:rounded-none lg:bg-transparent lg:p-0',
    title: 'Dorośli', // tylko desktop
    titleClassName:
      'max-lg:hidden lg:mb-[1.3vw] lg:text-[2.5vw] lg:leading-[1.2] lg:tracking-[0.03em]',
    paragraphsClassName:
      'lg:space-y-0 lg:text-[max(0.875rem,1.38vw)] lg:leading-[1.5] lg:text-ink',
    paragraphs: [
      'Wspieram osoby dorosłe w procesie zdrowienia oraz radzenia sobie z trudnościami dnia codziennego. Pomagam rozwijać umiejętności, które pozwalają budować bardziej satysfakcjonujące życie — w zgodzie z własnymi wartościami i potrzebami.',
    ],
  },
})
