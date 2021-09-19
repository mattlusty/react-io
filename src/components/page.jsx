import React, { Component } from 'react'

class Page extends Component {

  render() {
    return (
      <div className="page">
        <div className="container">
            <div className="card">
                <div className="title">My Recent Clients</div>
                <div className="content">
                    <ul>
                        <li>Money Penny</li>
                        <li>Ben Aflec</li>
                        <li>Billy Bob</li>
                        <li>Ross McKinley</li>
                    </ul>
                </div>
            </div>
            <div className="card">
                <div className="title">My Tasks for Today</div>
                <div className="content"></div>
            </div>
            <div className="card">
                <div className="title">My Target Income</div>
                <div className="content"></div>
            </div>
            <div className="card">
                <div className="title">My Open Opportunities</div>
                <div className="content"></div>
            </div>
            <div className="card">
                <div className="title">My Received Fee and Income</div>
                <div className="content"></div>
            </div>
            <div className="card">
                <div className="title">My Client's Plans</div>
                <div className="content"></div>
            </div>
        </div>
      </div>
    )
  }
}

export default Page