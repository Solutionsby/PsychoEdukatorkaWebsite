import { createBrowserRouter } from 'react-router'
import { Layout } from '@/components/Layout.tsx'
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
      { index: true, element: <Home /> },
      { path: 'o-mnie', element: <About /> },
      { path: 'psychoedukacja', element: <Psychoeducation /> },
      {
        path: 'psychoterapia',
        children: [
          { index: true, element: <PsychotherapyHub /> },
          { path: 'dzieci-i-mlodziez', element: <PsychotherapyKids /> },
          { path: 'dorosli', element: <PsychotherapyAdults /> },
        ],
      },
      { path: 'szkolenia', element: <Training /> },
      { path: 'wspolpraca', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
