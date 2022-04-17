const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allStories {
          nodes {
            testStory
            id
          }
          edges {
            node {
              id
            }
          }
        }
      }
    `)

    return graphql(`
      {
      allStories {
        nodes {
          testStory
          id
        }
        edges {
          node {
            id
          }
        }
      }
    }`).then(result => {
      if(result.errors){
        throw result.errors;
      }

      result.data.allStories.edges.forEach(stories =>{
        actions.createPage({
          path: `/stories/${stories.node.id}`,
          component: require.resolve(`./src/templates/StoryTemplate.js`),
          context: { storyID: stories.node.id }
        })
      });
    })

    console.log(data)
    console.log("hello")

    // Array.from({length:numPages}).forEach((_, i) => {
    //   actions.createPages({
    //     path: i === 0 ? `/` : `/${i + 1}`,
    //     component: require.resolve("./src/templates/StoryTemplate.js"),
    //     context:{
    //       limit: storiesPerPage,
    //       skip: i * storiesPerPage,
    //       numPages,
    //       currentPage: i + 1,
    //     }
    //   })
    // })

    // data.allStories.edges.forEach(stories => {
      
    //   //const slug = edge.node.slug
    //   const id = stories.node.id
    //   //{console.log(slug)}
    //   actions.createPage({
    //     path: `/stories/${id}`,
    //     component: require.resolve(`./src/templates/StoryTemplate.js`),
    //     context: { storyID: id },
    //   })
    // })
  }

