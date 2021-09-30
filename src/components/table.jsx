import React, { Component } from "react";
import "../styles/css/table.css";

class Table extends Component {
  render() {
    return (
      <div className="client-list">
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
            {this.props.pageClients.map((client) => {
              return (
                <tr key={Math.random()}>
                  <td className="checker">
                    <input type="checkbox" />
                  </td>
                  {this.props.fields.map((field) => {
                    return <th key={Math.random()}>{client[field.name]}</th>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
