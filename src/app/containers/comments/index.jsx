import React from "react";
import { connect } from "react-redux";

import Comment from "../../components/comment";

const Comments = props => {
  return (
    <div className="comments">
      {props.loaded === 1
        ? list_comments(props.posts.data, props.post_id)
        : "loading"}
    </div>
  );
};

const list_comments = (list, post_id) => {
  let comments = list[post_id]["comments"];
  console.log(comments);
  return comments.map((comment, i) => <Comment key={i} {...comment} />);
};

const mapStateToProps = ({ post }) => ({ ...post });

export default connect(
  mapStateToProps,
  null
)(Comments);
