const getStrapiConfig = () => {
  const strapiUrl = process.env.STRAPI_URL
  const strapiToken = process.env.STRAPI_TOKEN

  if (!strapiUrl || !strapiToken) {
    throw new Error('Missing STRAPI_URL or STRAPI_TOKEN environment variables')
  }

  return { strapiUrl, strapiToken }
}

export async function getChampions() {
  const { strapiUrl, strapiToken } = getStrapiConfig()

  const res = await fetch(
    `${strapiUrl}/api/campeoes?fields[0]=name&fields[1]=riotkey&fields[2]=slug`,
    {
      headers: { Authorization: `Bearer ${strapiToken}` },
      cache: 'no-store',
    }
  )

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Failed to fetch champions: ${res.status} ${res.statusText} — ${body}`)
  }

  return res.json()
}

export async function getChampionByDocumentId(documentId: string) {
  const { strapiUrl, strapiToken } = getStrapiConfig()

  const res = await fetch(
    `${strapiUrl}/api/campeoes/${documentId}?populate[spells][populate][image]=true&populate[build][populate][image]=true&populate[runebuilds][populate][primary][populate][icon]=true&populate[runebuilds][populate][secondary][populate][icon]=true&populate[runebuilds][populate][primaryperks][populate][icon]=true&populate[runebuilds][populate][secondaryperks][populate][icon]=true`,
    {
      headers: { Authorization: `Bearer ${strapiToken}` },
      cache: 'no-store',
    }
  )

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Failed to fetch champion: ${res.status} ${res.statusText} — ${body}`)
  }

  return res.json()
}
