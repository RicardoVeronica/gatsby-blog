require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    title: `Ricardo Veronica personal web`,
    siteTitle: `Ricardo Veronica`,
    siteTitleAlt: `Ricardo Veronica personal blog`,
    siteDescription: `Blog personal Ricardo Veronica`,
    author: `linkedin.com/in/ricardoveronica`,
    siteLanguage: `es`,
    siteURL: `https://www.ricardoveronica.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `ricardoveronica-com`
      },
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `AcercaDe`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `YouTube`,
            url: `https://www.youtube.com/channel/UCnd6oUDFx11ibETnPkjTVPw`,
          },
          {
            name: `Facebook`,
            url: `https://www.facebook.com/Alt-Dev-104264135247324`,
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/alt_dev_`,
          },
          {
            name: `Medium`,
            url: `https://medium.com/@AltDev`,
          },
          {
            name: `Portafolio`,
            url: `https://portfolio-django.us.aldryn.io/`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/RicardoVeronica`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    // `gatsby-plugin-gatsby-cloud`,
    // `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
