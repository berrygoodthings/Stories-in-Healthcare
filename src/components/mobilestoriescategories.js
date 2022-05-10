import React from "react"
import { Dropdown } from "react-bootstrap"

const MobileStoryCategory =({}) => {
    console.log("category")
    return(
<Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{background:"#9ADDEC", color:"black", minWidth:"100%"}}>
          Categories
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/stories/mentalhealth">Mental Health</Dropdown.Item>
          
          <Dropdown.Item href="/stories/health">Health</Dropdown.Item>
          <Dropdown.Item href="/stories/ageing">-Ageing</Dropdown.Item>
          <Dropdown.Item href="/stories/respiratory">-Respiratory</Dropdown.Item>
          <Dropdown.Item href="/stories/heart">-Heart</Dropdown.Item>

          <Dropdown.Item href="/stories/children">Children</Dropdown.Item>
          <Dropdown.Item href="/stories/primarycare">Primary Care</Dropdown.Item>
          <Dropdown.Item href="/stories/secondarycare">Secondary Care</Dropdown.Item>
          <Dropdown.Item href="/stories/hospital">Hospital</Dropdown.Item>
          <Dropdown.Item href="/stories/womenshealth">Women's Health</Dropdown.Item>
          <Dropdown.Item href="/stories/sexualhealth">Sexual Health</Dropdown.Item>

        </Dropdown.Menu>
    </Dropdown>)
}

export default MobileStoryCategory
