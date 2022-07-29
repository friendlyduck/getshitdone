export default {
  // useColorSchemeMediaQuery: true,
  breakpoints: ["760px", "1200px", "1400px", "2047px", "3839px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    heading:
      "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
  },
  fontSizes: [14, 16, 18, 20, 24, 32, 40, 64, 72],
  colors: {
    // primary: "#F5DF4D", // color of the year "illuminating"
    primary: "#F3D82B", // "safety yellow"
    secondary: "#939597",
    dark: "#16161d",
    light: "#fff",
    // modes: {
    //   dark: {
    //     primary: "#16161d",
    //     secondary: "#F5DF4D",
    //     dark: "#fff",
    //     light: "#16161d",
    //   },
    // },
  },
  fontWeights: {
    body: 400,
    heading: 800,
  },
  lineHeights: {
    body: 1.6,
    heading: 1.6,
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    p: {
      fontSize: [1, 1, 2, 2, 4, 5],
      lineHeight: 1.6,
    },
    ul: {
      fontSize: [1, 1, 2, 2, 4, 5],
      lineHeight: 1.6,
    },
    ol: {
      fontSize: [1, 1, 2, 2, 4, 5],
      lineHeight: 1.6,
    },
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      color: "text",
      fontSize: [2, 2, 2, 2, 4, 5],
    },
    h2: {
      variant: "text.heading",
      fontSize: [2, 2, 2, 2, 4, 5],
      fontWeight: "bold",
    },
    h3: {
      fontFamily: "heading",
      fontSize: [2, 2, 2, 2, 4, 5],
      fontWeight: "bold",
    },
  },
}
