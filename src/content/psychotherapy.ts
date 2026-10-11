import type { PagePath } from './pages'
import type { Topic } from './topics'
import KulkaDwa from '@/assets/svg/KulkaPsychoterapiaDwa.svg?react'
import type { HeroData } from './hero'
import { photos } from './heroPhotos'

export const cooperation = {
  title: 'Współpraca',
  paragraphs: [
    'Współpracę rozpoczynamy od 1 do 3 spotkań konsultacyjnych. To czas na poznanie się oraz przyjrzenie się zgłaszanym trudnościom. Wspólnie określamy możliwe kierunki pracy i wybieramy formę wsparcia najlepiej dopasowaną do potrzeb.',
    'W przypadku psychoterapii dzieci i młodzieży pierwsze spotkanie odbywa się wyłącznie z opiekunami.',
  ],
  note: 'Sesje trwają 50 minut, a ich koszt wynosi 250 zł.',
}

export const supportAreas = {
  title: 'Obszary wsparcia psychoterapeutycznego',
  links: [
    {
      label: 'Dzieci, młodzież i rodzice',
      to: '/psychoterapia/dzieci-i-mlodziez',
    },
    { label: 'Dorośli', to: '/psychoterapia/dorosli' },
  ] satisfies { label: string; to: PagePath }[],
}

// Dzieci i młodzież
export const kidsTopics: Topic[] = [
  {
    number: '01',
    title: 'Odzyskiwanie zdrowia psychicznego',
    toneClassName: 'text-rose-soft',
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
        // TODO: dalsza część tekstu ucięta na zrzucie
        text: 'nauka konstruktywnych sposobów przeżywania…',
      },
    ],
  },
  {
    number: '02',
    title: 'Kryzysy i zmiany',
    toneClassName: 'text-rose-soft',
    bulletClassName: 'before:bg-rose-soft',
    decor: KulkaDwa,
    // łuk od lewej krawędzi pod tytułem do kulki na wysokości numeru
    decorClassName: 'top-14 left-2 w-[calc(100%-3rem)] -rotate-10',
    items: [
      {
        term: 'Sytuacje trudne (strata, rozwód, choroba)',
        // TODO: na zrzucie ten sam tekst co „Zaburzenia nastroju”, pewnie wypełniacz
        text: 'wsparcie w stanach obniżonego samopoczucia oraz w procesie leczenia depresji',
      },
      { term: 'Adaptacja do nowych etapów (przedszkole, szkoła, dojrzewanie)' },
      {
        term: 'Trudności okresu dorastania',
        text: 'towarzyszenie w procesie kształtowania tożsamości i budowania relacji rówieśniczych',
      },
    ],
  },
  {
    number: '03',
    title: 'Regulacja emocji',
    toneClassName: 'text-ink',
    bulletClassName: 'before:bg-ink/60',
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
    number: '04',
    title: 'Rozwój potencjału i dobrostan',
    toneClassName: 'text-rose-soft',
    bulletClassName: 'before:bg-rose-soft',
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
]

export const parents = {
  title: 'Rodzice i opiekunowie',
  text: 'Wsparcie rodziców traktuję jako ważny element pracy z dzieckiem. To przestrzeń, w której można na chwilę się zatrzymać, przyjrzeć trudnym sytuacjom i lepiej zrozumieć, co stoi za zachowaniem dziecka. Podczas konsultacji wspólnie szukamy sposobów reagowania, które są wspierające i adekwatne do potrzeb oraz etapu rozwoju dziecka. To również miejsce, w którym można zadbać o siebie w roli rodzica — z większą łagodnością i zrozumieniem.',
}

// Dorośli
export const adultsTopics: Topic[] = [
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
    title: 'Rozwój potencjału i dobrostan',
    toneClassName: 'text-ink',
    bulletClassName: 'before:bg-ink',
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
]

export const psychotherapyHero: HeroData = { heading: ['Psychoterapia'] }
export const psychotherapyHubHero: HeroData = {
  ...psychotherapyHero,
  className: 'rounded-bl-[67px]', // tło hero: zaokrąglony lewy dolny róg
  headingClassName: 'top-35 items-center',
  ...photos.lapels,
  decor: 'kleks',
  card: {
    className: '-mb-6', // karta dotyka dołu hero, pod nią białe tło strony
    title: 'Psychoterapia',
    subtitle: 'Z troski o zdrowie psychiczne',
    subtitleClassName: 'normal-case tracking-widest',
    paragraphs: [
      'Prowadzę konsultacje psychologiczne oraz psychoterapię indywidualną dla dzieci, młodzieży i ich opiekunów, a także dla osób dorosłych.',
      'W swojej pracy łączę podejście poznawczo-behawioralne (CBT) z metodami tzw. trzeciej fali, tak aby jak najlepiej odpowiadać na indywidualne potrzeby osób, z którymi współpracuję.',
      'W swojej praktyce kieruję się zasadami podejścia opartego na dowodach naukowych (evidence-based practice), wzbogacając je o elementy medycyny stylu życia.',
      'Jestem członkinią Polskiego Towarzystwa Psychoterapii Poznawczo-Behawioralnej, regularnie korzystam z superwizji oraz stale rozwijam swoje kompetencje, uczestnicząc w szkoleniach i konferencjach naukowych.',
    ],
  },
}
export const psychotherapyKidsHero: HeroData = {
  heading: ['Psychoterapia', 'dzieci i młodzież,', 'rodzice i opiekunowie.'],
  headingClassName: 'top-45 items-center text-center',
  lineClassName: 'not-first:text-xl',
  ...photos.desk,
  card: {
    className: '-mb-6',
    paragraphs: [
      'Wspieram dzieci i młodzież w lepszym rozumieniu ich świata wewnętrznego, bezpiecznym przechodzeniu przez wyzwania rozwojowe oraz budowaniu umiejętności, które wzmacniają odporność i elastyczność psychologiczną.',
      'W pracy ważna jest dla mnie relacja oparta na szacunku i uważności. Korzystam z kreatywnych form pracy, które pomagają zaciekawić i zaangażować moich małych i większych pacjentów.',
    ],
  },
}
export const psychotherapyAdultsHero: HeroData = {
  heading: ['Psychoterapia', 'dorośli'],
  headingClassName: 'top-45 items-center text-center',
  lineClassName: 'not-first:text-xl',
  ...photos.armsCrossed,
  card: {
    paragraphs: [
      'Wspieram osoby dorosłe w procesie zdrowienia oraz radzenia sobie z trudnościami dnia codziennego. Pomagam rozwijać umiejętności, które pozwalają budować bardziej satysfakcjonujące życie — w zgodzie z własnymi wartościami i potrzebami.',
    ],
  },
}
