/**
 * Wygląd z design/ dopasowany do treści z content/ po kolejności (karty, ikony, kształty).
 * Różna liczba elementów = błąd już przy buildzie (prerender), a nie cichy rozjazd na stronie.
 */
export function matchOrder<L>(
  content: readonly unknown[],
  looks: readonly L[],
  name: string,
): readonly L[] {
  if (content.length !== looks.length) {
    const message = `${name}: ${looks.length} w design/, a ${content.length} w content/`
    console.error(message) // prerender pokazuje tylko „500”, bez treści błędu
    throw new Error(message)
  }
  return looks
}
