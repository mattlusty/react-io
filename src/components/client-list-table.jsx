import React, { Component } from "react";
import "../styles/css/client-list.css";

class ClientListTable extends Component {
  render() {
    return (
      <div className="client-list">
        <table>
          <thead>
            <tr>
              <th className="checker">
                <input type="checkbox" />
              </th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Middle Name</th>
              <th>Primary Ref</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Adviser</th>
              <th>Credited Group</th>
            </tr>
          </thead>
          <tbody>
            {this.props.pageClients.map((client) => {
              return (
                <tr key={Math.random()}>
                  <td className="checker">
                    <input type="checkbox" />
                  </td>
                  <td>{client.firstName}</td>
                  <td>{client.lastName}</td>
                  <td>{client.middleName}</td>
                  <td>{client.ref}</td>
                  <td>{client.email}</td>
                  <td>{client.dob}</td>
                  <td>{client.adviser}</td>
                  <td>{client.creditedGroup}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ClientListTable;
