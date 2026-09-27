import { trainingHero, type RouteHandle } from '@/content/hero'

export const handle = { hero: trainingHero } satisfies RouteHandle

export default function Training() {
  return <h2>Szkolenia</h2>
}
