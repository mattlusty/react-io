import React, { Component } from "react";
import "../styles/css/client-list.css";
import Pagination from "./pagination";
import { range } from "../scripts/utils.js";

class ClientList extends Component {
  state = {
    itemsCount: 35,
    pageSize: 5,
    currentPage: 2,
  };

  constructor(props) {
    super(props);
    this.state.pages = this.getPages(this.state.itemsCount, this.state.pageSize);
    this.state.pagesCount = this.state.pages.length;
  }

  getPages = (itemsCount, pageSize) => {
    // this.pagesCount = this.state.itemsCount / this.state.pageSize;
    // this.pages = range(1, this.pagesCount);
    // this.pagesCount = pages.length;
    let pagesCountDecimal = itemsCount / pageSize;
    let pages = range(1, pagesCountDecimal);
    // let pagesCount = pages.length;
    return pages;
  };

  handlePageChange = (page) => {
    console.log("PAGE: ", page);
    if (page === 0 || page > this.state.pagesCount || page === ". . .") {
      return;
    }
    this.setState({ currentPage: page });
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
            {clients.map((client) => {
              return (
                <tr key={client.ref}>
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

// Fetch Data from API

let clients = [
  {
    ref: 9998388,
    firstName: "Tony",
    lastName: "Iona-phillapioni",
    middleName: "Daisy",
    dob: "19/01/2000",
    email: "tonyioniphilipioni@dingdandongo.com",
    adviser: "Richard Smith",
    creditedGroup: "Opal",
  },
  {
    ref: 7762429,
    firstName: "Janey",
    lastName: "Louise",
    middleName: "Meek",
    dob: "18/01/1987",
    email: "janey@gmail.com",
    adviser: "Richard Smith",
    creditedGroup: "Opal",
  },
  {
    ref: 1164993,
    firstName: "Bob",
    lastName: "Dylan",
    middleName: "Bobby",
    dob: "12/12/1950",
    email: "bobby@gmail.com",
    adviser: "Sue Davies",
    creditedGroup: "Opal",
  },
  {
    ref: 7288523,
    firstName: "Enola",
    lastName: "Holmes",
    middleName: "Fiona",
    dob: "18/04/1999",
    email: "enola@gmail.com",
    adviser: "Richard Smith",
    creditedGroup: "Opal",
  },
  {
    ref: 74837165,
    firstName: "Derrick",
    lastName: "Hayes",
    middleName: "Junior",
    dob: "09/03/1989",
    email: "hayes@gmail.com",
    adviser: "Richard Smith",
    creditedGroup: "Opal",
  },
  {
    ref: 7726432,
    firstName: "Sonny",
    lastName: "Reeves",
    middleName: "Jim",
    dob: "03/05/1990",
    email: "sonny@gmail.com",
    adviser: "Sue Davies",
    creditedGroup: "Opal",
  },
];
