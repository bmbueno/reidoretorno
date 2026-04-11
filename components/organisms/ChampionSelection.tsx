'use client'

import styled from 'styled-components'
import ChampionIconGrid from '@/components/molecules/ChampionIconGrid'
import { Champion } from '@/types/champion'

interface ChampionSelectionProps {
  champions: Champion[]
  selectedId: number | null
  onSelect: (champion: Champion) => void
  className?: string
}

const Card = styled.div`
  background: var(--color-card-selection);
  padding: 20px;
  border-radius: 10px;
  border: 2px solid var(--color-primary);
  text-align: center;
`

const Title = styled.h2`
  font-size: 24px;
  color: var(--color-primary);
  margin: 0 0 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: normal;
`

export default function ChampionSelection({
  champions,
  selectedId,
  onSelect,
  className,
}: ChampionSelectionProps) {
  return (
    <Card className={className}>
      <Title>Escolha o Campeão</Title>
      <ChampionIconGrid champions={champions} selectedId={selectedId} onSelect={onSelect} />
    </Card>
  )
}
