import { Champion } from './champion'
import { DDragonChampion } from './dataDragon'

export interface MergedChampion {
  ddChampion: DDragonChampion
  imageUrl: string
  strapiChampion?: Champion
}
