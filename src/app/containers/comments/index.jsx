import React from "react";
import { connect } from "react-redux";

import Comment from "../../components/comment";

const Comments = props => {
  return (
    <div className="comments">
      <Comment new user={props.user} post_id={props.post_id} />
      {props.loaded === 1
        ? list_comments(props.posts.data, props.post_id)
        : "loading"}
    </div>
  );
};

const list_comments = (list, post_id) => {
  let comments = list[post_id]["comments"];
  return comments.map((comment, i) => <Comment key={i} {...comment} />);
};

const mapStateToProps = ({ post, user }) => ({ ...post, ...user });

export default connect(
  mapStateToProps,
  null
)(Comments);
