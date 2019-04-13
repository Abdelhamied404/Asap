import React from "react";
import { MyLocationTwoTone, ExpandMoreRounded } from "@material-ui/icons";
import { connect } from "react-redux";

import Field from "../../field";
import { Button } from "@material-ui/core";

const NewPost = props => {
  return (
    <div className="new-post">
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
            <Field naked name="title" />
          </div>
          <div className="body">
            <Field naked name="body" type="textarea" />
          </div>
        </div>
        <div className="post-btn">
          <Button>Post</Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ ...user });
const mapDispatchToProps = dispatch => {
  return {
    // auth: () => dispatch(auth())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost);
