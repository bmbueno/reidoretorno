'use client'

import { useState, useEffect, useRef } from 'react'
import { Champion } from '@/types/champion'
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
  const [selected, setSelected] = useState<Champion | null>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selected) {
      infoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [selected])

  return (
    <>
      <Nav />
      <Intro />
      <MatchupSection
        champions={mergedChampions}
        selectedId={selected?.id ?? null}
        onSelect={(c) => setSelected(c || null)}
      />
      {selected && (
        <main className="w-[92%] max-w-[1800px] mx-auto pt-40 box-border">
          <div ref={infoRef}>
            <ChampionInfo champion={selected} className="w-full" />
          </div>
        </main>
      )}
      <AboutMeSection />
    </>
  )
}
