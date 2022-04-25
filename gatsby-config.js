module.exports = {
  siteMetadata: {
    title: `Istorio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },

  {
    resolve: `gatsby-source-firestore`,
    options: {
      credential: require('./firebase-cred.json'),
      types:[
          {type: 'Test',
          collection: 'test',
          map: doc => ({
            isWorking: doc.isWorking
          }
          )},
          {type: 'Stories',
          collection: 'Stories',
          map: doc => ({
            testStory: doc.testStory,
            title: doc.title,
            summaryText: doc.summaryText,
            cardImage: doc.cardImage,
            tags: doc.tags,
            Banner: doc.bannerImage,
            storyText: doc.storyText
                    })
          }
        
      ]
    }
    },

    {resolve: "gatsby-plugin-local-search",
      options: {
        name: "blog",
        engine: "flexsearch",
        engineOptions: {
          encode: "icase",
          tokenize: "forward",
          async: false,
        },
        query: `
          {
            allStories {
              nodes {
                testStory
                id
              }
              edges {
                node {
                  id
                  storyText
                  tags
                  title
                  summaryText
                }
              }
            }
          }
        `,
        ref: "id",
        index: ["title", "storyText"],
        store: ["id", "tags", "title", "storyText"],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map(node => ({
            id: node.id,
            storyText: node.storyText,
            title: node.title,
            tags: node.tags,
            summaryText: node.summaryText
          })),
      },
    }

  ]
  };