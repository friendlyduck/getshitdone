import * as React from "react"
import styled from "@emotion/styled"

import LogoImg from "../images/logo.svg"

const Header = () => (
  <Wrapper>
    <Logo src={LogoImg} alt="$#*!" />
    <Title>
      <span>Get.</span>
      <span>Shit.</span>
      <span>Done.</span>
    </Title>
    <Info>
      <InfoTitle>CoWorking Space</InfoTitle>
      <InfoContent>
        <a href="https://www.google.co.uk/maps/place/Ansdell,+Lytham+Saint+Annes+FY8+4AU/@53.7473651,-3.0045688,15z/data=!3m1!4b1!4m5!3m4!1s0x487b41027cf210c3:0x5cac1895c43bd306!8m2!3d53.747366!4d-2.9958141">
          Ansdell
        </a>
      </InfoContent>
      <InfoTitle>Current Occupancy</InfoTitle>
      <InfoContent>24 / 40</InfoContent>
    </Info>
  </Wrapper>
)

export default Header

const Info = styled.div`
  grid-column: 2 / -2;
  display: grid;
  gap: ${props => props.theme.space[2]};
  align-self: flex-end;
  padding: 0 0 4vh 0;
  margin-top: 4vh;
  margin-bottom: 4vh;
  border-bottom: 4px solid ${props => props.theme.colors.dark};
  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    grid-column: 3 / -1;
  }
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-column: 4 / span 2;
    margin-top: 0;
  }
`
const InfoTitle = styled.span`
  font-weight: ${props => props.theme.fontWeights.heading};
  grid-column: 1;
`
const InfoContent = styled.span`
  grid-column: 2;
`

const Logo = styled.img`
  grid-column: 2 / span 2;
  margin-top: 8vh;
  transition: all 0.24s ease;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-column: 1 / span 1;
    grid-row: 2;
    align-self: flex-end;
    justify-self: center;
    margin: 0 auto 4vh auto;
  }
`

const Title = styled.h1`
  font-size: clamp(80px, 0.64rem + 10vw, 12rem);
  line-height: 1;
  font-weight: ${props => props.theme.fontWeights.heading};
  grid-column: 2 / -2;
  margin: 8vh 0 auto 0;

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    grid-column: 3 / -1;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-column: 4 / span 2;
  }

  span {
    display: block;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 16px;

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    /* height: 100%; */
    column-gap: 24px;
    grid-template-rows: 1fr auto;
  }
`
