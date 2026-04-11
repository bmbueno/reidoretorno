'use client'

import styled from 'styled-components'

interface ChampionIconProps {
  src: string
  alt: string
  isActive: boolean
  onClick: () => void
}

const Img = styled.img<{ $isActive: boolean }>`
  width: 74px;
  height: 74px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  border: 2px solid ${({ $isActive }) => ($isActive ? 'var(--color-gold)' : 'transparent')};
  box-shadow: ${({ $isActive }) =>
    $isActive ? '0 0 14px var(--color-gold-glow-lg)' : 'none'};
  transform: ${({ $isActive }) => ($isActive ? 'scale(1.08)' : 'scale(1)')};
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 12px var(--color-gold-glow-sm);
    border-color: var(--color-gold);
  }
`

export default function ChampionIcon({ src, alt, isActive, onClick }: ChampionIconProps) {
  return <Img src={src} alt={alt} $isActive={isActive} onClick={onClick} />
}
