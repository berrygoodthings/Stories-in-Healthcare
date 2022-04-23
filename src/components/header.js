import "./layout.css"

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap"

import styled from "@emotion/styled"
import {css, Global} from "@emotion/react"

import Search from "./Search"

import logo from "../images/placeholder image.png"
let height = window.screen.availHeight;

const StyledHeader = styled.header`
      background: #9ADDEC;
      paddingBottom: 1.45rem;
      maxHeight: {height * .01};
`

const Links = styled.image`
    float: right;
`

function Logo(){
  return(
    <img src={logo} />
  )
}
const SiteName = styled.div`
  color: white;
  float: left;
  maxWidth:100%;
`

const Header = ({ siteTitle }) => (

  <StyledHeader>
  <link rel="stylesheet" href="./layout.css"></link>
    <Container fluid style={{display:"inline-block"}}>
    <Navbar expand="md">
      
      <Navbar.Brand href="/"> <img src={logo} width={40} style={{marginRight:window.screen.availWidth * .015, marginLeft:window.screen.availWidth * .015}}/> {siteTitle} </Navbar.Brand>
      <Navbar.Toggle aria-controls = "navbarResponsive" />
      <Navbar.Collapse id="navbarResponsive">
        <Nav as = "ul" className = "ms-auto" style={{marginRight:window.screen.availWidth * .015}}>
          <Nav.Item as="li" style={{marginRight:window.screen.availWidth * .015}}>
            <Link to="/about" className="nav-link" activeClassName="active">About</Link>
          </Nav.Item>
          <Nav as="ul" style={{marginRight:window.screen.availWidth * .015}}>
            <Link to="/resources" className="nav-link" activeClassName="active">Resources</Link>
          </Nav>
          <Nav as="ul" style={{marginRight:window.screen.availWidth * .015}}>
            <Link to="/stories" className="nav-link" activeClassName="active">Stories</Link>
          </Nav>
          <Nav as="ul">
            <Search />
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
  </StyledHeader>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
