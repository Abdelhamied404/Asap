import React from "react";
import { connect } from "react-redux";

import Input from "../../components/field";

import "./comment.scss";
import { makeComment } from "../../../actions/comment";

const Comment = props => {
  if (props.new)
    return (
      <div className="comment new">
        <div className="avatar">
          <img src={props.user.avatar} alt="" />
        </div>
        <div className="body">
          <Input
            naked
            holder
            label="write a new comment"
            name="newComment"
            onKeyPress={OnEnter(props)}
          />
        </div>
      </div>
    );

  return (
    <div className="comment">
      <div className="avatar">
        <img src={props.user.avatar} alt="" />
      </div>
      <div className="body">
        <p>{props.body}</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ post }) => ({ ...post });
const mapDispatchToProps = dispatch => {
  return {
    makeComment: (post_id, val) => dispatch(makeComment(post_id, val))
  };
};

const OnEnter = props => {
  return e => {
    // if hit enter and value is not empty and not spaces
    if (
      e.key === "Enter" &&
      e.target.value !== "" &&
      /\S/.test(e.target.value)
    ) {
      const val = e.target.value;
      const post_id = props.posts.data[props.post_id].id;
      props.makeComment(post_id, val);
      e.target.value = "";
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);
