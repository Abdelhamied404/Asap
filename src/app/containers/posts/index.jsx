import React, { useEffect } from "react";
import Post from "../../components/post";
import { connect } from "react-redux";

import { getPosts } from "../../../actions/post";
import { CircularProgress } from "@material-ui/core";

const Posts = props => {
  // component did mount
  useEffect(props.getPosts, []);

  return (
    <div className="posts">
      {props.posts.data && props.loaded === 1 ? (
        list_posts(props.posts.data, props.user)
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

const list_posts = (list, auth_user) => {
  return list.map((post, i) => (
    <Post key={post.id} index={i} {...post} auth_user={auth_user} />
  ));
};

const mapStateToProps = ({ post, user }) => ({ ...post, user: user });
const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
