import React from "react";

export default function Search(){
    
  const [formData, setFormData] = React.useState(
    {
        firstName: "", 
        lastName: "", 
        email: "", 
        comments: "", 
        isFriendly: true,
        employment: ""
    }
)
  {/**handle search - google to see how to handle on enter */}
  function handleChange(event){

  }

  return(            
  <form className="d-flex" >
    <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        name="Search"
        className="me-2"
        value={formData.search}/>
    </form>
    )

} 