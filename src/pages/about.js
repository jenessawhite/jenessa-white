import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <div className="content-wrapper">
      <h1>About Me</h1>

      <h2>Hey my name is Jenessa!</h2>
      <p>I am a Front End Developer based in the Twin Cities, MN. I enjoy creating simple, beautiful and intuitive websites that solve problems. Currently, I work at an amazing company called Software for Good in Minneapolis.
      </p>
      <p>I like to live a pretty fulfilling life outside of work too...</p>
      <p>One of my main activities outside of the office is playing Tight End for the <a href="https://mnvixen.com" target="_blank" rel="noopener noreferrer">Minnesota Vixen</a>! I joined the team for the 2018 season and have learned so much more about teamwork and myself than I had in a while. Football has taught me some skills that we even can apply to our everyday workflows. I also love to hang out with friends, watch Netflix, try out new restaurants, attend concerts/sporting events and go on all types of adventures.</p>
    </div>
  </Layout>
)

export default AboutPage
