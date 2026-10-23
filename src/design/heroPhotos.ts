import agataGlasses from '@/assets/img/agata-glasses.png?w=800&format=webp&as=metadata'
import agataArmsCrossed from '@/assets/img/agata-arms-crossed.png?w=800&format=webp&as=metadata'
import agataHome from '@/assets/img/agata-home.png?format=webp&as=metadata'
import agataPsychoterapy from '@/assets/img/agata-lapels.png?w=800&format=webp&as=metadata'
import agataJacket from '@/assets/img/agata-jacket.png?w=800&format=webp&as=metadata'
import agataDesk from '@/assets/img/agata-desk.png?format=webp&as=metadata'
import agataGlassesSet from '@/assets/img/agata-glasses.png?w=400;600;800&format=webp&as=srcset'
import agataArmsCrossedSet from '@/assets/img/agata-arms-crossed.png?w=400;600;800&format=webp&as=srcset'
import agataPsychoterapySet from '@/assets/img/agata-lapels.png?w=400;600;800&format=webp&as=srcset'
import agataJacketSet from '@/assets/img/agata-jacket.png?w=400;600;800&format=webp&as=srcset'
import type { HeroLayout } from './hero'

/**
 * Zdjęcia w hero: każde ustawione raz, żeby przy zmianie strony Agata stała w tym
 * samym miejscu i skali (podmienia się tylko zdjęcie). Wartości w %, więc układ
 * skaluje się z szerokością ekranu; `translate-y-*` (w % wysokości zdjęcia) wyrównuje
 * głowę, bo kadry mają różną wysokość. Kleks w % pojemnika, jedzie razem ze zdjęciem.
 * Od 480px (tablet, telefon poziomo) szerokość `min(%, max(minimum, (100svh - nagłówek
 * i karta) / proporcje zdjęcia))`: zdjęcie wypełnia wysokość pod nagłówkiem, ale go nie
 * zasłania; minimum = szerokość na 375 px. Telefon w pionie: samo %.
 * `srcSet` (400/600/800 px): telefon pobiera mniejszy plik; agata-home i agata-desk mają
 * jedną szerokość (home: małe źródło, desk: szersze niż ekran).
 */
export const photos = {
  // ręka z okularami (Home, O mnie)
  home: {
    image: agataHome,
    imageClassName:
      'left-0 w-[55%] min-[480px]:w-[min(55%,max(13rem,calc((100svh_-_31.875rem)/1.544)))] translate-y-[5%] lg:-bottom-[0.6vw] lg:left-[44.3vw] lg:w-[21.5vw]',
    decorClassName:
      '-top-[24%] -left-[5%] w-[93%] lg:top-[8%] lg:-left-[83%] lg:w-[128%] lg:rotate-0 lg:opacity-45',
  },
  // ręce skrzyżowane (Psychoedukacja, Dorośli, Współpraca)
  armsCrossed: {
    image: { ...agataArmsCrossed, srcSet: agataArmsCrossedSet },
    imageClassName:
      'left-[5%] w-[50%] min-[480px]:w-[min(50%,max(11.75rem,calc((100svh_-_31.875rem)/1.61)))]',
    decorClassName: '-top-[25%] -left-[15%] w-[103%]',
  },
  // marynarka na ramionach, ręce skrzyżowane (Dorośli)
  jacket: {
    image: { ...agataJacket, srcSet: agataJacketSet },
    imageClassName:
      'left-[15%] w-[50%] min-[480px]:w-[min(50%,max(11.75rem,calc((100svh_-_31.875rem)/1.376)))] -translate-y-[20%] lg:-translate-y-[30%]',
  },
  // dłonie na klapach (Psychoterapia); wysoka karta pod spodem, więc limit tylko z svh
  lapels: {
    image: { ...agataPsychoterapy, srcSet: agataPsychoterapySet },
    imageClassName:
      'left-[7%] w-[46%] min-[480px]:w-[min(46%,max(10.75rem,21.2svh))]',
    decorClassName: '-top-[17%] -left-[15%] w-[103%]',
  },
  // okulary w dłoni (Szkolenia)
  glasses: {
    image: { ...agataGlasses, srcSet: agataGlassesSet },
    imageClassName:
      '-left-[3.5%] w-[58%] min-[480px]:w-[min(58%,max(13.5rem,calc((100svh_-_30.5rem)/1.55)))] translate-y-[22%]',
    decorClassName: '-top-[27%] -left-[12%] w-[88%]',
  },
  // przy biurku (Dzieci): szersze niż ekran, nadmiar ucina sekcja hero;
  // podniesione tak, że dolna krawędź biurka chowa się pod kartą (dolne 64px sceny jest pod kartą)
  desk: {
    image: agataDesk,
    imageClassName:
      '-left-[5%] w-[120%] min-[480px]:w-[min(120%,max(28rem,calc((100svh_-_31.875rem)/0.7)))] -translate-y-[18%]',
  },
} satisfies Record<
  string,
  Pick<HeroLayout, 'image' | 'imageClassName' | 'decorClassName'>
>
