import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import DoYourBestWork from "../components/do-your-best-work"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <DoYourBestWork />
  </Layout>
)

export default IndexPage
