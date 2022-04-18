import React from "react";
import {StaticQuery, Link, actions} from "gatsby";
import Layout from "../components/layout";
import {Row, Col, Container} from "react-bootstrap";
import { graphql } from "gatsby";
import StoryCard from "../components/StoryCard";

import Banner from "../images/stories banner.png"

const cardStyle = {
    maxHeight: "25%",
    border: "3px solid #419FD3",

}

const titleStyle = {
}

const summaryStyle ={

}


const StoriesPage = (props) =>{
    

    return (
        <Layout data = {props.data}>

                    {props.data.allStories.edges.map(edge =>{ 
                            const name = edge.node.id
                            {
                                
                                /* const data = {edge}
                            {console.log(edge)}
                            {console.log(edge.node.id)}
                          <div key={[edge.node.cardImage, edge.node.summaryText, edge.node.title]}>
                            <img  src={edge.node.cardImage}  class="img-fluid rounded"/>
                            <div style={titleStyle}>{edge.node.title}</div>
                            <div style={summaryStyle}>{edge.node.summaryText}</div>
                        </div>})} */
                        return(
                        <StoryCard props={name} />)
                    }})}


                        
                        {props.data.allStories.edges.map(edge => (
          {/* <article className="card" key={edge.node.id}>
            <div className="image">
            </div>
            <div className="info">
              <h2>{edge.node.id}</h2>
              <Link to={`/stories/${edge.node.id}`} className="link">read more</Link>
            </div>
          </article> */}
        ))}
        </Layout>
      )
}


export const query = graphql`
  {
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
    }
`;

export default StoriesPage