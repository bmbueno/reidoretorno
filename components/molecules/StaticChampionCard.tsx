import styled, { css } from 'styled-components'

interface StaticChampionCardProps {
  name: string
  subtitle: string
  imageUrl: string
  imageAlt: string
  disabled?: boolean
  selected?: boolean
  onClick?: () => void
  className?: string
}

const Card = styled.div<{ $disabled?: boolean; $selected?: boolean }>`
  position: relative;
  overflow: hidden;
  aspect-ratio: 3 / 4;
  background: var(--rdr-bg);

  ${({ $disabled }) =>
    $disabled
      ? css`
          cursor: not-allowed;
          opacity: 0.4;
        `
      : css`
          cursor: pointer;
        `}

  ${({ $selected }) =>
    $selected &&
    css`
      outline: 2px solid var(--rdr-gold);
      outline-offset: -2px;
    `}
`

const Img = styled.img<{ $disabled?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${({ $disabled }) => ($disabled ? 'grayscale(1)' : 'grayscale(0)')};
  transition: transform 500ms ease;

  ${({ $disabled }) =>
    !$disabled &&
    css`
      ${Card}:hover & {
        transform: scale(1.1);
      }
    `}
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--rdr-surface-container-lowest) 0%, transparent 60%);
`

const Info = styled.div`
  position: absolute;
  bottom: 16px;
  left: 8px;
`

const ChampName = styled.h4`
  font-family: var(--font-headline, 'Space Grotesk', sans-serif);
  font-weight: 700;
  font-size: 16px;
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
  disabled,
  selected,
  onClick,
  className,
}: StaticChampionCardProps) {
  return (
    <Card
      $disabled={disabled}
      $selected={selected}
      className={className}
      onClick={disabled ? undefined : onClick}
    >
      <Img src={imageUrl} alt={imageAlt} $disabled={disabled} />
      <Overlay />
      <Info>
        <ChampName>{name}</ChampName>
        {/* <ChampSubtitle>{subtitle}</ChampSubtitle> */}
      </Info>
    </Card>
  )
}
