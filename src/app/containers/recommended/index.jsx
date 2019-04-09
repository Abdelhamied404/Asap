import React, { useEffect } from "react";
import Doctor from "../../components/doctor";
import { connect } from "react-redux";
import { getRecommended } from "../../../actions/doctor";
import "./recommended.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    return list.map(doctor => <Doctor {...doctor} key={doctor.username} />);
  } else if (props.loaded === 0) {
    return <CircularProgress />;
  } else {
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
