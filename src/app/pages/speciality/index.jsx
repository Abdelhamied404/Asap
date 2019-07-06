import React, { Component } from "react";
import Nav from "../../components/nav";
import { connect } from "react-redux";
import { auth } from "../../../actions/user";
import { Button } from "@material-ui/core";
import { ArrowBackRounded } from "@material-ui/icons";
import { getSections } from "../../../actions/section";
import Doctors from "../../containers/doctors";

import "./speciality.scss";

class Speciality extends Component {
  state = {
    name: this.props.match.params.name
  };

  componentDidMount() {
    this.props.auth();
    this.props.getSections();
    console.log("state", this.state);
    console.log("props", this.props);
  }

  render() {
    let doctors = null;
    let wrongSection = false;
    if (this.props.section.loaded === 1) {
      this.props.section.sections.data.forEach(section => {
        if (section.name === this.state.name) {
          doctors = section.doctors;
        }
      });
      if (!doctors) {
        wrongSection = true;
      }
    }
    return (
      <div className="page">
        <div className="speciality">
          <Nav profile isAuth={this.props.isAuth} user={this.props.user} />
          <div className="header">
            <Button>
              <ArrowBackRounded onClick={this.props.history.goBack} />
            </Button>
            <div className="title">
              <p>{this.state.name}</p>
            </div>
          </div>
          <div className="content">
            <Doctors doctors={doctors} isErr={wrongSection} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ user, section }) => ({ ...user, section });
const mapDispatchToProps = dispatch => {
  return {
    auth: (next) => dispatch(auth(next)), getSections: () => dispatch(getSections())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Speciality);
