import React, { Component } from "react";
import Nav from "../../components/nav";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { auth, changePic } from "../../../actions/user";
import ProfileCard from "../../containers/profile-card";
import { get } from "../../../actions/profile";
import { Button } from "@material-ui/core";
import { chat } from '../../../actions/appointment';

import "./profile.scss";
import { Checkbox } from "@material-ui/core";
import FileDrop from 'react-file-drop';
import ProfilePic from "../../components/profile-pic";
import { registerDoctor } from "../../../actions/doctor";


class Profile extends Component {
  state = {
    isUser: false,
    isDoctor: false,
    file_names: [],
    files: []
  };
  componentDidMount() {
    this.props.auth(this.afterAuth.bind(this));
  }

  afterAuth() {
    if (this.props.user.doctor) {
      this.setState({ file_names: [this.props.user.doctor.certificate.split("/").slice(-1)[0]] });
      this.setState({ isDoctor: true });
    }
    else {
      this.setState({ file_names: [] });
      this.setState({ isDoctor: false });
    }
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

  onDrop(files) {
    let nf = [];
    let f = [];
    for (const key in files)
      if (!isNaN(key)) {
        nf = [...nf, files[key].name];
        f = [...f, files[key]];
      }

    this.setState({ file_names: nf });
    this.setState({ files: f });
  }

  save() {
    let input_pic = document.getElementById("pic-upload");
    let pic = input_pic.files[0];
    this.props.changePic(pic);

    let certificate = this.state.files[0];
    let sec_id = this.props.user.doctor.section.id;
    this.props.registerDoctor(certificate, sec_id);
  }

  render() {
    let type = this.props.match.path.split("/")[1];

    if (type === "profile") {
      return (
        <div className="page">
          <div className="profile">
            <p id="test"></p>
            <Nav profile isAuth={this.props.isAuth} user={this.props.user} />
            <div className="settings">
              <div className="pic">
                <div className="update" id="pic-upload-btn">
                  <div className="profile-pic-container">
                    <div className="container">
                      <ProfilePic pic={this.props.user.avatar}></ProfilePic>
                      <input id="pic-upload" type="file" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="certificate">
                <div className="check">
                  <p>are you a doctor</p>
                  <Checkbox
                    checked={this.state.isDoctor}
                    onChange={() => { this.setState({ isDoctor: !this.state.isDoctor }); }}
                    value="isDoctor"
                  />
                </div>
                <div className={"upload" + (!this.state.isDoctor ? " hide" : "")}>
                  <FileDrop onDrop={this.onDrop.bind(this)}>
                    <p>{this.state.file_names.length !== 0 ? this.state.file_names.join(", ") : "Drop your certificate in here pls"}</p>
                  </FileDrop>
                </div>
              </div>
              <div className="input">
                <Button className="rounded main" onClick={this.save.bind(this)}>
                  Save
                </Button>
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
            <ProfileCard loaded={1} user={this.props.profile.user} />
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
                    <Button onClick={() => this.props.chat(this.props.profile.user.id)} className="rounded sec">Chat</Button>
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
    auth: (next) => dispatch(auth(next)),
    getProfile: username => dispatch(get(username)),
    changePic: pic => dispatch(changePic(pic)),
    registerDoctor: (certificate, sec_id) => dispatch(registerDoctor(certificate, sec_id)),
    chat: (id) => dispatch(chat(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
