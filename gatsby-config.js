/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          breakpoints: [300, 600, 960, 1280, 1920],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/mdfiles/about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home`,
        path: `${__dirname}/src/mdfiles/home`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/mdfiles/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/src/mdfiles/services`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Prosper Atu",
        short_name: "Prosper blog",
        description: "Join me as I walk through my tech journey",
        start_url: "/",
        background_color: "#F7F7F7",
        theme_color: "#6633FF",
        display: "standalone",
        icon: "src/images/favicon.png",
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_STRAPI,
        queryLimit: 1000,
        collectionTypes: [`categories`, `posts`, `tags`],
      },
    },
  ],
  siteMetadata: {
    title: "Prosper Blog",
    description:
      "I started learning how to code in January 2021. Before then I used wordpress to design website, but I wnated more so I developed a strong love for Javascript...",
    tagline: "Welcome to my blog",
    aboutTitle: "About Prosper Blog",
    aboutSubtitle: "Welcome to my tech world",
    aboutDescription:
      "I started learning how to code in January 2021. Before then I used wordpress to design website, but I wnated more so I developed a strong love for Javascript...",
    siteUrl: "https://prosper-blog.netlify.app/",
    image: "https://res.cloudinary.com/dccqoevkp/image/upload/v1643512890/favicon_tx2lap.png",
    author: "Prosper Atu",
    twitter: "@prosperjohnson",
    fbAppID: "atu.prosper",
    keywords: [
      "developer",
      "programmer",
      "coding",
      "code",
      "websites",
      "web developer",
      "Mentoring",
    ],
  },
}
