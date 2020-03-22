import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = props => {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto col-md-2 brand">
            <Link to="/">
              <Img fluid={props.logo.childImageSharp.fluid} />
            </Link>
          </div>

          <nav className="col-8 justify-content-center">
            {props.menuItems.map(page => (
              <Link key={page.name} to={page.link} className="underline-from-center">
                {page.name}
              </Link>
            ))}
          </nav>

          <div className="col-md-2 d-none d-md-flex social-wrap justify-content-between">
            {props.socialLinks.map(social => (
              <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={['fab', social.icon]} color="#fdfdfd" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
