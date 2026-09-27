import { createBrowserRouter } from 'react-router'
import { Layout } from '@/components/Layout.tsx'
import { pageRoutes } from '@/pageRoutes.tsx'

// Strony dopisujesz w `pageRoutes.tsx`; tu tylko wspólny Layout.
export const router = createBrowserRouter([
  { element: <Layout />, children: pageRoutes },
])
