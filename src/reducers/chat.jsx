import { CHAT } from "../actions/types";

const INITIAL_STATE = {
  chats: {},
  loaded: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHAT.GETALLCHATS:
      return {
        ...state,
        ...action.payload,
        loaded: 1
      };

    case CHAT.LOADERR:
      return {
        ...state,
        ...action.payload,
        loaded: -1
      };
    default:
      return state;
  }
};
