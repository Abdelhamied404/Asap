import React from "react";

import "./chat-box.scss";
import Message from "./message";
import { Close } from "@material-ui/icons";

const ChatBox = props => {
  let recipients = props.recipients;

  return (
    <div className={"chat-box"} id={"chat" + props.id}>
      <div className="header">
        <div className="title">
          <p>{props.title}</p>
        </div>
        <div className="exit" onClick={props.onClose}>
          <Close />
        </div>
      </div>
      <div className="body">{list_messages(props.messages, recipients)}</div>
      <div className="footer">
        <div className="avatar">
          <img src={props.user.avatar} alt="" />
        </div>
        <div className="msg-input">
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

const list_messages = (list, recipients) =>
  list.map(msg => <Message key={msg.id} recipients={recipients} {...msg} />);

export default ChatBox;
