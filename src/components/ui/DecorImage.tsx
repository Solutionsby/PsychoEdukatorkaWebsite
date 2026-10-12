import type { ComponentProps } from 'react'
import type { ImageAsset } from '@/content/image'
import { cn } from '@/lib/cn'
import { Image } from './Image'

type DecorImageProps = Omit<ComponentProps<'img'>, 'src' | 'alt'> & {
  src: string | ImageAsset // adres pliku (SVG) albo zdjęcie z wymiarami
}

/**
 * Desktop: dekoracja tła (fala, chmurka, linia, zdjęcie) pozycjonowana absolutnie,
 * bez opisu dla czytników; na telefonie ukryta. Pozycja, szerokość i warstwa (-z-*) z className.
 */
export const DecorImage = ({ src, className, ...props }: DecorImageProps) => {
  const classes = cn(
    'pointer-events-none absolute hidden h-auto max-w-none lg:block',
    className,
  )
  return typeof src === 'string' ? (
    <img src={src} alt="" className={classes} {...props} />
  ) : (
    <Image image={src} alt="" className={classes} {...props} />
  )
}
