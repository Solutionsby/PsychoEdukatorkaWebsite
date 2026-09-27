import { psychotherapyHero, type RouteHandle } from '@/content/hero'

export const handle = { hero: psychotherapyHero } satisfies RouteHandle

export default function PsychotherapyKids() {
  return <h1>Psychoterapia — dzieci i młodzież</h1>
}
