import { useState } from 'react'
import styled from 'styled-components'
import { MergedChampion } from '@/types/mergedChampion'
import { ChampionListItem } from '@/types/champion'
import StaticChampionCard from '@/components/molecules/StaticChampionCard'

interface Props {
  champions: MergedChampion[]
  selectedId?: number | null
  onSelect: (champion: ChampionListItem) => void
  className?: string
}

const Section = styled.section`
  background: var(--rdr-surface-container-lowest);
`

const SectionTitle = styled.h2`
  font-family: var(--font-headline, 'Space Grotesk', sans-serif);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  margin: 0 0 0.5rem;
  color: #fff;
`

const TitleAccent = styled.span`
  color: var(--rdr-primary);
`

const Subtitle = styled.p`
  color: #c0c7cf;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  margin: 0;
`

const SearchInput = styled.input`
  background: var(--rdr-bg);
  border: 1px solid #40484e;
  color: #fff;
  padding: 0.5rem 1rem;
  font-family: var(--font-body, Inter, sans-serif);
  font-size: 0.875rem;
  outline: none;
  width: 100%;
  max-width: 220px;
  transition: border-color 0.2s;

  &::placeholder {
    color: #8a9299;
  }

  &:focus {
    border-color: var(--rdr-primary);
  }
`

const GridScroll = styled.div`
  overflow-y: auto;
  max-height: 185px;

  @media (min-width: 768px) {
    max-height: 220px;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--rdr-primary);
    border-radius: 2px;
  }
`

export default function MatchupSection({ champions, selectedId, onSelect, className }: Props) {
  const [search, setSearch] = useState('')

  const filtered = search
    ? champions.filter((m) => m.ddChampion.name.toLowerCase().includes(search.toLowerCase()))
    : champions

  return (
    <Section id="matchups" className={`py-32 ${className ?? ''}`}>
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-16">
          <div>
            <SectionTitle>
              GAREN <TitleAccent>MATCHUPS</TitleAccent>
            </SectionTitle>
            <Subtitle>COMO ANULAR SEUS COUNTERS DIRETOS</Subtitle>
          </div>
          <SearchInput
            type="text"
            placeholder="Buscar campeão..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <GridScroll>
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2">
            {filtered.map((m) => (
              <StaticChampionCard
                key={m.ddChampion.id}
                name={m.ddChampion.name}
                subtitle={m.ddChampion.title}
                imageUrl={m.imageUrl}
                imageAlt={m.ddChampion.name}
                disabled={!m.strapiChampion}
                selected={m.strapiChampion?.id === selectedId}
                onClick={m.strapiChampion ? () => onSelect(m.strapiChampion!) : undefined}
              />
            ))}
          </div>
        </GridScroll>

      </div>
    </Section>
  )
}
