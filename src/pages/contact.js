import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="content-wrapper">
      <h1>Contact</h1>

      <p>
        I am open to talking about tons of things! I'd love to discuss attending trainings, confrences, workshops, speaking gigs, podcasts, etc.  <strong>However I'm not open to recruiters, so if you are one, please don't reach out.</strong>
      </p>
      <p>
        So, if you would like to talk about any of the above feel free to <a href="https://jenessawhite.typeform.com/to/LocBUf" target="_blank" rel="noopener noreferrer">fill out this form</a>. I’ll get back to you as soon as I can!
        <br/>
        <strong>Of course if you want to hit me up on the interwebs via social media you can do that on these:</strong>
      </p>
    </div>
  </Layout>
)

export default ContactPage
