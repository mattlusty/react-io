import React, { Component } from "react";
// Data
import clients from "../data/clients.js";
// Styles
import "../styles/css/Client.css";

class Client extends Component {
  render() {
    return (
      <div className="Client">
        <div className="client card">
          <section>
            <div className="headerStrip">
              <h1>{`${client.firstName} ${client.lastName}`}</h1>
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
      </div>
    );
  }
}

export default Client;

// Fetch Data from API

let client = clients[2];
