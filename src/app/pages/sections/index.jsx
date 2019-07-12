import React, { Component } from "react";
import Nav from "../../components/nav";

import { auth } from "../../../actions/user";
import { connect } from "react-redux";

import Sections from "../../containers/sections";
import Footer from "../../components/footer";

class SectionsPage extends Component {
  state = {};

  componentDidMount() {
    this.props.auth();
  }

  render() {
    return (
      <div className="page">
        <div className="sections">
          <Nav profile isAuth={this.props.isAuth} user={this.props.user} />
          <Sections />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ ...user });
const mapDispatchToProps = dispatch => {
  return {
    auth: (next) => dispatch(auth(next))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionsPage);
