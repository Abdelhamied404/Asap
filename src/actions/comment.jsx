import { COMMENT } from "./types";
import API from "../api";

import * as cookie from "./utils/cookie";

const Load = payload => {
  return {
    type: COMMENT.GETCOMMENTS,
    payload: payload
  };
};

const LoadNewComment = payload => {
  return {
    type: COMMENT.NEWCOMMENT,
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

export const makeComment = (post_id, body) => {
  return dispatch => {
    let comment = {
      post_id: post_id,
      body: body
    };
    const token = cookie.get("auth");
    let conf = {
      headers: {
        Authorization: token
      }
    };

    API.post("comment", comment, conf)
      .then(res => {
        dispatch(LoadNewComment(res.data));
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
