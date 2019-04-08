import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";

class NavProfile extends Component {
  state = { anchorEl: null };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const AuthView = (
      <div className="profile">
        {/* button */}
        <Button
          aria-owns={anchorEl ? "popup-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {/* profile */}
          <div className="name">{this.props.user.name}</div>
          <img src={this.props.user.avatar} alt="" />
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
    const NotAuthView = (
      <div className="profile">
        <Button>
          <NavLink to="/login">login</NavLink>
        </Button>
      </div>
    );

    return this.props.isAuth ? AuthView : NotAuthView;
  }
}

export default NavProfile;
