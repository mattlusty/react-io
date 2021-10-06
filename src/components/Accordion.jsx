import React, { Component } from "react";
//
import "../styles/css/Accordion.css";
//
import Item from "./Item";

class AccordionMenu extends Component {
  state = {};

  render() {
    return (
      <div className="Accordion">
        {content.map((item) => {
          return <Item key={item.label} item={item} level={1} />;
        })}
      </div>
    );
  }
}

export default AccordionMenu;

let content = [
  {
    label: "Home",
    icon: "home",
    content: [
      {
        label: "Dashboards",
        icon: "dash",
        content: [
          {
            label: "Adviser",
            content: [],
            icon: "user",
            size: "1.5rem",
          },
          {
            label: "Organiser",
            content: [],
            icon: "calendar",
          },
          {
            label: "Admin",
            icon: "user2",
            content: [],
          },
        ],
      },
      {
        label: "Recent Items",
        icon: "clockArrow2",
        size: "1.7rem",
        content: [
          {
            label: "Worked on Items",
            content: [],
          },
          {
            label: "Document Queue",
            content: [],
          },
        ],
      },
      {
        label: "Library",
        icon: "book",
        size: "1.5rem",
        content: [
          {
            label: "My Documents",
            icon: "documents",
            content: [],
          },
          {
            label: "Documents",
            icon: "documents",
            content: [],
          },
        ],
      },
      {
        label: "Uploads",
        icon: "upload",
        content: [],
      },
    ],
  },
  {
    label: "Adviser Workplace",
    icon: "user",
    size: "1.5rem",
    content: [
      {
        label: "Clients",
        content: [],
        url: "/clients",
        icon: "user",
        size: "1.5rem",
      },
      {
        label: "Leads",
        content: [],
        url: "/client",
        icon: "user2",
        size: "1.5rem",
      },
      {
        label: "Plans",
        content: [],
        icon: "leaf",
        size: "1.5rem",
      },
      {
        label: "Sales",
        content: [],
        icon: "sales2",
        size: "1.5rem",
      },
      {
        label: "Accounts",
        content: [],
        icon: "A",
      },
      {
        label: "Opportunities",
        content: [],
        icon: "O",
      },
      {
        label: "Fund Analysis",
        content: [],
        icon: "moneySearch2",
        size: "1.5rem",
      },
      {
        label: "Communication",
        content: [],
        size: "1.6rem",
        icon: "megaphone2",
        //ize: "1.4rem",
      },
    ],
  },
  {
    label: "Income",
    icon: "pound",
    size: "1.5rem",
    content: [
      {
        label: "Provider Statements",
        icon: "S",
        content: [],
      },
      {
        label: "Cash Receipts",
        icon: "receipt",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Introducers",
        icon: "handshake3",
        size: "2rem",
        content: [],
      },
      {
        label: "Users",
        icon: "users",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Clients",
        icon: "user2",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Adviser",
        icon: "user",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Administration",
        icon: "cog2",
        size: "1.5rem",
        content: [],
      },
    ],
  },
  {
    label: "Compliance",
    icon: "shield",
    size: "1.5rem",
    content: [
      {
        label: "File Checking",
        icon: "fileCheck2",
        size: "1.7rem",
        content: [],
      },
      {
        label: "Advisers",
        icon: "users",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Complaints",
        icon: "sadFace2",
        size: "1.4rem",
        content: [],
      },
      {
        label: "Breaches",
        icon: "complaintBubble2",
        size: "1.5rem",
        content: [],
      },
      {
        label: "T&C Coaches",
        icon: "dot",
        content: [],
      },
      {
        label: "Author",
        icon: "pencil",
        content: [],
      },
      {
        label: "Event List",
        icon: "dot2",
        content: [],
      },
      {
        label: "Administration",
        icon: "cog2",
        size: "1.5rem",
        content: [],
      },
    ],
  },
  {
    label: "Administration",
    icon: "cog",
    size: "1.5rem",
    content: [
      {
        label: "Manage Users",
        icon: "user",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Organisation",
        icon: "organisation",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Group Reference Data",
        icon: "dot",
        content: [],
      },
      {
        label: "Security",
        icon: "security",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Settings",
        icon: "cog2",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Documents",
        icon: "documents",
        content: [],
      },
      {
        label: "Automation",
        icon: "robot",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Templates",
        icon: "dottedSquare",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Workflows",
        icon: "arrowLoop",
        size: "1.6rem",
        content: [],
      },
      {
        label: "Document Designer",
        icon: "D",
        content: [],
      },
    ],
  },
  {
    label: "Organiser",
    icon: "calendar",
    content: [
      {
        label: "Tasks",
        icon: "checklist",
        size: "1.5rem",
        content: [
          {
            label: "My Tasks",
            content: [],
          },
          {
            label: "Queue Tasks",
            content: [],
          },
          {
            label: "Activity Search",
            content: [],
          },
          {
            label: "Orphan Calls",
            content: [],
          },
          {
            label: "Orphan Emails",
            content: [],
          },
        ],
      },
      {
        label: "Diary",
        icon: "calendar",
        content: [],
      },
      {
        label: "My Time",
        icon: "clock",
        content: [],
      },
    ],
  },
  {
    label: "MI Reports",
    icon: "report2",
    size: "1.5rem",
    content: [],
  },
  {
    label: "iO Store",
    icon: "puzzle3",
    size: "1.5rem",
    content: [],
  },
];
