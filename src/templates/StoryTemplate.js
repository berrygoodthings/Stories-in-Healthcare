import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


function StoryTemplate ({ data }) {
  console.log(data)
  
  // const post = data.
  // return (
  //   <Layout>
  //     <div>
  //       <h1>{post.testStory}</h1>
  //       {/**<div dangerouslySetInnerHTML={{ __html: post.html }} />*/}
  //     </div>
  //   </Layout>
  // )

  return(
    <Layout>
    <div>
      <h1>Hi</h1>
    </div>
    </Layout>
  )
}

export const query = graphql`
    query StoriesQuery($storyID: String!) {
        stories(id: {eq: $storyID}){
        id
        testStory
    }
  }
`;
export default StoryTemplate