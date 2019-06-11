import React from "react";
import Doctor from "../../components/doctor";

const Doctors = props => {
  return (
    <div className="doctors">
      {props.doctors ? list_doctors(props.doctors) : "loading"}
    </div>
  );
};

const list_doctors = list =>
  list.map(doctor => <Doctor {...doctor} key={doctor.id} />);

export default Doctors;
