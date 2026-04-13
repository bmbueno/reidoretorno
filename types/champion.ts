export interface BuildItem {
  riotkey: string
}

export interface Champion {
  id: number
  documentId: string
  slug: string
  matchup: string
  name: string
  riotkey: string
  image: { url: string }
  spells: Array<{ url: string }>
  build: Array<{ url: string }>
}

export interface RawChampion {
  id: number
  documentId: string
  slug: string
  matchup: string
  name: string
  riotkey: string
  image: { url: string }
  spells: Array<{ url: string }>
  build: Array<BuildItem>
}
