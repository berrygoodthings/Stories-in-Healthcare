import React from "react";
import { StaticQuery, queryql, Link} from "gatsby";
import Layout from "../components/layout";
import {Row, Col, Container} from "react-bootstrap"

const cardStyle = {
    maxHeight: "25%",
    border: "3px solid #419FD3",

}

const titleStyle = {
}

const summaryStyle ={

}

export default function StoryCard(props){
    console.log(props)

    return (
        <StaticQuery
          query = {graphql`
            query HeadingQuery {
            allStories {
                edges {
                node {
                    id
                    summaryText
                    title
                    testStory
                    cardImage
                }
                }
            }
            }`}

            render={data => (
                <div>
                {data.allStories.edges.map(edge=> 
                    {if(edge.id == props){

                    return(
                        <div>
                            <Container fluid style={cardStyle}>
                            <Row><img src={edge.cardImage}  class="img-fluid rounded"/></Row>
                            <Row><div style={titleStyle}>{edge.title}</div></Row>
                            <Row><div style={summaryStyle}>{edge.summaryText}</div></Row>
                            </Container>
                        </div>)   
                    }})}
                </div>
            )}
        />
    )
}