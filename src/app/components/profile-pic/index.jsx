import React from "react";
import Aux from "../../containers/hoc";

import "./profile-pic.scss";

const ProfilePic = props => {
  console.log(props);
  return (
    <Aux>
      {props.pic ? <div className="pic">
        <img src={props.pic} alt="" />
      </div> : ""}

      {props.avatar ? <div className="pic">
        <img src={props.avatar} alt="" />
      </div> : ""}

      {props.icon ? <div className="icon">
        <img src={props.icon} alt="" />
      </div> : ""}
      {props.name ? <div className="name"><p>{props.name}</p></div> : ""}

    </Aux>
  );
};

export default ProfilePic;
