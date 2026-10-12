// Treść strony Współpraca (/wspolpraca): hero z danymi kontaktowymi.
import { contact } from './contact'
import type { HeroData } from './hero'
import { photos } from './heroPhotos'
import { typo } from '@/lib/typography'

// Telefon: pod hero; desktop: w karcie hero, nad danymi kontaktowymi.
export const contactNote = typo(
  'Ze względu na specyfikę mojej pracy nie zawsze mogę odebrać telefon. W takiej sytuacji zachęcam do pozostawienia wiadomości SMS lub e-mail — zawsze odpowiadam na każdą z nich.',
)

export const contactHero: HeroData = typo({
  // desktop: jeden ekran, sam tekst po lewej i łuk, bez zdjęcia
  heading: ['Współpraca'],
  headingClassName: 'top-40 pr-10 lg:top-[16.4vw] lg:pr-0 lg:items-start',
  lineClassName:
    'text-[8.5vw] tracking-[0.2em] lg:ml-[10vw] lg:text-[6.35vw] lg:leading-none lg:tracking-[0.255em]',
  ...photos.armsCrossed,
  imageClassName: `${photos.armsCrossed.imageClassName} lg:hidden`,
  decor: 'kleks',
  card: {
    className:
      'lg:top-[24.8vw] lg:left-[9.9vw] lg:h-auto lg:w-[45vw] lg:rounded-none lg:bg-transparent lg:p-0',
    title: contact.name, // tylko desktop
    titleClassName:
      'max-lg:hidden lg:mb-[0.6vw] lg:text-[2.6vw] lg:leading-[1.2] lg:tracking-[0.03em]',
    paragraphs: [contactNote],
    paragraphsClassName:
      'max-lg:hidden lg:mb-[2.1vw] lg:max-w-[41vw] lg:text-[max(0.8125rem,1.38vw)] lg:leading-[1.5] lg:text-ink',
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
