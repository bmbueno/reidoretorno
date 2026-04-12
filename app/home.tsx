'use client'

import { useState, useEffect, useRef } from 'react'
import { Champion } from '@/types/champion'
import { MergedChampion } from '@/types/mergedChampion'
import Nav from '@/components/organisms/Nav'
import Hero from '@/components/organisms/Hero'
import StaticMatchupSection from '@/components/organisms/StaticMatchupSection'
import ChampionSelection from '@/components/organisms/ChampionSelection'
import ChampionInfo from '@/components/organisms/ChampionInfo'
import AboutMeSection from '@/components/organisms/AboutMeSection'

interface HomeProps {
  champions: Champion[]
  mergedChampions: MergedChampion[]
}

export default function Home({ champions, mergedChampions }: HomeProps) {
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
      <Hero />
      <StaticMatchupSection
        champions={mergedChampions}
        selectedId={selected?.id ?? null}
        onSelect={setSelected}
      />
      <main className="w-full max-w-[1100px] mx-auto px-5 pt-40 box-border">
        {selected && (
          <div ref={infoRef}>
            <ChampionInfo
              champion={selected}
              className="max-w-[900px] mx-auto"
            />
          </div>
        )}
      </main>
      <AboutMeSection />
    </>
  )
}
