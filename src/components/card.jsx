// Potential CSS className conflict -> clients.jsx / clients.css (or maybe this needs implementing there)

import React, { Component } from "react";
// import "../styles/css/card.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="strip"></div>
        <div className="title">{this.props.card.title}</div>
        <div className="content">
          <ul>
            {this.props.card.content.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;
