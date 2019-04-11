import React, { Component } from "react";
import { List, ListItem, Drawer, Button } from "@material-ui/core";
import { Notes } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

import "./drawer.scss";

class SideNav extends Component {
  state = {
    open: false,
    items: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Community",
        link: "/community"
      },
      {
        text: "Reserve",
        link: "/reserve"
      },
      {
        text: "Find",
        link: "/find"
      }
    ]
  };

  toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const sideList = (
      <div className="side-list">
        <List>
          {this.state.items.map(item => (
            <NavLink key={item.text} to={item.link}>
              <ListItem button>{item.text}</ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    );
    return (
      <div className="drawer">
        <div className="toggle-nav">
          <Button className="small" onClick={this.toggleDrawer}>
            <Notes />
          </Button>
        </div>

        <Drawer open={this.state.open} onClose={this.toggleDrawer}>
          {sideList}
        </Drawer>
      </div>
    );
  }
}

export default SideNav;
