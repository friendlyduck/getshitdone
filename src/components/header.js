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
  </Wrapper>
)

export default Header

const Logo = styled.img`
  grid-column: 1 / span 1;
  justify-self: flex-end;
`

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, auto);
  column-gap: 24px;
  align-items: flex-end;
`

const Title = styled.h1`
  font-size: clamp(2rem, 0.64rem + 10vw, 12rem);
  line-height: 1;
  font-weight: ${props => props.theme.fontWeights.heading};
  grid-column: 1 / -1;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-column: 4 / span 2;
  }

  span {
    display: block;
  }
`
