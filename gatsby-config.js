module.exports = {
  siteMetadata: {
    title: 'LogikLAN',
  },
  plugins: ['gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-postcss`,
    options: {
      postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 }), require('precss')],
    },
  },
  ]
}
