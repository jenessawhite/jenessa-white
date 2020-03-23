import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactTypeformEmbed } from 'react-typeform-embed';

import Layout from "../components/layout"
import SEO from "../components/seo"

const ConnectPage = () => (
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
      return (
        <Layout>
          <SEO title="Contact" />
          <div className="content-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <h1 className="mb-0">Let{`'`}s Connect!</h1>
                  <div className="border-blue mr-auto"></div>
                  <badge className="shadow">Looking for work!</badge>
                </div>
                <div className="col-md-3"></div>
              </div>

              <div className="row mt-4">
                <div className="col-12">
                  <p>
                    I am open to talking about tons of things! I'd love to discuss attending trainings, confrences, workshops, speaking gigs, podcasts, etc. <strong>However I'm not open to recruiters, so if you are one, please don't reach out.</strong>
                  </p>
                  <p>
                    So, if you would like to talk about any of the above feel free to fill out the form below. I’ll get back to you as soon as I can!
                    <br />
                    <strong>Of course if you want to hit me up on the interwebs via social media you can do that on these:</strong>
                  </p>

                  <div>
                    {data.site.siteMetadata.socialLinks.map(node => (
                      <a key={node.name} href={node.link} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={['fab', node.icon]} color="#fdfdfd" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="col-12 position-relative d-block" style={{ height: '700px' }}>
                  <ReactTypeformEmbed url="https://jenessawhite.typeform.com/to/LocBUf" popup={false} />
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )
    }}
  />
)

export default ConnectPage
