import {Link,  graphql, StaticQuery, useStaticQuery} from "gatsby"
import * as React from "react"
import Layout from '../components/layout'
import {Col, Container, Row} from "react-bootstrap"
//etc
import sideBanner from "../images/youngboy.png"

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
    <Col className="d-none d-md-block" md={5}>
    <img className="d-none d-md-block" style={{maxWidth: "100%", margin:"auto", marginTop:".70rem"}} src={sideBanner} alt="young boy" />
</Col>
            <Col xs={12} s={12} md={7}>
            <p style={paragraphStyle}> 
            Migrating to a new country is difficult. Regardless of your age, country of origin, sex, and many other factors, it is a major life event. You have lots to organise and to understand while you’re there. Sometimes you’ll have friends, family, or a community that’s willing to help you get started. </p>

            <p style={paragraphStyle}>Other times you or your family might be on your own. When this happens, you’ll experience many situations where having knowledge of what happens would have made it a lot easier. Other times you may not know what to expect or may be nervous about asking for what you want and need. </p> 
            
            <p style={paragraphStyle}>When it comes to healthcare, many people will be anxious or concerned about what care they may receive. Navigating an unfamiliar system in an unfamiliar culture is a problem many people face. Often times there are unique cultural, religious, or societal differences that affect how you may choose to approach the care you receive and seek. When it comes to making those decisions, you should feel comfortable and safe in voicing your needs and preferences. </p>
            
            <p style={paragraphStyle}>Istorio is where migrants to the UK can share their experiences of healthcare within the UK. With experiences ranging from accessing the NHS to discussing the impact that their culture and expectations had on their experiences, you will learn and understand more about what you may experience. This knowledge can be comforting, empowering, interesting or informative. </p>
            
            <p style={paragraphStyle}> You can submit your own stories to share with others. Whether you have had fantastic experiences or negative, choosing to share your own story can help and empower others. </p>

            <p style={paragraphStyle}>For more information on Istorio, and submitting stories, click on ‘About’ in the navigation bar.</p>
            </Col>
            </Row>
     </Container>
    </Layout>
  )
}
export default IndexPage