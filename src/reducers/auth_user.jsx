import { FORM } from "../actions/types";

const INITIAL_STATE = {
  errors: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM.BLUR:
      return {
        ...state,
        ...action.payload
      };

    case FORM.VALIDATE:
      return {
        ...state,
        errors: { ...action.payload }
      };

    default:
      return state;
  }
};
