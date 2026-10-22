/** Obraz z importu `?as=metadata` (vite-imagetools): adres i wymiary (bez przesunięć układu). */
export type ImageAsset = {
  src: string
  width: number
  height: number
  srcSet?: string // kilka szerokości (import `?as=srcset`); <Image> potrzebuje wtedy `sizes`
}
