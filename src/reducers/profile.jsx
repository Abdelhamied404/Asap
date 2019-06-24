import { PROFILE } from "../actions/types";

const INITIAL_STATE = {
  loaded: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE.GET:
      return {
        ...state,
        ...action.payload,
        loaded: 1
      };

    case PROFILE.LOADERR:
      return {
        ...state,
        loaded: -1
      };
    default:
      return state;
  }
};
