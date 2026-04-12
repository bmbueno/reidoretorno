import styled from 'styled-components'

const Section = styled.header`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`

const BgImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 55% center;
  opacity: 0.4;
  mix-blend-mode: luminosity;
  z-index: 0;
`

const OverlayLeft = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #0b0b0b, rgba(11, 11, 11, 0.8) 50%, transparent);
  z-index: 1;
`

const OverlayBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 16rem;
  background: linear-gradient(to top, #0b0b0b, transparent);
  z-index: 1;
`

const Content = styled.div`
  position: relative;
  z-index: 10;
  max-width: 56rem;
  background: radial-gradient(circle, rgba(173, 0, 18, 0.15) 0%, rgba(11, 11, 11, 0) 70%);
  padding: 2rem;
`

const Eyebrow = styled.p`
  color: var(--rdr-primary);
  font-family: var(--font-headline, 'Space Grotesk', sans-serif);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  margin: 0 0 1rem;
  font-size: 0.875rem;
`

const Title = styled.h1`
  font-family: var(--font-headline, 'Space Grotesk', sans-serif);
  font-size: clamp(3.5rem, 10vw, 7rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
  margin: 0 0 1.5rem;
  color: #fff;
`

const TitleAccent = styled.span`
  color: var(--rdr-primary);
`

const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: #c0c7cf;
  margin: 0;
  max-width: 42rem;
  border-left: 4px solid var(--rdr-gold);
  padding-left: 1.5rem;
  text-transform: uppercase;
`

export default function Intro({ className }: { className?: string }) {
  const bannerLink = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_43.jpg';
  return (
    <Section id="home" className={`pt-20 ${className ?? ''}`}>
      <BgImg src={bannerLink} alt="Garen Background" />
      <OverlayLeft />
      <OverlayBottom />
      <div className="container mx-auto px-12 relative z-10 w-full">
        <Content>
          <Eyebrow>JUSTIÇA DEMACIANA</Eyebrow>
          <Title>
            MATCHUPS <br />
            <TitleAccent>— GAREN AD TOP</TitleAccent>
          </Title>
          <Description>
            Se torne um deus jogando de Garen. Aprenda a punir cada erro e dominar a rota com autoridade absoluta.
          </Description>
        </Content>
      </div>
    </Section>
  )
}
