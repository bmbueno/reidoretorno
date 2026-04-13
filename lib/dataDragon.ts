import { DDragonApiResponse, DDragonChampion } from '@/types/dataDragon'

const VERSIONS_URL = 'https://ddragon.leagueoflegends.com/api/versions.json'

export async function getDDragonVersion(): Promise<string> {
  return getLatestVersion()
}

async function getLatestVersion(): Promise<string> {
  const res = await fetch(VERSIONS_URL, { next: { revalidate: 86400 } })
  if (!res.ok) throw new Error('Failed to fetch Data Dragon versions')
  const versions: string[] = await res.json()
  return versions[0]
}

export async function getDDragonChampions(): Promise<DDragonChampion[]> {
  const version = await getLatestVersion()
  const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/pt_BR/champion.json`
  const res = await fetch(url, { next: { revalidate: 86400 } })
  if (!res.ok) throw new Error('Failed to fetch Data Dragon champions')
  const json: DDragonApiResponse = await res.json()
  return Object.values(json.data)
}

export function getDDragonImageUrl(version: string, imageFull: string): string {
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${imageFull}`
}

export function getDDragonTileUrl(champId: string): string {
  return `https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champId}_0.jpg`
}

export function getDDragonItemImageUrl(version: string, riotkey: string): string {
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${riotkey}.png`
}
