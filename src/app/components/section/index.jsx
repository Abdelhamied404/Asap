import React from "react";
import { NavLink } from "react-router-dom";
import "./section.scss";

const Section = props => {
  return (
    <NavLink className="section-link" to={"section/" + props.name}>
      <div className="section">
        <img src={props.image} alt="" />
        <div className="name">
          <p>{props.name}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Section;
