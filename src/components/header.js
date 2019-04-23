import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuItems }) => (
  <header>
    <nav>
      {menuItems.map(link =>
        <Link key={link.name} to={link.link}>
          {link.name}
        </Link>
      )}
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
