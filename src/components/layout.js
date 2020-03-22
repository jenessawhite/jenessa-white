/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Header from "./header"
import "./layout.css"
import "../styles/index.css"

library.add(fab);

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteInfoQuery {
        site {
          siteMetadata {
            menuItems {
              name
              link
            }
            socialLinks {
              name
              link
              icon
            }
          }
        }
        logo: file(relativePath: { eq: "jw_logo.png" }) {
          childImageSharp { # Specify the image processing specifications right in the query.
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header menuItems={data.site.siteMetadata.menuItems} socialLinks={data.site.siteMetadata.socialLinks} logo={data.logo} />
        <main className="site-content">
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built using
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
