import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query headshotQuery {
      headshot: file(relativePath: { eq: "jw_kneel_cropped_small.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About Me" />
      <div className="content-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="mb-0">About Me</h1>
              <div className="border-blue mr-auto"></div>

              <p className="font-zilla text-xl">I am a Software Developer based in the Twin Cities (where yes it gets cold in the winter, but we have summers y{`'`}all). I enjoy creating simple, beautiful and intuitive websites that solve problems. I've worked at digital agencies & start-ups (both early stage and growth stage).</p>
            </div>
            <div className="col-md-3">
              <Img
                className="shadow"
                fluid={data.headshot.childImageSharp.fluid}
                alt="Jenessa kneeling and leaning on a stool looking up and to the right."
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <p>Outside of work, but still in the tech world, I enjoy attending conferences and meet-ups. I've had the privelege of being sponsored to go to both JSConf HI & DevOpsDays MSP. I've also been a part of the Minne* unconference <a href="https://minnestar.org/minnebar/" target="_blank" rel="noopener noreferrer">MinneBar</a> and presented twice. I think my favorite tech related thing to do though is be on panels. Panels give me a chance to have conversations with others in my field, even if we have different roles, and learn while discussing a number of things.</p>

              <p>I like to live a pretty fulfilling life outside of the tech world too...</p>

              <p>One of my main activities outside of the office is playing Tight End for the <a href="https://mnvixen.com" target="_blank" rel="noopener noreferrer">Minnesota Vixen</a>! I joined the team in 2018 and have learned so much more about teamwork and myself than I had in a while. Football has taught me some skills that we even can apply to our everyday workflows. Other things I like to do include DIY projects and listening to podcasts. If you ask me about them I could talk to you about them for hours, so proceed with caution. I also love to hang out with friends, watch Netflix, try out new restaurants, attend concerts/sporting events and go on all types of adventures.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
