// Treść kart z numerami (TopicCard): psychoterapia dzieci i dorośli, szkolenia.
// Wygląd kart (kolory, kuleczki): design/topics.ts.
type TopicItem = { term: string; text?: string }

export type Topic = {
  id?: string // kotwica (#id), np. dla nawigacji nad kartami
  short?: string // etykieta w nawigacji nad kartami (desktop), domyślnie title
  number: string
  title: string
  subtitle?: string // desktop: dopisek pod tytułem, np. „(Warsztaty dla uczniów)”
  items: TopicItem[]
}
