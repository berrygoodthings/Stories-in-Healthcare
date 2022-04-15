import {Link,  graphql, StaticQuery, useStaticQuery} from "gatsby"
import * as React from "react"
import Layout from '../components/layout'
import AboutPage from "./about"
import {Col, Row} from "react-bootstrap"
//etc
import sideBanner from "../images/youngboy.png"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// markup
const IndexPage = ({}) => {

  const data = useStaticQuery(graphql`
  query {
    allTest {
      nodes {
        isWorking
      }
    }
    }`)

  
  return (
    <Layout data = {data}>
      <h1>Test</h1>
          {/**This successfully prints out a working query!! see images for example of return structure */}
            {data.allTest.nodes[0].isWorking ? "it's working!" : "it is not working :("}
          <Link to="/about">Test link</Link>
          <div>
          <Row>
            <Col className="d-none d-md-block d-xl-none d-xxl-none">
             <img src={sideBanner} alt="boy"/>
            </Col>
            <Col>
              <img src="https://firebasestorage.googleapis.com/v0/b/migrants-and-healthcare.appspot.com/o/people%20outside%20banner.png?alt=media&token=0299539c-7270-4ad2-9821-f694512d0784" />
            </Col>
          </Row>
          </div>
    </Layout>
  )
}
export default IndexPage