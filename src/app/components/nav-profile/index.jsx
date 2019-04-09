import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";
import { Fab } from "@material-ui/core";

class NavProfile extends Component {
  state = { anchorEl: null };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  /**
   * views
   */
  // if authanticated
  AuthView = props => {
    const { anchorEl } = this.state;
    return (
      <div className="profile">
        {/* button */}
        <Button
          className="rounded"
          aria-owns={anchorEl ? "popup-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {/* profile */}
          <div className="chip">
            <div className="name">{props.user.name}</div>
            <img src={props.user.avatar} alt="" />
          </div>
        </Button>
        {/* popup menu */}
        <Menu
          id="popup-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <NavLink to="/profile">
            <MenuItem className="popup-menu-item">Profile</MenuItem>
          </NavLink>
          <NavLink to="/settings">
            <MenuItem className="popup-menu-item">Settings</MenuItem>
          </NavLink>
          <MenuItem className="popup-menu-item">Logout</MenuItem>
        </Menu>
      </div>
    );
  };
  // not authanticated
  NotAuthView = () => {
    return (
      <div className="profile">
        <Button>
          <NavLink to="/login">login</NavLink>
        </Button>
      </div>
    );
  };

  render() {
    return this.props.isAuth ? this.AuthView(this.props) : this.NotAuthView();
  }
}

export default NavProfile;
