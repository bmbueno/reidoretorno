export async function getChampions() {
  const res = await fetch(
    `${process.env.STRAPI_URL}/api/campeoes?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
      cache: 'no-store',
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch champions')
  }

  return res.json()
}
