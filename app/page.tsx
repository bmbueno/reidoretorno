import { getChampions } from '@/lib/api'
import { getDDragonChampions } from '@/lib/dataDragon'
import { mapStrapiChampion, buildMergedChampions } from '@/lib/mappers'
import { RawChampion } from '@/types/champion'
import Home from './home'

export default async function Page() {
  const strapiUrl = process.env.STRAPI_URL || ''

  const [strapiData, ddChampions] = await Promise.all([
    getChampions(),
    getDDragonChampions(),
  ])

  const strapiChampions = strapiData.data.map((c: RawChampion) =>
    mapStrapiChampion(c, strapiUrl)
  )

  const mergedChampions = buildMergedChampions(ddChampions, strapiChampions)

  return <Home mergedChampions={mergedChampions} />
}
