import styled from 'styled-components'
import { MergedChampion } from '@/types/mergedChampion'
import { Champion } from '@/types/champion'
import StaticChampionCard from '@/components/molecules/StaticChampionCard'

interface Props {
  champions: MergedChampion[]
  selectedId?: number | null
  onSelect: (champion: Champion) => void
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
  return (
    <Section id="matchups" className={`py-32 ${className ?? ''}`}>
      <div className="container mx-auto px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <SectionTitle>
              GAREN <TitleAccent>MATCHUPS</TitleAccent>
            </SectionTitle>
            <Subtitle>COMO ANULAR SEUS COUNTERS DIRETOS</Subtitle>
          </div>
        </div>
        <GridScroll>
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2">
            {[...champions]
              .sort((a, b) => {
                const aEnabled = !!a.strapiChampion
                const bEnabled = !!b.strapiChampion
                if (aEnabled !== bEnabled) return aEnabled ? -1 : 1
                return a.ddChampion.name.localeCompare(b.ddChampion.name)
              })
              .map((m) => (
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
