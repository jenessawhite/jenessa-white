import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ siteTitle, menuItems, socialLinks }) => (
  <header>
    <div className="brand">
      <Link to="/">J. White</Link>
    </div>
    <nav>
      {menuItems.map(page => (
        <Link key={page.name} to={page.link}>
          {page.name}
        </Link>
      ))}
      {socialLinks.map(social => (
          <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={['fab', social.icon]} color="#fdfdfd" />
          </a>
      ))}

    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
