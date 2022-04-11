import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

import styled from "@emotion/styled"


const StyledFooter = styled.header`
      background: #9ADDEC;
      minHeight: {window.screen.availHeight * .1};
      width:{window.screen.availWidth};
      paddingTop: 70px;
`

const Footer = ({}) => {
    
    return(
    <StyledFooter className = "navbar fixed-bottom">
      <h1>Developing</h1>
    </StyledFooter>
    ) 
}

export default Footer