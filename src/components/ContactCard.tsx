import type { HeroImage } from '@/content/hero'
import { cn } from '@/lib/cn'
import { ContactButton } from './ContactButton'

type ContactCardProps = {
  title: string
  text: string
  image?: HeroImage // zdjęcie obok tekstu (np. Szkolenia)
  imageAlt?: string
  imageClassName?: string // np. desktop: zdjęcie obok (absolute), na telefonie ukryte
  className?: string
  titleClassName?: string // np. desktop bez kreski nad tytułem (Szkolenia)
  buttonClassName?: string // pozycja przycisku (desktop)
}

/** Szara karta przy lewej krawędzi: tytuł, tekst i przycisk „Skontaktuj się ze mną”. */
// Desktop: bez karty, kreska nad tytułem; tło i pozycje ze strony (className, *ClassName).
export const ContactCard = ({
  title,
  text,
  image,
  imageAlt,
  imageClassName,
  className,
  titleClassName,
  buttonClassName,
}: ContactCardProps) => (
  <section
    className={cn(
      'mr-edge rounded-r-card bg-mist-light pt-10 pb-8 inset-shadow-card lg:relative lg:m-0 lg:rounded-none lg:bg-transparent lg:py-0 lg:pl-[8.6vw] lg:inset-shadow-none',
      className,
    )}
  >
    <h2
      className={cn(
        'w-2/3 px-10 text-section text-rose-soft lg:w-auto lg:px-0 lg:text-[2.28vw] lg:leading-[1.2] lg:before:mb-[0.5vw] lg:before:block lg:before:h-[0.16vw] lg:before:w-[1.7vw] lg:before:bg-current',
        titleClassName,
      )}
    >
      {title}
    </h2>
    <div className="mt-6 flex items-end gap-4 px-10 lg:mt-[0.8vw] lg:block lg:px-0">
      <p className="flex-1 text-card lg:max-w-[52vw] lg:text-[max(0.8125rem,1.4vw)] lg:leading-[1.5]">
        {text}
      </p>
      {image && (
        <img
          src={image.src}
          width={image.width}
          height={image.height}
          alt={imageAlt ?? ''}
          loading="lazy"
          className={cn('h-auto w-2/5', imageClassName)}
        />
      )}
    </div>
    <ContactButton className={cn('mt-6', buttonClassName)} />
  </section>
)
