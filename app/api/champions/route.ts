import { NextRequest, NextResponse } from 'next/server'
import { getChampionByDocumentId } from '@/lib/api'
import { mapStrapiChampion } from '@/lib/mappers'
import { RawChampion } from '@/types/champion'

export async function GET(request: NextRequest) {
  const documentId = request.nextUrl.searchParams.get('id')

  if (!documentId) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 })
  }

  const strapiUrl = process.env.STRAPI_URL || ''
  const data = await getChampionByDocumentId(documentId)
  const champion = mapStrapiChampion(data.data as RawChampion, strapiUrl)

  return NextResponse.json(champion)
}
