import React, { Component } from "react";
// Styles
import "../../../styles/css/Client.css";

class Opportunities extends Component {
  render() {
    return (
      <div className="Client card">
        <section>
          <div className="headerStrip">
            <h1>Opportunities</h1>
          </div>
          <div className="content">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Opportunities;
