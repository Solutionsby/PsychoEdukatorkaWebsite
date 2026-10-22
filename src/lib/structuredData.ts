import { contact } from '@/content/contact'
import { pageUrl, seo, siteUrl } from '@/content/seo'

// Dane strukturalne (JSON-LD, schema.org) dla Google: kim jest Agata, gdzie przyjmuje,
// ścieżka nawigacji podstron. Źródło: content/contact.ts i content/seo.ts.

const personId = `${siteUrl}/#agata`

/** Strona główna: Agata (zawód, specjalizacje, gabinet, profile) i witryna. */
const homeGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': personId,
      name: contact.name,
      url: pageUrl('/'),
      jobTitle: 'Psychoterapeutka poznawczo-behawioralna',
      description: seo['/'].description,
      email: contact.email.label,
      telephone: contact.phone.href.replace('tel:', ''),
      knowsAbout: [
        'psychoterapia poznawczo-behawioralna',
        'psychoedukacja',
        'psychodietetyka',
        'rezyliencja',
        'psychoterapia dzieci i młodzieży',
        'psychoterapia dorosłych',
      ],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        name: 'Certyfikat psychoterapeuty poznawczo-behawioralnego PTTPB nr 1819',
      },
      memberOf: {
        '@type': 'Organization',
        name: 'Polskie Towarzystwo Psychoterapii Poznawczo-Behawioralnej',
      },
      workLocation: {
        '@type': 'Place',
        name: contact.office.name,
        address: { '@type': 'PostalAddress', ...contact.officeAddress },
        hasMap: contact.mapUrl,
      },
      sameAs: contact.profiles,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: pageUrl('/'),
      name: 'Psychoedukatorka – Agata Hemmerling-Goc',
      inLanguage: 'pl-PL',
      publisher: { '@id': personId },
    },
  ],
}

/** Podstrona: ścieżka od strony głównej, np. Strona główna › Psychoterapia › Dorośli. */
const breadcrumbs = (path: keyof typeof seo) => {
  const segments = path.split('/').filter(Boolean)
  const trail = ['/', ...segments.map((_, i) => `/${segments.slice(0, i + 1).join('/')}`)]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: seo[p as keyof typeof seo].name,
      item: pageUrl(p),
    })),
  }
}

/** JSON-LD dla strony z listy (meta w root.tsx). */
export const structuredData = (path: keyof typeof seo) =>
  path === '/' ? homeGraph : breadcrumbs(path)
