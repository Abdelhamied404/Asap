import React, { useEffect } from "react";
import Chat from "../../components/chat";

import { connect } from "react-redux";
import { getAllChats } from "../../../actions/chat";
import { CircularProgress } from "@material-ui/core";

import "./chats.scss";

const Chats = props => {
  useEffect(props.getAllChats, []);

  return (
    <div className="chats">
      {props.loaded === 1 ? list_chats(props.chats) : <CircularProgress />}
    </div>
  );
};

const list_chats = list => list.map(chat => <Chat key={chat.id} {...chat} />);

const mapStateToProps = ({ chat }) => ({ ...chat });
const mapDispatchToProps = dispatch => {
  return {
    getAllChats: () => dispatch(getAllChats())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chats);
