import type { ReactNode } from 'react'
import { Links, Meta, Scripts, ScrollRestoration } from 'react-router'
import { Layout as SiteLayout } from '@/components/Layout'
import './index.css'

// Domyślny tytuł; strony nadpiszą go własnym `meta` (krok SEO).
export const meta = () => [{ title: 'Psychoedukatorka' }]

// Szkielet dokumentu HTML: to, co było w index.html.
export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

// Aplikacja: nasz dotychczasowy Layout (Menu, hero, <Outlet/>, stopka).
export default function App() {
  return <SiteLayout />
}
