import type { RouteHandle } from '@/content/hero'
import { contactHero } from '@/content/cooperation'

export const handle = { hero: contactHero } satisfies RouteHandle

// Dane kontaktowe są w karcie hero (contactHero.card.details, z content/contact.ts).
export default function Contact() {
  return (
    // ciąg dalszy tła hero
    <section
      aria-label="Kontakt"
      className="bg-mist px-10 pt-4 pb-10 text-card text-ink"
    >
      <p>
        Ze względu na specyfikę mojej pracy nie zawsze mogę odebrać telefon. W
        takiej sytuacji zachęcam do pozostawienia wiadomości SMS lub e-mail —
        zawsze odpowiadam na każdą z nich.
      </p>
    </section>
  )
}
