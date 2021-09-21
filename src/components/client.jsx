import React, { Component } from 'react'
import "../styles/css/client.css";

class Client extends Component {

  render() {
    return (
      <div className="client">
        <div className="name">{client.name}</div>
        <div className="content">
          <ul>
            <li>DOB: {client.dob}</li>
            <li>Email: {client.email}</li>
            <li>Adviser: {client.adviser}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Client

// Fetch Data from API

let client =
{
  name: "Tony Iony",
  dob: "19/01/2000",
  email: "tony@gmail.com",
  adviser: "Richard Smith"
}