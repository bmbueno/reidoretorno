import styled, { css } from 'styled-components'

type StatColor = 'primary' | 'gold'

interface StatChipProps {
  value: string
  label: string
  color?: StatColor
  className?: string
}

const Value = styled.span<{ $color: StatColor }>`
  display: block;
  font-family: var(--font-headline, 'Space Grotesk', sans-serif);
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1;

  ${({ $color }) =>
    $color === 'gold'
      ? css`color: var(--rdr-gold);`
      : css`color: var(--rdr-primary);`}
`

const Label = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  opacity: 0.6;
`

export default function StatChip({ value, label, color = 'primary', className }: StatChipProps) {
  return (
    <div className={className}>
      <Value $color={color}>{value}</Value>
      <Label>{label}</Label>
    </div>
  )
}
