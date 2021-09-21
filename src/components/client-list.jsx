import React, { Component } from 'react'
import "../styles/css/client-list.css";

class ClistList extends Component {
  state =
  {}

  handleChange = (event) => {
    this.setState({value:event.target.value})
  }

  render() {
    return (
      <div className="client-list"> 
        <div className="title">Client Search Results</div>
        <div className="content"></div>
      </div>    
    )
  }
}

export default ClistList

// Fetch Data from API

let client =
{
  name: "Tony Iony",
  dob: "19/01/2000",
  email: "tony@gmail.com",
  adviser: "Richard Smith"
}