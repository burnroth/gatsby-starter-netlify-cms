module.exports = {
  siteMetadata: {
    language: "se",
    title: "Lime CRM Website 2.0",
    description: "We create customer magnets"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/assets/se/img`,
        name: "images"
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/assets/icons`,
        name: "icons"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content/se`,
        name: "content"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    },
    `gatsby-transformer-json`,

    `gatsby-transformer-xml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./assets/translations/lang.json`,
        name: "translations"
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "hacktuesday-se",
        region: "eu-west-1"
      }
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: false // Activates purging in npm run develop
        // purgeOnly: ['/all.scss'],
      }
    }
  ]
};
