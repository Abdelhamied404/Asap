import { CHAT } from "../actions/types";

const INITIAL_STATE = {
  chats: [],
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

    case CHAT.SEND:
      let newMessage = action.payload.msg;
      let chats = [...state.chats];
      let msgs = chats[0].messages.concat(newMessage);

      chats[0].messages = msgs;

      return {
        ...state,
        chats: chats
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
