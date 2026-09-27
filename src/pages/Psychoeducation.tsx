import { psychoeducationHero, type RouteHandle } from '@/content/hero'

export const handle = { hero: psychoeducationHero } satisfies RouteHandle

export default function Psychoeducation() {
  return <h1>Psychoedukacja</h1>
}
