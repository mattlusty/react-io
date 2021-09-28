import React, { Component } from "react";
import "../styles/css/client-list.css";
import Pagination from "./pagination";

class ClientListTableControls extends Component {
  render() {
    return (
      <div className="table-controls">
        <div className="action delete flex-center-v">Delete</div>
        <div className="action relocate flex-center-v">Reallocate</div>
        <div className="space flex-center-v"></div>
        <Pagination
          itemsCount={this.props.itemsCount}
          pageSize={this.props.pageSize}
          pagesCount={this.props.pagesCount}
          currentPage={this.props.currentPage}
          pages={this.props.pages}
          onPageChange={this.props.onPageChange}
        />
      </div>
    );
  }
}

export default ClientListTableControls;
