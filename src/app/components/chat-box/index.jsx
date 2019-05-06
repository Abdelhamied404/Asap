import React, { useEffect } from "react";

import "./chat-box.scss";
import Message from "./message";
import { Close } from "@material-ui/icons";
import { connect } from "react-redux";
import { SendMessage, ListenToMessages } from "../../../actions/chat";
import Field from "../field";

const ChatBox = props => {
  let recipients = props.recipients;

  useEffect(() => props.ListenToMessages(props.id), []);

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
          <Field
            type="text"
            naked
            holder
            label="send a new message"
            name="message"
            onKeyPress={onSend(props)}
          />
        </div>
      </div>
    </div>
  );
};

const onSend = props => {
  return e => {
    // if hit enter and value is not empty and not spaces
    if (
      e.key === "Enter" &&
      e.target.value !== "" &&
      /\S/.test(e.target.value)
    ) {
      let newMessage = {
        chat_id: props.id,
        message: e.target.value
      };
      props.SendMessage(newMessage);
      e.target.value = "";
    }
  };
};

const list_messages = (list, recipients) =>
  list.map(msg => <Message key={msg.id} recipients={recipients} {...msg} />);

//
//
//
const mapDispatchToProps = dispatch => {
  return {
    SendMessage: newMessage => dispatch(SendMessage(newMessage)),
    ListenToMessages: chat_id => dispatch(ListenToMessages(chat_id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ChatBox);
