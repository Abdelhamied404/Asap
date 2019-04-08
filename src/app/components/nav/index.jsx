import React from "react";
import "./nav.scss";
import NavProfile from "../nav-profile";
import { NavLink } from "react-router-dom";

const Nav = props => {
  return (
    <nav>
      <div className="nav-bar">
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
            <li className="active">
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/community">community</NavLink>
            </li>
            <li>
              <NavLink to="/Reserve">Reserve</NavLink>
            </li>
            <li>
              <NavLink to="/find">find</NavLink>
            </li>
          </ul>
        </menu>
      </div>
      {props.profile ? <NavProfile isAuth user={props.user} /> : null}
    </nav>
  );
};

export default Nav;
