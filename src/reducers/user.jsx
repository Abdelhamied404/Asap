import { USER } from "../actions/types";

const INITIAL_STATE = {
  user: {},
  isAuth: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER.AUTH:
      return {
        ...state,
        ...action.payload
      };

    case USER.AUTHERR:
      return {
        ...state,
        isAuth: -1
      };

    default:
      return state;
  }
};
