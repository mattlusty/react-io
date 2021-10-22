import React, { Component } from "react";
// Styles
import "../../../styles/css/Client.css";

class CashReceipts extends Component {
  render() {
    return (
      <div className="Client">
        <div className="client card">
          <section>
            <div className="headerStrip">
              <h1>XXXX</h1>
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
      </div>
    );
  }
}

export default CashReceipts;
