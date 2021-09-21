import React, { Component } from 'react'
import Dashboard from "./dashboard";
import "../styles/css/page.css";
import Clients from "./clients";


class Page extends Component {

  render() {
    return (
      <div className="page">
        <div className="container">
         <Clients/>
        </div>
      </div>
    )
  }
}

export default Page