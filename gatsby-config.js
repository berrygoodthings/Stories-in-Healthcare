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
          })
        }
      ]
    }
  }

]
};