import React from "react";
import {queryql, Link} from "gatsby";
import Layout from "../components/layout";
import {Row, Col, Container} from "react-bootstrap"
import Banner from "../images/resources banner.png"

const bannerStyle = {
    margin:"auto",
    display: "table",
    marginTop: "1rem",
    marginBottom: "1rem",
    maxWidth: "100%"
  
  }
  
  const paragraphStyle = {
      margin:"auto",
      paddingLeft: "3rem",
      paddingRight: "3rem"
  }

  const smallParagraphStyle ={
    margin:"auto",
    paddingLeft: "3rem",
    paddingRight: "3rem"
  }

  const linkStyle = {
    textDecoration: 'none', 
    color: "#174474",
  }

const ResourcesPage = ({}) =>{
    
    
    return(
        <Layout>
            <Container style={{maxWidth:"90%", topMargin:"3rem"}}>
            <Row>
            <Col xs={0} md={1} ></Col>
            <Col>

                <h1>Resources</h1>
                <img src={Banner} style={bannerStyle}  alt="people" />
                <Row>
                    <Col>       
                    <p>On this page you will find resources aimed at different regions of the UK for informing migrants of their rights in healthcare. Some of them are aimed at undocumented migrants or refugees but provide valuable information for yourself or others.</p>
                    
                        <Row>

                            <h2><b>England and Wales</b></h2>


                            <Link to="https://www.gov.uk/guidance/nhs-entitlements-migrant-health-guide" style={linkStyle}><h3>NHS Entitlements: Migrant Health Guide</h3></Link>
                            <div style={paragraphStyle}><p>Guidelines to NHS entitlements within England and Wales.</p></div>

                            <Link to="https://www.doctorsoftheworld.org.uk/our-work/uk/" style={linkStyle}><h3>Doctors of the World</h3></Link>
                            <div style={paragraphStyle}><p>Doctors of the World is an international organisation with the goal of providing and promoting advocacy for healthcare to the least privileged in society. In the UK, their work includes a clinic in London for refugees, sex workers, and people without fixed addresses. They provide resources on people’s rights to access healthcare in the UK.</p></div>
                            <div style={paragraphStyle}><p>They are primarily based and working out of London. A helpful guide to accessing NHS health care can be found <Link to="https://www.doctorsoftheworld.org.uk/wp-content/uploads/2018/11/A_Short_Guide_to_Access_to_NHS_Health_Care_for_Migrants_JCWI_DOTW.pdf">HERE.</Link></p></div>

                            <Link to="https://www.london.gov.uk/what-we-do/communities/migrants-and-refugees/migrant-health" style={linkStyle}><h3>London Assembly</h3></Link>
                            <div style={paragraphStyle}><p>Resource provided by the City of London to indicate give migrants a brief overview of what types of care they are entitled to. Most of this information is not exclusive to London, except for where specific locations are mentioned.</p></div>
                        </Row>

                        <Row>
                            <h2><b>Scotland</b></h2>

                            <Link to="http://www.migrationscotland.org.uk/" style={linkStyle}><h3>Migration Scotland</h3></Link>
                            <div style={paragraphStyle}><p>Migration Scotland is a website provided by COSLA’s Migration, Population and Diversity team. COSLA a group of represntatives from Scottish local authorities. They are part of a network as a way of providing Scotland as place where migrants are welcome.</p></div>
                            <div style={paragraphStyle}><p>Migration Scotland contains information on a variety of entitlements migrants in Scotland are entitled to. They have a section specifically on accessing NHS healthcare here.  Some documents provided by Migration Scotland are aimed at those providing services, however you may find it beneficial to browse these documents.</p></div>
                            <div style={paragraphStyle}><p>Their section on migrant entitlement for Scotland's NHS service are located <Link to="http://www.migrationscotland.org.uk/migrants-rights-entitlements/eligibility-other-publicly-funded-services/4-10-nhs-treatment">HERE.</Link></p></div>



                        </Row>

                        <Row>
                            <h2><b>Northern Irleand</b></h2>

                            <Link to="https://www.abcmigrant.co.uk/health-care/" style={linkStyle}><h3>Migrant Support Service: Health Care</h3></Link>
                            <div style={paragraphStyle}><p>The Migrant Support Service is a Northern Ireland based charity with information valuable to migrants residing in Northern Ireland. Their page on health care provides an overview of services and rights entitled to migrants, including links and phone numbers.</p></div>

                            <Link to="https://www.familysupportni.gov.uk/Service/4867/ethnic-minority-support/northern-ireland-new-entrant-service-nines--belfast-trust" style={linkStyle}><h3>Northern Ireland New Entrant Service</h3></Link>
                            <div style={paragraphStyle}><p>A service provided by the Belfast Health and Social Care Trust to provide a nurse-led service for new migrants and vulnurable people within Northern Ireland.</p></div>
                            <div style={paragraphStyle}><p>Health screening is specially developed for support in registering with GPs, health education, and health screening for health problems prevalent within the targeted groups.</p></div>

                        </Row>


                    </Col>
                </Row>
            </Col>

            <Col xs={0} md={1} ></Col>
        </Row>

        </Container>
        </Layout>
    )
}

export default ResourcesPage