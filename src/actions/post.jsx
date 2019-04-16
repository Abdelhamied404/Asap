import { POST } from "./types";
import API from "../api";
import * as cookie from "./utils/cookie";

const Load = payload => {
  return {
    payload: payload,
    type: POST.GETPOSTS
  };
};

const LoadErr = () => {
  return {
    type: POST.LOADERR
  };
};

export const getPosts = () => {
  return dispatch => {
    console.log("get posts");
    API.get("post")
      .then(res => {
        const payload = res.data;
        dispatch(Load(payload));
      })
      .catch(err => {
        console.log(err);
        dispatch(LoadErr());
      });
  };
};

export const createPost = post => {
  return dispatch => {
    const token = cookie.get("auth");
    const conf = {
      headers: {
        Authorization: token
      }
    };
    console.log(conf);

    API.post("post", post, conf)
      .then(res => {
        console.log(res.data);
      })
      .then(err => {
        console.log(err);
      });
  };
};
