import React from "react";

import "./nav.scss";

const Nav = props => {
  return (
    <nav>
      <div className="nav-bar">
        <div className="logo">
          <img
            src={require("../../../assets/images/nav-logo.svg")}
            alt="logo"
          />
        </div>
        <menu>
          <ul>
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/community">Community</a>
            </li>
            <li>
              <a href="/Reserve">Reserve</a>
            </li>
            <li>
              <a href="/find">find</a>
            </li>
          </ul>
        </menu>
      </div>
      <div className="profile">
        <div className="name">{props.user.name}</div>
        <img src={props.user.avatar} alt="" />
      </div>
    </nav>
  );
};

export default Nav;
