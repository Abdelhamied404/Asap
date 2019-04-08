import React from "react";

import "./section.scss";

const Section = props => {
  return (
    <div className="section">
      <img src={props.image} alt="" />
      <div className="name">
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default Section;
