import React from "react";
import { StaticQuery, Link} from "gatsby";
import Layout from "../components/layout";
import {Row, Col, Container} from "react-bootstrap"

const cardStyle = {
    minHeight: "95%",
    maxWidth: "100%",
    border: "3px solid #419FD3",
    margin:"auto",
    marginTop: "1rem",
    marginBottom: "1rem",
    paddingTop:"1rem",
    paddingBottom:"1rem"
}

const imageStyle = {
    maxWidth:"90%", 
    maxHeight:"40%",
    margin:"auto",
    marginBottom:".70rem"
}

const summaryStyle ={
    textAlign:"center",
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    margin: "auto",
    maxWidth: "90%"
}

export default function StoryCard({props}){
    console.log("story card")
    console.log(props)
    return(
<Col xs ={12} md={6}>   
        <div style={cardStyle}>
           <Row> <img src={props.cardImage}  class="img-fluid rounded" style={imageStyle}/></Row>
           <Row style={{textAlign:"center"}}> <h2><Link to={`/stories/${props.id}`} style={{textDecoration: 'none', color: "#174474",}}>{props.title}</Link></h2></Row>
           <Row> <div style={summaryStyle}>{props.summaryText}</div></Row>
           </div>
</Col>
    )
}