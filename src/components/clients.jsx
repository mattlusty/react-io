import React, { Component } from "react";
import "../styles/css/card.css";
import InputItem from "./input-item";
import ClientList from "./client-list";

class Clients extends Component {
  state = {};

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="card">
        <div className="section">
          <div className="title">Client Search Filters</div>
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
          <div className="title">Client Search Results</div>
          <div className="content">
            <ClientList />
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
