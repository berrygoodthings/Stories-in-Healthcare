import {Link,  graphql, StaticQuery, useStaticQuery} from "gatsby"
import * as React from "react"
import Layout from '../components/layout'
import {Col, Row, Container} from "react-bootstrap"
import StoryCard from "../components/StoryCard"
import StoryCategory from "../components/storiescategories"
import MobileStoryCategory from "../components/mobilestoriescategories"


//etc
import Banner from "../images/stories banner.png"

import { render } from "react-dom"

// styles

const bannerStyle = {
  margin:"auto",
  display: "table",
  marginTop: "1rem",
  marginBottom: "1rem",
  maxWidth: "100%"

}

const linkStyle = {
  textDecoration: 'none', 
  color: "#174474",
  fontSize: "1.5rem"
}

const subLinkStyle = {
  textDecoration: 'none', 
  color: "#174474",
  fontSize: "1.25rem",
  paddingLeft:"1rem"
}

// markup
const StoriesPage = (props) => {

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
              <StoryCard props={edge.node} />
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
              }
            }
          }
        }
      
`;

export default StoriesPage