import React, { Component } from "react";
import { MyLocationTwoTone, ExpandMoreRounded } from "@material-ui/icons";
import { connect } from "react-redux";

import { Field, reduxForm } from "redux-form";

import Input from "../../field";
import { Button, Chip } from "@material-ui/core";

import "./new-post.scss";
import { createPost } from "../../../../actions/post";

class NewPost extends Component {
  state = {
    new_tags: [],
    current_tag: ""
  };

  onEnterHandle = e => {
    if (
      e.key === "Enter" &&
      e.target.value !== "" &&
      /\S/.test(e.target.value)
    ) {
      const val = e.target.value;
      this.setState({ new_tags: [...this.state.new_tags, val] });
      this.setState({ current_tag: "" });
    }
  };
  handleChange = e => {
    this.setState({ current_tag: e.target.value });
  };
  handleDelete = i => {
    const new_tags = [...this.state.new_tags];
    new_tags.splice(i, 1);
    this.setState({ new_tags: new_tags });
  };

  render() {
    return (
      <div className="new-post">
        <div className="wrapper">
          <div className="header flex">
            <div className="user-profile flex">
              <div className="avatar">
                <img src={this.props.user.avatar} alt={this.props.user.name} />
              </div>
              <div className="profile">
                <div className="name">{this.props.user.name}</div>
                <div className="country flex">
                  <MyLocationTwoTone />
                  <p>
                    {this.props.user.country ? this.props.user.country : "none"}
                  </p>
                </div>
              </div>
            </div>
            <div className="options">
              <ExpandMoreRounded />
            </div>
          </div>
          <div className="content">
            <div className="title">
              <Field naked label="title" name="title" component={Input} />
            </div>
            <div className="body">
              <Field
                naked
                label="body"
                name="body"
                type="textarea"
                component={Input}
              />
            </div>
            <div className="tags">
              <div className="tag-input">
                <Field
                  naked
                  label="tags"
                  name="tags"
                  type="text"
                  val={this.state.current_tag}
                  component={Input}
                  onKeyPress={this.onEnterHandle}
                  onChange={this.handleChange}
                />
                {/* <input type="text" onKeyUp={this.onEnterHandle} /> */}
              </div>
              <div className="chips">
                {this.state.new_tags.map((tag, i) => (
                  <Chip
                    key={i}
                    onDelete={() => this.handleDelete(i)}
                    variant="outlined"
                    label={tag}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="post-btn">
            <Button
              className="main"
              onClick={() => {
                const t = {
                  ...this.props.new_post.values,
                  tags: JSON.stringify(this.state.new_tags)
                };
                this.props.createPost(t);
              }}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user, form }) => ({
  ...user,
  new_post: { ...form.new_post }
});
const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "new_post" // a unique identifier for this form
  })(NewPost)
);
