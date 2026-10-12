import type { HeroCardData } from '@/lib/hero'
import { cn } from '@/lib/cn'
import {
  HeroCardActions,
  HeroCardDetails,
  HeroCardItems,
  HeroCardLines,
  HeroCardSections,
  HeroCardTitle,
} from './HeroCardParts'
import { DecorImage } from './ui/DecorImage'
import { Paragraphs } from './ui/Paragraphs'

// Karta hero: kształt i układ; treść składana z części (HeroCardParts), każda z jednego pola danych.
export const HeroCard = ({ card }: { card: HeroCardData }) => (
  <div
    className={cn(
      // tablet: karta na całą szerokość (zakrywa dół zdjęcia), tekst najwyżej ~40rem
      'relative z-30 -mt-16 ml-4 rounded-l-[4.5rem] bg-white py-6 pr-[max(1.5rem,100%-44rem)] pl-12 text-ink inset-shadow-card',
      // desktop: półprzezroczysty blob na scenie; pozycja i rozmiar z card.className
      'lg:absolute lg:m-0 lg:flex lg:flex-col lg:justify-start lg:rounded-[50%] lg:bg-white/50 lg:pt-[5.1vw] lg:pr-[1.5vw] lg:pb-0 lg:pl-[3.25vw] lg:inset-shadow-none',
      card.blob && 'lg:rounded-none lg:bg-transparent',
      card.className,
    )}
  >
    {card.blob && (
      <DecorImage src={card.blob} className="inset-0 -z-10 size-full" />
    )}
    <HeroCardTitle
      title={card.title}
      subtitle={card.subtitle}
      titleClassName={card.titleClassName}
      subtitleClassName={card.subtitleClassName}
    />
    {card.lines && <HeroCardLines lines={card.lines} />}
    {card.paragraphs && (
      <Paragraphs
        items={card.paragraphs}
        className={cn('text-ink-soft', card.paragraphsClassName)}
      />
    )}
    {card.sections && <HeroCardSections sections={card.sections} />}
    {card.details && <HeroCardDetails details={card.details} />}
    {card.items && <HeroCardItems items={card.items} />}
    <HeroCardActions
      cta={card.cta}
      link={card.link}
      actionsClassName={card.actionsClassName}
    />
  </div>
)
