import React from "react";
import "./nav.scss";
import NavProfile from "../nav-profile";
import { NavLink } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Drawer from "../drawer";

const Nav = props => {
  return (
    <nav>
      <div className="nav-bar">
        <Drawer />
        <div className="logo">
          <NavLink to="/" exact>
            <img
              src={require("../../../assets/images/nav-logo.svg")}
              alt="logo"
            />
          </NavLink>
        </div>
        <menu>
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/community">community</NavLink>
            </li>
            <li>
              <NavLink to="/reserve">Reserve</NavLink>
            </li>
            <li>
              <NavLink to="/find">find</NavLink>
            </li>
          </ul>
        </menu>
      </div>
      {profile(props)}
    </nav>
  );
};

const profile = props => {
  if (props.profile) {
    if (props.isAuth === 1) {
      return <NavProfile Auth user={props.user} />;
    } else if (props.isAuth === 0) {
      return <CircularProgress />;
    } else {
      return <NavProfile />;
    }
  }
};

export default Nav;
