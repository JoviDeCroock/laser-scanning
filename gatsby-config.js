module.exports = {
  siteMetadata: {
    title: 'EDS Systems',
    author: 'Jovi De Croock',
    description: 'Laser scanning',
  },
  plugins: [
    `gatsby-plugin-preact`,
    'gatsby-plugin-hooked-head',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'eds-systems',
        accessToken: 'MC5YMEx1b1JBQUFDVUFDN2pO.77-977-977-977-977-977-9Ie-_ve-_ve-_ve-_vSHvv73vv73vv73vv73vv73vv73vv73vv73vv71O77-977-9C--_vXtuFe-_ve-_ve-_vQ',
        schemas: {
          project: require('./src/schemas/project.json'),
        },
      },
    },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        defer: true,
      },
    },
    'gatsby-plugin-offline',
  ],
}
