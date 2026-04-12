import styled, { css } from 'styled-components'

interface NavLinkProps {
  children: React.ReactNode
  href?: string
  active?: boolean
  className?: string
}

const Link = styled.a<{ $active?: boolean }>`
  font-family: var(--font-headline, 'Space Grotesk', sans-serif);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 200ms ease;

  ${({ $active }) =>
    $active
      ? css`
          color: var(--rdr-primary);
          border-bottom: 2px solid var(--rdr-primary);
          padding-bottom: 4px;
        `
      : css`
          color: #9ca3af;
          &:hover {
            color: #fff;
          }
        `}
`

export default function NavLink({ children, href = '#', active, className }: NavLinkProps) {
  return (
    <Link href={href} $active={active} className={className}>
      {children}
    </Link>
  )
}
