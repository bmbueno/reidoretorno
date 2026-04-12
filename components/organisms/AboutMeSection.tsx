import styled from 'styled-components'
import StatChip from '@/components/atoms/StatChip'

const Section = styled.section`
  background: var(--rdr-bg);
`

const PhotoWrapper = styled.div`
  position: relative;
`

const PhotoInner = styled.div`
  aspect-ratio: 1;
  background: #2a2a2a;
  position: relative;
  z-index: 10;
  border-left: 8px solid var(--rdr-primary);
  overflow: hidden;
`

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  filter: grayscale(1);
`

const PhotoDecoration = styled.div`
  position: absolute;
  bottom: -2rem;
  right: -2rem;
  width: 16rem;
  height: 16rem;
  border: 1px solid rgba(64, 72, 78, 0.3);
  z-index: 0;
`

const Badge = styled.div`
  background: var(--rdr-primary);
  color: #fff;
  display: inline-block;
  padding: 4px 16px;
  font-family: var(--font-headline, 'Space Grotesk', sans-serif);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`

const Title = styled.h2`
  font-family: var(--font-headline, 'Space Grotesk', sans-serif);
  font-size: clamp(2.5rem, 6vw, 3.75rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0 0 2rem;
  color: #fff;
`

const BodyText = styled.p`
  color: #c0c7cf;
  font-size: 1.125rem;
  line-height: 1.75;
  margin: 0;
`

const PrimaryHighlight = styled.span`
  color: var(--rdr-primary);
  font-weight: 700;
`

const GoldHighlight = styled.span`
  color: var(--rdr-gold);
  font-weight: 700;
  font-style: italic;
`

const StatsRow = styled.div`
  border-top: 1px solid #40484e;
  padding-top: 2rem;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

export default function AboutMeSection({ className }: { className?: string }) {
  return (
    <Section id="about-me" className={`py-40 ${className ?? ''}`}>
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <PhotoWrapper className="w-full md:w-1/2">
            <PhotoInner>
              <Photo
                src="/reidoretorno.png"
                alt="Rei do Retorno"
              />
            </PhotoInner>
            <PhotoDecoration />
          </PhotoWrapper>
          <div className="w-full md:w-1/2">
            <Badge>ESPECIALISTA GAREN</Badge>
            <Title>SOBRE MIM</Title>
            <div className="space-y-6">
              <BodyText>
                Sou jogador de Garen há mais de 8 temporadas, acumulando mais de{' '}
                <PrimaryHighlight>5.000 horas</PrimaryHighlight> dedicadas exclusivamente a entender os limites do Poder de Demacia.
              </BodyText>
              <BodyText>
                Alcancei o High Elo consistentemente jogando de forma agressiva. Meu foco não é apenas sobreviver na lane, mas sim{' '}
                <GoldHighlight>dominar e carregar</GoldHighlight> através de itens de AD e crítico.
              </BodyText>
              <BodyText>
                Este guia é a compilação de todo o meu conhecimento tático, testado e aprovado em milhares de partidas ranqueadas.
              </BodyText>
            </div>
            <StatsRow>
              <StatChip value="68%" label="WINRATE MÉDIO" color="gold" />
              <StatChip value="TOP 1" label="GAREN SERVER BR" color="primary" />
            </StatsRow>
          </div>
        </div>
      </div>
    </Section>
  )
}
