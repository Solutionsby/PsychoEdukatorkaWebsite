import type { PanelLink } from '@/components/LinkPanel'
import type { Topic } from './topics'
import iconEducation from '@/assets/img/training-icon-education.png?w=200&format=webp&as=metadata'
import iconKids from '@/assets/img/training-icon-kids.png?w=200&format=webp&as=metadata'
import iconFamily from '@/assets/img/training-icon-family.png?w=200&format=webp&as=metadata'
import type { HeroData } from './hero'
import { photos } from './heroPhotos'
import { typo } from '@/lib/typography'

export const resilience = typo({
  title: 'Dlaczego rezyliencja?',
  cardTitle: 'Rezyliencja',
  paragraphs: [
    'Rezyliencja to nasza wewnętrzna zdolność do radzenia sobie z przeciwnościami i odzyskiwania równowagi po trudnych doświadczeniach.',
    'Warto ją pielęgnować — nie tylko po to, by przetrwać trudny czas, ale także po to, by czerpać z życia większą satysfakcję. Dbanie o zdrowie psychiczne zaczyna się od mądrej, uważnej profilaktyki.',
  ],
})

// \n w tytule: łamanie linii na desktopie (whitespace-pre-line), na telefonie zwykła spacja
export const trainingTopics: Topic[] = typo([
  {
    id: 'edukacja',
    number: '01',
    title: 'Rezyliencja\nw edukacji',
    subtitle: '(Szkolenia dla kadry pedagogicznej)',
    // desktop: 01 w jasnym mist
    toneClassName: 'text-rose-soft lg:text-mist-deep',
    bulletClassName: 'before:bg-ink/60 lg:before:bg-mist-light',
    items: [
      {
        term: 'Samoregulacja w praktyce',
        text: 'skuteczne sposoby redukcji stresu w wymagającej pracy nauczyciela',
      },
      {
        term: 'Emocje w klasie',
        text: 'jak wspierać rozwój emocjonalny dzieci i młodzieży w procesie nauczania',
      },
      {
        term: 'Mosty zamiast murów',
        text: 'o budowaniu wspierającej komunikacji z uczniami i ich opiekunami',
      },
    ],
  },
  {
    id: 'dzieci-i-mlodziez',
    number: '02',
    title: 'Rezyliencja\ndzieci i młodzieży',
    subtitle: '(Warsztaty dla uczniów)',
    toneClassName: 'text-rose-soft lg:text-rose-deep',
    bulletClassName: 'before:bg-rose-soft lg:before:bg-rose-deep',
    items: [
      {
        term: 'Świat emocji',
        text: 'o samoregulacji i bezpiecznych sposobach radzenia sobie z napięciem',
      },
      {
        term: 'Razem jest raźniej',
        text: 'o budowaniu wspierających relacji rówieśniczych',
      },
      {
        term: 'W poszukiwaniu siebie',
        text: 'o rozwijaniu tożsamości i wzmacnianiu poczucia własnej wartości',
      },
    ],
  },
  {
    id: 'rodzina',
    number: '03',
    title: 'Rezyliencja\nw rodzinie',
    subtitle: '(Wsparcie dla rodziców)',
    toneClassName: 'text-ink lg:text-ink-soft',
    bulletClassName: 'before:bg-ink lg:before:bg-ink-soft',
    items: [
      {
        term: 'Etapy rozwoju',
        text: 'kluczowe momenty i wyzwania w życiu dziecka i nastolatka',
      },
      {
        term: 'Zrozumieć dziecięce emocje',
        text: 'jak stać się uważnym przewodnikiem po świecie emocji',
      },
      {
        term: 'Wspólny język',
        text: 'o budowaniu bliskości i wspierającej komunikacji z dzieckiem',
      },
    ],
  },
])

// Pigułki prowadzą do kart poniżej (kotwice = id kart), ikona w kolejności kart.
const areaIcons = [iconEducation, iconKids, iconFamily]
export const trainingAreas = typo({
  title: 'Obszary szkoleń i warsztatów',
  links: trainingTopics.map((topic, index) => ({
    label: topic.title,
    to: `#${topic.id}`,
    icon: areaIcons[index],
  })) satisfies PanelLink[],
})

export const trainingContact = typo({
  title: 'Współpraca',
  text: 'Powyższe tematy stanowią punkt wyjścia. Każde szkolenie przygotowuję w oparciu o realne potrzeby danej placówki lub organizacji. Ceny szkoleń ustalane są indywidualnie — zależą od formy spotkania, liczby uczestników oraz terminu realizacji. Zapraszam do kontaktu, abyśmy mogli wspólnie zaplanować działania najlepiej dopasowane do Państwa potrzeb.',
  // TODO: image: zdjęcie Agaty w kraciastej koszuli (desktop: obok tekstu, na telefonie ukryte)
})

export const trainingHero: HeroData = typo({
  heading: ['Szkolenia'],
  // desktop: jak Współpraca, sam tekst po lewej i łuk; zdjęcie niżej (Obszary).
  // Wyższe hero: fala „Dlaczego rezyliencja?” zaczyna się przy dole pierwszego ekranu.
  className: 'lg:h-[66.7vw]',
  headingClassName: 'top-45 pr-10 lg:top-[14.6vw] lg:items-start lg:pr-0',
  lineClassName:
    'tracking-[0.1em] lg:ml-[10vw] lg:text-[6.35vw] lg:leading-none lg:tracking-[0.255em]',
  ...photos.glasses,
  imageClassName: `${photos.glasses.imageClassName} lg:hidden`,
  decor: 'kleks',
  card: {
    // telefon: karta dotyka panelu „Dlaczego rezyliencja?”
    className:
      '-mb-6 lg:top-[22.6vw] lg:left-[9.9vw] lg:h-auto lg:w-[50vw] lg:rounded-none lg:bg-transparent lg:p-0',
    title: 'Z miłości do rezyliencji.',
    titleClassName:
      'text-lead-sub tracking-[0.2em] uppercase after:hidden lg:mb-[0.6vw] lg:text-[2.6vw] lg:leading-[1.2] lg:tracking-[0.03em] lg:normal-case',
    paragraphs: [
      'Prowadzę szkolenia, warsztaty oraz prelekcje dla różnorodnych grup odbiorców — od placówek oświatowych i instytucji publicznych po sektor biznesowy. W swojej pracy łączę wiedzę naukową z doświadczeniem klinicznym oraz wieloletnią praktyką w działaniach profilaktycznych. Zależy mi na tym, aby każde spotkanie było dla uczestników okazją do zatrzymania się i chwili refleksji, a jednocześnie dostarczało konkretnych narzędzi, które realnie wspierają w codziennej pracy i życiu osobistym.',
    ],
    paragraphsClassName:
      'lg:max-w-[37vw] lg:text-[max(0.8125rem,1.25vw)] lg:leading-[1.67] lg:tracking-[0.05em] lg:text-ink',
    // tylko desktop: na telefonie sekcja jest tuż pod kartą
    link: { label: 'Dlaczego rezyliencja?', to: '#dlaczego-rezyliencja' },
    actionsClassName:
      "hidden lg:mt-[4vw] lg:flex lg:w-[37vw] lg:justify-end lg:pr-[2.4vw] lg:pl-0 lg:[&>a]:text-[max(0.75rem,1vw)] lg:[&>a]:tracking-[0.04em] lg:[&>a]:text-ink/80 lg:[&>a]:uppercase lg:[&>a]:after:ml-[0.4vw] lg:[&>a]:after:inline-block lg:[&>a]:after:content-['>']",
  },
})
