require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'EDS Systems',
    author: 'Jovi De Croock',
    description: 'Laser scanning',
    siteUrl: `https://eds-systems.be/`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    'gatsby-plugin-hoofd',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        schemas: {
          project: require('./src/schemas/project.json'),
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'EDS Systems',
        short_name: 'EDS Systems',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
      }
    },
    'gatsby-plugin-offline',
  ],
}
