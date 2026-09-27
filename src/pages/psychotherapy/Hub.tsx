import { psychotherapyHero, type RouteHandle } from '@/content/hero'

export const handle = { hero: psychotherapyHero } satisfies RouteHandle

export default function PsychotherapyHub() {
  return <h2>Psychoterapia</h2>
}
