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
  position:"fixed"

}
const Footer = ({props}) => {
    
    return(
    <div style={footerStyle}>
      <h1>Developing</h1>
    </div>
    ) 
}

export default Footer