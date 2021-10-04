import React, { Component } from "react";
import "../styles/css/Client.css";

class Client extends Component {
  render() {
    return (
      <div className="Client card">
        <section>
          <div className="headerStrip">
            <h1>{client.name}</h1>
          </div>
          <div className="content">
            <ul>
              <li>DOB: {client.dob}</li>
              <li>Email: {client.email}</li>
              <li>Adviser: {client.adviser}</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Client;

// Fetch Data from API

let client = {
  name: "Tony Iony",
  dob: "19/01/2000",
  email: "tony@gmail.com",
  adviser: "Richard Smith",
};
