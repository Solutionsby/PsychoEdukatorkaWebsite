import { contactHero, type RouteHandle } from '@/content/hero'

export const handle = { hero: contactHero } satisfies RouteHandle

export default function Contact() {
  return <h1>Współpraca</h1>
}
