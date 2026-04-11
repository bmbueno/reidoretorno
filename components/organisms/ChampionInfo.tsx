import styled from 'styled-components'
import SectionTitle from '@/components/atoms/SectionTitle'
import ItemImageRow from '@/components/molecules/ItemImageRow'
import MatchupText from '@/components/molecules/MatchupText'
import { Champion } from '@/types/champion'

interface ChampionInfoProps {
  champion: Champion
  className?: string
}

const Card = styled.div`
  background: var(--rdr-card-info);
  padding: 25px;
  border-radius: 12px;
  border: 2px solid var(--rdr-primary);
  box-shadow: 0 0 20px var(--rdr-primary-glow);
`

const Name = styled.h2`
  text-align: center;
  font-size: 30px;
  color: var(--rdr-primary);
  margin: 0 0 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: normal;
`

export default function ChampionInfo({ champion, className }: ChampionInfoProps) {
  return (
    <Card className={className}>
      <Name>{champion.name}</Name>

      <SectionTitle>Matchup</SectionTitle>
      <MatchupText html={champion.matchup} />

      <SectionTitle className="mt-7">Spells</SectionTitle>
      <ItemImageRow items={champion.spells} label="Spell" />

      <SectionTitle className="mt-7">Build</SectionTitle>
      <ItemImageRow items={champion.build} label="Item" />
    </Card>
  )
}
