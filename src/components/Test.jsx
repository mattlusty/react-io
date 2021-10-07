import React, { Component } from "react";
//
import "../styles/css/Test.css";
//
import GrowingInput from "./GrowingInput";

export default class Test extends Component {
  render() {
    return (
      <div className="Test">
        {/* columnGroup */}
        {/* columnGroup-item / rowGroup */}
        <div className="outer">
          {/* rowGroup-item */}
          <div className="innerWrapper">
            <div className="inner">Email</div>
            <GrowingInput />
          </div>
          <div className="innerWrapper">
            <div className="inner">Date of Birth</div>
            <GrowingInput />
          </div>
        </div>
        <div className="outer">
          <div className="innerWrapper">
            <div className="inner">Sex</div>
            <GrowingInput />
          </div>
          <div className="innerWrapper">
            <div className="inner">Nationality</div>
            <GrowingInput />
          </div>
        </div>

        <div className="outer">
          <div className="innerWrapper">
            <div className="inner">Date first joined adviser experience</div>
            <GrowingInput />
          </div>
          <div className="innerWrapper">
            <div className="inner">Name</div>
            <GrowingInput />
          </div>
        </div>
        <div className="outer">
          <div className="innerWrapper">
            <div className="inner">Last Name</div>
            <GrowingInput />
          </div>
          <div className="innerWrapper">
            <div className="inner">Age</div>
            <GrowingInput />
          </div>
        </div>
        <div className="outer">
          <div className="innerWrapper">
            <div className="inner">Favourite Animal</div>
            <GrowingInput />
          </div>
          <div className="innerWrapper">
            <div className="inner">Name of first car</div>
            <GrowingInput />
          </div>
        </div>
        <div className="outer">
          <div className="innerWrapper">
            <div className="inner">School</div>
            <GrowingInput />
          </div>
          <div className="innerWrapper">
            <div className="inner">Address</div>
            <GrowingInput />
          </div>
        </div>
      </div>
    );
  }
}
