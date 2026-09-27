import { aboutHero, type RouteHandle } from '@/content/hero'

export const handle = { hero: aboutHero } satisfies RouteHandle

export default function About() {
  return <h2>O mnie</h2>
}
