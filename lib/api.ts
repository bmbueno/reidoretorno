export async function getChampions() {
  const strapiUrl = process.env.STRAPI_URL
  const strapiToken = process.env.STRAPI_TOKEN

  if (!strapiUrl || !strapiToken) {
    throw new Error('Missing STRAPI_URL or STRAPI_TOKEN environment variables')
  }

  const res = await fetch(
    `${strapiUrl}/api/campeoes?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
      cache: 'no-store',
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch champions')
  }

  return res.json()
}
