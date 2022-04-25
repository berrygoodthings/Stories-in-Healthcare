import {Link,  graphql, StaticQuery, useStaticQuery} from "gatsby"
import * as React from "react"
import Layout from '../components/layout'
import {Col, Container, Row} from "react-bootstrap"
//etc
import sideBanner from "../images/youngboy.png"
import topBanner from "../images/index banner.png"
import sixMillion from "../images/6 million stories 1.png"
import whatsYours from "../images/whats yours.png"

// styles

const paragraphStyle = {
  margin: "auto",
  marginTop: ".70rem"
}
// markup
const IndexPage = (props) => {
 
  {console.log("index page")}

  return (
    <Layout data = {props.data}>
    <Container>
    <Row>


      <img src={topBanner} alt="people" />
      <img src={sixMillion} alt ="six million people and counting" />
      <img src={whatsYours} style={{maxWidth:"60%", margin:"auto", paddingBottom:"3rem"}} alt="whats yours" />


    </Row>
    </Container>
    </Layout>
  )
}
export default IndexPage