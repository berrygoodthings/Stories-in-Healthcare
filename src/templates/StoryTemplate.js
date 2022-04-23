import React from "react"
import { graphql, Link} from "gatsby"
import Layout from "../components/layout"
import {Row, Col, Container} from "react-bootstrap"



const bannerStyle = {
  margin:"auto",
  display: "table",
  marginTop: "1rem",
  marginBottom: "1rem",
  maxWidth: "100%"

}

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
            <Container style={{maxWidth:"90%", topMargin:"3rem"}}>
                <img src={data.stories.Banner} style={bannerStyle}  alt="people" />

            <Row>            
            <Col xs={0} md={2} ></Col>

            <Col>
            <h1>{data.stories.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.stories.storyText }} />  
                </Col>
            
            <Col xs={0} md={2}></Col>
            </Row>
        </Container>
    </Layout>
  )
}

export const query = graphql`
    query StoriesQuery($storyID: String!) {
        stories(id: {eq: $storyID}){
        id
        testStory
        storyText
        Banner
        title
    }
  }
`;
export default StoryTemplate