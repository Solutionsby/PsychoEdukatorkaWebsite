/** Krawędź ekranu, do której przylega karta lub panel. */
export type Side = 'left' | 'right'

/** Karty na zmianę: pierwsza (indeks 0) przy lewej krawędzi, druga przy prawej itd. */
export const alternateSide = (index: number): Side =>
  index % 2 ? 'right' : 'left'
