export async function getChampions() {
  const strapiUrl = process.env.STRAPI_URL
  const strapiToken = process.env.STRAPI_TOKEN

  if (!strapiUrl || !strapiToken) {
    throw new Error('Missing STRAPI_URL or STRAPI_TOKEN environment variables')
  }

  const res = await fetch(
  `${strapiUrl}/api/campeoes?populate[spells][populate][image]=true&populate[build][populate][image]=true&populate[runebuilds][populate][primary][populate][icon]=true&populate[runebuilds][populate][secondary][populate][icon]=true&populate[runebuilds][populate][primaryperks][populate][icon]=true&populate[runebuilds][populate][secondaryperks][populate][icon]=true`,
    {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
      next: { revalidate: 3600, tags: ['champions'] },
    }
  )

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Failed to fetch champions: ${res.status} ${res.statusText} — ${body}`)
  }

  return res.json()
}
