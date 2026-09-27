import { psychotherapyHero, type RouteHandle } from '@/content/hero'

export const handle = { hero: psychotherapyHero } satisfies RouteHandle

export default function PsychotherapyAdults() {
  return <h1>Psychoterapia — dorośli</h1>
}
