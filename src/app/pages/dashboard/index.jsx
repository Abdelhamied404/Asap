import React, { Component } from "react";
import Nav from "../../components/nav";

import "./dashboard.scss";
import Recommended from "../../containers/recommended";
import Sections from "../../containers/sections";
import { auth } from "../../../actions/user";
import { connect } from "react-redux";

class Dashboard extends Component {
  state = {};
  componentDidMount() {
    this.props.auth();
  }
  render() {
    return (
      <div className="page">
        <div className="dashboard">
          <Nav profile isAuth={this.props.isAuth} user={this.props.user} />
          <Recommended />
          <Sections />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ ...user });
const mapDispatchToProps = dispatch => {
  return {
    auth: () => dispatch(auth())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
