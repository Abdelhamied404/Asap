import React, { Component } from "react";
import Nav from "../../components/nav";
import { connect } from "react-redux";
import { auth } from "../../../actions/user";

import Posts from "../../containers/posts";
import Post from "../../components/post";
import NotAuth from "../../components/post/not-auth";

import "./community.scss";
import Chats from "../../containers/chats";

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
          <div className="container">
            <div className="posts-container">
              {this.props.isAuth === 1 ? (
                <Post new />
              ) : this.props.isAuth === -1 ? (
                <NotAuth />
              ) : null}
              <Posts />
            </div>
            <div className="chat-container">
              <Chats />
            </div>
          </div>
        </div>
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
)(Community);
