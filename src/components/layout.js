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
        })}
      />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  )
}

export default Layout

const Wrapper = styled.div`
  width: 100%;
  height: 0;
  min-height: 100%;
  /* max-width: 1440px; */
  margin: 0 auto;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`
