import React from "react";
import ProfilePic from "../../components/profile-pic";

import "./profile-card.scss";

const ProfileCard = props => {
  if (props.loaded === 1) {
    // loaded
    let user = props.user;
    console.log(user);
    return (
      <div className="profile-card">
        <div className="profile-pic">
          <ProfilePic pic={user.avatar} icon={user.doctor.section.icon} />
        </div>
        <div className="info">
          <div className="name">
            <p>{user.name}</p>
          </div>
          <div className="country">
            <span>
              <img
                src={require("../../../assets/images/location icon.svg")}
                alt=""
              />
            </span>
            <p>{user.country}</p>
          </div>
          <div className="speciality">
            <span>
              <img
                src={require("../../../assets/images/speciality icon.svg")}
                alt=""
              />
            </span>
            <p>{user.doctor.section.name}</p>
          </div>
          <div className="rate">{rate(user.doctor.rate)}</div>
        </div>
      </div>
    );
  } else if (props.loaded === 0) {
    // loading
    return "loading";
  } else {
    // load error
    return "load error";
  }
};

const rate = num => {
  let render = [];

  for (let i = 0; i < 5; i++) {
    if (num > 0) {
      num--;
      render.push(
        <span key={i}>
          <img src={require("../../../assets/images/StarOn.svg")} alt="" />
        </span>
      );
    } else {
      render.push(
        <span key={i}>
          <img src={require("../../../assets/images/StarOff.svg")} alt="" />
        </span>
      );
    }
  }
  return render;
};

export default ProfileCard;
