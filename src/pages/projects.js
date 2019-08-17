import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <div className="content-wrapper">
      <h1>My Work</h1>
      <p>
        Want to know what else I've built? Check out some of the projects I've built or worked on below.
        Most of what I build right now is at <a href="https://softwareforgood.com" target="_blank" rel="noopener noreferrer">Software For Good</a>{` `}since that's my job. I even write for the <a href="https://softwareforgood.com/blog" target="_blank" rel="noopener noreferrer">blog</a> sometimes too!
      </p>

      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.frontmatter.path}>
              <h3>
                {node.frontmatter.title}{" "}
              </h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD, YY")
            path
          }
          excerpt
        }
      }
    }
  }
`
