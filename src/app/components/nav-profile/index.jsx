import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";

import { logout } from "../../../actions/user";
import { connect } from "react-redux";

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
          <MenuItem onClick={this.props.logout} className="popup-menu-item">
            Logout
          </MenuItem>
        </Menu>
      </div>
    );
  };
  // not authanticated
  NotAuthView = () => {
    return (
      <div className="profile">
        <Button className="rounded-padd">
          <NavLink to="/login">login / signup</NavLink>
        </Button>
      </div>
    );
  };

  render() {
    return this.props.Auth ? this.AuthView(this.props) : this.NotAuthView();
  }
}

const mapStateToProps = ({ user }) => ({ ...user });
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavProfile);
