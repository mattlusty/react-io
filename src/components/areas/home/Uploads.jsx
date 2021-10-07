import React, { Component } from "react";
// Styles
import "../../../styles/css/Client.css";

class Uploads extends Component {
  render() {
    return (
      <div className="Client card">
        <section>
          <div className="headerStrip">
            <h1>Uploads</h1>
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

export default Uploads;
