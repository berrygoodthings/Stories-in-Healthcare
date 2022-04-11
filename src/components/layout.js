/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 import {Link, useStaticQuery, graphql } from "gatsby"
 import { Container, Row, Col } from "react-bootstrap"
 import 'bootstrap/dist/css/bootstrap.min.css'

 import Header from "./header"
 import Footer from "./footer"
 import styled from "@emotion/styled"
 import { css } from "@emotion/react"


 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   return (
     <>
       <Header siteTitle={data.site.siteMetadata.title} />
       <div
       >
         <main>{children}</main>
        
        <Footer />
       </div>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 