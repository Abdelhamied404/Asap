import { COMMENT } from "./types";
import API from "../api";

const Load = payload => {
  return {
    payload: payload,
    type: COMMENT.GETCOMMENTS
  };
};

const LoadErr = () => {
  return {
    type: COMMENT.LOADERR
  };
};

export const getComments = post_id => {
  return dispatch => {
    let conf = {
      params: {
        post_id: post_id
      }
    };
    API.get("comment", conf)
      .then(res => {
        let payload = res.data;
        console.log("comment", payload);
        dispatch(Load(payload));
      })
      .catch(err => {
        dispatch(LoadErr());
        console.log("comment", err);
      });
  };
};
