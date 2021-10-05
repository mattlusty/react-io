import React, { Component } from "react";
//
import "../styles/css/Table.css";

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th className="checker">
              <input type="checkbox" />
            </th>
            {this.props.fields.map((field) => {
              return <th key={Math.random()}>{field.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((client) => {
            return (
              <tr key={Math.random()}>
                <td className="checker">
                  <input type="checkbox" />
                </td>
                {this.props.fields.map((field) => {
                  return <td key={Math.random()}>{client[field.name]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
