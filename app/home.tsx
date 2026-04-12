'use client'

import { useState } from 'react'
import { Champion } from '@/types/champion'
import Nav from '@/components/organisms/Nav'
import Hero from '@/components/organisms/Hero'
import StaticMatchupSection from '@/components/organisms/StaticMatchupSection'
import ChampionSelection from '@/components/organisms/ChampionSelection'
import ChampionInfo from '@/components/organisms/ChampionInfo'
import AboutMeSection from '@/components/organisms/AboutMeSection'

export default function Home({ champions }: { champions: Champion[] }) {
  const [selected, setSelected] = useState<Champion | null>(null)

  return (
    <>
      <Nav />
      <Hero />
      <StaticMatchupSection />
      <main className="w-full max-w-[1100px] mx-auto px-5 py-10 box-border">
        <ChampionSelection
          champions={champions}
          selectedId={selected?.id ?? null}
          onSelect={setSelected}
          className="w-fit mx-auto"
        />
        {selected && (
          <ChampionInfo
            champion={selected}
            className="max-w-[900px] mx-auto mt-10"
          />
        )}
      </main>
      <AboutMeSection />
    </>
  )
}
