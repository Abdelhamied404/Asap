import { DOCTOR } from "./types";
import API from "../api";
import * as cookie from "./utils/cookie";

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

export const registerDoctor = (certificate, sec_id) => {
  return dispatch => {
    const token = cookie.get("auth");
    const conf = {
      onUploadProgress: function (progressEvent) {
        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        document.getElementById("test").innerHTML = percentCompleted;
        if (percentCompleted === 100)
          window.location.reload();
      },
      headers: {
        Authorization: token
      }
    };
    let fd = new FormData();
    fd.append("section_id", sec_id);
    fd.append("certificate", certificate);

    API.post("doctor", fd, conf)
      .then((res) => {

      }).catch((err) => {
        alert("something wrong has happend")
      })
  }
}