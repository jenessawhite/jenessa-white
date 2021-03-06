import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query imageQuery {
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

  return (
    <Layout>
      <SEO title="Home" keywords={[`Jenessa White`, `developer`, `front-end`, `front-end developer`, `Twin Cities`]} />

      <div className="container-fluid home-hero">
        <div className="container">
          <div className="row justify-content-end align-items-center">
            <div className="col-md-5 pb-4 pb-md-0">
              <div style={{ maxWidth: '360px' }}>
                <Img
                  fluid={data.headshot.childImageSharp.fluid}
                  alt="Jenessa kneeling and leaning on a stool looking up and to the right."
                />
              </div>
            </div>

            <div className="col-md-6 align-items-center text-right">
              <h1><span aria-label="wave emoji" role="img">👋🏾</span> Yo, I'm Jenessa!</h1>

              <p>I’m a developer & football player. <br />
                A DIY enthusiast & podcast procurer.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container dev-wrap">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="font-fugaz mb-0">I'm a software developer.</h2>
            <div className="border-blue mx-auto"></div>
            <p style={{ maxWidth: '500px', margin: '0 auto' }}>
              I’ve been a developer for 3+ years and have worked on a variety of projects,
              from marketing websites to web applications.
            </p>
          </div>
        </div>
      </div>

      <div className="container football-wrap">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="font-fugaz mb-0">I'm a football player.</h2>
            <div className="border-blue mr-auto"></div>

            <p>
            I’m also in my third season playing for the MN Vixen, the professional women’s American Football team in Minnesota. I play Tight End, which is the best position on the field, trust me.
            </p>
          </div>

          <div className="col-md-6 pb-4 pb-md-0 text-right">
            <Img
              fluid={data.footballImg.childImageSharp.fluid}
              alt="Jenessa #87 blocking STL player #24"
            />
          </div>
        </div>
      </div>


      <div className="container-fluid home-cta">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 text-center">
            <h2 className="font-fugaz mb-0">Want to learn more? Connect?</h2>
            <div className="border-blue mx-auto"></div>
          </div>

          <div className="col-12 mt-4 d-flex flex-column flex-md-row justify-content-center">
            <Link key={'about me'} to={'/about'} className="btn btn-primary mr-md-3 mb-3 mb-md-0">About Me</Link>
            <Link key={'connect'} to={'/connect'} className="btn btn-secondary">Connect with Me</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
