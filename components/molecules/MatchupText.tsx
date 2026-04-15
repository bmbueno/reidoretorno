import styled from 'styled-components'
import { marked } from 'marked'

interface MatchupTextProps {
  html: string
}

const Container = styled.div`
  width: 100%;
  line-height: 1.7;
  font-size: 16px;
  color: var(--rdr-text-muted);
  text-align: left;

  p {
    margin: 0 0 12px;
  }

  strong {
    color: #fff;
    font-weight: 700;
  }

  em {
    color: var(--rdr-gold);
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 12px;
    padding-left: 1.5rem;
  }

  li {
    margin: 0 0 6px;
  }

  h1,
  h2,
  h3,
  h4 {
    color: #fff;
    margin: 1.25rem 0 0.5rem;
    font-weight: 700;
  }

  a {
    color: var(--rdr-primary);
    text-decoration: underline;
  }

  code {
    background: rgba(0, 0, 0, 0.4);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
  }
`

export default function MatchupText({ html }: MatchupTextProps) {
  const rendered = marked.parse(html ?? '', { async: false }) as string
  return <Container dangerouslySetInnerHTML={{ __html: rendered }} />
}
