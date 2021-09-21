import React, { Component } from 'react';
import "../styles/css/card.css";

class Card extends React.Component {
  render() { 
    return (
      <div className="card">
        <div className="title">{this.props.card.title}</div>
        <div className="content">
          <ul>
            {this.props.card.content.map((item)=>{
              return (
                <li>{item.name}</li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
 
export default Card;