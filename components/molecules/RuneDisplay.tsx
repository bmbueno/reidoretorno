import styled from 'styled-components'

interface RuneItem {
  id: string | number
  name: string
  url: string
}

interface RuneTree {
  style: RuneItem
  perks: RuneItem[]
}

interface RuneBuild {
  primary: RuneTree
  secondary: RuneTree
}

interface RuneDisplayProps {
  runes: RuneBuild
  className?: string
}

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`

const Divider = styled.div`
  width: 1px;
  height: 40px;
  background: var(--rdr-primary);
  opacity: 0.3;
  margin: 0 6px;
`

const StyleIcon = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`

const Keystone = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid var(--rdr-primary);
  box-shadow: 0 0 12px var(--rdr-primary-glow);
  background: rgba(0, 0, 0, 0.4);
  padding: 2px;
  object-fit: contain;
`

const Perk = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  padding: 4px;
  object-fit: contain;
`

export default function RuneDisplay({ runes, className = '' }: RuneDisplayProps) {
  if (!runes?.primary?.perks || !runes?.secondary?.perks) return null

  const keystone = runes.primary.perks[0]
  const primarySubPerks = runes.primary.perks.slice(1)
  const secondaryPerks = runes.secondary.perks

  return (
    <Row className={className}>
      <StyleIcon src={runes.primary.style.url} title={runes.primary.style.name} />
      {keystone && <Keystone src={keystone.url} title={keystone.name} />}
      {primarySubPerks.map((perk) => (
        <Perk key={perk.id} src={perk.url} title={perk.name} />
      ))}

      <Divider />

      <StyleIcon src={runes.secondary.style.url} title={runes.secondary.style.name} />
      {secondaryPerks.map((perk) => (
        <Perk key={perk.id} src={perk.url} title={perk.name} />
      ))}
    </Row>
  )
}
