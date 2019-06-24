import { PROFILE } from "./types";
import API from "../api";

const Get = payload => {
  return {
    type: PROFILE.GET,
    payload: payload
  };
};

/**
 * exports
 */
// auth
export const get = username => {
  return dispatch => {
    API.get("user/getbyusername/" + username)
      .then(res => {
        dispatch(Get(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
