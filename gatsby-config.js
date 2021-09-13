module.exports = {
  siteMetadata: {
    title: `PoliticApp`,
    description: `Politicapp proof of concept`,
    author: `@gatsbyjs`,
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
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'politicapp1', 
        accessToken: 'MC5ZU3p0ZHhJQUFDTUFhS3FN.77-9Pe-_ve-_vSbvv70O77-9O31fEO-_ve-_ve-_ve-_vXlNBu-_ve-_ve-_ve-_ve-_ve-_ve-_vVLvv73vv71d77-977-9',
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
          `Epilogue`,
          `Viga`,
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