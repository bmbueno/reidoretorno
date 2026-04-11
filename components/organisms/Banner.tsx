import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

const Img = styled.img`
  width: 100%;
  object-fit: contain;
  display: block;
`

export default function Banner() {
  return (
    <Wrapper>
      <Img src="/garen_banner.jpg" alt="Garen Banner" />
    </Wrapper>
  )
}
