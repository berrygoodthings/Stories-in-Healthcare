import {Link,  graphql, StaticQuery, useStaticQuery} from "gatsby"
import * as React from "react"
import Layout from "../../components/layout.js"
import {Col, Row, Container} from "react-bootstrap"
import StoryCard from "../../components/StoryCard.js"
import StoryCategory from "../../components/storiescategories.js"
//etc
import Banner from "../../images/stories banner.png"
import { render } from "react-dom"
import MobileStoryCategory from "../../components/mobilestoriescategories"


// styles

const bannerStyle = {
  margin:"auto",
  display: "table",
  marginTop: "1rem",
  marginBottom: "1rem",
  maxWidth: "100%"

}

const containsTag = (props) => {
  console.log("heart health stories page")
  console.log(props)

  let tagsLength

  {props.tags ?  
    tagsLength = props.tags
    : tagsLength = null}

  if(tagsLength === null){
    console.log("null")
    return(null)
  }

  for(let i = 0; i < tagsLength.length; i++){
    if(tagsLength[i] === "heart"){
      
      return (
        <StoryCard props={props} />
      )
    }
    else{continue}
  }
}

// markup
const HeartStoriesPage = (props) => {

  {console.log("index page")}  


  return (
    <Layout data = {props.data}>
      

      <Container style={{maxWidth:"90%"}}>
      <img src={Banner} style={bannerStyle} />

      <Row className="d-lg-none d-xs-block">
        <MobileStoryCategory />
      </Row>
      

      <Row>
        <StoryCategory />        
        <Col>
        <Row>
          {props.data.allStories.edges.map(edge => (
            containsTag(edge.node)
          ))}</Row>
        </Col>


        </Row>


      </Container>

    </Layout>
  )
}


export const query = graphql`
  {
    allStories {
      edges {
        node {
          id
          cardImage
          summaryText
          title        
          tags
              }
            }
          }
        }
      
`;

export default HeartStoriesPage