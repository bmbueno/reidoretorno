import styled from 'styled-components'
import StaticChampionCard from '@/components/molecules/StaticChampionCard'

const Section = styled.section`
  background: var(--rdr-surface-container-lowest);
`

const SectionTitle = styled.h2`
  font-family: var(--font-headline, 'Space Grotesk', sans-serif);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  margin: 0 0 0.5rem;
  color: #fff;
`

const TitleAccent = styled.span`
  color: var(--rdr-primary);
`

const Subtitle = styled.p`
  color: #c0c7cf;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  margin: 0;
`

const MATCHUPS = [
  {
    name: 'DARIUS',
    subtitle: 'O CARRASCO',
    difficulty: 'HARD' as const,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4SYFc3uc0gXfCg6KmFBNaoy083Yh_V4Mhj_Z9Kw118jnRiabD0s6UvTHpvsQoOeybIs8WreJGzq7j2WnDJTmEmR6a1GIZkKAP8_XWHr83TiI_1wgLHQhn7rl0mkUzAk7O_QfIRa5nhndZV92IxKGLJdzA6zGX7-RCFJkMis0P5QH4m4LXLNRgrhim3dGsDLGuBWFI_T8BSGAKA8ZdNhQ0jBu5pb1Fif0K-qO5r1-DOn5wUXe-qsu96_p8-_6EGMfALkgMKoBwopI',
    imageAlt: 'Darius',
  },
  {
    name: 'JAX',
    subtitle: 'GRÃO-MESTRE',
    difficulty: 'MEDIUM' as const,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAzvuDMtxMJ51csnyj6af-Mt6mK_3hEFS0W1y70AKfMJFmk4o41l4KaLv4NwofG9VybNQV-Ynn5vxyc0N8gmZaAQQEbZOerq6dILod0KxpEfHXn9vGbaa71kWg75OCbjpzrzZSrSZpgD2MTY7MlFKACWB1iQ5MzWGyFsBC2G-Ln_4-QyLmOyZLHchaeKyDbploetq7ap90EuBI9r81hOz2fYyOQ7iu_3O2eyJuT2ll5pTYxpy1tadCY5BgPmdbhGrS4Zp_lK6GxQ1g',
    imageAlt: 'Jax',
  },
  {
    name: 'FIORA',
    subtitle: 'DUELISTA',
    difficulty: 'HARD' as const,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCzcfr5OCeqSZAQx-se6-46rgRgEbA5ZsUq33Ox391dy2yNgsXA64jeLFPe6IiTtaaBK4okatj1v-vEbsi8djBhEeJ3mzFS51lghIQX0AraOQ08Qj07VRHFhY2LjtRCE2g7j0Od7jbnthrPlXAbp8GbZv7Eu79YEmkCQfVjKrLpjaglu_HaQhEjjzgeyfCSAOjDkhhj4iT4e7637OlOcmOTeQpU8SZAR461bsHWM0Cpt3ip5NrNTJLySaTZg_tCRGfxk1IBaM2vvBs',
    imageAlt: 'Fiora',
  },
  {
    name: 'CAMILLE',
    subtitle: 'A SOMBRA DE FERRO',
    difficulty: 'MEDIUM' as const,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqKIrGKwFnXyko0M4QJs--5zP4c_l_x7rfBze_xEuXd2EGz1kyRB5SPNMcn2J86LwBcKOadYYVD8sPaLqaoe6guSVGX_OCFP_XfF6i8uAA3QLc9QOKzZxScXqPove77IAjVdMIZbvcs7WWFxTgmddLpuNnxemGLaVi2lt6kP9vue92adcUdGlQA_o6cyhkx6SvaO5ItWPhefMJCt_qGw2JFcY6ijXNEZV2g_hkvmuvoDJ-5dkxpKqYher-g0mvUHleVGOyqV48bpA',
    imageAlt: 'Camille',
  },
  {
    name: 'SION',
    subtitle: 'O COLOSSO',
    difficulty: 'EASY' as const,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA6VH_ZgatcTdiPAEUv0oiB5LKHgN0PmqATVexVtNsuQiNbVEg95SyjmhnRfVXfaNjSasADRKwJ2A1jIIatm38LxC_sQl3lftHuRO0_9wNGyX3dfWyee_cG6sSYeM0GwqaQXNWF2MR8nPs08qWJ_BnBiZyDafgyTwkeIV8ziFiSZRRDIEzN_BLgeBO7Lx3Nql-T3HbSlEY6U-i-Ts1gaiUnwWhIjfdaEQ_lpONa7iEwGYmuyyaou1Qv9RizmgJLIJxClae5n4--gNQ',
    imageAlt: 'Sion',
  },
  {
    name: 'MALPHITE',
    subtitle: 'FRAGMENTO',
    difficulty: 'EASY' as const,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA4trM-qz8JG_VicynT0kK5zBM5pbbEkAEz5GZGPDNC6FggeaIyTgKOWx2k0YkIdbSVpE1H_G6SoB0pTH8ILlw2JfBmBVkc9Reibu2y-w4K5f80cyl0WEyypdpxinWy-wAkOP3OR6V8GvELPbR3LOp7CfI4DZCo9EI3uUHC74o922QilsSDo7NPdraRDw8Kzo_GmVk7aCBfg474bLvVp-XrIHiz_FVyb6-dDJLyxi2WQkH6Bd0h8RSQmDCX-d7j8oTsrhLlSSwS0',
    imageAlt: 'Malphite',
  },
]

export default function StaticMatchupSection({ className }: { className?: string }) {
  return (
    <Section id="matchups" className={`py-32 ${className ?? ''}`}>
      <div className="container mx-auto px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <SectionTitle>
              GAREN <TitleAccent>MATCHUPS</TitleAccent>
            </SectionTitle>
            <Subtitle>COMO ANULAR SEUS COUNTERS DIRETOS</Subtitle>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {MATCHUPS.map((m) => (
            <StaticChampionCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </Section>
  )
}
