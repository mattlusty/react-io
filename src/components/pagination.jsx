import React, { Component } from "react";
import "../styles/css/pagination.css";
import MultiSelect from "./multiSelect";

class Pagination extends Component {
  getPageSelection = () => {
    let { pages, currentPage: c } = this.props.pagination;
    let n = pages.length;
    if (n <= 9) {
      return pages;
    } else {
      if (c <= 5) {
        return [1, 2, 3, 4, 5, 6, 7, ". . .", n];
      } else if (c <= n - 5) {
        return [1, ". . .", c - 2, c - 1, c, c + 1, c + 2, ". . .", n];
      } else {
        return [1, ". . .", n - 6, n - 5, n - 4, n - 3, n - 2, n - 1, n];
      }
    }
  };

  render() {
    let { currentPage } = this.props.pagination;
    let { onPageChange } = this.props;
    return (
      <div className="pagination">
        <div className="pageSize">
          <div>
            <MultiSelect />
            <label htmlFor="pageSize">Results per page</label>
          </div>
        </div>
        <div className="previous" onClick={() => onPageChange(currentPage - 1)}>
          <div>&lt;</div>
        </div>
        <div className="pages">
          {this.getPageSelection().map((page) => {
            return (
              <div
                key={Math.random()}
                className={`${currentPage === page ? "active" : ""}`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </div>
            );
          })}
        </div>
        <div className="next" onClick={() => onPageChange(currentPage + 1)}>
          <div>&gt;</div>
        </div>
      </div>
    );
  }
}

export default Pagination;
