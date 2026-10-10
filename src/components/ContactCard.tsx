import type { HeroImage } from '@/content/hero'
import { ContactButton } from './ContactButton'

type ContactCardProps = {
  title: string
  text: string
  image?: HeroImage // zdjęcie obok tekstu (np. Szkolenia)
  imageAlt?: string
}

/** Szara karta przy lewej krawędzi: tytuł, tekst i przycisk „Skontaktuj się ze mną”. */
export const ContactCard = ({
  title,
  text,
  image,
  imageAlt,
}: ContactCardProps) => (
  <section className="mr-edge rounded-r-card bg-mist-light pt-10 pb-8 inset-shadow-card">
    <h2 className="w-2/3 px-10 text-section text-rose-soft">{title}</h2>
    <div className="mt-6 flex items-end gap-4 px-10">
      <p className="flex-1 text-card">{text}</p>
      {image && (
        <img
          src={image.src}
          width={image.width}
          height={image.height}
          alt={imageAlt ?? ''}
          loading="lazy"
          className="h-auto w-2/5"
        />
      )}
    </div>
    <ContactButton className="mt-6" />
  </section>
)
