import React, { useEffect } from "react";
import { connect } from "react-redux";

import Chat from "../../components/chat";
import { getAllChats } from "../../../actions/chat";
import { CircularProgress } from "@material-ui/core";

import "./chats.scss";

const Chats = props => {
  useEffect(props.getAllChats, []);

  return (
    <div className="chats">
      {props.user.isAuth !== -1 ?  (props.loaded === 1 ? list_chats(props.chats) : <CircularProgress />) : null}
      {console.log("chat props", props)}
    </div>
  );
};

const list_chats = list => list.map(chat => <Chat key={chat.id} {...chat} />);

const mapStateToProps = ({ user, chat }) => ({ user, ...chat });
const mapDispatchToProps = dispatch => {
  return {
    getAllChats: () => dispatch(getAllChats())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chats);
