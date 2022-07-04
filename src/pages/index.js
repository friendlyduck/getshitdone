import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import Logo from "../images/logo.svg"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={Logo} alt="$#*!" />
    </div>
  </Layout>
)

export default IndexPage
