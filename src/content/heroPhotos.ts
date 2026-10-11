import agataGlasses from '@/assets/img/Agata1.png?w=800&format=webp&as=metadata'
import agataArmsCrossed from '@/assets/img/Agata3.png?w=800&format=webp&as=metadata'
import agataHome from '@/assets/img/home - Agata.png?format=webp&as=metadata'
import agataPsychoterapy from '@/assets/img/Agata5.png?w=800&format=webp&as=metadata'
import agataDesk from '@/assets/img/O MNIE - AGATA2.png?w=800&format=webp&as=metadata'
import type { HeroData } from './hero'

/**
 * Zdjęcia w hero: każde ustawione raz, żeby przy zmianie strony Agata stała w tym
 * samym miejscu i skali (podmienia się tylko zdjęcie). Wartości w %, więc układ
 * skaluje się z szerokością ekranu; `translate-y-*` (w % wysokości zdjęcia) wyrównuje
 * głowę, bo kadry mają różną wysokość. Kleks w % pojemnika, jedzie razem ze zdjęciem.
 */
export const photos = {
  // ręka z okularami (Home, O mnie)
  home: {
    image: agataHome,
    imageClassName:
      'left-0 w-[55%] translate-y-[5%] lg:-bottom-[0.6vw] lg:left-[44.3vw] lg:w-[21.5vw]',
    decorClassName:
      '-top-[24%] -left-[5%] w-[93%] lg:top-[8%] lg:-left-[83%] lg:w-[128%] lg:rotate-0 lg:opacity-45',
  },
  // ręce skrzyżowane (Psychoedukacja, Dorośli, Współpraca)
  armsCrossed: {
    image: agataArmsCrossed,
    imageClassName: 'left-[5%] w-[50%]',
    decorClassName: '-top-[25%] -left-[15%] w-[103%]',
  },
  // dłonie na klapach (Psychoterapia)
  lapels: {
    image: agataPsychoterapy,
    imageClassName: 'left-[7%] w-[46%]',
    decorClassName: '-top-[17%] -left-[15%] w-[103%]',
  },
  // okulary w dłoni (Szkolenia)
  glasses: {
    image: agataGlasses,
    imageClassName: '-left-[3.5%] w-[58%] translate-y-[22%]',
    decorClassName: '-top-[27%] -left-[12%] w-[88%]',
  },
  // przy biurku (Dzieci): szersze niż ekran, nadmiar ucina sekcja hero;
  // podniesione, żeby biurko stało na karcie (dolne 64px sceny jest pod kartą)
  desk: {
    image: agataDesk,
    imageClassName: '-left-[5%] w-[120%] -translate-y-[27%]',
  },
} satisfies Record<
  string,
  Pick<HeroData, 'image' | 'imageClassName' | 'decorClassName'>
>
