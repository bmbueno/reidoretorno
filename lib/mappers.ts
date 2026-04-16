import { Champion, RawChampion } from '@/types/champion'
import { MergedChampion } from '@/types/mergedChampion'
import { DDragonChampion } from '@/types/dataDragon'
import { getDDragonImageUrl, getDDragonTileUrl } from './dataDragon'

const prefix = (strapiUrl: string, path?: string) =>
  path ? `${strapiUrl}${path}` : ''

export function mapStrapiChampion(c: RawChampion, strapiUrl: string): Champion {
  const rb = c.runebuilds?.[0]

  return {
    ...c,
    spells: c.spells.map((s) => ({ name: s.name, url: prefix(strapiUrl, s.image?.url) })),
    build: c.build.map((b) => ({ name: b.name, url: prefix(strapiUrl, b.image?.url) })),
    runes: rb
      ? {
          primary: {
            style: { ...rb.primary, url: prefix(strapiUrl, rb.primary.icon?.url) },
            perks: rb.primaryperks.map((p) => ({
              ...p,
              url: prefix(strapiUrl, p.icon?.url),
            })),
          },
          secondary: {
            style: { ...rb.secondary, url: prefix(strapiUrl, rb.secondary.icon?.url) },
            perks: rb.secondaryperks.map((p) => ({
              ...p,
              url: prefix(strapiUrl, p.icon?.url),
            })),
          },
        }
      : undefined,
  }
}

export function buildMergedChampions(
  ddChampions: DDragonChampion[],
  strapiChampions: Champion[]
): MergedChampion[] {
  const merged = ddChampions.map((dd) => {
    const strapi = strapiChampions.find((c) => c.riotkey === dd.key)
    return {
      ddChampion: dd,
      imageUrl: getDDragonTileUrl(dd.id),
      strapiChampion: strapi
        ? { ...strapi, image: { url: getDDragonImageUrl(dd.version, dd.image.full) } }
        : undefined,
    }
  })

  return merged.sort((a, b) => {
    const aEnabled = !!a.strapiChampion
    const bEnabled = !!b.strapiChampion
    if (aEnabled !== bEnabled) return aEnabled ? -1 : 1
    return a.ddChampion.name.localeCompare(b.ddChampion.name)
  })
}
