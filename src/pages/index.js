import {Link,  graphql, StaticQuery, useStaticQuery} from "gatsby"
import * as React from "react"
import Layout from '../components/layout'
import {Col, Container, Row} from "react-bootstrap"
//etc
import sideBanner from "../images/youngboy.png"
import topBanner from "../images/index banner.png"
import sixMillion from "../images/6 million stories 3.png"
import whatsYours from "../images/whats yours 2.png"
import background from "../images/notebook fade.png"
import verticalBanner from "../images/vertical index.png"

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
    <Container style={{backgroundImage:{background}}}>
    <Row>


      <img src={topBanner} alt="people" className="d-none d-md-block" />
      <img src={verticalBanner} alt="people" className="d-block d-md-none" />
      <img src={sixMillion} alt ="6 million migrant stories." />
      <img src={whatsYours} style={{maxWidth:"60%", margin:"auto", paddingBottom:"3rem"}} alt="What's yours?" />


    </Row>
    </Container>
    </Layout>
  )
}
export default IndexPage