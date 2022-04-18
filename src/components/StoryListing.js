import React from "react";
import {queryql, Link, actions} from "gatsby";
import Layout from "../components/layout";
import {Row, Col, Container} from "react-bootstrap";
import StoryCard from "../components/StoryCard";


export default function calculateRows(props){
    
    props.data.allStories.edges.map(edge => ( 
        
        if (rowCounter === 0 | rowCounter === 1){
            rowsArray.push(props.data.allStories.edge.node.id);
            rowCounter = 1 + rowCounter; 
        }

    ))

        return(
            <div>
                
            </div>
        )
}
