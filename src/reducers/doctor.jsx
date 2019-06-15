import { DOCTOR } from "../actions/types";

const INITIAL_STATE = {
  recommended: {},
  loaded: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DOCTOR.RECOMMENDED:
      return {
        ...state,
        recommended: { ...action.payload.doctors },
        loaded: 1
      };

    // on load error
    case DOCTOR.LOADERR:
      return {
        ...state,
        loaded: -1
      };

    default:
      return state;
  }
};
