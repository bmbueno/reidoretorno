import styled from 'styled-components'
import DifficultyBadge from '@/components/atoms/DifficultyBadge'

type Difficulty = 'HARD' | 'MEDIUM' | 'EASY'

interface StaticChampionCardProps {
  name: string
  subtitle: string
  imageUrl: string
  imageAlt: string
  difficulty: Difficulty
  className?: string
}

const Card = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 3 / 4;
  background: var(--rdr-bg);
  cursor: pointer;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
  transition: filter 500ms ease, transform 500ms ease;

  ${Card}:hover & {
    filter: grayscale(0);
    transform: scale(1.1);
  }
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--rdr-surface-container-lowest) 0%, transparent 60%);
`

const BadgeWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
`

const Info = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
`

const ChampName = styled.h4`
  font-family: var(--font-headline, 'Space Grotesk', sans-serif);
  font-weight: 700;
  font-size: 1.25rem;
  text-transform: uppercase;
  font-style: italic;
  margin: 0 0 2px;
  color: #fff;
`

const ChampSubtitle = styled.p`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #c0c7cf;
  margin: 0;
`

export default function StaticChampionCard({
  name,
  subtitle,
  imageUrl,
  imageAlt,
  difficulty,
  className,
}: StaticChampionCardProps) {
  return (
    <Card className={className}>
      <Img src={imageUrl} alt={imageAlt} />
      <Overlay />
      <BadgeWrapper>
        <DifficultyBadge difficulty={difficulty} />
      </BadgeWrapper>
      <Info>
        <ChampName>{name}</ChampName>
        <ChampSubtitle>{subtitle}</ChampSubtitle>
      </Info>
    </Card>
  )
}
