import { DOCTOR } from "./types";
import API from "../api";

const Load = (type, payload) => {
  return {
    type: type,
    payload: payload
  };
};

const LoadErr = () => {
  return {
    type: DOCTOR.LOADERR
  };
};

export const getRecommended = () => {
  return dispatch => {
    API.get("doctor/recommended")
      .then(res => {
        let payload = res.data;
        console.log(payload);
        dispatch(Load(DOCTOR.RECOMMENDED, payload));
      })
      .catch(err => {
        dispatch(LoadErr());
        console.log("error : ", err);
      });
  };
};
