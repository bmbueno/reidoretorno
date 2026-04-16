import { getChampions } from '@/lib/api'
import { getDDragonChampions } from '@/lib/dataDragon'
import { buildMergedChampions } from '@/lib/mappers'
import Home from './home'

export default async function Page() {
  const [strapiData, ddChampions] = await Promise.all([
    getChampions(),
    getDDragonChampions(),
  ])

  const mergedChampions = buildMergedChampions(ddChampions, strapiData.data)

  return <Home mergedChampions={mergedChampions} />
}
