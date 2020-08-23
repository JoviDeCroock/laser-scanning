console.log('process', process.env)

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
      },
    },
    'gatsby-plugin-offline',
  ],
}
