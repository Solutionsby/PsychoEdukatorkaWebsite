import type { ReactNode } from 'react'
import { Links, Meta, Scripts, ScrollRestoration } from 'react-router'
import { Layout as SiteLayout } from '@/components/Layout'
import {
  notFoundTitle,
  pageUrl,
  seo as seoByPath,
  type Seo,
} from '@/content/seo'
import type { Route } from './+types/root'
import './index.css'

// Metatagi z content/seo.ts; adres spoza listy (404) dostaje domyślne.
export const meta = ({ location }: Route.MetaArgs) => {
  // prerender i część hostingów dają adres z ukośnikiem na końcu (/o-mnie/)
  const path = location.pathname.replace(/(.)\/$/, '$1')
  const seo = (seoByPath as Record<string, Seo | undefined>)[path]
  const title = seo?.title ?? notFoundTitle
  return [
    { title },
    ...(seo ? [{ name: 'description', content: seo.description }] : []),
    { property: 'og:title', content: title },
    ...(seo ? [{ property: 'og:description', content: seo.description }] : []),
    // canonical tylko dla stron z listy; 404 nie ma własnego adresu
    ...(seo
      ? [
          { tagName: 'link', rel: 'canonical', href: pageUrl(path) },
          { property: 'og:url', content: pageUrl(path) },
        ]
      : []),
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'pl_PL' },
  ]
}

// Szkielet dokumentu HTML.
export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      {/* desktop: krótka strona (np. Home na 1024×768) – stopka dochodzi do dołu ekranu */}
      <body className="lg:flex lg:min-h-svh lg:flex-col">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <SiteLayout />
}
