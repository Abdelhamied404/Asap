import React from "react";

import { NavLink } from "react-router-dom";
import "./doctor.scss";

const Doctor = props => {
  return (
    <NavLink to={"user/" + props.username}>
      <div className="doctor">
        <img src={props.avatar} alt="" />
        <div className="name">
          <p>{props.name}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Doctor;
