import React from "react";
import {queryql, Link} from "gatsby";
import Layout from "../components/layout";
import {Row, Col, Container} from "react-bootstrap"
import Banner from "../images/people outside banner.png"


const bannerStyle = {
    margin:"auto",
    display: "table",
    marginTop: "1rem",
    marginBottom: "1rem",
    maxWidth: "100%"
  
  }
  
const AboutPage = ({}) =>{
    
    
    return(
        <Layout>
            <Container style={{maxWidth:"90%", topMargin:"3rem"}}>
            <Row>
            <Col xs={0} md={1} ></Col>
            <Col>

                <h1>About Istorio</h1>
                <img src={Banner} style={bannerStyle}  alt="people" />
                <Row>            
            <p>Istorio is a platform with the intention of encouraging self-advocacy for migrants to the UK through the exchange of stories and experiences. Migrants are people who have emigrated or expatriated for varying reasons, including circumstances that can lead them to being undocumented. Both undocumented and documented migrants are faced with various factors that can impair their ability to obtain healthcare or navigate through an unfamiliar system and cultural attitudes towards health.</p>
            <p>Self-advocacy is an important tool that is most simply defined as “the ability to speak up for yourself and the things that are important to you.” It allows you to help control your own life and to communicate what you need or want. Self-advocacy can be as simple as pointing out you were wrongly charged at a shop, to speaking up when you believe you have not been offered adequate medical care.</p>
            <p>By reading stories of people who may have had similar experiences or circumstances, it is possible to encourage self-advocacy by knowing what could potentially happen or what resources to ask for. Some people may find empowerment or satisfaction in sharing their own experiences with others.</p>

            </Row>
            </Col>

            <Col xs={0} md={1} ></Col>
        </Row>

        </Container>
        </Layout>
    )
}

    // return(
    //     <Layout>
    //         <Container style={{maxWidth:"90%"}}>
    //             <Row><h1 >About Istorio</h1></Row>
    //             <img src={Banner} style={bannerStyle} alt="people outside smiling" />
    //         <Row>            
    //         <p>Istorio is a platform with the intention of encouraging self-advocacy for migrants to the UK through the exchange of stories and experiences. Migrants are people who have emigrated or expatriated for varying reasons, including circumstances that can lead them to being undocumented. Both undocumented and documented migrants are faced with various factors that can impair their ability to obtain healthcare or navigate through an unfamiliar system and cultural attitudes towards health.</p>
    //         <p>Self-advocacy is an important tool that is most simply defined as “the ability to speak up for yourself and the things that are important to you.” It allows you to help control your own life and to communicate what you need or want. Self-advocacy can be as simple as pointing out you were wrongly charged at a shop, to speaking up when you believe you have not been offered adequate medical care.</p>
    //         <p>By reading stories of people who may have had similar experiences or circumstances, it is possible to encourage self-advocacy by knowing what could potentially happen or what resources to ask for. Some people may find empowerment or satisfaction in sharing their own experiences with others.</p>

    //         </Row>
    //         </Container>
    //     </Layout>
    // )


export default AboutPage