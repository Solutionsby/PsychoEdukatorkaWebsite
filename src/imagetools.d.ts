// Typy dla importów przez vite-imagetools (np. `foto.png?format=webp`).
declare module '*?format=webp' {
  const src: string
  export default src
}

declare module '*?format=avif' {
  const src: string
  export default src
}

// `?format=webp&as=metadata` zwraca też wymiary (do width/height na <img>).
declare module '*&as=metadata' {
  const image: { src: string; width: number; height: number }
  export default image
}

// `?w=400;600;800&format=webp&as=srcset`: gotowy atrybut srcset (kilka szerokości).
declare module '*&as=srcset' {
  const srcSet: string
  export default srcSet
}
