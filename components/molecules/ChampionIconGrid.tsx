'use client'

import styled from 'styled-components'
import ChampionIcon from '@/components/atoms/ChampionIcon'
import { Champion } from '@/types/champion'

interface ChampionIconGridProps {
  champions: Champion[]
  selectedId: number | null
  onSelect: (champion: Champion) => void
}

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`

export default function ChampionIconGrid({ champions, selectedId, onSelect }: ChampionIconGridProps) {
  return (
    <Grid>
      {champions.map((c) => (
        <ChampionIcon
          key={c.id}
          src={c.image.url}
          alt={c.name}
          isActive={selectedId === c.id}
          onClick={() => onSelect(c)}
        />
      ))}
    </Grid>
  )
}
