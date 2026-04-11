'use client'

import { useState } from 'react'
import { Champion } from '@/types/champion'
import Banner from '@/components/organisms/Banner'
import ChampionSelection from '@/components/organisms/ChampionSelection'
import ChampionInfo from '@/components/organisms/ChampionInfo'

export default function Home({ champions }: { champions: Champion[] }) {
  const [selected, setSelected] = useState<Champion | null>(null)

  return (
    <>
      <Banner />
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
    </>
  )
}
