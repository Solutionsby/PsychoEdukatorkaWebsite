import { contactHero, type RouteHandle } from '@/content/hero'

export const handle = { hero: contactHero } satisfies RouteHandle

export default function Contact() {
  return <h2>Współpraca</h2>
}
