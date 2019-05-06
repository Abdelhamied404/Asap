import { CHAT } from "./types";
import API from "../api";
import { pusher } from "../api/pusher";

import * as cookie from "./utils/cookie";

const Load = payload => {
  return {
    type: CHAT.GETALLCHATS,
    payload: payload
  };
};

const Message = payload => {
  return {
    type: CHAT.SEND,
    payload: payload
  };
};

// const LoadErr = () => {
//   return {
//     type: CHAT.LOADERR
//   };
// };

export const getAllChats = () => {
  return dispatch => {
    const token = cookie.get("auth");
    let conf = {
      headers: {
        Authorization: token
      }
    };

    API.get("chat", conf)
      .then(res => {
        dispatch(Load(res.data));
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const ListenToMessages = chat_id => {
  return dispatch => {
    var channel = pusher.subscribe("chat." + chat_id);
    channel.bind("App\\Events\\Chatting", newMessage => {
      console.log("from pusher:", newMessage);
      dispatch(Message(newMessage));
    });
  };
};

export const SendMessage = NewMessage => {
  return dispatch => {
    const token = cookie.get("auth");
    let conf = {
      headers: {
        Authorization: token
      }
    };

    API.post("chat/message", NewMessage, conf)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.warn(err);
      });
  };
};
