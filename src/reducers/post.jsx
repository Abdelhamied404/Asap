import { POST, COMMENT } from "../actions/types";

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
      var posts = { ...state.posts };
      posts.data.unshift(action.payload.post);
      return {
        ...state,
        posts: posts,
        loaded: 1
      };

    case COMMENT.NEWCOMMENT:
      var newComment = action.payload;
      var post_id = newComment.post_id;

      var data = state.posts.data;
      data.forEach(post => {
        if (post.id === post_id) {
          post.comments.unshift(newComment);
        }
      });

      return {
        ...state,
        posts: {
          data: data
        }
      };

    case POST.VOTE:
      var post = action.payload.post;
      var id = post.id - 1;

      data = state.posts.data;
      data[id] = post;

      return {
        ...state,
        posts: {
          data: data
        }
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
