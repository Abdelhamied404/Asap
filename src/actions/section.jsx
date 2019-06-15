import { SECTION } from "./types";
import API from "../api";

const Load = payload => {
  return {
    payload: payload,
    type: SECTION.GETSECTIONS
  };
};

const LoadErr = () => {
  return {
    type: SECTION.LOADERR
  };
};

export const getSections = () => {
  return dispatch => {
    API.get("section")
      .then(res => {
        let payload = res.data;
        console.log("dispatched");
        dispatch(Load(payload));
      })
      .catch(err => {
        dispatch(LoadErr());
        console.log(err);
      });
  };
};
