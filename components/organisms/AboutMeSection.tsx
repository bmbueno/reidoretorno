import styled from 'styled-components'

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


const BottomRow = styled.div`
  border-top: 1px solid #40484e;
  padding-top: 2rem;
  margin-top: 3rem;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: 0 3rem;
  align-items: start;
`

const StatCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const StatLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`

const StatValue = styled.div`
  height: 3rem;
  display: flex;
  align-items: flex-end;
  font-family: var(--font-headline, 'Space Grotesk', sans-serif);
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1;
  color: var(--rdr-primary);
`

const StatIconBox = styled.div<{ $color: string }>`
  height: 3rem;
  display: flex;
  align-items: flex-end;
  color: ${({ $color }) => $color};

  svg {
    width: 2rem;
    height: 2rem;
    fill: currentColor;
  }
`

const CoachIcon = styled.span`
  font-size: 2rem;
  line-height: 1;
`

const StatLabel = styled.span`
  font-family: var(--font-headline, 'Space Grotesk', sans-serif);
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  opacity: 0.6;
  color: #fff;
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
            <Badge>MONO GAREN</Badge>
            <Title>REI DO RETORNO</Title>
            <div className="space-y-6">
              <BodyText>
                Salve, rapaziada! Meu nome é <PrimaryHighlight>Henrique</PrimaryHighlight>, mas muitos me conhecem como {' '}
                <PrimaryHighlight>"Rei do Retorno"</PrimaryHighlight>. Sou mono Garen há{' '}
                <PrimaryHighlight>8 anos</PrimaryHighlight> — uma jornada que começou no{' '}
                Bronze e, com muito aprendizado e dedicação, me levou a alcançar o{' '}
                <PrimaryHighlight>Challenger</PrimaryHighlight> pela primeira vez na Season 8.
              </BodyText>
              <br />
              <BodyText>
                Desde então, me mantive entre os melhores, consolidando minha trajetória como um{' '}
                <PrimaryHighlight>eterno Challenger</PrimaryHighlight>.
              </BodyText>
              <BodyText>
                Este guia é a compilação de todo o meu conhecimento tático, testado e aprovado em{' '}
                <PrimaryHighlight>milhares</PrimaryHighlight> de partidas ranqueadas.
              </BodyText>
            </div>
            <BottomRow>
              <StatsGrid>
                <StatCol>
                  <StatValue>TOP 1</StatValue>
                  <StatLabel>GAREN MUNDIAL</StatLabel>
                </StatCol>

                <StatLink href="https://www.youtube.com/@reidoretorno" target="_blank" rel="noopener noreferrer">
                  <StatIconBox $color="#ff0000">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </StatIconBox>
                  <StatLabel>YOUTUBE</StatLabel>
                </StatLink>

                <StatLink href="https://www.twitch.tv/reidoretorno" target="_blank" rel="noopener noreferrer">
                  <StatIconBox $color="#9146ff">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
                  </StatIconBox>
                  <StatLabel>TWITCH</StatLabel>
                </StatLink>

                <StatLink href="https://discord.gg/GfkdPa2ab7" target="_blank" rel="noopener noreferrer">
                  <StatIconBox $color="var(--rdr-primary)">
                    <CoachIcon>🗡️</CoachIcon>
                  </StatIconBox>
                  <StatLabel>COACH</StatLabel>
                </StatLink>
              </StatsGrid>
            </BottomRow>
          </div>
        </div>
      </div>
    </Section>
  )
}
