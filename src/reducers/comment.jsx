import { COMMENT } from "../actions/types";

const INITIAL_STATE = {
  comments: {},
  loaded: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMMENT.GETCOMMENTS:
      return {
        ...state,
        ...action.payload,
        loaded: 1
      };

    case COMMENT.LOADERR:
      return {
        ...state,
        ...action.payload,
        loaded: -1
      };
    default:
      return state;
  }
};
