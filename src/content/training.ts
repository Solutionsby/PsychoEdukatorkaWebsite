import type { PanelLink } from '@/components/LinkPanel'
import type { Topic } from './topics'
import iconEducation from '@/assets/img/SZKOLENIA - IKONA 2.png?w=200&format=webp&as=metadata'
import iconKids from '@/assets/img/SZKOLENIA - IKONA 1.png?w=200&format=webp&as=metadata'
import iconFamily from '@/assets/img/SZKOLENIA - IKONA 3.png?w=200&format=webp&as=metadata'
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

export const trainingTopics: Topic[] = typo([
  {
    id: 'edukacja',
    number: '01',
    title: 'Rezyliencja w edukacji',
    toneClassName: 'text-rose-soft',
    bulletClassName: 'before:bg-ink/60',
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
    title: 'Rezyliencja dzieci i młodzieży',
    toneClassName: 'text-rose-soft',
    bulletClassName: 'before:bg-rose-soft',
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
    title: 'Rezyliencja w rodzinie',
    toneClassName: 'text-ink',
    bulletClassName: 'before:bg-ink',
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
  // TODO: image: zdjęcie Agaty (Współpraca), import z ?format=webp&as=metadata
})

export const trainingHero: HeroData = typo({
  heading: ['Szkolenia'],
  headingClassName: 'top-45 pr-10',
  lineClassName: 'tracking-[0.1em]',
  ...photos.glasses,
  decor: 'kleks',
  card: {
    className: '-mb-6', // karta dotyka panelu „Dlaczego rezyliencja?”
    title: 'Z miłości do rezyliencji.',
    titleClassName: 'text-lead-sub tracking-[0.2em] uppercase after:hidden',
    paragraphs: [
      'Prowadzę szkolenia, warsztaty oraz prelekcje dla różnorodnych grup odbiorców — od placówek oświatowych i instytucji publicznych po sektor biznesowy. W swojej pracy łączę wiedzę naukową z doświadczeniem klinicznym oraz wieloletnią praktyką w działaniach profilaktycznych. Zależy mi na tym, aby każde spotkanie było dla uczestników okazją do zatrzymania się i chwili refleksji, a jednocześnie dostarczało konkretnych narzędzi, które realnie wspierają w codziennej pracy i życiu osobistym.',
    ],
  },
})
