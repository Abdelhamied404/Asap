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
    const token = cookie.get("auth");
    let comment = {
      post_id: post_id,
      body: body
    };
    console.log(comment);
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
