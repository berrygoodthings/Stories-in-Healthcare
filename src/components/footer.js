import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

import styled from "@emotion/styled"
import "./layout.css"

const footerStyle= {
  background: "#9ADDEC",
  minWidth:"100%",
  height:"3rem"
}
const Footer = ({props}) => {
    
    return(
    <navbar className="fixed-bottom" style={footerStyle}>
      <p>Copyright 2022</p>
    </navbar>
    ) 
}

export default Footer