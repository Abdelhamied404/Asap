import { POST } from "./types";
import API from "../api";
import * as cookie from "./utils/cookie";
import { pusher, echo } from "../api/pusher";

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

export const getPosts = () => {
  return dispatch => {
    // Api fallback
    API.get("post")
      .then(res => {
        const payload = res.data;
        dispatch(Load(payload));
      })
      .catch(err => {
        console.log(err);
        dispatch(LoadErr());
      });

    // pusher brodcast
    let channel = pusher.subscribe("posts");
    channel.bind("App\\Events\\NewPostsCast", post => {
      console.log("pusherSUB::: ", post);
      dispatch(addPost(post));
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
        // pusher brodcast
        pusher.subscribe("posts");
        console.log(res.data);
      })
      .then(err => {
        console.log(err);
      });
  };
};
