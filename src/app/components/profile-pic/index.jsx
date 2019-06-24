import React from "react";
import Aux from "../../containers/hoc";

import "./profile-pic.scss";

const ProfilePic = props => {
  return (
    <Aux>
      <div className="pic">
        <img src={props.pic} alt="" />
      </div>
      <div className="icon">
        <img src={props.icon} alt="" />
      </div>
    </Aux>
  );
};

export default ProfilePic;
