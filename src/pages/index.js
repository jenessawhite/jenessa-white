import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const heroImage = require('../images/jw-back-small.jpeg')

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Jenessa White`, `developer`, `front-end`, `front-end developer`, `Twin Cities`]} />

    <div className="home-hero"
      style={{ backgroundImage: "linear-gradient(rgba(0,128,128,.7),rgba(255,245,245,.4)),url("+heroImage+")" }}>
      <div>
        <h1>Hi people, I'm Jenessa White</h1>
        <p>I'm a Front-End Developer in the Twin Cities</p>
      </div>
    </div>

  </Layout>
)

export default IndexPage
