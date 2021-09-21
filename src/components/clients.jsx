import React, { Component } from 'react'
import "../styles/css/clients.css";
import InputItem from './input-item';
import ClientList from './client-list';

class Clients extends Component {
  state =
  {}

  handleChange = (event) => {
    this.setState({value:event.target.value})
  }

  render() {
    return (
      <div className="clients">
        <div className="filters">
          <div className="title">Client Search Filters</div>
          <div className="content">
            <form>
              <div className="group2">
                <div className="group personal">
                  <InputItem name="firstName" label="First Name"/>
                  <InputItem name="middleName" label="Middle Name"/>
                  <InputItem name="lastName" label="Last Name"/>
                </div>
                <div className="group corporate">
                  <InputItem name="corporateName" label="Corporate Name"/>
                </div>
              </div>  
              <div className="group2">
                <div className="group reference">
                  <InputItem name="primeRef" label="Primary Reference"/>
                </div>
                <div className="group otherPersonal">
                  <InputItem name="email" label="Email"/>
                  <InputItem name="phone" label="Phone Number"/>
                  <InputItem name="postcode" label="Post Code"/>
                </div>
              </div>
              <div className="group2">
                <div className="group servicing">
                  <InputItem name="adviser" label="Adviser"/>
                  <InputItem name="serviceStatus" label="Service Status"/>
                  <InputItem name="organisationalUnit" label="Organisational Unit"/>
                  <InputItem name="creditedGroup" label="Credited Group"/>
                </div>     
              </div>
            </form>
          </div>
        </div>   
        <ClientList/>
      </div>                    
    )
  }
}

export default Clients

// Fetch Data from API

let client =
{
  name: "Tony Iony",
  dob: "19/01/2000",
  email: "tony@gmail.com",
  adviser: "Richard Smith"
}