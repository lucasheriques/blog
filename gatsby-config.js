module.exports = {
  siteMetadata: {
    title: `Lucas' blog`,
    name: `Lucas Faria`,
    siteUrl: `https://lucasfaria.dev`,
    description: `Personal blog by Lucas Faria. Software engineering 
    with occasional banter.`,
    hero: {
      heading: `Learning, teaching and occasional banter. Welcome!`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/lucashenfaria`,
      },
      {
        name: `github`,
        url: `https://github.com/lucasheriques`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/lucas-faria/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lucas' blog`,
        short_name: `Lucas`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
};
