import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>So sorry!</h1>
    <p>Looks like you found a page that doesn&#39;t exist...</p>
    <p>We have a lot of other pages online, maybe what you&#39;re looking for is on one of them?</p>
  </Layout>
)

export default NotFoundPage
