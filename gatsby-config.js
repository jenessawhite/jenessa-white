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
      // {
      //   name: `Projects`,
      //   link: `/projects`
      // },
      {
        name: `Connect`,
        link: `/connect`
      },
    ],
    socialLinks: [
      {
        name: `Twitter`,
        link: `https://twitter.com/jnessview`,
        icon: `twitter`
      },
      {
        name: `Github`,
        link: `https://github.com/jenessawhite`,
        icon: `github`
      },
      {
        name: `LinkedIn`,
        link: `https://www.linkedin.com/in/jenessawhite`,
        icon: `linkedin`
      }
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
        background_color: `#150046`,
        theme_color: `#150046`,
        display: `minimal-ui`,
        icon: `src/images/jw_logo.png`, // This path is relative to the root of the site.
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
          families: ['Catamaran', 'Fugaz One', 'Zilla Slab']
        }
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
