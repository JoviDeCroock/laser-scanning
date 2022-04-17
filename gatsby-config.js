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
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
      }
    },
  ],
}
