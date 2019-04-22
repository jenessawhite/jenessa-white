module.exports = {
  siteMetadata: {
    title: `Jenessa White`,
    description: `This is the personal website of Jenessa White. An athlete and developer living in the frozen tundra that is the Twin Cities.`,
    author: `@jnessview`,
    menuItems: [
      {
        name: `About`,
        link: `/about`
      },
      {
        name: `Portfolio`,
        link: `/portfolio`
      },
      {
        name: `Blog`,
        link: `/blog`
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
