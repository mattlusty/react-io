import React, { Component } from "react";
import { range } from "../scripts/utils.js";
import "../styles/css/card.css";
import clients from "../data/clients.js";
import InputItem from "./input-item";
import ClientListTable from "./client-list-table";
import ClientListTableControls from "./client-list-table-controls";

import Pagination from "./pagination";

class Clients extends Component {
  state = {
    itemsCount: clients.length,
    pageSize: 8,
    currentPage: 1,
  };

  constructor(props) {
    super(props);
    let pages = this.getPages(this.state.itemsCount, this.state.pageSize);
    this.state.pages = pages;
    this.state.pagesCount = pages.length;
    this.state.pageClients = this.getPageClients(this.state.currentPage);
  }

  // correct place
  getPageClients = (page) => {
    let startClient = (page - 1) * this.state.pageSize;
    let endClient = startClient + this.state.pageSize;
    return clients.slice(startClient, endClient);
  };

  // correct place
  getPages = (itemsCount, pageSize) => {
    let fullPagesCount = Math.trunc(itemsCount / pageSize);
    let itemsRemainder = itemsCount % pageSize;
    let pagesCount = itemsRemainder ? fullPagesCount + 1 : fullPagesCount;
    let pages = range(1, pagesCount);
    return pages;
  };

  // correct place
  handlePageChange = (page) => {
    if (page === 0 || page > this.state.pagesCount || page === ". . .") {
      return;
    }
    this.setState({ currentPage: page });
    this.setState({ pageClients: this.getPageClients(page) });
  };

  render() {
    return (
      <div className="card">
        <div className="section">
          <div className="strip">
            <div className="title">Client Search Filters</div>
          </div>
          <div className="content">
            <form>
              {inputs.map((block) => {
                return (
                  <div key={Math.random()} className="group2">
                    {block.map((group) => {
                      return (
                        <div key={Math.random()} className={`group ${group.groupName}`}>
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
          </div>
        </div>
        <div className="section">
          <div className="strip">
            <div className="title">Client Search Results</div>
            <Pagination
              itemsCount={this.state.itemsCount}
              pageSize={this.state.pageSize}
              pagesCount={this.state.pagesCount}
              currentPage={this.state.currentPage}
              pages={this.state.pages}
              onPageChange={this.handlePageChange}
            />
          </div>
          <div className="content">
            <ClientListTable pageClients={this.state.pageClients} />
            <ClientListTableControls
              itemsCount={this.state.itemsCount}
              pageSize={this.state.pageSize}
              pagesCount={this.state.pagesCount}
              currentPage={this.state.currentPage}
              pages={this.state.pages}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;

// Input fields

let inputs = [
  [
    {
      groupName: "names",
      fields: [
        {
          name: "firstName",
          label: "First Name",
        },
        {
          name: "lastNameName",
          label: "Last Name",
        },
        {
          name: "middleName",
          label: "Middle Name",
        },
      ],
    },
    {
      groupName: "corporate",
      fields: [
        {
          name: "corporateName",
          label: "Corporate Name",
        },
      ],
    },
  ],
  [
    {
      groupName: "reference",
      fields: [
        {
          name: "primeRef",
          label: "Primary Ref",
        },
      ],
    },
    {
      groupName: "contact",
      fields: [
        {
          name: "email",
          label: "Email",
        },
        {
          name: "phoneNo",
          label: "Phone Number",
        },
        {
          name: "postcode",
          label: "Postcode",
        },
      ],
    },
  ],
  [
    {
      groupName: "servicing",
      fields: [
        {
          name: "adviser",
          label: "Adviser",
        },
        {
          name: "serviceStatus",
          label: "Service Status",
        },
        {
          name: "organisationalUnit",
          label: "Organisational Unit",
        },
        {
          name: "creditedGroup",
          label: "Credited Group",
        },
      ],
    },
  ],
];
