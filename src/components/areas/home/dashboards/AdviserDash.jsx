import React, { Component } from "react";
// Styles
import "../../../../styles/css/AdviserDash.css";
// Components
import Icon from "../../../Icon";

class AdviserDash extends Component {
  state = {
    addWizardOpen: false,
  };

  handleAddAdviser = () => {
    console.log("CLAKK");
    this.setState({ addWizardOpen: !this.state.addWizardOpen });
  };

  render() {
    let blur = this.state.addWizardOpen ? "blur" : "";
    let open = this.state.addWizardOpen ? "open" : "";

    return (
      <React.Fragment>
        <div className={`AdviserDash ${blur}`}>
          <div className="adviserDash card">
            <section>
              <div className="headerStrip">
                <h1>Adviser Dashboard</h1>
                <button onClick={this.handleAddAdviser}>+ Adviser</button>
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
        <div className={`AddAdviserWizard ${open}`}>
          <div className="addAdviserWizard card">
            <div className="headerStrip" style={{ color: "#1a98a1" }}>
              <h1>Add Adviser</h1>

              <Icon type="expand" name="times" onClick={this.handleAddAdviser} />
            </div>
            <div className="content">enter details here</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdviserDash;
