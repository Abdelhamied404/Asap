import { COMMENT } from "./types";
import API from "../api";

const Load = payload => {
  return {
    type: COMMENT.GETCOMMENTS,
    payload: payload
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
        dispatch(Load(payload));
      })
      .catch(err => {
        dispatch(LoadErr());
      });
  };
};
