import React from "react";

import { connect } from "react-redux";

import "./chat.scss";
import ChatBox from "../chat-box";

const Chat = props => {
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
    <div className="box">
      <div className="chat" onClick={() => OpenChat(chat.id)}>
        <div className="title">
          <p>{chatTitle}</p>
        </div>
        <div className="avatar">
          <img src={chatAvatar} alt="" />
        </div>
      </div>
      <div className="chat-container">
        <ChatBox
          {...chat}
          user={auth_user.user}
          onClose={() => CloseChat(chat.id)}
        />
      </div>
    </div>
  );
};

// open and close chat
const OpenChat = id =>
  document.querySelector(".chat-box#chat" + id).classList.add("active");
const CloseChat = id =>
  document.querySelector(".chat-box#chat" + id).classList.remove("active");

//
// redux
const mapStateToProps = ({ user }) => ({ auth_user: user });

export default connect(
  mapStateToProps,
  null
)(Chat);
