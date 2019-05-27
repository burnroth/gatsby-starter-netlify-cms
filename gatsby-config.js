module.exports = {
  siteMetadata: {
    language: 'se',
    title: 'Lime CRM Website 2.0',
    description: 'We create customer magnets',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/assets/se/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/se`,
        name: 'content',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    `gatsby-transformer-json`,

    `gatsby-transformer-xml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./assets/translations/lang.json`,
        name: 'translations'
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/forms`,
    //     name: 'forms',
    //   },
    // },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'hacktuesday-se',
        region: 'eu-west-1',
      },
    },
    //  {
    //    resolve: 'gatsby-source-filesystem',
    //    options: {
    //      path: `${__dirname}/static/img`,
    //      name: 'images',
    //    },
    //  },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: false, // Activates purging in npm run develop
        // purgeOnly: ['/all.scss'], 
      },
    },
    {
      resolve: `gatsby-source-firebase`,
      options: {
        // point to the firebase private key downloaded
        credential: require("./firebase-key.json"),

        // your firebase database root url
        databaseURL: "https://maggan-b2fb6.firebaseio.com",

        // you can have multiple "types" that point to different paths
        types: [
          // {
          //   // this type will become `allWorkshop` in graphql
          //   type: "Content",

          //   // the path to get the records from
          //   path: "/",

          //   // probably don't want your entire database, use the query option
          //   // to limit however you'd like
          //   query: ref => ref.limitToLast(10),

          //   // This allows you to map your data to data that GraphQL likes:
          //   // 1. Turn your lists into actual arrays
          //   // 2. Fix keys that GraphQL hates. It doesn't allow number keys
          //   //    like "0", you'll get this error pretty often:
          //   //    Error: Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "0" does not
          //   // 3. Remove stuff you don't need.
          //   //
          //   // Feel free to mutate, we sent you a copy anyway.
          //   map: node => {
          //     // fix keys graphql hates
          //     node.nineteenEightyFive = node['1985']
          //     delete node['1985']

          //     // convert a child list to an array:
          //     return node.sessions = Object.keys(node.sessions).map(key => {
          //       return { _key: key, session: node.sessions[key] }
          //     })

          //     // finally, return the node
          //     return node
          //   },
          // },

          // if you're data is really simple, this should be fine too
          {
            type: "Content",
            path: "/",
          }
        ]
      }
    } // must be after other CSS plugins
    // 'gatsby-plugin-netlify',
  ],
}