import * as React from "react"
import styled from "@emotion/styled"
import TypeOut from "react-typeout"

const words = ["creative", "inspiring", "collaborative"]

const DoYourBestWork = () => (
  <Wrapper>
    <Title>
      A <TypeOut typeSpeed="100" pauseSpeed="500" words={words} />{" "}
      <Break>place to do your best work.</Break>
    </Title>
  </Wrapper>
)

export default DoYourBestWork

const Break = styled.span`
  display: block;
`

const Title = styled.h1`
  font-size: clamp(2rem, 0.64rem + 3vw, 5rem);
  line-height: 1.2;
  font-weight: ${props => props.theme.fontWeights.heading};
  grid-column: 2 / -2;

  .react-typeout {
    display: inline-block;
    text-decoration: underline;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 25vh 0;

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
  }
`
