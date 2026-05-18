import { getChampions, getTopLanerChampions } from '@/lib/api'
import { getDDragonChampions } from '@/lib/dataDragon'
import { buildMergedChampions } from '@/lib/mappers'
import Home from './home'

export default async function Page() {
  const [strapiData, ddChampions, topLaners] = await Promise.all([
    getChampions(),
    getDDragonChampions(),
    getTopLanerChampions(),
  ])

  const topLanerSet = new Set(topLaners.map((name) => name.toLowerCase()))

  const mergedChampions = buildMergedChampions(ddChampions, strapiData.data).filter(
    (champion) => topLanerSet.has(champion.ddChampion.name.toLowerCase())
  )

  return <Home mergedChampions={mergedChampions} />
}
