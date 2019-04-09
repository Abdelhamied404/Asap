import React, { useEffect } from "react";
import Doctor from "../../components/doctor";
import { connect } from "react-redux";
import { getRecommended } from "../../../actions/doctor";
import "./recommended.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

const Recommended = props => {
  // component did mount alt
  useEffect(props.getRecommended, []);

  return (
    <div className="recommended">
      <div className="title">Recommended</div>
      <div className="doctors">{list_doctors(props)}</div>
    </div>
  );
};

const list_doctors = props => {
  if (props.loaded === 1) {
    const list = props.recommended.data;
    if (list.length === 0) {
      return <p>there is no doctors yet</p>;
    }
    return list.map(doctor => <Doctor {...doctor} key={doctor.id} />);
  } else if (props.loaded === 0) {
    return <CircularProgress />;
  } else {
    return (
      <p>
        can't load recommmended doctors
        <br /> <small>please make sure you are connect to internet</small>
      </p>
    );
  }
};

const mapStateToProps = ({ doctor }) => ({ ...doctor });
const mapDispatchToProps = dispatch => {
  return {
    getRecommended: () => dispatch(getRecommended())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommended);
