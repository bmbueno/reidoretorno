import { getChampions } from '@/lib/api'
import Home from './home'
import { Champion, RawChampion } from '@/types/champion'

export default async function Page() {
  const data = await getChampions()

  const strapiUrl = process.env.STRAPI_URL

  const champions: Champion[] = data.data.map((c: RawChampion) => ({
    ...c,
    image: { ...c.image, url: `${strapiUrl}${c.image.url}` },
    spells: c.spells.map((s) => ({ ...s, url: `${strapiUrl}${s.url}` })),
    build: c.build.map((b) => ({ ...b, url: `${strapiUrl}${b.url}` })),
  }))

  return <Home champions={champions} />
}
