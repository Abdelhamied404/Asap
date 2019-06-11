import React, { Component } from "react";
import Nav from "../../components/nav";
import { connect } from "react-redux";
import { auth } from "../../../actions/user";
import { Button } from "@material-ui/core";
import { ArrowBackRounded } from "@material-ui/icons";
import { getDoctors } from "../../../actions/section";
import Doctors from "../../containers/doctors";

class Speciality extends Component {
  state = {
    section_id: this.props.match.params.id
  };

  componentDidMount() {
    this.props.auth();
    this.props.getDoctors(this.props.match.params.id);
  }

  render() {
    return (
      <div className="page">
        <div className="speciality">
          <Nav profile isAuth={this.props.isAuth} user={this.props.user} />
          <div className="header">
            <Button>
              <ArrowBackRounded />
            </Button>
            <div className="title">
              <p>{this.state.section_id}</p>
            </div>
          </div>
          <div className="content">
            <Doctors
              doctors={
                this.props.loaded === 1
                  ? this.props.sections[this.state.section_id - 1].doctors
                  : null
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ user, section }) => ({ ...user, ...section });
const mapDispatchToProps = dispatch => {
  return {
    auth: () => dispatch(auth()),
    getDoctors: id => dispatch(getDoctors(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Speciality);
