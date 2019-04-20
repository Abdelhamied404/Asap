import { POST } from "../actions/types";

const INITIAL_STATE = {
  posts: {
    data: []
  },
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

    case POST.ADDPOST:
      let posts = { ...state.posts };
      posts.data.unshift(action.payload.post);
      console.log("reducer", {
        ...state,
        posts: posts,
        loaded: 1
      });
      return {
        ...state,
        posts: posts,
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
