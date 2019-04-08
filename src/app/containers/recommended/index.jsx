import React from "react";
import Doctor from "../../components/doctor";

import "./recommended.scss";

const Recommended = props => {
  const doctors = [
    {
      name: "ahmed",
      avatar: "https://via.placeholder.com/150",
      username: "ahmed"
    },
    {
      name: "mohamed",
      avatar: "https://via.placeholder.com/150",
      username: "mohamed"
    },
    {
      name: "mona",
      avatar: "https://via.placeholder.com/150",
      username: "mona"
    },
    {
      name: "ali",
      avatar: "https://via.placeholder.com/150",
      username: "ali"
    }
  ];

  return (
    <div className="recommended">
      <div className="title">Recommended</div>
      <div className="doctors">{list_doctors(doctors)}</div>
    </div>
  );
};

const list_doctors = list => {
  return list.map(doctor => <Doctor {...doctor} key={doctor.username} />);
};

export default Recommended;
