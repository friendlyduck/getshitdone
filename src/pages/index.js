import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import DoYourBestWork from "../components/do-your-best-work"
import Gallery from "../components/gallery"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <DoYourBestWork />
    <Gallery />
  </Layout>
)

export default IndexPage
