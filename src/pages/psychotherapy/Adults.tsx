import { psychotherapyHero, type RouteHandle } from '@/content/hero'

export const handle = { hero: psychotherapyHero } satisfies RouteHandle

export default function PsychotherapyAdults() {
  return <h2>Psychoterapia — dorośli</h2>
}
