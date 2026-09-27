import type { RouteObject } from 'react-router'
import {
  aboutHero,
  contactHero,
  homeHero,
  psychoeducationHero,
  psychotherapyHero,
  trainingHero,
  type RouteHandle,
} from '@/content/hero.ts'
import { About } from '@/pages/About.tsx'
import { Contact } from '@/pages/Contact.tsx'
import { Home } from '@/pages/Home.tsx'
import { NotFound } from '@/pages/NotFound.tsx'
import { Psychoeducation } from '@/pages/Psychoeducation.tsx'
import { Training } from '@/pages/Training.tsx'
import { PsychotherapyAdults } from '@/pages/psychotherapy/Adults.tsx'
import { PsychotherapyHub } from '@/pages/psychotherapy/Hub.tsx'
import { PsychotherapyKids } from '@/pages/psychotherapy/Kids.tsx'

// Trasy stron. Nowa strona: dopisz ją tutaj; `nav` dodaje ją do menu i stopki
// (kolejność linków = kolejność tras). Plik osobno od `routes.tsx`, żeby
// Menu/Footer mogły go importować bez cyklu routes → Layout → Menu → routes.
export const pageRoutes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
    handle: { hero: homeHero } satisfies RouteHandle,
  },
  {
    path: 'o-mnie',
    element: <About />,
    handle: {
      hero: aboutHero,
      nav: { label: 'O mnie' },
    } satisfies RouteHandle,
  },
  {
    path: 'psychoedukacja',
    element: <Psychoeducation />,
    handle: {
      hero: psychoeducationHero,
      nav: { label: 'Psychoedukacja' },
    } satisfies RouteHandle,
  },
  {
    path: 'psychoterapia',
    // Dzieci dziedziczą hero huba, dopóki nie dostaną własnego handle.
    handle: {
      hero: psychotherapyHero,
      nav: { label: 'Psychoterapia' },
    } satisfies RouteHandle,
    children: [
      { index: true, element: <PsychotherapyHub /> },
      { path: 'dzieci-i-mlodziez', element: <PsychotherapyKids /> },
      { path: 'dorosli', element: <PsychotherapyAdults /> },
    ],
  },
  {
    path: 'szkolenia',
    element: <Training />,
    handle: {
      hero: trainingHero,
      nav: { label: 'Szkolenia' },
    } satisfies RouteHandle,
  },
  {
    path: 'wspolpraca',
    element: <Contact />,
    handle: {
      hero: contactHero,
      nav: { label: 'Współpraca' },
    } satisfies RouteHandle,
  },
  { path: '*', element: <NotFound /> },
]
