import React, { Component } from "react";
import Nav from "../../components/nav";
import { connect } from "react-redux";
import { auth } from "../../../actions/user";

import "./community.scss";
import Posts from "../../containers/posts";

class Community extends Component {
  state = {};

  componentDidMount() {
    this.props.auth();
  }

  render() {
    return (
      <div className="page">
        <div className="community">
          <Nav profile isAuth={this.props.isAuth} user={this.props.user} />
          <Posts />
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
)(Community);
