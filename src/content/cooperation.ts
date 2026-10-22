// Treść strony Współpraca (/wspolpraca): hero z danymi kontaktowymi; wygląd: design/cooperation.ts.
import { contact } from './contact'
import type { HeroContent } from './hero'
import { typo } from '@/lib/typography'

// Telefon: pod hero; desktop: w karcie hero, nad danymi kontaktowymi.
export const contactNote = typo(
  'Ze względu na specyfikę mojej pracy nie zawsze mogę odebrać telefon. W takiej sytuacji zachęcam do pozostawienia wiadomości SMS lub e-mail – zawsze odpowiadam na każdą z nich.',
)

export const contactHero: HeroContent = typo({
  heading: ['Współpraca'],
  card: {
    title: contact.name, // tylko desktop
    paragraphs: [contactNote], // tylko desktop
    details: [
      [
        {
          label: 'Telefon',
          lines: [contact.phone.label],
          href: contact.phone.href,
        },
        {
          label: 'E-mail',
          lines: [contact.email.label],
          href: contact.email.href,
        },
      ],
      [
        {
          label: 'Adres gabinetu',
          lines: [contact.office.name, contact.office.address],
          stacked: true,
        },
      ],
    ],
  },
})
