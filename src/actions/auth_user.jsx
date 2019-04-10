import { FORM } from "./types";

const Blur = payload => {
  return {
    payload: payload,
    type: FORM.BLUR
  };
};

export const OnBlur = data => {
  return dispatch => {
    dispatch(Blur(data));
  };
};
