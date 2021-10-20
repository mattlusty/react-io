import React, { Component } from "react";
// Styles
import "../../../../styles/css/AdviserDash.css";

class AdviserDash extends Component {
  render() {
    return (
      <div className="AdviserDash">
        <div className="adviserDash Client card">
          <section>
            <div className="headerStrip">
              <h1>Adviser Dashboard</h1>
              <button>+ Adviser</button>
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
        <div className="addAdviserWizard card"></div>
      </div>
    );
  }
}

export default AdviserDash;
