import styled, { css } from 'styled-components'

type Difficulty = 'HARD' | 'MEDIUM' | 'EASY'

interface DifficultyBadgeProps {
  difficulty: Difficulty
  className?: string
}

const Badge = styled.span<{ $difficulty: Difficulty }>`
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
  padding: 2px 8px;
  letter-spacing: 0.05em;

  ${({ $difficulty }) => {
    if ($difficulty === 'HARD') {
      return css`
        background: var(--color-red-700);
        color: #fff;
      `
    }
    if ($difficulty === 'MEDIUM') {
      return css`
        background: var(--color-yellow-500);
        color: #000;
      `
    }
    return css`
      background: var(--color-green-600);
      color: #fff;
    `
  }}
`

export default function DifficultyBadge({ difficulty, className }: DifficultyBadgeProps) {
  return (
    <Badge $difficulty={difficulty} className={className}>
      {difficulty}
    </Badge>
  )
}
