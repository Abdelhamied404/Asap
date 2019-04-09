import React, { useEffect } from "react";

import Section from "../../components/section";
import { getSections } from "../../../actions/section";
import "./sections.scss";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const Sections = props => {
  // component did mount alt
  useEffect(props.getSections, []);

  return (
    <div className="sections">
      <div className="title">Specialities</div>
      <div className="specialities">{list_sections(props)}</div>
    </div>
  );
};

const list_sections = props => {
  if (props.loaded === 1) {
    const list = props.sections.data;
    return list.map(section => <Section {...section} key={section.id} />);
  } else if (props.loaded === 0) {
    return <CircularProgress />;
  } else {
    return (
      <p>
        can't load sections
        <br /> <small>please make sure you are connect to internet</small>
      </p>
    );
  }
};

const mapStateToProps = ({ section }) => ({ ...section });
const mapDispatchToProps = dispatch => {
  return {
    getSections: () => dispatch(getSections())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sections);
