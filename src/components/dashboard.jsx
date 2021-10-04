import React, { Component } from "react";
//
import Card from "./Ycard";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        {cards.map((card) => {
          return <Card key={card.title} card={card} />;
        })}
      </React.Fragment>
    );
  }
}

export default Dashboard;

// Fetch Data from API

let cards = [
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
