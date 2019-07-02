import React, { Component } from "react";
import Nav from "../../components/nav";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { auth } from "../../../actions/user";
import ProfileCard from "../../containers/profile-card";
import { get } from "../../../actions/profile";
import { Button } from "@material-ui/core";

import "./profile.scss";
import ProfilePic from "../../components/profile-pic";
import { Checkbox } from "@material-ui/core";
import Dropzone from "react-dropzone";

class Profile extends Component {
  state = {
    isUser: false,
    isDoctor: false
  };
  componentDidMount() {
    this.props.auth();
  }

  componentDidUpdate() {
    let type = this.props.match.path.split("/")[1];

    // first check just to call it once
    if (!this.state.isUser && type === "user") {
      let username = this.props.match.params.name;
      this.props.getProfile(username);
      this.setState({ isUser: true });
    }
  }

  componentWillUnmount() {
    this.setState({ isUser: false });
  }

  render() {
    let type = this.props.match.path.split("/")[1];

    if (type === "profile") {
      return (
        <div className="page">
          <div className="profile">
            <Nav profile isAuth={this.props.isAuth} user={this.props.user} />
            <div className="settings">
              <div className="check">
                <Checkbox
                  checked={this.state.isDoctor}
                  onChange={() => { this.setState({ isDoctor: !this.state.isDoctor }); }}
                  value="isDoctor"
                />
              </div>
              <div className={"upload" + (!this.state.isDoctor ? " hide" : "")}>
                <p>upload your certificate pls</p>
                <input type="file" onChange={()=>{console.log("file uploaded")}}/>
              </div>
            </div>
          </div>
        </div>
      );

      // if it's not the current user's page
    } else if (type === "user") {
      return (
        <div className="page">
          <div className="profile">
            <Nav profile isAuth={this.props.isAuth} user={this.props.user} />
            <ProfileCard {...this.props.profile} />
            <div className="about">
              <div className="feedback">
                {/* feedback is not in database yet */}
                <p>
                  {this.props.profile.loaded
                    ? this.props.profile.user.doctor.rate
                    : ""}
                </p>
              </div>
              <div className="description">
                {/* this should be descripition but it's not in database yet */}
                <p>
                  {this.props.profile.loaded
                    ? this.props.profile.user.doctor.certificate
                    : ""}
                </p>
              </div>
            </div>

            <div className="actions">
              <div className="reserve-btn">
                <div className="input">
                  <NavLink to={this.props.profile.loaded ? "/reserve/" + this.props.profile.user.username : ""}>
                    <Button className="rounded main">Reserve</Button>
                  </NavLink>
                </div>
              </div>
              <div className="chat-btn">
                <div className="input">
                  <NavLink to="">
                    <Button className="rounded sec">Chat</Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = ({ user, profile }) => ({ ...user, profile });
const mapDispatchToProps = dispatch => {
  return {
    auth: () => dispatch(auth()),
    getProfile: username => dispatch(get(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
