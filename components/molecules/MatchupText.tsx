import styled from 'styled-components'

interface MatchupTextProps {
  html: string
}

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 16px;
  color: var(--rdr-text-muted);

  p {
    margin: 0 0 12px;
  }
`

export default function MatchupText({ html }: MatchupTextProps) {
  return (
    <Container
      dangerouslySetInnerHTML={{ __html: html.replace(/\n/g, '<br>') }}
    />
  )
}
