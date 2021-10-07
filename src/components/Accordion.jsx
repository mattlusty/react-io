import React, { Component, createRef } from "react";
//
import "../styles/css/Accordion.css";
//
import Item from "./Item";

class AccordionMenu extends Component {
  myRef = React.createRef();

  handleScroll = (e) => {
    var e = e;
    console.log("EVENT", e);
    // console.log(this.myRef);

    var scrollTop = this.myRef.current.scrollTop;
    var scrollHeight = this.myRef.current.scrollHeight;
    var height = this.myRef.current.offsetHeight;
    var delta = e.wheelDelta;
    var up = delta > 0;

    // console.log({
    //   scrollTop,
    //   scrollHeight,
    //   height,
    //   delta,
    //   up,
    // });

    if (!up && -delta > scrollHeight - height - scrollTop) {
      console.log("here");
      // Scrolling down, but this will take us past the bottom.
      this.myRef.current.scrollTop = scrollHeight;
      return this.prevent(e);
    } else if (up && delta > scrollTop) {
      console.log("there");
      // Scrolling up, but this will take us past the top.
      this.myRef.current.scrollTop = 0;
      return this.prevent(e);
    }
  };

  prevent = (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.returnValue = false;
    return false;
  };

  componentDidMount() {
    this.myRef.current.addEventListener("wheel", this.handleScroll);
  }

  render() {
    return (
      <div className="Accordion" ref={this.myRef}>
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
            url: "/dashboards/adviser",
            size: "1.5rem",
          },
          {
            label: "Organiser",
            content: [],
            icon: "calendar",
            url: "/dashboards/organiser",
          },
          {
            label: "Admin",
            icon: "user2",
            url: "/dashboards/admin",
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
            url: "/recent-items/worked-on-items",
          },
          {
            label: "Document Queue",
            url: "/recent-items/document-queue",
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
            url: "/library/my-documents",
            content: [],
          },
          {
            label: "Documents",
            icon: "documents",
            url: "/library/documents",
            content: [],
          },
        ],
      },
      {
        label: "Uploads",
        icon: "upload",
        url: "/uploads",
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
        url: "/adviser-workplace/clients",
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
        url: "/adviser-workplace/plans",
        size: "1.5rem",
      },
      {
        label: "Sales",
        content: [],
        icon: "sales2",
        url: "/adviser-workplace/sales",
        size: "1.5rem",
      },
      {
        label: "Accounts",
        content: [],
        icon: "A",
        url: "/adviser-workplace/accounts",
      },
      {
        label: "Opportunities",
        content: [],
        icon: "O",
        url: "/adviser-workplace/opportunities",
      },
      {
        label: "Fund Analysis",
        content: [],
        icon: "moneySearch2",
        url: "/adviser-workplace/fund-analysis",
        size: "1.5rem",
      },
      {
        label: "Communication",
        content: [],
        size: "1.6rem",
        icon: "megaphone2",
        url: "/adviser-workplace/communication",
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
        url: "/income/provider-statements",
        content: [],
      },
      {
        label: "Cash Receipts",
        icon: "receipt",
        url: "/income/cash-receipts",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Introducers",
        icon: "handshake3",
        url: "/income/introducers",
        size: "2rem",
        content: [],
      },
      {
        label: "Users",
        icon: "users",
        url: "/income/users",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Clients",
        icon: "user2",
        url: "/income/clients",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Adviser",
        icon: "user",
        url: "/income/advisers",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Administration",
        icon: "cog2",
        url: "/income/administration",
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
        url: "xxx",
        size: "1.7rem",
        content: [],
      },
      {
        label: "Advisers",
        icon: "users",
        url: "xxx",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Complaints",
        icon: "sadFace2",
        url: "xxx",
        size: "1.4rem",
        content: [],
      },
      {
        label: "Breaches",
        icon: "complaintBubble2",
        url: "xxx",
        size: "1.5rem",
        content: [],
      },
      {
        label: "T&C Coaches",
        icon: "dot",
        url: "xxx",
        content: [],
      },
      {
        label: "Author",
        icon: "pencil",
        url: "xxx",
        content: [],
      },
      {
        label: "Event List",
        icon: "dot2",
        url: "xxx",
        content: [],
      },
      {
        label: "Administration",
        icon: "cog2",
        url: "xxx",
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
        url: "xxx",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Organisation",
        icon: "organisation",
        url: "xxx",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Group Reference Data",
        icon: "dot",
        url: "xxx",
        content: [],
      },
      {
        label: "Security",
        icon: "security",
        url: "xxx",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Settings",
        icon: "cog2",
        url: "xxx",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Documents",
        icon: "documents",
        url: "xxx",
        content: [],
      },
      {
        label: "Automation",
        icon: "robot",
        url: "xxx",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Templates",
        icon: "dottedSquare",
        url: "xxx",
        size: "1.5rem",
        content: [],
      },
      {
        label: "Workflows",
        icon: "arrowLoop",
        url: "xxx",
        size: "1.6rem",
        content: [],
      },
      {
        label: "Document Designer",
        icon: "D",
        url: "xxx",
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
        url: "xxx",
        size: "1.5rem",
        content: [
          {
            label: "My Tasks",
            url: "xxx",
            content: [],
          },
          {
            label: "Queue Tasks",
            url: "xxx",
            content: [],
          },
          {
            label: "Activity Search",
            url: "xxx",
            content: [],
          },
          {
            label: "Orphan Calls",
            url: "xxx",
            content: [],
          },
          {
            label: "Orphan Emails",
            url: "xxx",
            content: [],
          },
        ],
      },
      {
        label: "Diary",
        icon: "calendar",
        url: "xxx",
        content: [],
      },
      {
        label: "My Time",
        icon: "clock",
        url: "xxx",
        content: [],
      },
    ],
  },
  {
    label: "MI Reports",
    icon: "report2",
    url: "xxx",
    size: "1.5rem",
    content: [],
  },
  {
    label: "iO Store",
    icon: "puzzle3",
    url: "xxx",
    size: "1.5rem",
    content: [],
  },
];
