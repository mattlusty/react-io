import React, { Component } from 'react';
import Item from './item';

class AccordionMenu extends Component {
  state = {
    content: [
      {
        label: "Home",
        icon: "home",
        content: [
          { 
            label: "Boop",
            content: [
              { 
                label: "Foo",
                content: [
                  
                ]
              },
              { 
                label: "Boo",
                content: [
                  
                ]
              }
            ]
          }
        ]
      }, 
      {
        label: "Admin",
        icon: "user",
        content: [
          { 
            label: "Beep",
            content: []
          }
        ]
      }
    ]
  }

  render () {
    return (
      <div className="accordion">
        {this.state.content.map((item)=>{
          return (
            <Item key={item.label} item={item} level={1} />
          )
        })}
      </div>  
  )}
}
  
export default AccordionMenu;




