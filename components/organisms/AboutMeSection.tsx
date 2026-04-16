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

const BottomRow = styled.div`
  border-top: 1px solid #40484e;
  padding-top: 2rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
`

const TwitchButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: #9146ff;
  padding: 0.75rem 1.5rem;
  font-family: var(--font-headline, 'Space Grotesk', sans-serif);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  text-decoration: none;
  border: 3px solid #9146ff;
  transition: all 0.2s;

  &:hover {
    background: #9146ff;
    color: #fff;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`

const CoachButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--rdr-primary);
  padding: 0.75rem 1.5rem;
  font-family: var(--font-headline, 'Space Grotesk', sans-serif);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  border: 3px solid var(--rdr-primary);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--rdr-primary);
    color: #fff;
  }
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
                Salve, rapaziada! Meu nome é <GoldHighlight>Henrique</GoldHighlight>, mas muitos me conhecem como {' '}
                <PrimaryHighlight>"Rei do Retorno"</PrimaryHighlight>. Sou mono Garen há{' '}
                <GoldHighlight>8 anos</GoldHighlight> — uma jornada que começou no{' '}
                Bronze e, com muito aprendizado e dedicação, me levou a alcançar o{' '}
                <PrimaryHighlight>Challenger</PrimaryHighlight> pela primeira vez na Season 8.
              </BodyText>
              <br />
              <BodyText>
                Desde então, me mantive entre os melhores, consolidando minha trajetória como um{' '}
                <GoldHighlight>eterno Challenger</GoldHighlight>.
              </BodyText>
              <BodyText>
                Este guia é a compilação de todo o meu conhecimento tático, testado e aprovado em{' '}
                <PrimaryHighlight>milhares</PrimaryHighlight> de partidas ranqueadas.
              </BodyText>
            </div>
            <BottomRow>
              <StatChip value="TOP 1" label="GAREN MUNDIAL" color="primary" />
              <TwitchButton href="https://www.twitch.tv/reidoretorno" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
                Twitch
              </TwitchButton>
              {/* <CoachButton>
                🗡️ COACH
              </CoachButton> */}
            </BottomRow>
          </div>
        </div>
      </div>
    </Section>
  )
}
