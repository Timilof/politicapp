module.exports = {
  siteMetadata: {
    title: `PoliticApp`,
    description: `Politicapp proof of concept`,
    author: `Timilof/@gatsbyjs`,
    siteUrl: `https://www.politicapp.net/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Politicapp Amsterdam`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/politicapp_p.png`, 
      },
    },
  ],
}
