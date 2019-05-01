import { CHAT } from "./types";
import API from "../api";

import * as cookie from "./utils/cookie";

const Load = payload => {
  return {
    type: CHAT.GETALLCHATS,
    payload: payload
  };
};

const LoadErr = () => {
  return {
    type: CHAT.LOADERR
  };
};

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
