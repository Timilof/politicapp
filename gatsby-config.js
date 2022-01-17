module.exports = {
  siteMetadata: {
    title: `PoliticApp`,
    description: `Politicapp proof of concept`,
    author: `Timilof/@gatsbyjs`,
  },
  plugins: [
    "@babel/plugin-proposal-logical-assignment-operators",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'politicapp1', 
        schemas: {
          menu: require("./src/schemes/menu.json"),
          home: require("./src/schemes/home.json"),
          event: require("./src/schemes/event.json"),
          about: require("./src/schemes/about.json"),
        },
    }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Abril Fatface`,
          'Alata',
          'K2D',
          `Sarabun` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/politicapp_p.png`, 
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
