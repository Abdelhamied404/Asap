import React from "react";

import { connect } from "react-redux";

import "./chat.scss";

const Chat = props => {
  console.log(props);

  let { auth_user, ...chat } = props;
  let user = auth_user.user;
  let chatTitle = props.title;
  let chatAvatar = require("../../../assets/images/logo.svg");

  if (chat.recipients.length === 2) {
    chat.recipients.forEach(recipient => {
      if (recipient.user.id !== user.id) {
        chatTitle = recipient.user.name;
        chatAvatar = recipient.user.avatar;
      }
    });
  }

  return (
    <div className="chat">
      <div className="title">
        <p>{chatTitle}</p>
      </div>
      <div className="avatar">
        <img src={chatAvatar} alt="" />
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ auth_user: user });

export default connect(
  mapStateToProps,
  null
)(Chat);
