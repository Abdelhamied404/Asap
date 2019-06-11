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

const LoadDoctors = (id, payload) => {
  return {
    type: SECTION.LOADDOCTORS,
    section_id: id,
    payload: payload
  };
};

export const getSections = () => {
  return dispatch => {
    API.get("section")
      .then(res => {
        let payload = res.data;
        console.log(payload);
        dispatch(Load(payload));
      })
      .catch(err => {
        dispatch(LoadErr());
        console.log(err);
      });
  };
};

export const getDoctors = id => {
  return dispatch => {
    let conf = {
      params: {
        section_id: id
      }
    };
    API.get("section/doctors", conf)
      .then(res => {
        let payload = res.data;
        dispatch(LoadDoctors(id, payload));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
