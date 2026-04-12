export interface DDragonChampionImage {
  full: string
  sprite: string
  group: string
  x: number
  y: number
  w: number
  h: number
}

export interface DDragonChampion {
  version: string
  id: string
  key: string
  name: string
  title: string
  image: DDragonChampionImage
  tags: string[]
}

export interface DDragonApiResponse {
  type: string
  format: string
  version: string
  data: Record<string, DDragonChampion>
}
