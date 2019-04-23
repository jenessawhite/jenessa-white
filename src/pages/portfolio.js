import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>My Portfolio</h1>
    <p>
    Want to know what else I've built? Check out some of the projects I've built or worked on below.
    Most of what I build right now is at <Link to="https://softwareforgood.com">Software For Good</Link>{` `}since that's my job. I even write for the <Link to="https://softwareforgood.com/blog">blog</Link> sometimes too!
    </p>
  </Layout>
)

export default PortfolioPage
