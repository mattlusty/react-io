import React, { Component } from "react";
//
import "../styles/css/Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        {widgets.map((widget) => {
          return (
            <div key={Math.random()} className="card">
              <section>
                <div className="headerStrip">
                  <h1>{widget.title}</h1>
                </div>
                <div className="content">content here</div>
              </section>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Dashboard;

// Fetch Data from API

let widgets = [
  {
    title: "My Recent Clients",
    content: [{ name: "Jason" }, { name: "Brian" }, { name: "Eric" }, { name: "David" }],
  },
  {
    title: "My Tasks for Today",
    content: [{ name: "Do that" }, { name: "Do this" }, { name: "Then that" }, { name: "Then those" }],
  },
  {
    title: "My Target Income",
    content: [{ name: "Bill Gates" }, { name: "Elon Musk" }, { name: "Jeff Basos" }, { name: "Fred" }],
  },
  {
    title: "My Open Opportunities",
    content: [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }],
  },
];
