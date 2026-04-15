import styled from 'styled-components'
import MatchupText from '@/components/molecules/MatchupText'
import RuneDisplay from '@/components/molecules/RuneDisplay'
import ItemImage from '@/components/atoms/ItemImage'
import { Champion } from '@/types/champion'

interface ChampionInfoProps {
  champion: Champion
  className?: string
}

const Title = styled.h2`
  font-family: var(--font-headline, 'Space Grotesk', sans-serif);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
  margin: 0 0 2.5rem;
  color: #fff;
`

const TitleAccent = styled.span`
  color: var(--rdr-primary);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  }
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`

const SectionHeading = styled.h3`
  font-family: var(--font-headline, 'Space Grotesk', sans-serif);
  font-size: 1.5rem;
  font-weight: 900;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  margin: 0;
  color: #fff;
`

const Divider = styled.div`
  flex: 1;
  height: 1px;
  background: rgba(64, 72, 78, 0.5);
`

const MatchupBlock = styled.div`
  background: var(--rdr-card-info);
  padding: 1.75rem 2rem;
  border-left: 4px solid var(--rdr-primary);
`

const CompactBox = styled.div`
  background: var(--rdr-surface-container-lowest);
  padding: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const SideStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`

const Section = styled.div``

export default function ChampionInfo({ champion, className }: ChampionInfoProps) {
  return (
    <div className={className}>
      <Title>
        COMO VENCER <TitleAccent>{champion.name}</TitleAccent>
      </Title>

      <Grid>
        <Section>
          <SectionHeader>
            <SectionHeading>Matchup</SectionHeading>
            <Divider />
          </SectionHeader>
          <MatchupBlock>
            <MatchupText html={champion.matchup} />
          </MatchupBlock>
        </Section>

        <SideStack>
          <Section>
            <SectionHeader>
              <SectionHeading>Spells</SectionHeading>
              <Divider />
            </SectionHeader>
            <CompactBox>
              {champion.spells.map((s, i) => (
                <ItemImage key={i} src={s.url} alt={`Spell ${i + 1}`} />
              ))}
            </CompactBox>
          </Section>

          <Section>
            <SectionHeader>
              <SectionHeading>Items</SectionHeading>
              <Divider />
            </SectionHeader>
            <CompactBox>
              {champion.build.map((b, i) => (
                <ItemImage key={i} src={b.url} alt={`Item ${i + 1}`} />
              ))}
            </CompactBox>
          </Section>

          {champion.runes && (
            <Section>
              <SectionHeader>
                <SectionHeading>Runas</SectionHeading>
                <Divider />
              </SectionHeader>
              <CompactBox>
                <RuneDisplay runes={champion.runes} />
              </CompactBox>
            </Section>
          )}
        </SideStack>
      </Grid>
    </div>
  )
}
