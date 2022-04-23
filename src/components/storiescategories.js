import React from "react"
import {Col, Row} from "react-bootstrap"
import {Link} from "gatsby"


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
  

const StoryCategory =({}) => {
    console.log("category")
    return(
    <Col className="d-none d-lg-block" lg={2}>
    <Row className="d-none d-lg-block"><h1 className="d-none d-lg-block" >Categories</h1>
    <ul><Link to="/stories/mentalhealth" style={linkStyle}>Mental Health</Link></ul> 

    <ul><Link to="/stories/health" style={linkStyle}>Health</Link></ul>
            <ul><Link to="/stories/ageing" style={subLinkStyle}>Ageing</Link></ul>
            <ul><Link to="/stories/respiratory" style={subLinkStyle}>Respiratory</Link></ul>
            <ul><Link to="/stories/heart" style={subLinkStyle}>Heart</Link></ul>

    <ul><Link to="/stories/children" style={linkStyle}>Children</Link></ul>
    <ul><Link to="/stories/primarycare" style={linkStyle}>Primary Care</Link></ul>
    <ul><Link to="/stories/secondarycare" style={linkStyle}>Secondary Care</Link></ul>
    <ul><Link to="/stories/hospital" style={linkStyle}>Hospital</Link></ul>

    </Row>
   
  </Col>)
}

export default StoryCategory
