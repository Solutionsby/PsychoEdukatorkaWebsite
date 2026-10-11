import type { RouteHandle } from '@/content/hero'
import { contactHero, contactNote } from '@/content/cooperation'

export const handle = { hero: contactHero } satisfies RouteHandle

// Dane kontaktowe są w karcie hero (contactHero.card.details, z content/contact.ts).
// Desktop: cała treść w hero (notka też), ta sekcja ukryta.
export default function Contact() {
  return (
    // ciąg dalszy tła hero
    <section
      aria-label="Kontakt"
      className="bg-mist px-10 pt-4 pb-10 text-card text-ink lg:hidden"
    >
      <p>{contactNote}</p>
    </section>
  )
}
