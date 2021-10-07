import React, { Component } from "react";
//
import "../styles/css/FilterInputs.css";
//
import InputItem from "./InputItem";

class FilterInputs extends Component {
  render() {
    return (
      <form className="flex-spaced">
        {this.props.fields.map((block) => {
          return (
            <div key={Math.random()} className="columnGroup-item">
              {block.map((group) => {
                return (
                  <div key={Math.random()} className={`rowGroup ${group.groupName}`}>
                    {group.fields.map((field) => {
                      return <InputItem key={Math.random()} name={field.name} label={field.label} />;
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </form>
    );
  }
}

export default FilterInputs;
