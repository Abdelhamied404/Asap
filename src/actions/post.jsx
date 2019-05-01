import { POST } from "./types";
import API from "../api";
import * as cookie from "./utils/cookie";

const Load = payload => {
  return {
    payload: payload,
    type: POST.GETPOSTS
  };
};

const addPost = payload => {
  return {
    payload: payload,
    type: POST.ADDPOST
  };
};

const LoadErr = () => {
  return {
    type: POST.LOADERR
  };
};

const vote = (payload, voted) => {
  return {
    type: POST.VOTE,
    payload: payload,
    voted: voted
  };
};

export const getPosts = () => {
  return dispatch => {
    const token = cookie.get("auth");
    const conf = {
      headers: {
        Authorization: token
      }
    };

    // Api fallback
    API.get("post", conf)
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

    API.post("post", post, conf)
      .then(res => {
        dispatch(addPost(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const upVote = id => {
  return dispatch => {
    const token = cookie.get("auth");
    const conf = {
      headers: {
        Authorization: token
      }
    };

    API.get("post/" + id + "/up", conf)
      .then(res => {
        dispatch(vote(res.data, 1));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const downVote = id => {
  return dispatch => {
    const token = cookie.get("auth");
    const conf = {
      headers: {
        Authorization: token
      }
    };

    API.get("post/" + id + "/down", conf)
      .then(res => {
        dispatch(vote(res.data, -1));
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
