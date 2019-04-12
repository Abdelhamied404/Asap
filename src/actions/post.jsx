import { POST } from "./types";
import API from "../api";

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
    API.get("post")
      .then(res => {
        let payload = res.data;
        dispatch(Load(payload));
      })
      .catch(err => {
        dispatch(LoadErr());
        console.log(err.response.data);
      });
  };
};
