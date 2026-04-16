'use client'

import { useState, useEffect, useRef } from 'react'
import { Champion, ChampionListItem } from '@/types/champion'
import { MergedChampion } from '@/types/mergedChampion'
import Nav from '@/components/organisms/Nav'
import Intro from '@/components/organisms/Intro'
import MatchupSection from '@/components/organisms/MatchupSection'
import ChampionInfo from '@/components/organisms/ChampionInfo'
import AboutMeSection from '@/components/organisms/AboutMeSection'

interface HomeProps {
  mergedChampions: MergedChampion[]
}

export default function Home({ mergedChampions }: HomeProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [champion, setChampion] = useState<Champion | null>(null)
  const [loading, setLoading] = useState(false)
  const infoRef = useRef<HTMLDivElement>(null)

  async function handleSelect(item: ChampionListItem) {
    setSelectedId(item.id)
    setLoading(true)
    const res = await fetch(`/api/champions?id=${item.documentId}`)
    const data: Champion = await res.json()
    setChampion(data)
    setLoading(false)
  }

  useEffect(() => {
    if (champion) {
      infoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [champion])

  return (
    <>
      <Nav />
      <Intro />
      <MatchupSection
        champions={mergedChampions}
        selectedId={selectedId}
        onSelect={handleSelect}
      />
      {(champion || loading) && (
        <main className="w-[92%] max-w-[1800px] mx-auto pt-40 box-border">
          <div ref={infoRef}>
            {loading ? (
              <div className="flex justify-center">
                <div className="w-10 h-10 border-4 border-[var(--rdr-primary)] border-t-transparent rounded-full animate-spin" />
              </div>
            ) : champion && (
              <ChampionInfo champion={champion} className="w-full" />
            )}
          </div>
        </main>
      )}
      <AboutMeSection />
    </>
  )
}
