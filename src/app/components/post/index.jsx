import React from "react";
import { Chip, Avatar } from "@material-ui/core";
import {
  Done,
  MyLocationTwoTone,
  KeyboardArrowUpRounded,
  KeyboardArrowDownRounded,
  ExpandMoreRounded
} from "@material-ui/icons";

import "./post.scss";

const Post = props => {
  return (
    <div className="post flex">
      <div className="post-wrapper flex">
        <div className="actions flex">
          <div className="up-vote">
            <KeyboardArrowUpRounded />
          </div>
          <div className="votes">
            <p>{props.votes ? props.votes : 0}</p>
          </div>
          <div className="down-vote">
            <KeyboardArrowDownRounded />
          </div>
        </div>
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
              <ExpandMoreRounded />
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
      <div className="comment-wrapper">comments goes here</div>
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

export default Post;
