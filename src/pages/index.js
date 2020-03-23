import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      headshot: file(relativePath: { eq: "jw_kneel_cropped_small.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footballImg: file(relativePath: { eq: "jenessa_block_stl_small.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data);
  

  return (
    <Layout>
      <SEO title="Home" keywords={[`Jenessa White`, `developer`, `front-end`, `front-end developer`, `Twin Cities`]} />

      <div className="container-fluid home-hero">
        <div className="container">
          <div className="row justify-content-end align-items-center">
            <div className="col-md-5 pb-4 pb-md-0">
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                style={{ maxWidth: '360px' }}
              >
                <Img
                  fluid={data.headshot.childImageSharp.fluid}
                  alt="A corgi smiling happily"
                />
              </div>
            </div>

            <div className="col-md-6 align-items-center text-right"
              data-aos="fade-up"
            >
              <h1>👋🏾 Yo, I'm Jenessa White</h1>

              <p>I’m a developer & football player. <br />
                A DIY enthusiast & podcast procurer.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container dev-wrap">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="font-fugaz mb-md-0">I'm a software developer.</h2>
            <div className="border-blue mx-auto"></div>
            <p style={{ maxWidth: '500px', margin: '0 auto' }}>
              I’ve been a developer for 3+ years and have worked on a variety of projects,
              from marketing websites to web applications.
            </p>
          </div>
        </div>
      </div>

      <div className="container football-wrap">
        <div className="row justify-content-end align-items-center">

          <div className="col-md-6 align-items-center"
            data-aos="fade-up"
          >
            <h2 className="font-fugaz mb-md-0">I'm a football player.</h2>
            <div className="border-blue mr-auto"></div>

            <p>
            I’m also in my third season playing for the MN Vixen, the pro women’s american football team in Minnesota. I play Tight End, which is the best position on the field, trust me.
            </p>
          </div>

          <div className="col-md-6 pb-4 pb-md-0 text-right" data-aos="fade-up">
            <Img
              fluid={data.footballImg.childImageSharp.fluid}
              alt="A corgi smiling happily"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
