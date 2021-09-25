import React, { Component } from "react";
import "../styles/css/client-list.css";
import Pagination from "./pagination";
import { range } from "../scripts/utils.js";
import clients from "../data/clients.js";

class ClientList extends Component {
  state = {
    itemsCount: clients.length,
    pageSize: 8,
    currentPage: 1,
  };

  constructor(props) {
    super(props);
    this.state.pages = this.getPages(this.state.itemsCount, this.state.pageSize);
    this.state.pagesCount = this.state.pages.length;
    this.state.pageClients = this.getPageClients(this.state.currentPage);
  }

  getPageClients = (page) => {
    let startClient = (page - 1) * this.state.pageSize;
    let endClient = startClient + this.state.pageSize;
    return clients.slice(startClient, endClient);
  };

  getPages = (itemsCount, pageSize) => {
    let fullPagesCount = Math.trunc(itemsCount / pageSize);
    let itemsRemainder = itemsCount % pageSize;
    let pagesCount = itemsRemainder ? fullPagesCount + 1 : fullPagesCount;
    let pages = range(1, pagesCount);
    return pages;
  };

  handlePageChange = (page) => {
    console.log("this.state.pagesCount: ", this.state.pagesCount);
    console.log("page: ", page);
    if (page === 0 || page > this.state.pagesCount || page === ". . .") {
      return;
    }
    console.log("here");
    this.setState({ currentPage: page });
    this.setState({ pageClients: this.getPageClients(page) });
    console.log("set pageClients: ", this.getPageClients(page));
  };

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
            {this.state.pageClients.map((client) => {
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
        <div className="table-controls">
          <div className="action delete flex-center-v">Delete</div>
          <div className="action relocate flex-center-v">Reallocate</div>
          <div className="space flex-center-v"></div>
          <Pagination
            itemsCount={this.state.itemsCount}
            pageSize={this.state.pageSize}
            pagesCount={this.state.pagesCount}
            currentPage={this.state.currentPage}
            pages={this.state.pages}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default ClientList;
