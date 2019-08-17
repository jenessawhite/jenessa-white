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
        name: `Projects`,
        link: `/projects`
      },
      {
        name: `Contact`,
        link: `/contact`
      },
    ],
    socialLinks: [
      {
        name: `Twitter`,
        link: `https://twitter.com/jnessview`,
        icon: `twitter`
      },
      {
        name: `Instagram`,
        link: `https://instagram.com/thenessview`,
        icon: `instagram`
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
        icon: `src/images/jw-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: "projects",
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Muli', 'Montserrat:300,500']
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
