import * as React from "react"
import styled from "@emotion/styled"
import {
  GiOfficeChair,
  GiDesk,
  GiCandlebright,
  GiMonoWheelRobot,
} from "react-icons/gi"

const Gallery = () => (
  <Wrapper>
    <Navigation>
      <NavTitle>Explore our space</NavTitle>
      <Links>
        <Item>Desks</Item>
        <Item>Acoustic pods</Item>
        <Item>Meeting room</Item>
        <Item>Workshop space</Item>
        <Item>Media studio</Item>
      </Links>
    </Navigation>
    <Images>
      <ImageOne src="https://images.unsplash.com/photo-1531904300735-5f40721f712f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"></ImageOne>
      <ImageTwo src="https://images.unsplash.com/photo-1603024594199-4107b1e69b7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"></ImageTwo>
      <ImageThree src="https://images.unsplash.com/photo-1464029902023-f42eba355bde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"></ImageThree>
    </Images>
    <Desks id="desks">
      <DesksQuote>
        <PullQuoteHeadline>15</PullQuoteHeadline>
        <PullQuoteContent>hot desks</PullQuoteContent>
      </DesksQuote>
      <div>
        <Title>Desks</Title>
        <ol>
          <li>
            <GiDesk />
            Electronic height-adjustable stand-up desks
          </li>
          <li>
            <GiOfficeChair />
            Herman Miller ergonomic chairs
          </li>
          <li>
            <GiMonoWheelRobot /> Desks on wheels to work where you like
          </li>
          {/* <li>
            <GiCandlebright /> Hot-desk or dedicated options
          </li> */}
        </ol>
      </div>
    </Desks>
    <Images>
      <ImageOne src="https://images.unsplash.com/photo-1497333684848-77a94ad20149?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" />
    </Images>
  </Wrapper>
)

export default Gallery

const Section = styled.section`
  grid-column: 1 / -1;
  padding: 24px;
  border-top: 4px solid ${props => props.theme.colors.dark};

  ol {
    list-style: none;
    li {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 8px;
      margin-bottom: 4px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-column: 3 / span 3;
  }
`
const PullQuote = styled.div`
  /* background: ${props => props.theme.colors.secondary}; */
`
const PullQuoteHeadline = styled.span`
  font-size: 40px;
  font-weight: 800;
  display: block;
`
const PullQuoteContent = styled.span``
const Title = styled.h3``

// Desks
const Desks = styled(Section)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const DesksQuote = styled(PullQuote)``

const Images = styled.div`
  grid-column: 1 / -1;
  align-self: stretch;
  background: red;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-column: 3 / span 3;
    min-height: 100vh;
  }
`
const Image = styled.img`
  max-width: none;
  width: 100%;
  height: 100%;
  grid-column: 1 / -1;
  object-fit: cover;
`
const ImageOne = styled(Image)`
  height: 50vh;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    height: 75vh;
  }
`
const ImageTwo = styled(Image)`
  grid-column: 1;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    height: 25vh;
  }
`
const ImageThree = styled(Image)`
  grid-column: 2;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    height: 25vh;
  }
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
  overflow: auto;
  position: sticky;
  top: 0;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-column: 1 / span 2;
    min-height: 100vh;
  }
`
const NavTitle = styled.span`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    color: ${props => props.theme.colors.light};
    display: block;
    padding: 8px 16px;
  }
`
const Links = styled.ul`
  display: flex;
  width: 100vw;
  flex-wrap: nowrap;
  position: sticky;
  top: 0;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    display: block;
    width: auto;
    position: static;
    top: auto;
  }
`
const Item = styled.li`
  font-weight: ${props => props.theme.fontWeights.heading};
  color: ${props => props.theme.colors.primary};
  background: rgba(255, 255, 255, 0);
  padding: 8px 16px;
  cursor: pointer;
  white-space: nowrap;
  flex-wrap: nowrap;
  flex: 0;

  &:hover {
    color: ${props => props.theme.colors.dark};
    background: ${props => props.theme.colors.secondary};
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: 32px;
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
