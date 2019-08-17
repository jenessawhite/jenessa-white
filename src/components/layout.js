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
            title
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
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} menuItems={data.site.siteMetadata.menuItems} socialLinks={data.site.siteMetadata.socialLinks} />
        <main className="site-content">
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
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
