import React from "react";
import { NavLink } from "react-router-dom";

const NotAuth = props => {
  return (
    <p>
      you are not logged in{" "}
      <NavLink className="default" to="login">
        Login
      </NavLink>
    </p>
  );
};

export default NotAuth;
