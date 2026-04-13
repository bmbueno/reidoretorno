import { getChampions } from '@/lib/api'
import { getDDragonChampions, getDDragonImageUrl, getDDragonTileUrl, getDDragonVersion, getDDragonItemImageUrl } from '@/lib/dataDragon'
import Home from './home'
import { Champion, RawChampion } from '@/types/champion'
import { MergedChampion } from '@/types/mergedChampion'

export default async function Page() {
  const strapiUrl = process.env.STRAPI_URL

  const [strapiData, ddChampions, ddVersion] = await Promise.all([
    getChampions(),
    getDDragonChampions(),
    getDDragonVersion(),
  ])

  const strapiChampions: Champion[] = strapiData.data.map((c: RawChampion) => ({
    ...c,
    spells: c.spells.map((s) => ({ ...s, url: `${strapiUrl}${s.url}` })),
    build: c.build.map((b) => ({ url: getDDragonItemImageUrl(ddVersion, b.riotkey) })),
  }))

  const mergedChampions: MergedChampion[] = ddChampions.map((dd) => {
    const strapi = strapiChampions.find((c) => c.riotkey === dd.key)
    const tileUrl = getDDragonTileUrl(dd.id)
    const fullImageUrl = getDDragonImageUrl(dd.version, dd.image.full)
    return {
      ddChampion: dd,
      imageUrl: tileUrl,
      strapiChampion: strapi ? { ...strapi, image: { url: fullImageUrl } } : undefined,
    }
  })

  return <Home champions={strapiChampions} mergedChampions={mergedChampions} />
}
