// Treść stron Psychoterapii (hub, dzieci, dorośli); wygląd: design/psychotherapy.ts.
import type { PagePath } from './pages'
import type { Topic } from './topics'
import armchairPhoto from '@/assets/img/agata-armchair.png?w=1000&format=webp&as=metadata'
import type { HeroContent } from './hero'
import { typo } from '@/lib/typography'

export const cooperation = typo({
  title: 'Współpraca',
  paragraphs: [
    'Współpracę rozpoczynamy od 1 do 3 spotkań konsultacyjnych. To czas na poznanie się oraz przyjrzenie się zgłaszanym trudnościom. Wspólnie określamy możliwe kierunki pracy i wybieramy formę wsparcia najlepiej dopasowaną do potrzeb.',
    'W przypadku psychoterapii dzieci i młodzieży pierwsze spotkanie odbywa się wyłącznie z opiekunami.',
  ],
  notes: [
    'Sesje psychoterapii indywidualnej trwają 50 minut, a ich koszt wynosi 250 zł.',
    'Konsultacje psychologiczne trwają 50 minut, a ich koszt wynosi 300 zł.',
  ],
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
    items: [
      {
        term: 'Sytuacje trudne (strata, rozwód, choroba)',
        text: 'pomoc w przeżywaniu i radzeniu sobie z wymagającymi doświadczeniami',
      },
      { term: 'Adaptacja do nowych etapów (przedszkole, szkoła, dojrzewanie)',
        text: 'wsparcie w przechodzeniu przez zmiany',
       },
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
    items: [
      {
        term: 'Dysregulacja emocji',
        text: 'nauka rozumienia, nazywania i konstruktywnego wyrażania uczuć oraz radzenia sobie z własnym pobudzeniem',
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
    items: [
      {
        term: 'Neuroróżnorodność',
        text: 'Rozwijanie umiejętności radzenia sobie z silnymi emocjami, wyrażania ich w sposób zgodny z własnymi wartościami oraz regulowania poziomu pobudzenia.',
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
  text: 'Wsparcie rodziców traktuję jako ważny element pracy z dzieckiem. To przestrzeń, w której można na chwilę się zatrzymać, przyjrzeć trudnym sytuacjom i lepiej zrozumieć, co stoi za zachowaniem dziecka. Podczas konsultacji wspólnie szukamy sposobów reagowania, które są wspierające i adekwatne do potrzeb oraz etapu rozwoju dziecka. To również miejsce, w którym można zadbać o siebie w roli rodzica – z większą łagodnością i zrozumieniem.',
})

// Dorośli
export const adultsTopics: Topic[] = typo([
  {
    id: 'zdrowie-psychiczne',
    number: '01',
    title: 'Odzyskiwanie zdrowia psychicznego',
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
        text: 'Rozwijanie umiejętności radzenia sobie z silnymi emocjami, wyrażania ich w sposób zgodny z własnymi wartościami oraz regulowania poziomu pobudzenia.',
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
    items: [
      {
        term: 'Neuroróżnorodność',
        text: 'rozwijanie umiejętności samoregulacji oraz budowanie strategii wspierających codzienne funkcjonowanie',
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

export const psychotherapyHubHero: HeroContent = typo({
  heading: ['Psychoterapia'],
  card: {
    title: 'Psychoterapia', // telefon; desktop: tytułem jest nagłówek hero
    subtitle: 'Z troski o zdrowie psychiczne',
    paragraphs: [
      'Prowadzę konsultacje psychologiczne oraz psychoterapię indywidualną dla dzieci, młodzieży i ich opiekunów, a także dla osób dorosłych.',
      'W swojej pracy łączę podejście poznawczo-behawioralne (CBT) z metodami tzw. trzeciej fali, tak aby jak najlepiej odpowiadać na indywidualne potrzeby osób, z którymi współpracuję.',
      'W swojej praktyce kieruję się zasadami podejścia opartego na dowodach naukowych (evidence-based practice), wzbogacając je o elementy medycyny stylu życia.',
      'Jestem członkinią Polskiego Towarzystwa Psychoterapii Poznawczo-Behawioralnej, regularnie korzystam z superwizji oraz stale rozwijam swoje kompetencje, uczestnicząc w szkoleniach i konferencjach naukowych.',
    ],
  },
})
export const psychotherapyKidsHero: HeroContent = typo({
  heading: ['Psychoterapia', 'dzieci i młodzież,', 'rodzice i opiekunowie.'],
  card: {
    title: 'Dzieci i młodzież', // tylko desktop
    paragraphs: [
      'Wspieram dzieci i młodzież w lepszym rozumieniu ich świata wewnętrznego, bezpiecznym przechodzeniu przez wyzwania rozwojowe oraz budowaniu umiejętności, które wzmacniają odporność i elastyczność psychologiczną.',
      'W pracy ważna jest dla mnie relacja oparta na szacunku i uważności. Korzystam z kreatywnych form pracy, które pomagają zaciekawić i zaangażować moich małych i większych pacjentów.',
    ],
  },
})
export const psychotherapyAdultsHero: HeroContent = typo({
  heading: ['Psychoterapia', 'dorośli'],
  card: {
    title: 'Dorośli', // tylko desktop
    paragraphs: [
      'Wspieram osoby dorosłe w procesie zdrowienia oraz radzenia sobie z trudnościami dnia codziennego. Pomagam rozwijać umiejętności, które pozwalają budować bardziej satysfakcjonujące życie – w zgodzie z własnymi wartościami i potrzebami.',
    ],
  },
})
