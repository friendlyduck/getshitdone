import * as React from "react"
import styled from "@emotion/styled"
import TypeOut from "react-typeout"

const words = ["creative", "quiet", "social", "relaxing", "collaborative"]

const DoYourBestWork = () => (
  <Wrapper>
    <Title>
      A <TypeOut typeSpeed="100" pauseSpeed="500" words={words} />{" "}
      <Break>place to do your best work.</Break>
    </Title>
    <BookButton>Book a desk</BookButton>
  </Wrapper>
)

export default DoYourBestWork

const BookButton = styled.button`
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.primary};
  text-align: left;
  font-weight: ${props => props.theme.fontWeights.heading};
  outline: none;
  appearance: none;
  border: 0;
  grid-column: 2 / span 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;
  margin-top: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    grid-column: 4 / span 1;
    grid-row: 2;
    max-width: 120px;
    aspect-ratio: 1 / 1;
    font-size: 20px;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-column: 5 / span 1;
    grid-row: 1;
  }
`

const Break = styled.span`
  display: block;
`

const Title = styled.h1`
  font-size: 24px;
  line-height: 1.2;
  font-weight: ${props => props.theme.fontWeights.heading};
  grid-column: 2 / -2;

  .react-typeout {
    display: inline-block;
    text-decoration: underline;
  }

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    font-size: clamp(2rem, 0.64rem + 3vw, 5rem);
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 24px 0 8vh 0;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    padding: 12vh 0;
    margin: 12vh 0 0 0;
    background: #f2d418;
  }
`
