import type { ComponentProps } from 'react'
import type { ImageAsset } from '@/content/image'

type ImageProps = Omit<ComponentProps<'img'>, 'src' | 'width' | 'height'> & {
  image: ImageAsset
  alt: string // wymagany: opis albo '' dla dekoracji
}

/** <img> z `ImageAsset`: wymiary z pliku (bez przesunięć układu), domyślnie ładowany leniwie. */
export const Image = ({ image, loading = 'lazy', ...props }: ImageProps) => (
  <img
    src={image.src}
    width={image.width}
    height={image.height}
    loading={loading}
    {...props}
  />
)
