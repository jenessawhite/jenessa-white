import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  console.log(data)
  const { markdownRemark } = data // data.markdownRemark holds our project data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="project-container">
        <div className="project-info">
          <h1>{frontmatter.title}</h1>

          <div
            className="project-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <Link to={frontmatter.link}>View Site</Link>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        link
      }
    }
  }
`