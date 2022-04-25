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
 import "./layout.css"

 import 'bootstrap/dist/css/bootstrap.min.css'

 import Header from "./header"
 import Footer from "./footer"
 import {css} from "@emotion/styled"
 import {styled} from "@emotion/styled"


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
       <div style={{paddingTop:"1rem", paddingBottom:"3rem"}}>
         <div style={{topPadding:"1rem", bottomMargin:"1rem"}}><main>{children}</main></div>
         </div>
         <Footer />


     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 