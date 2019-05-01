import React from "react";
import { Chip, Avatar, Fab } from "@material-ui/core";
import {
  Done,
  MyLocationTwoTone,
  KeyboardArrowUpRounded,
  KeyboardArrowDownRounded
} from "@material-ui/icons";

import "./post.scss";
import Comments from "../../containers/comments";
import NewPost from "./new-post";

import { connect } from "react-redux";
import { upVote, downVote } from "../../../actions/post";
import PostOptions from "./options";

const Post = props => {
  return props.new ? newpost(props) : post(props);
};

const newpost = props => {
  return (
    <div className="post">
      <NewPost {...props} />
    </div>
  );
};

const Actions = props => {
  let upClass = "naked",
    downClass = "naked";

  if (props.voted === 1) {
    upClass += " voted";
  } else if (props.voted === -1) {
    downClass += " voted";
  }

  return (
    <div className="actions flex">
      <div className="up-vote">
        <Fab className={upClass} onClick={() => props.upVote(props.id)}>
          <KeyboardArrowUpRounded />
        </Fab>
      </div>
      <div className="votes">
        <p>{props.vote ? props.vote : 0}</p>
      </div>
      <div className="down-vote">
        <Fab className={downClass} onClick={() => props.downVote(props.id)}>
          <KeyboardArrowDownRounded />
        </Fab>
      </div>
    </div>
  );
};

const post = props => {
  return (
    <div className="post flex">
      <div className="post-wrapper flex">
        {props.auth_user.isAuth === 1 ? Actions(props) : null}
        <div className="wrapper">
          <div className="header flex">
            <div className="user-profile flex">
              <div className="avatar">
                <img src={props.user.avatar} alt={props.user.name} />
              </div>
              <div className="profile">
                <div className="name">{props.user.name}</div>
                <div className="country flex">
                  <MyLocationTwoTone />
                  <p>{props.user.country ? props.user.country : "none"}</p>
                </div>
              </div>
            </div>
            <div className="options">
              <PostOptions />
            </div>
          </div>
          <div className="content">
            <div className="title">
              <p>{props.title}</p>
            </div>
            <div className="body">
              <p>{props.body}</p>
            </div>
            <div className="tags flex">{list_tags(JSON.parse(props.tags))}</div>
          </div>
        </div>
      </div>
      <div className="comment-wrapper">
        <Comments post_id={props.index} />
      </div>
    </div>
  );
};

const list_tags = tags =>
  tags.map(tag => (
    <div className="tag" key={tag}>
      <Chip
        avatar={
          <Avatar>
            <Done />
          </Avatar>
        }
        key={tag}
        label={tag}
      />
    </div>
  ));

const mapStateToProps = ({ post }) => ({ ...post });
const mapDispatchToProps = dispatch => {
  return {
    upVote: id => dispatch(upVote(id)),
    downVote: id => dispatch(downVote(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
