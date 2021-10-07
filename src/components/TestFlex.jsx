import React, { Component } from "react";
//
import "../styles/css/TestFlex.css";
//
import GrowingInput from "./GrowingInput";

export default class Test extends Component {
  render() {
    return (
      <div className="outerWrapper">
        {/* columnGroup */}
        <div className="column">
          {/* columnGroup-item / rowGroup */}
          <div className="outer">
            {/* rowGroup-item */}
            <div className="innerWrapper">
              <div className="inner">Email</div>
            </div>
            <div className="innerWrapper">
              <div className="inner">Date of Birth</div>
            </div>
          </div>
          <div className="outer">
            {/* rowGroup-item */}
            <div className="innerWrapper">
              <div className="inner">Email</div>
            </div>
            <div className="innerWrapper">
              <div className="inner">Date of Birth</div>
            </div>
          </div>
          <div className="outer">
            <div className="innerWrapper">
              <div className="inner">Sex</div>
            </div>
            <div className="innerWrapper">
              <div className="inner">Nationality</div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="outer">
            <div className="innerWrapper">
              <div className="inner">Date first joined adviser experience</div>
            </div>
            <div className="innerWrapper">
              <div className="inner">Name</div>
            </div>
          </div>
          <div className="outer">
            <div className="innerWrapper">
              <div className="inner">Last Name</div>
            </div>
            <div className="innerWrapper">
              <div className="inner">Age</div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="outer">
            <div className="innerWrapper">
              <div className="inner">Favourite Animal</div>
            </div>
            <div className="innerWrapper">
              <div className="inner">First car</div>
            </div>
          </div>
          <div className="outer">
            <div className="innerWrapper">
              <div className="inner">School</div>
            </div>
            <div className="innerWrapper">
              <div className="inner">Address</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
