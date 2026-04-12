'use client'

import { useEffect, useState } from 'react'
import styled from 'styled-components'
import NavLink from '@/components/atoms/NavLink'

const SECTIONS = ['home', 'matchups', 'sobre-mim'] as const
type Section = typeof SECTIONS[number]

const Navbar = styled.nav`
  background: rgba(19, 19, 19, 0.7);
  backdrop-filter: blur(20px);
`

const Logo = styled.div`
  font-family: var(--font-headline, 'Space Grotesk', sans-serif);
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
  color: var(--rdr-primary);
  text-transform: uppercase;
  letter-spacing: -0.05em;
`

export default function Nav({ className }: { className?: string }) {
  const [active, setActive] = useState<Section>('home')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.4 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <Navbar
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-12 h-20 bg-gradient-to-b from-surface-container-high to-transparent ${className ?? ''}`}
    >
      <Logo>REI DO RETORNO</Logo>
      <div className="hidden md:flex gap-10 items-center">
        <NavLink href="#home" active={active === 'home'}>HOME</NavLink>
        <NavLink href="#matchups" active={active === 'matchups'}>MATCHUPS</NavLink>
        <NavLink href="#sobre-mim" active={active === 'sobre-mim'}>SOBRE MIM</NavLink>
      </div>
    </Navbar>
  )
}
