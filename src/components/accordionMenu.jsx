import React, { Component } from 'react';
import Item from './item';

class AccordionMenu extends Component {
  state = {
  
  }

  render () {
    return (
      <div className="accordion">
        {content.map((item)=>{
          return (
            <Item key={item.label} item={item} level={1} />
          )
        })}
      </div>  
  )}
}
  
export default AccordionMenu;

let content = [
  {
    label: "Home",
    icon: "home",
    content: [
      { 
        label: "Dashboards",
        content: [
          { 
            label: "Adviser",
            content: [ 
            ]
          },
          { 
            label: "Organiser",
            content: [ 
            ]
          },
          { 
            label: "Admin",
            content: [ 
            ]
          }
        ]
      },
      { 
        label: "Recent Items",
        content: [ 
          { 
            label: "Worked on Items",
            content: [ 
            ]
          },
          { 
            label: "Document Queue",
            content: [ 
            ]
          }
        ]
      },
      { 
        label: "Library",
        content: [ 
          { 
            label: "My Documents",
            content: [ 
            ]
          },
          { 
            label: "Documents",
            content: [ 
            ]
          }
        ]
      },
      { 
        label: "Uploads",
        content: [ 
        ]
      }
    ]
  }, 
  {
    label: "Adviser Workplace",
    icon: "user",
    content: [
      { 
        label: "Clients",
        content: []
      },
      { 
        label: "Leads",
        content: [ 
        ]
      },
      { 
        label: "Sales",
        content: [ 
        ]
      },
      { 
        label: "Accounts",
        content: [ 
        ]
      },
      { 
        label: "Opportunities",
        content: [ 
        ]
      },
      { 
        label: "Fund Analysis",
        content: [ 
        ]
      },
      { 
        label: "Communication",
        content: [ 
        ]
      }
    ]
  },
  { 
    label: "Income",
    icon: "pound",
    content: [ 
      { 
        label: "Provider Statements",
        content: [ 
        ]
      },
      { 
        label: "Cash Receipts",
        content: [ 
        ]
      },
      { 
        label: "Introducers",
        content: [ 
        ]
      },
      { 
        label: "Users",
        content: [ 
        ]
      },
      { 
        label: "Clients",
        content: [ 
        ]
      },
      { 
        label: "Adviser",
        content: [ 
        ]
      },
      { 
        label: "Administration",
        content: [ 
        ]
      }
    ]
  },
  { 
    label: "Compliance",
    content: [ 
      { 
        label: "File Checking",
        content: [ 
        ]
      },
      { 
        label: "Advisers",
        content: [ 
        ]
      },
      { 
        label: "Complaints",
        content: [ 
        ]
      },
      { 
        label: "Breaches",
        content: [ 
        ]
      },
      { 
        label: "T&C Coaches",
        content: [ 
        ]
      },
      { 
        label: "Author",
        content: [ 
        ]
      },
      { 
        label: "Event List",
        content: [ 
        ]
      },
      { 
        label: "Administration",
        content: [ 
        ]
      }
    ]
  },
  { 
    label: "Administration",
    content: [ 
      { 
        label: "Manage Users",
        content: [ 
        ]
      },
      { 
        label: "Oranisation",
        content: [ 
        ]
      },
      { 
        label: "Group Reference Data",
        content: [ 
        ]
      },
      { 
        label: "Security",
        content: [ 
        ]
      },
      { 
        label: "Settings",
        content: [ 
        ]
      },
      { 
        label: "Documents",
        content: [ 
        ]
      },
      { 
        label: "Automation",
        content: [ 
        ]
      },
      { 
        label: "Templates",
        content: [ 
        ]
      },
      { 
        label: "Workflows",
        content: [ 
        ]
      },
      { 
        label: "Document Designer",
        content: [ 
        ]
      }
    ]
  },
  { 
    label: "Organiser",
    content: [ 
      { 
        label: "Tasks",
        content: [ 
          { 
            label: "My Tasks",
            content: [ 
            ]
          },
          { 
            label: "Queue Tasks",
            content: [ 
            ]
          },
          { 
            label: "Activity Search",
            content: [ 
            ]
          },
          { 
            label: "Orphan Calls",
            content: [ 
            ]
          },
          { 
            label: "Orphan Emails",
            content: [ 
            ]
          }
        ]
      },
      { 
        label: "Diary",
        content: [ 
        ]
      },
      { 
        label: "My Time",
        content: [ 
        ]
      }
    ]
  },
  { 
    label: "MI Reports",
    content: [ 
    ]
  },
  { 
    label: "iO Store",
    content: [ 
    ]
  }
]

let item = 
{ 
  label: "Boo",
  content: [ 
  ]
}




