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
      <InfoContent>Ansdell</InfoContent>
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
  margin-bottom: 4vh;
  border-bottom: 4px solid ${props => props.theme.colors.dark};

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    grid-column: 4 / span 2;
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
  grid-column: 1 / span 1;

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    grid-row: 2;
    align-self: flex-end;
    justify-self: center;
    margin: 0 auto 4vh auto;
  }
`

const Title = styled.h1`
  font-size: clamp(2rem, 0.64rem + 10vw, 12rem);
  line-height: 1;
  font-weight: ${props => props.theme.fontWeights.heading};
  grid-column: 2 / -2;

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    grid-column: 4 / span 2;
    margin: auto 0;
  }

  span {
    display: block;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    height: 100%;
    column-gap: 24px;
    grid-template-rows: 1fr auto;
  }
`
