import { POST } from "../actions/types";

const INITIAL_STATE = {
  posts: {},
  loaded: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST.GETPOSTS:
      return {
        ...state,
        ...action.payload,
        loaded: 1
      };

    case POST.LOADERR:
      return {
        ...state,
        loaded: -1
      };

    default:
      return state;
  }
};
