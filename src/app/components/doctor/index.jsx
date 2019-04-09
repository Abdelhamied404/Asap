import React from "react";

import { NavLink } from "react-router-dom";
import "./doctor.scss";

const Doctor = props => {
  return (
    <NavLink to={"user/" + props.user.username}>
      <div className="doctor">
        <img src={props.user.avatar} alt="" />
        <div className="name">
          <p>{props.user.name}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Doctor;
