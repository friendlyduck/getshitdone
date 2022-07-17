import * as React from "react"
import styled from "@emotion/styled"

const Gallery = () => (
  <Wrapper>
    <Navigation>
      <Title>Explore our space</Title>
      <Links>
        <Item>Desks</Item>
        <Item>Acoustic pods</Item>
        <Item>Meeting rooms</Item>
      </Links>
    </Navigation>
    <Images>
      <ImageOne src="https://via.placeholder.com/1920x1080?text=Image"></ImageOne>
      <ImageTwo src="https://via.placeholder.com/1920x1080?text=Image"></ImageTwo>
      <ImageThree src="https://via.placeholder.com/1920x1080?text=Image"></ImageThree>
    </Images>
  </Wrapper>
)

export default Gallery

const Images = styled.div`
  grid-column: 1 / -1;
  align-self: stretch;
  background: red;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    grid-column: 3 / span 3;
    min-height: 100vh;
  }
`
const Image = styled.img`
  grid-column: 1 / -1;
`
const ImageOne = styled(Image)`
  height: 75vh;
`
const ImageTwo = styled(Image)`
  grid-column: 1;
`
const ImageThree = styled(Image)`
  grid-column: 2;
`

const Navigation = styled.div`
  grid-column: 1 / -1;
  background: ${props => props.theme.colors.dark};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;
  padding: 0 4vw;

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    grid-column: 1 / span 2;
    min-height: 100vh;
  }
`
const Title = styled.span`
  color: ${props => props.theme.colors.light};
`
const Links = styled.ul``
const Item = styled.li`
  font-size: 32px;
  font-weight: ${props => props.theme.fontWeights.heading};
  color: ${props => props.theme.colors.primary};
  background: rgba(255, 255, 255, 0);
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.16);
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* margin: 24px 0; */
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
  }
`
