import * as React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Global } from "@emotion/react"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={theme => ({
          "html, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6":
            {
              margin: 0,
              padding: 0,
            },
          "h1, h2, h3, h4, h5, h6": {
            fontSize: "100%",
            fontWeight: "normal",
          },
          ul: {
            listStyle: "none",
          },
          "button, input, select": {
            margin: 0,
          },
          html: {
            boxSizing: "border-box",
          },
          "*, *::before, *::after": {
            boxSizing: "inherit",
          },
          "img, video": {
            height: "auto",
            maxWidth: "100%",
          },
          iframe: {
            border: 0,
          },
          table: {
            borderCollapse: "collapse",
            borderSpacing: 0,
          },
          "td, th": {
            padding: 0,
          },
          "html, body, #___gatsby, #gatsby-focus-wrapper, div[data-themeui-nested-provider]":
            {
              height: "100%",
              background: theme.colors.primary,
            },
          body: {},
          a: {
            color: theme.colors.dark,
            textDecoration: "underline",
            "&:hover": {
              textDecoration: "none",
            },
          },
          "h1,h2,h3": {
            fontWeight: theme.fontWeights.heading,
          },
        })}
      />
      <Wrapper>
        <BookingForm>
          <QuickBook>
            <Label>I need a:</Label>
            <Select>
              <option>Desk</option>
              <option>Meeting room</option>
              <option>Creative space</option>
              <option>Media studio</option>
            </Select>
            {/* <Date type="datetime-local" /> */}
            <Submit type="submit">➞ Book now</Submit>
          </QuickBook>
        </BookingForm>
        {children}
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout

const QuickBook = styled.form`
  grid-column: 1 / -1;
  font-size: 14px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  /* justify-content: center; */
  gap: 8px;
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  padding: 0 8px;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-column: 4 / span 2;
  }
`

const BookingForm = styled.div`
  z-index: 99;
  position: sticky;
  top: 0;
  gap: 16px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  input[type="datetime-local"]::-webkit-calendar-picker-indicator {
    filter: invert(100%);
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    /* grid-column: 4 / span 2; */
  }
`
const Label = styled.label`
  font-weight: 800;
  display: flex;
  align-items: center;
`
const Date = styled.input`
  background: none;
  border: 0;
  box-shadow: 0 0 0;
  font-size: 14px;
  padding: 8px;
  color: ${props => props.theme.colors.light};
  border-right: 1px solid ${props => props.theme.colors.primary};
  border-left: 1px solid ${props => props.theme.colors.primary};
`
const Select = styled.select`
  font-size: 14px;
  background: none;
  border: 0;
  color: ${props => props.theme.colors.light};
`
const Submit = styled.button`
  font-size: 14px;
  font-weight: 800;
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.primary};
  border: 0;
  box-shadow: 0 0 0;
  padding: 0 16px;
  border-right: 1px solid ${props => props.theme.colors.primary};
  border-left: 1px solid ${props => props.theme.colors.primary};
`

const Wrapper = styled.div`
  width: 100%;
  /* max-width: 1440px; */
  margin: 0 auto;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`
