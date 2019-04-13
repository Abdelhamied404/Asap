import React from "react";

import "./comment.scss";

const Comment = props => {
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

export default Comment;
