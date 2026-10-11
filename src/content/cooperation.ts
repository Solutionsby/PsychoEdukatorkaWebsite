// Treść strony Współpraca (/wspolpraca): hero z danymi kontaktowymi.
import { contact } from './contact'
import type { HeroData } from './hero'
import { photos } from './heroPhotos'

export const contactHero: HeroData = {
  heading: ['Współpraca'],
  headingClassName: 'top-40 pr-10',
  lineClassName: 'text-[8.5vw] tracking-[0.2em]',
  ...photos.armsCrossed,
  decor: 'kleks',
  card: {
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
}
