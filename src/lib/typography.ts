// Polska typografia: jednoliterowe słowa (i, w, z, o, a, u…) nie zostają na końcu
// linii, spacja po nich staje się twardą (U+00A0) i słowo przechodzi z następnym.
const singleLetter = /(?<=^|[\s („"])(\p{L}) /gu

export const nbsp = (text: string) => text.replace(singleLetter, '$1 ')

// Pola, których nie ruszamy: klasy, adresy, identyfikatory, pliki.
const skip = /ClassName$|^(to|href|src|id|blob)$/

/** Głęboko: wszystkie teksty w danych treści (`content/`), bez klas, adresów i obrazów. */
export function typo<T>(data: T, key = ''): T {
  if (typeof data === 'string') return (skip.test(key) ? data : nbsp(data)) as T
  if (Array.isArray(data)) return data.map((item) => typo(item, key)) as T
  if (data && Object.getPrototypeOf(data) === Object.prototype)
    return Object.fromEntries(
      Object.entries(data).map(([k, v]) => [k, typo(v, k)]),
    ) as T
  return data // komponenty (SVG), liczby itp.
}
