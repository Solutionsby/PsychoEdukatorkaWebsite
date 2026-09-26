import { createBrowserRouter } from 'react-router'
import { Layout } from '@/components/Layout.tsx'
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

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: { hero: homeHero } satisfies RouteHandle,
      },
      {
        path: 'o-mnie',
        element: <About />,
        handle: { hero: aboutHero } satisfies RouteHandle,
      },
      {
        path: 'psychoedukacja',
        element: <Psychoeducation />,
        handle: { hero: psychoeducationHero } satisfies RouteHandle,
      },
      {
        path: 'psychoterapia',
        // Dzieci dziedziczą hero huba, dopóki nie dostaną własnego handle.
        handle: { hero: psychotherapyHero } satisfies RouteHandle,
        children: [
          { index: true, element: <PsychotherapyHub /> },
          { path: 'dzieci-i-mlodziez', element: <PsychotherapyKids /> },
          { path: 'dorosli', element: <PsychotherapyAdults /> },
        ],
      },
      {
        path: 'szkolenia',
        element: <Training />,
        handle: { hero: trainingHero } satisfies RouteHandle,
      },
      {
        path: 'wspolpraca',
        element: <Contact />,
        handle: { hero: contactHero } satisfies RouteHandle,
      },
      { path: '*', element: <NotFound /> },
    ],
  },
])
