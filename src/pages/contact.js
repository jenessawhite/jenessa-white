import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <StaticQuery
    query={graphql`
      query SocialLinkQuery {
        site {
          siteMetadata {
            socialLinks {
              name
              link
              icon
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data.site.siteMetadata.socialLinks)
      return (
        <Layout>
          <SEO title="Contact" />
          <div className="content-wrapper">
            <h1>Contact</h1>
            <p>
              I am open to talking about tons of things! I'd love to discuss attending trainings, confrences, workshops, speaking gigs, podcasts, etc.  <strong>However I'm not open to recruiters, so if you are one, please don't reach out.</strong>
            </p>
            <p>
              So, if you would like to talk about any of the above feel free to <a href="https://jenessawhite.typeform.com/to/LocBUf" target="_blank" rel="noopener noreferrer">fill out this form</a>. I’ll get back to you as soon as I can!
            <br />
              <strong>Of course if you want to hit me up on the interwebs via social media you can do that on these:</strong>
            </p>

            <div>
              {data.site.siteMetadata.socialLinks.map( node => (
                <a key={node.name} href={node.link} target="_blank" rel="noopener noreferrer" className="social-link">
                  <FontAwesomeIcon icon={['fab', node.icon]} color="#fdfdfd" />
                </a>
              ))}
            </div>
          </div>
        </Layout>
      )
    }}
  />
)

export default ContactPage
// export default ({ data }) => {
//   console.log(data)
//   return (

// )}
