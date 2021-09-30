import React, { Component } from "react";
import { range } from "../scripts/utils.js";
import clients from "../data/clients.js";
import { tableFields, inputFields } from "../data/clientsTableFields.js";
//
import FilterInputs from "./filterInputs";
import Table from "./table";
import TableControls from "./tableControls";

class Clients extends Component {
  state = {
    pagination: {
      itemsCount: clients.length,
      pageSize: 8,
      currentPage: 1,
    },
  };

  constructor(props) {
    super(props);
    let { itemsCount, pageSize, currentPage } = this.state.pagination;
    this.state.pagination.pages = this.getPages(itemsCount, pageSize);
    this.state.pagination.pageClients = this.getPageClients(currentPage);
  }

  getPageClients = (page) => {
    let startClient = (page - 1) * this.state.pagination.pageSize;
    let endClient = startClient + this.state.pagination.pageSize;
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
    if (page === 0 || page > this.state.pagination.pages.length || page === ". . .") {
      return;
    }
    this.setState({
      pagination: { ...this.state.pagination, currentPage: page, pageClients: this.getPageClients(page) },
    });
  };

  render() {
    let { pagination } = this.state;
    return (
      <div className="card">
        <div className="section">
          <div className="strip">
            <div className="title">Client Search Filters</div>
          </div>
          <div className="content">
            <FilterInputs fields={inputFields} />
          </div>
        </div>
        <div className="section">
          <div className="strip">
            <div className="title">Client Search Results</div>
          </div>
          <div className="content">
            <Table pageClients={pagination.pageClients} fields={tableFields} />
            <TableControls pagination={pagination} onPageChange={this.handlePageChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
