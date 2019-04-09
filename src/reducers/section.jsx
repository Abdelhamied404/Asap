import { SECTION } from "../actions/types";

const INITIAL_STATE = {
  sections: {},
  loaded: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SECTION.GETSECTIONS:
      return {
        ...state,
        ...action.payload,
        loaded: 1
      };

    case SECTION.LOADERR:
      return {
        ...state,
        ...action.payload,
        loaded: -1
      };
    default:
      return state;
  }
};
